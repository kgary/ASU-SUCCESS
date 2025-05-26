var fs = require('fs'); //file import


module.exports = class Dictionary {
    //  Loads initial Eliza dictionary file into the program
    //  @param  filename    name of dictionary file in system
    constructor(defaultDictionary) {
        this.reference = {};
        this.addDictionary(defaultDictionary);
    }

    //  Updates the keyword map with the provided entries
    //  @param  entries     array of entries to be added
    updateReference(entries) {
        let offset = Object.keys(this.dictionary.entries).length - entries.length;
        for(let i = 0; i<entries.length; i++) {
            let keys = entries[i].key;
            for(let j = 0; j<keys.length; j++){
                if(this.reference[keys[j]])
                    this.reference[keys[j]].push(i + offset);
                else
                    this.reference[keys[j]] = [i + offset];
            }
        }
    }

    collectionContains(name) {
        return (this.collection.includes(name));
    }

    //  Loads a new Eliza dictionary file into the program
    //  @param  filename    name of dictionary file in system
    addDictionary(newDictionary) {
        if(!this.dictionary) {
            this.dictionary = newDictionary;
            this.collection = [this.dictionary.dictionary_name];
            this.updateReference(this.dictionary.entries);
        }
        else {
            if(newDictionary.dictionary_name && newDictionary.entries) {
                let newName = newDictionary.dictionary_name;
                this.collection.push(newName);
                let currDictionary = this.dictionary;
                newDictionary.entries.forEach(function(group) {
                    currDictionary.entries.push(group);
                });
                this.dictionary = currDictionary;
                this.updateReference(newDictionary.entries);
            }
            else {
                throw 'Malformed dictionary!';
            }
        }
    }

    //  Evaluates a string for keywords and returns all indices
    //  in the dictionary of all keyword occurrences in the string.
    //  @param  string  string to parse for keywords
    //  @return int[]   array containing all indices of all keyword occurrences
    getKeywords(string) {
        let ref = this.reference;
        let index = [];
        string = string.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,'');
        let words = string.split(" ");
        words.forEach(function(word) {
            if(ref[word.toLowerCase()]) {
                index = index.concat(ref[word.toLowerCase()]);
            }
        })
        if(index.length === 0) {
            index = ref["other"];
        }
        return(index);
    }

    //  Returns an answer from the group at the provided indices.
    //  @param  index   indices of dictionary to get
    //  @return string  an answer chosen randomly from one of the provided indices
    getAnswer(index) {
        let dictionary = this.dictionary;
        let answers = [];
        index.forEach(function(i) {
            let temp = dictionary.entries[i].answer;
            temp.forEach(function(j) {
                answers.push(j);
            })
        })
        return(answers[Math.floor(Math.random() * answers.length)]);
    }

    //  Returns a question from the group at the provided indices.
    //  @param  index   indices of dictionary to get
    //  @return string  a question chosen randomly from one of the provided indices
    getQuestion(index) {
        let questions = [];
        let dictionary = this.dictionary;
        index.forEach(function(i) {
            let temp = dictionary.entries[i].question;
            temp.forEach(function(j) {
                questions.push(j);
            })
        })
        return(questions[Math.floor(Math.random() * questions.length)]);
    }
}