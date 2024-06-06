#include <FastLED.h>

#define LED_PIN     6
#define NUM_LEDS    30
#define BRIGHTNESS  255
#define LED_TYPE    WS2812B
#define COLOR_ORDER GRB
CRGB leds[NUM_LEDS];

void setup() {
  Serial.begin(9600);
  FastLED.addLeds<LED_TYPE, LED_PIN, COLOR_ORDER>(leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  FastLED.setBrightness(BRIGHTNESS);
}

void loop() {
  // Call any function you want to test here
  turnOn();
  delay(2000);
  
  turnOff();
  delay(2000);
  
  flicker();
  delay(2000);
  
  runOneByOne();
  delay(2000);
}

void turnOn() {
  fill_solid(leds, NUM_LEDS, CRGB::White);
  FastLED.show();
  Serial.println("LEDs are ON");
}

void turnOff() {
  fill_solid(leds, NUM_LEDS, CRGB::Black);
  FastLED.show();
  Serial.println("LEDs are OFF");
}

void flicker() {
  for (int i = 0; i < 10; i++) {
    fill_solid(leds, NUM_LEDS, CRGB::White);
    FastLED.show();
    delay(100);
    fill_solid(leds, NUM_LEDS, CRGB::Black);
    FastLED.show();
    delay(100);
  }
  Serial.println("LEDs flickered");
}

void runOneByOne() {
  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i] = CRGB::White;
    FastLED.show();
    delay(100);
    leds[i] = CRGB::Black;
  }
  FastLED.show();
  Serial.println("Run one by one completed");
}
