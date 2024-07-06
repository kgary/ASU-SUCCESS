Systems and Networking is the theme of the first day of the SUCCESS Camp.


# Stranger Things Arduino Adventure

Welcome to the Stranger Things Arduino Adventure! This guide will help you explore the world of Arduino with some cool LED projects, all with a Stranger Things theme. Ready to dive in? Let's get started!

## Table of Contents
1. [LED Matrix Magic](#led-matrix-magic)
    - Basic - ON, OFF, Happy, Heart
    - Wink Animation
    - GameOfLife Animation
    - TextWithArduinoGraphics
2. [LED Wall Basic Operations](#led-wall-basic-operations)
    - On, Off, Flicker, Sequence
3. [Communicating with the LED Wall](#communicating-with-the-led-wall)
    - Write Strings to LED Wall
4. [LED Wall WiFi Magic](#led-wall-wifi-magic)
    - Set Up Your Arduino with WiFi
    - Start the Server
    - Open Eliza in the Browser

## LED Matrix Magic

**Folder:** `LEDMatrix`

We're going to start with some simple LED Matrix tricks. Imagine these LEDs are your portal to the Upside Down!

### 1. Basic - ON, OFF, Happy, Heart
1. Open the `Basic` sketch.
2. Upload the code to your Arduino.
3. Watch as the LED Matrix shows different patterns:
    - Lights turn on and off
    - A happy face
    - A heart

### 2. Wink Animation
1. Open the `Wink` sketch.
2. Upload it and see the LED Matrix give you a wink, just like Eleven might give a cheeky wink to Mike!

### 3. GameOfLife Animation
1. Open the `GameOfLife` sketch.
2. Upload it and see a cool animation that looks like a living organism.

### 4. TextWithArduinoGraphics
1. Open the `TextWithArduinoGraphics` sketch.
2. Enter any text you want in the "text" field in the code.
3. Upload it and watch your text scroll across the LED Matrix.

## LED Wall Basic Operations

**Folder:** `LEDWallBasic`

Now, let’s connect the LED strip with the Arduino and perform basic operations on these LEDs.

### On, Off, Flicker, Sequence
1. Open the `LEDWallBasic` sketch.
2. Upload it to your Arduino.
3. Watch how the LEDs turn on, off, flicker, and sequence through, just like the lights on the wall in Stranger Things!

## Communicating with the LED Wall

**Folder:** `LEDWallWriteStrings`

Now, let’s create an LED wall that lights up just like the ones used for communicating with the Upside Down. Time to send messages through the LED wall using the serial monitor, just like how Will and Joyce sent messages!

### Write Strings to LED Wall
1. Open the `LEDWallWriteStrings` sketch.
2. Upload it to your Arduino.
3. Attach an alphabet (A-Z) to each LED on your strip.
4. Use the serial monitor to type messages and see them appear on the LED Wall. It’s like you’re talking to someone in the Upside Down!

## LED Wall WiFi Magic

**Folder:** `LEDWallWifi`

Finally, we’re going to use WiFi to control the LED wall. This is like using modern tech to communicate with the Upside Down!

### Set Up Your Arduino with WiFi
1. Make sure your Arduino is connected to the LED strip.
2. Open the `LEDWallWifi` sketch and upload it to your Arduino.

### Start the Server
1. Open the terminal on your computer.
2. Navigate to the folder with `server.js`.
3. Run `npm install` to install the necessary packages.
4. Start the server by running `npm start`.

### Open Eliza in the Browser
1. Open `wallwifiui.html` in your browser.
2. Enter text in the the field mentioned and then click the submit button and it will light up the LED strip with your message - POST request.
3. Click the "Fetch Data" button and it will fetch live data(No. of LEDs & their brightness) from the arduino - GET request.

And there you go! You’ve now created your very own Stranger Things themed LED communication system. Keep experimenting and have fun with your Arduino adventures! Remember, the Upside Down is just a code away! 🚀✨
