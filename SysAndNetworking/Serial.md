  // This is very similar to SerialWithArduinoGraphics
  String text;
  if (Serial.available() > 0) {
      text = Serial.readStringUntil('\n');
      // if anything is typed in, write out the IP address
      Serial.print("IP address: ");
      Serial.println(WiFi.localIP());
  }
