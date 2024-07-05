#include "FastLED.h"
#include "WiFiS3.h"
#include <Arduino_JSON.h>
#include <Arduino_DebugUtils.h>

// WiFi credentials for mobile hotspot
const char* ssid = "FenwayPark24";  // Replace with your hotspot SSID
const char* password = "SUCCESS!";  // Replace with your hotspot password

// How many leds in your strip?
#define NUM_LEDS 100
#define DATA_PIN 6
#define BRIGHTNESS 255

// Define the array of leds
CRGB leds[NUM_LEDS];
String colorLetterIndex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
String letterIndex = colorLetterIndex;

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
      } else {
        processInputString(requestData);
      }      
      client.flush(); // Clear the input buffer
      client.stop();
      delay(50);
    }
  }
}

String readRequest(WiFiClient client) {
  String currentLine = "";
  String postData = "";
  bool isPost = false;

  while (client.connected()) {
    if (client.available()) {
      char c = client.read();
      if (c == '\n' && currentLine.length() == 0) {
        // Headers are finished, next line is body
        isPost = true;
      } else if (c == '\n') {
        currentLine = "";
      } else if (c != '\r') {
        currentLine += c;
      }

      if (isPost) {
        postData += c;
      }
    }
    // Check if the end of the data has been reached
    if (!client.available() && isPost) {
      break;
    }
  }
  // Only return the body
  return postData;
}

void handleGetRequest(WiFiClient client) {
  String response = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\n";
  String responseBody = "LEDs operational\nLED Count: " + String(NUM_LEDS) + "\nBrightness: " + String(BRIGHTNESS);
  response += responseBody;

  client.print(response);
}


void processInputString(String input) {
  input.trim(); // Trim any leading or trailing whitespace
  JSONVar jsonObject = JSON.parse(input);

  if (JSON.typeof(jsonObject) == "undefined") {
    Serial.println("Failed to parse JSON");
    return;
  }

  String command = (const char*) jsonObject["command"];
  Serial.println("Command: " + command);

  if (command == "FLICKER_SIGNAL") {
    Serial.println("Flickering LEDs");
    flickerLeds(100);
  } else {
    Serial.println("Displaying words");
    displayWordsWithPause(command);
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
