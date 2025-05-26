In this second version of Eliza, we start as before trying to use only HTML, Javascript, and CSS, but
find we run into security limitations working directly with local files. To get around this, we introduce
a server. A server "serves" content and features to "clients", in this case web browsers. A client and a 
server are separate programs, so to talk to each other, we use a network, just like we did with the Arduino WiFi.

When we talk as humans, we use natural language, like English or Spanish or French. When we do so, there are 
some rules we must follow so others can understand us. For example, we have to structure our sentences properly,
(which we call "grammar") and the way we do this depends on the language we use. For example, in English I might
say "I like that red dress", but in French I'd say "J'aime cette robe rouge". What is different? In French the
adjective "rouge" (red) comes after "robe" (dress), the opposite of English. These rules, which you learned in
school and use everyday, are called a "protocol". 

Computers use protocols to set the rules for their communication as well. You've probably typed it in to your
computer or phone before - something that starts with "http" (or "https"). The "p" stands for "protocol", so
"http" (HyperText Transfer Protocol) is the set of rules for a web browser to communicate with a web server.
In this example we will introduce a web server that serves HTML and other content to your web browser, and also
allows us to send information to the server.

We also extend our basic Eliza to give a more convincing presentation of intelligence. In this case, we will add
a talking avatar, and speech, to Eliza to further try and trick our human user into thinking Eliza is intelligent.

To run this example, you will need to open a terminal window and cd to the server subdirectory and run 
"node server.js"
Then you can go to your web browser and enter "http://localhost:8008/elizabot.html" to get started. Along the way
there are a set of challenges that involves you adding the avatar, animating an avatar, and adding speech. Solutions
are provided if needed.

CHALLENGE 1: (server.js) Make it so you can change the lottie avatar you use
CHALLENGE 2: (elizabot.html) Start and stop the avatar talking animation
CHALLENGE 3: (elizabot.html) Improve the AI when the user types in something that does not match
CHALLENGE 4: (elizabot.html) Use the speech API to make Eliza talk!