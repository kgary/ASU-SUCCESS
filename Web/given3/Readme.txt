In our 3rd and final version of Eliza, we will use Generative AI (ChatGPT) to generate Eliza's responses
instead of our vocab.js. Our vocabularly is large, but it is finite, meaning that if the user does not
type in one of our keywords then Eliza will not understand what he user says. Further, the approach can
get repetitive if the same keyword is entered many times, and being keyword based sometimes the responses
do not seem related to what the user typed in. Can ChatGPT do a better job?

In this example, our server will call ChatGPT's API (Application Programming Interface) to present the user's
input as a "prompt" to ChatGPT, and get it's response an followup question.

Do you think this version will be better or worse (more or less intelligent) than our vocabulary version?
As our last challenge, we will have our server randomly choose between the vocabulary and ChatGPT for
responses, and the human user has to figure out which one gave the response!
