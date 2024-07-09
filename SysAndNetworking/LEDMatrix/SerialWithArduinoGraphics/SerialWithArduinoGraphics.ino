// To use ArduinoGraphics APIs, please include BEFORE Arduino_LED_Matrix
#include "ArduinoGraphics.h"
#include "Arduino_LED_Matrix.h"

ArduinoLEDMatrix matrix;

void setup() {
  Serial.begin(9600);
  matrix.begin();
}

void loop() {

  // Make it scroll!
  matrix.beginDraw();

  matrix.stroke(0xFFFFFFFF);
  matrix.textScrollSpeed(100);

  // add the text
  //const char text[] = "     SUCCESS!     ";
  String text;
  if (Serial.available() > 0) {
        text = Serial.readStringUntil('\n');
        text.trim();  // Remove any whitespace
        text.toUpperCase();  // Convert to uppercase to match the wall
    }
  matrix.textFont(Font_4x6);
  matrix.beginText(0, 1, 0xFFFFFF);
  matrix.println(text);
  matrix.endText(SCROLL_LEFT);

  matrix.endDraw();

  // Challenge 1: Scroll your name! Make it scroll right
}