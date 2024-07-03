#include <FastLED.h>

// Challenge 1: set a constant for the delay
#define DELAY 1000
// ChaLLenge 3: Need a maximum random interval
#define MAX_INTERVAL 5

#define LED_PIN     6
#define NUM_LEDS    50
#define BRIGHTNESS  255
#define LED_TYPE    WS2812B
#define COLOR_ORDER GRB
CRGB leds[NUM_LEDS];

void setup() {
  Serial.begin(9600);
  FastLED.addLeds<LED_TYPE, LED_PIN, COLOR_ORDER>(leds, NUM_LEDS).setCorrection(TypicalLEDStrip);
  FastLED.setBrightness(BRIGHTNESS);
}

// Challenge 1: Make the lights go faster or slower
void loop() {
  // Call any function you want to test here
  turnOn();
  delay(DELAY);
  
  turnOff();
  delay(DELAY);
  
  flicker();
  delay(DELAY);
  
  runOneByOne();
  delay(DELAY);

  // Challenge 2: Write and call a function runTwoByTwo that turns on every other light
  runTwoByTwo();
  delay(DELAY);

  // Challenge 3: Write and call a function that turns on the next light by random
  runByRandomInterval();
  delay(DELAY);
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

// Challenge 2
void runTwoByTwo() {
  for (int i = 0; i < NUM_LEDS; i=i+2) {
    leds[i] = CRGB::White;
    FastLED.show();
    delay(100);
    leds[i] = CRGB::Black;
  }
  FastLED.show();
  Serial.println("Run two by two completed");
}

// Challenge 3
void runByRandomInterval() {
  randomSeed(analogRead(0));
  for (int i = 0; i < NUM_LEDS; i=i+random(MAX_INTERVAL)) {
    leds[i] = CRGB::White;
    FastLED.show();
    delay(100);
    leds[i] = CRGB::Black;
  }
  FastLED.show();
  Serial.println("Run by random interval completed");
}
