// Basic ON/OFF LED Matrix
#include <Arduino_LED_Matrix.h>

// Create an instance of the LED matrix
ArduinoLEDMatrix matrix;

// The dimensions of the array
const int MATRIX_ROWS = 8;
const int MATRIX_COLS = 12;
const int DELAY = 500;   // This is how long to wait before redrawing the next thing

void setup() {
  // Initialize the matrix
  matrix.begin();
}

void clear_pixels(uint8_t pixels[]){
  // Turn off all LEDs
  for (int row = 0; row < MATRIX_ROWS; row++) {
    for (int col = 0; col < MATRIX_COLS; col++) {
      pixels[row * MATRIX_COLS + col] = 0; // Turn off the pixel
    }
  }
  matrix.loadPixels(pixels, MATRIX_ROWS * MATRIX_COLS); // Update the display
}

void loop() {

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

  clear_pixels(pixels);
  // no delay needed

  // TRY THIS
  // 1. Can you write loops to make the middle row only light up?
  for (int row = 0; row < MATRIX_ROWS; row++) {
    for (int col = 0; col < MATRIX_COLS; col++) {
      if (row == MATRIX_ROWS / 2){
        pixels[row * MATRIX_COLS + col] = 1; // Turn on the pixel
      }
    }
  }
  matrix.loadPixels(pixels, MATRIX_ROWS * MATRIX_COLS); // Update the display
  delay(DELAY);    // Wait for DELAY

  // 2. Can you write loops to make the middle column light up?
  // 3. Can you combine 1 and 2 and make a + sign?
  for (int row = 0; row < MATRIX_ROWS; row++) {
    for (int col = 0; col < MATRIX_COLS; col++) {
      if (col == MATRIX_COLS / 2){
        pixels[row * MATRIX_COLS + col] = 1; // Turn on the pixel
      }
    }
  }
  matrix.loadPixels(pixels, MATRIX_ROWS * MATRIX_COLS); // Update the display
  delay(DELAY);    // Wait for DELAY
  clear_pixels(pixels);

  // 4. How do you make the diagonal light up?
  for (int row = 0; row < MATRIX_ROWS; row++) {
    for (int col = 0; col < MATRIX_COLS; col++) {
      if (col == row){
        pixels[row * MATRIX_COLS + col] = 1; // Turn on the pixel
      }
    }
  }
  matrix.loadPixels(pixels, MATRIX_ROWS * MATRIX_COLS); // Update the display
  delay(DELAY);    // Wait for DELAY
  clear_pixels(pixels);

  // 5. (advanced) Can you make a line move across the matrix?
  // The trick is to write the first column, then loop through the rest
  for (int col = 0; col < MATRIX_COLS; col++) {
    pixels[0 * MATRIX_COLS + col] = 1; // Turn on the pixel
  }
  matrix.loadPixels(pixels, MATRIX_ROWS * MATRIX_COLS); // Update the display
  delay(100);    // We'll go faster to show the animation
  // we wrote the first one already, start at the second
  for (int row = 1; row < MATRIX_ROWS; row++) {
    for (int col = 0; col < MATRIX_COLS; col++) {
      pixels[(row-1) * MATRIX_COLS + col] = 0; // Turn off the previous pixel
      pixels[row * MATRIX_COLS + col] = 1; // Turn on the pixel
    }
    // have to write it out each time
    matrix.loadPixels(pixels, MATRIX_ROWS * MATRIX_COLS); // Update the display
    delay(100);    // We'll go faster to show the animation
  }

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

  // I am going to use the heart
    uint8_t myheart[] = {
    0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  };

  for (int iter = 0; iter < MATRIX_COLS; iter++) {
    for (int row = 0; row < MATRIX_ROWS; row++) {
      // First column has to rollove from last one
      myheart[row * MATRIX_COLS] = myheart[(row+1) * MATRIX_COLS - 1]; 
      // Count cols down instead of up so we can pull from the left
      for (int col = MATRIX_COLS; col > 0; col--) {
          myheart[row * MATRIX_COLS + col] = myheart[row * MATRIX_COLS + (col-1)]; // Turn on the pixel
      }
    }
    matrix.loadPixels(myheart, MATRIX_ROWS * MATRIX_COLS); // Update the display
    delay(100);    // Wait for DELAY
  }

  clear_pixels(pixels);
}