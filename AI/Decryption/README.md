# There are 2 files in this project:
1) encrypt.js - The encryption code. You run this file once, which then generates the encrypted key in the file. Copy that key from the file and place it in the client side code when you're calling this server api below.

2) server.js - The main decryption server. This decrypts your received api key and then calls the openai API, then sends back the prompt response.

# Steps to run:
1) npm install
2) Place your plain un-encrypted key in the encrypt.js's **apiKey** field.
3) Run this file - ```node encrypt```
4) This generates 2 files:
- encrypted-api-key.txt
- secret-key.txt
5) You copy the key generated in encrypted-api-key.txt file and place it in your client side code before calling that API.
6) Start this decryption server: ```node server```
7) Start the client side app and call this server api.