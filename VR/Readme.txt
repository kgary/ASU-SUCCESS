Link for the ST room VR game - https://drive.google.com/file/d/1zeaeY8y4-BK1hX26HX-h7DbdzjOBtS2t/view?usp=sharing

1. After downloading from the dropbox link above, unzip the game.
2. Open Meta Quest Link app, login there using asusuccess2024@gmail.com
3. Open Unity Hub, login using a google account if not logged in.
4. Click on Add a project, then select the unzipped folder.
5. Once the project is added, click on it to open.
6. Make sure the headset is connected to the PC.

7.1 For the 2 lab machines (GIFT) in 204, click on play once the headset is detected, which should run the game.

7.1 For the 4 machines in 208, go to build settings, then switch platform to android, and then click on build project.
7.2 Once the project shows up on the headset, open the app from the headset.



Steps for controlling the light wall from the VR app.
1) First we need to upload the UnityWifiArduino.ino to the arduino. So open the Arduino IDE. Then open this "UnityWifiArduino.ino" file.
2) First connect your arduino to your laptop with the C type cable.
3) Then click on the button that looks like a "right arrow" on the top left of your IDE. This button compiles and uploads your arduino code(sketch) to the arduino.
4) While that is happening go to Tools -> Serial Monitor. This opens up the serial monitor on your Arduino IDE.
5) Now after the upload finishes successfully, see the serial monitor, it should print the IP assigned to your Arduino.
6) Take that IP adress and write it into the Assets/ArduinoController.cs to the arduinoUrl field inside your unity project.
7) Now make sure you are connected on the ASU-SUCCESS network.
8) Now finally run your unity app, and see in the VR headset.

Now interact with the letters by answering the riddle provided on the left of the wall. When you do this, ask your teammate to look at the LED wall
& they'll se the LEDs light up, exactly as you're doing inside the VR headset.

