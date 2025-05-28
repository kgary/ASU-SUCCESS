#include "FastLED.h"
#include "WiFiS3.h"
#include <Arduino_JSON.h>
#include <Arduino_DebugUtils.h>

// WiFi credentials for mobile hotspot
const char* ssid = "FenwayPark24";  // Replace with your hotspot SSID
const char* password = "4805458334";
//const char* password = "SUCC355!";  // Replace with your hotspot password

// How many leds in your strip?
#define NUM_LEDS 50
#define DATA_PIN 6
#define BRIGHTNESS 255

// Define the array of leds
CRGB leds[NUM_LEDS];
String letterIndex = "Z-Y-X-WV-UT-S-R--I-JK-L-M-NO-P-Q--H-G-F-E-D-C-B-A-";
String colorLetterIndex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Define colors for each letter
uint32_t colorIndex[26] = {
  0xFFF0C4, 0x0000FF, 0xFF00FF, 0x00FFB9, 0x0000FF, 0xFCEE21,
  0xFF0000, 0x00FFB9, 0x00FFB9, 0xFF00FF, 0x0000FF, 0x00FFB9,
  0xFCEE21, 0xFF0000, 0xFF00FF, 0x00FFB9, 0xFF00FF, 0x00FFB9,
  0xFFF0C4, 0xFCEE21, 0x0000FF, 0xFF0000, 0x00FFB9, 0xFCEE21,
  0xFF00FF, 0xFF0000
};

// WiFi server settings
WiFiServer server(80);
WiFiClient client;

void setup() {
  Serial.begin(9600);

  FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);
  FastLED.setBrightness(BRIGHTNESS);

  fill_solid(leds, NUM_LEDS, CRGB::Black);
  FastLED.show();
  Serial.println("LEDs are turned off at setup.");
  delay(3000);

  // Connect to WiFi
  connectToWiFi();

  // Start the server
  server.begin();
  Serial.println("Server started");
}

void connectToWiFi() {
  Serial.println("Connecting to WiFi...");
  WiFi.begin(ssid, password);
  int maxAttempts = 20; // Number of attempts to try connecting
  int attemptCount = 0;

  while (WiFi.status() != WL_CONNECTED && attemptCount < maxAttempts) {
    delay(500);
    Serial.print(".");
    attemptCount++;
  }

  if (WiFi.status() == WL_CONNECTED) {
    Serial.println();
    Serial.println("WiFi connected.");
    delay(1000);
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
  } else {
    Serial.println("Failed to connect to WiFi.");
  }
}

void loop() {
  if (!client.connected()) {
    client = server.available(); // Listen for incoming clients
    if (client) {
      Serial.println("New client connected");
    }
  } else {
    if (client.available()) {
      String requestData = readRequest(client);
      Serial.println("Request received: " + requestData);
      if (requestData.startsWith("GET")) {
        handleGetRequest(client);
      } else if (requestData.startsWith("POST ")) {
        handlePostRequest(client, requestData.substring(5));  // Skip "POST " prefix
      } else if (requestData.startsWith("OPTIONS")) {
        handleOptionsRequest(client);  // Handle preflight requests
      } else {
        Serial.println("Invalid request method");
        client.print("HTTP/1.1 400 Bad Request\r\nContent-Type: text/plain\r\n\r\nInvalid request method");
        client.flush();
      }
      client.flush(); // Clear the input buffer
      client.stop();
      delay(50);
    }
  }
  // This is very similar to SerialWithArduinoGraphics
  String text;
  if (Serial.available() > 0) {
      text = Serial.readStringUntil('\n');
      // if anything is typed in, write out the IP address
      Serial.print("IP address: ");
      Serial.println(WiFi.localIP());
  }
}

void handleOptionsRequest(WiFiClient client) {
  Serial.println("Handling OPTIONS request");
  String response = "HTTP/1.1 204 No Content\r\n";
  response += "Access-Control-Allow-Origin: *\r\n";
  response += "Access-Control-Allow-Methods: GET, POST, OPTIONS\r\n";
  response += "Access-Control-Allow-Headers: Content-Type\r\n";
  response += "Access-Control-Max-Age: 86400\r\n"; // Cache response for 1 day
  response += "\r\n";
  
  client.print(response);
  client.flush();
}

String readRequest(WiFiClient client) {
  String currentLine = "";
  String requestData = "";
  bool isPost = false;
  bool isGet = false;
  bool isOptions = false;

  while (client.connected()) {
    if (client.available()) {
      char c = client.read();
      requestData += c;
      
      if (c == '\n' && currentLine.length() == 0) {
        if (requestData.startsWith("GET")) {
          isGet = true;
        } else if (requestData.startsWith("POST")) {
          isPost = true;
        } else if (requestData.startsWith("OPTIONS")) {
          isOptions = true;
        }
        break;  // Headers are finished, next line is body
      } else if (c == '\n') {
        currentLine = "";
      } else if (c != '\r') {
        currentLine += c;
      }
    }
  }

  // Read the body for POST requests
  if (isPost) {
    while (client.available()) {
      char c = client.read();
      requestData += c;
    }
    return "POST " + requestData;
  }

  // For GET requests, return the entire request line
  if (isGet) {
    return "GET";
  }

  // For OPTIONS requests, return the entire request line
  if (isOptions) {
    return "OPTIONS";
  }

  return "INVALID";
}

