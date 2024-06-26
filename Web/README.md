# Simple Eliza Chatbot

Welcome to the Simple Eliza Chatbot Project! This guide will help you set up and run a basic Eliza chatbot server. Ready to get started? Let's dive in!

## Table of Contents
1. [Setting Up the Server](#setting-up-the-server)
2. [Running the Server](#running-the-server)
3. [Using the Web Interface](#using-the-web-interface)
4. [Customizing the Lookup Table](#customizing-the-lookup-table)
5. [Personalizing the Website](#personalizing-the-website)

## Setting Up the Server

### Steps
1. Open your terminal.
2. Navigate to the project directory:
    ```bash
    cd ElizaBasic
    ```

## Running the Server

1. Start the server by running:
    ```bash
    node server
    ```

## Using the Web Interface

1. Open your browser.
2. Navigate to the HTML file:
    - You can do this by opening the `eliza.html` file directly in your browser. Simply double-click on the file, and it should open in your default browser.

3. You will see a text field on the webpage. Enter your prompt in the text field and press Enter.
4. The response from the Eliza chatbot will be displayed below the text field.


## Customizing the Lookup Table

The responses are managed by a lookup table located in the `default.json` file.

### Steps to Customize:
1. Open the `default.json` file in a text editor.
2. Add or update your Q&A pairs as needed.
3. Save the file.
4. Restart the server for the changes to take effect:
    ```bash
    node server
    ```

## Personalizing the Website

Feel free to personalize the theme of the website. You can make it responsive or change its CSS to match your preferences.

### Steps to Customize:
1. Open the `eliza.html` file in a text editor (VSCode).
2. Modify the HTML and CSS as needed.
3. Save your changes.
4. Refresh the browser to see the updates.

---

And that's it! You now have a basic Eliza chatbot server up and running with a customizable web interface. Enjoy chatting with Eliza and feel free to enhance the project further!
