// Basic ON/OFF LED Matrix
#include <Arduino_LED_Matrix.h>

// Create an instance of the LED matrix
ArduinoLEDMatrix matrix;

void setup() {
  // Initialize the matrix
  matrix.begin();
}

void loop() {

 // The dimensions of the array
 const int MATRIX_ROWS = 8;
 const int MATRIX_COLS = 12;
 const int DELAY = 500;   // This is how long to wait before redrawing the next thing

 // This represents the LED Matrix
 uint8_t pixels[MATRIX_ROWS * MATRIX_COLS];

 // Turn on all LEDs
  for (int row = 0; row < MATRIX_ROWS; row++) {
    for (int col = 0; col < MATRIX_COLS; col++) {
      pixels[row * MATRIX_COLS + col] = 1; // Turn on the pixel
    }
  }
  matrix.loadPixels(pixels, MATRIX_ROWS * MATRIX_COLS); // Update the display
  delay(DELAY);    // Wait for DELAY

  // TRY THIS
  // 1. Can you write loops to make the middle row only light up?
  // 2. Can you write loops to make the middle column light up?
  // 3. Can you combine 1 and 2 and make a + sign?
  // 4. How do you make the diagonal light up?
  // 5. (advanced) Can you make a line move across the matrix?

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
  matrix.loadPixels(happy, MATRIX_ROWS * MATRIX_COLS);
  delay(DELAY); // Wait for DELAY

  // Display heart
  matrix.loadPixels(heart, MATRIX_ROWS * MATRIX_COLS);
  delay(DELAY); // Wait for DELAY

  // TRY THIS
  // 1. Create your own shape!
  // 2. (advanced) Can you make your shape moved across the matrix 
  //    without manually setting the matrix (hint: use loops like above)
}