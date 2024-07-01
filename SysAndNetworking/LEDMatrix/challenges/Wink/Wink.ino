// Wink Animation in LED Matrix

#include "Arduino_LED_Matrix.h"

ArduinoLEDMatrix matrix;

void setup() {
  Serial.begin(115200);
  matrix.begin();
}

uint8_t frame[8][12] = {
  { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
  { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
  { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
  { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
  { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
  { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
  { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
  { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 }
};

// HOW DO THESE INDICES MAP TO THE LED MATRIX?
void leftEye(){
  //Left eye
  frame[1][3] = 1;
  frame[1][4] = 1;
  frame[2][3] = 1;
  frame[2][4] = 1;
}

// Challenge 1: CAN YOU CHANGE TO MAKE THE RIGHT EYE WINK INSTEAD?
void wink(){
  //Wink with the left eye
  frame[1][3] = 0;
  frame[1][4] = 0;
  frame[2][3] = 1;
  frame[2][4] = 1;
}

void rwink(){
  //Wink with the left eye
  frame[1][8] = 0;
  frame[1][9] = 0;
  frame[2][8] = 1;
  frame[2][9] = 1;
}

void rightEye(){
  //Right eye
  frame[1][8] = 1;
  frame[1][9] = 1;
  frame[2][8] = 1;
  frame[2][9] = 1;
}

// Challenge 2: CAN YOU WRITE THIS FUNCTION?
void blink(){
  frame[1][3] = 0;
  frame[1][4] = 0;
  frame[1][8] = 0;
  frame[1][9] = 0;
}

// Challenge 3: CAN YOU BLINK BY USING ONLY WINKs? 
void blink_wink(){
  wink();
  rwink();
}

void mouth(){
  //Mouth
  frame[5][3] = 1;
  frame[5][9] = 1;
  frame[6][3] = 1;
  frame[6][4] = 1;
  frame[6][5] = 1;
  frame[6][6] = 1;
  frame[6][7] = 1;
  frame[6][8] = 1;
  frame[6][9] = 1;
}

void loop(){
leftEye();
rightEye();
mouth();

matrix.renderBitmap(frame, 8, 12);
delay(500);

wink();

matrix.renderBitmap(frame, 8, 12);
delay(500);

leftEye();
rwink();

matrix.renderBitmap(frame, 8, 12);
delay(500);

rightEye();
matrix.renderBitmap(frame, 8, 12);
delay(500);

blink();
matrix.renderBitmap(frame, 8, 12);
delay(500);

leftEye();
rightEye();
matrix.renderBitmap(frame, 8, 12);
delay(1500);

blink_wink();
matrix.renderBitmap(frame, 8, 12);
delay(1500);
}

