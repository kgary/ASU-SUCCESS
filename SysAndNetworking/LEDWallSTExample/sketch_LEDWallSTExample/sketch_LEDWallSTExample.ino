//@see http://www.woodlandmanufacturing.com/articles/news/how-to-make-a-stranger-things-alphabet-sign-with-lights-code
#include "FastLED.h"

// How many leds in your strip?
#define NUM_LEDS 50

#define DATA_PIN    6
#define BRIGHTNESS  255

// Define the array of leds
CRGB leds[NUM_LEDS];

// Depending on where you connect your Arduino to the lights (beginning or end),
// you use forward or reverse lettering, and then have to figure out what lights to skip
//                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//String letterIndex = "--ABC-DEFG-H------Q-P-O-NM-LKJI-----RSTU-VWX-Y-Z--";
String letterIndex = "Z-Y-X-WV-UT-S-R--I-JK-L-M-NO-P-Q--H-G-F-E-D-C-B--A-";
//String colorLetterIndex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
String colorLetterIndex = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

// Warm White = 0xFFF0C4
// Blue = 0x0000FF
// Magenta = 0xFF00FF
// Cyan = 0x00FFB9
// Yellow = 0xFCEE21
// Red = 0xFF0000

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
      delay(3000);
      FastLED.addLeds<WS2811, DATA_PIN, RGB>(leds, NUM_LEDS);
      FastLED.setBrightness(BRIGHTNESS);
}

void loop() {
  turnOnAll();
  delay(2000);
  fill_solid( leds, NUM_LEDS, CRGB::Black);
  
  writeWord("ASU",1000,300);
  delay(500);
  writeWord("SUCCESS",1000,300);
  flickerLeds(50);
  writeWord("RUN",1300,300);

  // Challenge 1: Spell out your name on the wall

  turnOnAll();
  flickerLeds(100);
  allToFullBright();
  turnOnAll();
  delay(2000);
}

void turnOnAll()
{
  int stringLen = letterIndex.length()+1;
  char char_array[stringLen];
  letterIndex.toCharArray(char_array,stringLen);
  for(int i=0;i<stringLen-1;i++)
  {
    if ( String(char_array[i]) != "-" )
    {
      turnOnLetter(String(char_array[i]));
    }
  }
  FastLED.show();
}

void turnOnLetter(String theLetter)
{
    int lightIndex = letterIndex.indexOf(theLetter);
    int colorIndexValue = colorLetterIndex.indexOf(theLetter);
    uint32_t colorValue = colorIndex[colorIndexValue];
    leds[lightIndex] = colorValue;
}

void writeWord(String theword,int letterDuration,int letterSpacing)
{
  int stringLen = theword.length()+1;
  char char_array[stringLen];
  theword.toCharArray(char_array,stringLen);
  for(int i=0;i<stringLen-1;i++)
  {
    displayLetter(String(char_array[i]),letterDuration);
    delay(letterSpacing);
  }
}

void displayLetter(String theLetter,int letterDuration)
{
  int lightIndex = letterIndex.indexOf(theLetter);
  int colorIndexValue = colorLetterIndex.indexOf(theLetter);
  uint32_t colorValue = colorIndex[colorIndexValue];
  lightLED(lightIndex,colorValue,letterDuration);   
}

void lightLED(int ledIndex,uint32_t colorValue,int duration)
{
   // Turn the LED on, then pause
  leds[ledIndex] = colorValue;
  FastLED.show();
  delay(duration);
  // Now turn the LED off, then pause
  leds[ledIndex] = CRGB::Black;
  FastLED.show();
}

void flickerLeds(int numTimes)
{
  for ( int i=0;i<numTimes;i++)
  {
    flicker();
  }
}

void allToFullBright()
{
  int stringLen = letterIndex.length()+1;
  char char_array[stringLen];
  letterIndex.toCharArray(char_array,stringLen);
  for(int i=0;i<stringLen-1;i++)
  {
    if ( String(char_array[i]) != "-" )
    {
      leds[i].maximizeBrightness();
    }
  }
  FastLED.show();
}

void flicker() {                          //-m9-FLICKER EFFECT
  int random_bright = random(0,255);
  int random_delay = random(10,100);
  int randomFullLight = random(0,2);
  int stringLen = letterIndex.length()+1;
  char char_array[stringLen];
  letterIndex.toCharArray(char_array,stringLen);
  for(int i=0;i<stringLen-1;i++)
  {
    if ( String(char_array[i]) != "-" )
    {
      if ( randomFullLight == 0 )
      {
        leds[i].maximizeBrightness();
      }
      leds[i].fadeLightBy(random_bright);
    }
  }
  FastLED.show();
  delay(random_delay);
}