void handleGetRequest(WiFiClient client) {
  Serial.println("Handling GET request");
  String response = "HTTP/1.1 200 OK\r\n";
  response += "Access-Control-Allow-Origin: *\r\n";  // Add CORS header
  response += "Content-Type: text/plain\r\n\r\n";
  String responseBody = "LEDs operational\nLED Count: " + String(NUM_LEDS) + "\nBrightness: " + String(BRIGHTNESS);
  response += responseBody;
  
  client.print(response);
  client.flush();
}

void handlePostRequest(WiFiClient client, String requestData) {
  Serial.println("Handling POST request");

  // Extract the body content starting after the headers
  int bodyStartIndex = requestData.indexOf("\r\n\r\n");
  if (bodyStartIndex >= 0) {
    String body = requestData.substring(bodyStartIndex + 4);
    body.trim();

    // Process the input string
    Serial.println("POST body: " + body);
    processInputString(body);

    // Send a response back to the client
    String response = "HTTP/1.1 200 OK\r\n";
    response += "Access-Control-Allow-Origin: *\r\n";  // Add CORS header
    response += "Content-Type: text/plain\r\n\r\n";
    response += "Request processed successfully: ";
    response += body;
    client.print(response);
    client.flush();
    
  } else {
    Serial.println("Invalid POST request");
    String response = "HTTP/1.1 400 Bad Request\r\n";
    response += "Access-Control-Allow-Origin: *\r\n";  // Add CORS header
    response += "Content-Type: text/plain\r\n\r\n";
    response += "Invalid POST request";
    client.print(response);
    client.flush();
  }
}

void processInputString(String input) {
  input.trim(); // Trim any leading or trailing whitespace
  Serial.println("Displaying: " + input);
  if (input == "FLICKER_SIGNAL") {
    Serial.println("Flickering LEDs");
    flickerLeds(100);
  } else {
    Serial.println("Displaying words");
    displayWordsWithPause(input);
  }
}

void displayWordsWithPause(String input) {
  int wordStart = 0;
  int wordEnd = input.indexOf(' ', wordStart);
  while (wordEnd != -1) {
    String word = input.substring(wordStart, wordEnd);
    writeWord(word, 1000, 300);
    delay(1500);
    wordStart = wordEnd + 1;
    wordEnd = input.indexOf(' ', wordStart);
  }
  if (wordStart < input.length()) {
    String word = input.substring(wordStart);
    writeWord(word, 1000, 300);
  }
}

void turnOnAll() {
  int stringLen = letterIndex.length() + 1;
  char char_array[stringLen];
  letterIndex.toCharArray(char_array, stringLen);
  for (int i = 0; i < stringLen - 1; i++) {
    if (String(char_array[i]) != "-") {
      turnOnLetter(String(char_array[i]));
    }
  }
  FastLED.show();
}

void turnOnLetter(String theLetter) {
  int lightIndex = letterIndex.indexOf(theLetter);
  if (lightIndex < 0 || lightIndex > NUM_LEDS) {
    Serial.println("Invalid light index: " + String(lightIndex));
    return;
  }
  int colorIndexValue = colorLetterIndex.indexOf(theLetter);
  if (colorIndexValue < 0 || colorIndexValue > 26) {
    Serial.println("Invalid color index: " + String(colorIndexValue));
    return;
  }
  uint32_t colorValue = colorIndex[colorIndexValue];
  leds[lightIndex] = colorValue;
}

void writeWord(String theword, int letterDuration, int letterSpacing) {
  int stringLen = theword.length() + 1;
  char char_array[stringLen];
  theword.toCharArray(char_array, stringLen);
  for (int i = 0; i < stringLen - 1; i++) {
    displayLetter(String(char_array[i]), letterDuration);
    delay(letterSpacing);
  }
}

void displayLetter(String theLetter, int letterDuration) {
  int lightIndex = letterIndex.indexOf(theLetter);
  Serial.println("LETTER:"+ String(theLetter));
  if (lightIndex < 0 || lightIndex >= NUM_LEDS) {
    Serial.println("Invalid light index: " + String(lightIndex));
    return;
  }
  int colorIndexValue = colorLetterIndex.indexOf(theLetter);
  if (colorIndexValue < 0 || colorIndexValue >= 26) {
    Serial.println("Invalid color index: " + String(colorIndexValue));
    return;
  }
  uint32_t colorValue = colorIndex[colorIndexValue];
  lightLED(lightIndex, colorValue, letterDuration);
}

void lightLED(int ledIndex, uint32_t colorValue, int duration) {
  if (ledIndex < 0 || ledIndex >= NUM_LEDS) {
    Serial.println("Invalid LED index: " + String(ledIndex));
    return;
  }
  leds[ledIndex] = colorValue;
  FastLED.show();
  delay(duration);
  leds[ledIndex] = CRGB::Black;
  FastLED.show();
}

void flickerLeds(int numTimes) {
  for (int i = 0; i < numTimes; i++) {
    flicker();
  }
}

void flicker() {
  int random_bright = random(0, 255);
  int random_delay = random(10, 100);
  int randomFullLight = random(0, 2);
  int stringLen = letterIndex.length() + 1;
  char char_array[stringLen];
  letterIndex.toCharArray(char_array, stringLen);
  for (int i = 0; i < stringLen - 1; i++) {
    if (String(char_array[i]) != "-") {
      if (randomFullLight == 0) {
        leds[i].setRGB(255, 255, 255); // Set to full brightness
      } else {
        leds[i].fadeToBlackBy(random_bright); // Apply random brightness reduction
      }
    }
  }
  FastLED.show();
  delay(random_delay);
  fill_solid(leds, NUM_LEDS, CRGB::Black); // Turn off LEDs
  FastLED.show();
}
