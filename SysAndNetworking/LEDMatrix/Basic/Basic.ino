// Basic ON/OFF LED Matrix
#include <Arduino_LED_Matrix.h>

// Create an instance of the LED matrix
ArduinoLEDMatrix matrix;

void setup() {
  // Initialize the matrix
  matrix.begin();
}

void loop() {
  uint8_t pixels[96];

 // Turn on all LEDs
  for (int row = 0; row < 8; row++) {
    for (int col = 0; col < 12; col++) {
      pixels[row * 12 + col] = 1; // Turn on the pixel
    }
  }
  matrix.loadPixels(pixels, 96); // Update the display
  delay(500);    // Wait for half a second

  // Turn off all LEDs
  for (int row = 0; row < 8; row++) {
    for (int col = 0; col < 12; col++) {
      pixels[row * 12 + col] = 0; // Turn off the pixel
    }
  }
  matrix.loadPixels(pixels, 96); // Update the display
  delay(500);    // Wait for half a second

  // Define frames
uint8_t happy[] = {
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  };

  uint8_t heart[] = {
    0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  };

  // Display happy face
  matrix.loadPixels(happy, 96);
  delay(500);

  // Display heart
  matrix.loadPixels(heart, 96);
  delay(500);
}