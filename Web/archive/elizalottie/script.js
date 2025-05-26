   //variables needed to remember last used messages
   var lastUsedNotFoundMessage = -1;
   var responseHistory = [];

   //check userInput in dict
   function processReply(userInput) {
       console.log(userInput);
       var wordsInInput = userInput.split(" ");
       var matchedIndex=-1;

       for (var i = 0; i < wordsInInput.length; i++) {
           //check in dictonary
           for (var j = 0; j < dict.length; j++) {
               if (dict[j].key.indexOf(wordsInInput[i]) > -1) { //key found
                   matchedIndex = j;
               }
           }
       }
       //get related response(phrase) according to the key
       if (matchedIndex === -1) {
           //no matchedIndex
           var notFoundMessages = ["eee! Not sure what are you talking about!", "OOps! Help me understand please!", "Care to explain more?"];
           var randomIndex = Math.floor(Math.random() * notFoundMessages.length);
           while (lastUsedNotFoundMessage == randomIndex) {
               randomIndex = Math.floor(Math.random() * notFoundMessages.length);
           }
           lastUsedNotFoundMessage = randomIndex;
           return notFoundMessages[randomIndex];
       } else {
           //get response for that key from dict.json
           var response = dict[matchedIndex].phrase;
           //checks for prev response history or if all the response are used then start afresh
           if (responseHistory.length == 0 || responseHistory[matchedIndex] == undefined || responseHistory[matchedIndex].length == response.length) {
               responseHistory[matchedIndex] = [];
           }
           var randomIndex = Math.floor(Math.random() * response.length);
           while (responseHistory[matchedIndex].indexOf(randomIndex) > -1) {
               randomIndex = Math.floor(Math.random() * response.length);
           }
           responseHistory[matchedIndex].push(randomIndex);
           return response[randomIndex];
       }
   }