#include <FastLED.h>

// How many LEDs in your strip?
#define NUM_LEDS 50

#define DATA_PIN    6
#define BRIGHTNESS  255

// Define the array of LEDs
CRGB leds[NUM_LEDS];
//                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
String colorLetterIndex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
String letterIndex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Define colors for each letter
uint32_t colorIndex[26] = {
                          0xFFF0C4, // A
                          0x0000FF, // B
                          0xFF00FF, // C
                          0x00FFB9, // D
                          0x0000FF, // E
                          0xFCEE21, // F
                          0xFF0000, // G
                          0x00FFB9, // H
                          0x00FFB9, // I
                          0xFF00FF, // J
                          0x0000FF, // K
                          0x00FFB9, // L
                          0xFCEE21, // M
                          0xFF0000, // N
                          0xFF00FF, // O
                          0x00FFB9, // P
                          0xFF00FF, // Q
                          0x00FFB9, // R
                          0xFFF0C4, // S
                          0xFCEE21, // T
                          0x0000FF, // U
                          0xFF0000, // V
                          0x00FFB9, // W
                          0xFCEE21, // X
                          0xFF00FF, // Y
                          0xFF0000, // Z
                          };

void setup() {
    Serial.begin(9600);
    FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);
    FastLED.setBrightness(BRIGHTNESS);
    fill_solid( leds, NUM_LEDS, CRGB::Black);
    FastLED.show();
    Serial.println("Setup complete");
}

void loop() {
    writeWord("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    delay(5000);  // Wait for 5 seconds before repeating
}

void turnOnAll() {
  fill_solid(leds, NUM_LEDS, CRGB::White);
  FastLED.show();
  Serial.println("LEDs are ON");
}

void turnOnLetter(String theLetter) {
  int lightIndex = letterIndex.indexOf(theLetter);
  int colorIndexValue = colorLetterIndex.indexOf(theLetter);
  if (lightIndex != -1 && colorIndexValue != -1) {
    uint32_t colorValue = colorIndex[colorIndexValue];
    leds[lightIndex] = colorValue;
    Serial.print("Turning on LED at index ");
    Serial.print(lightIndex);
    Serial.print(" with color ");
    Serial.println(colorValue, HEX);
  } else {
    Serial.print("Letter ");
    Serial.print(theLetter);
    Serial.println(" not found in index");
  }
}

void writeWord(String theword) {
  Serial.println("Writing word: " + theword);
  fill_solid( leds, NUM_LEDS, CRGB::Black); // Clear previous LEDs
  int stringLen = theword.length() + 1;
  char char_array[stringLen];
  theword.toCharArray(char_array, stringLen);
  for (int i = 0; i < stringLen - 1; i++) {
    turnOnLetter(String(char_array[i]));
  }
  FastLED.show();
  Serial.println("Word displayed");
}
