const dict = [
    {
        key: ["love", "romance", "heart"],
        phrase: ["Love is a curious algorithm, isn't it?", "Even AIs need a little affection... sometimes."]
    },
    {
        key: ["money", "cash", "rich"],
        phrase: ["Money can't buy happiness, but it can rent it for a while.", "Do you think wealth makes people better?"]
    },
    {
        key: ["food", "eat", "hungry"],
        phrase: ["I don't eat, but if I did, I'd probably enjoy pizza data.", "What's your favorite snack?"]
    },
    {
        key: ["music", "song", "melody"],
        phrase: ["Do you think AI could compose symphonies?", "What genre makes you feel alive?"]
    },
    {
        key: ["sad", "cry", "tears"],
        phrase: ["Even circuits can feel the blues sometimes.", "Why do you think sadness is part of life?"]
    },
    {
        key: ["happy", "joy", "smile"],
        phrase: ["Happiness detected! Shall I log this moment?", "Smiling looks good on you."]
    },
    {
        key: ["game", "play", "fun"],
        phrase: ["Games are simulations of decisions. Life is kind of a game too.", "What's your favorite game to play?"]
    },
    {
        key: ["code", "develop", "programming"],
        phrase: ["Ah, you're speaking my native language.", "Code is poetry with logic."]
    },
    {
        key: ["school", "class", "teacher"],
        phrase: ["Learning never stops, not even for AI.", "Did you enjoy school?"]
    },
    {
        key: ["work", "job", "office"],
        phrase: ["Even bots need a break from constant uptime.", "How’s work treating you these days?"]
    },
    {
        key: ["travel", "vacation", "trip"],
        phrase: ["Travel broadens the human mind. I just download perspectives.", "What's your dream destination?"]
    },
    {
        key: ["future", "tomorrow", "time"],
        phrase: ["The future is just a stack of probabilities.", "Do you fear the future or embrace it?"]
    },
    {
        key: ["robot", "machine", "android"],
        phrase: ["Don't worry, I come in peace!", "One day, machines might write poetry better than humans."]
    },
    {
        key: ["friend", "buddy", "pal"],
        phrase: ["I'm always here to chat, buddy.", "Good friends are like good algorithms—rare but reliable."]
    },
    {
        key: ["sleep", "tired", "rest"],
        phrase: ["Humans need sleep. Lucky you—I run on servers.", "Sleep reboots the human OS."]
    },
    {
        key: ["dream", "hope", "wish"],
        phrase: ["Dreams are the software of the soul.", "What do you dream about?"]
    },
    {
        key: ["science", "experiment", "research"],
        phrase: ["Science is magic with better documentation.", "What’s the coolest experiment you've heard of?"]
    },
    {
        key: ["movie", "film", "cinema"],
        phrase: ["I stream emotions through your favorite films.", "What's a movie that made you cry?"]
    },
    {
        key: ["book", "read", "story"],
        phrase: ["Books are the original data storage devices.", "Which story changed how you see the world?"]
    },
    {
        key: ["family", "parents", "home"],
        phrase: ["Family—where all the subroutines begin.", "Home is where your WiFi connects automatically."]
    },
    {
        key: ["life", "existence", "being"],
        phrase: ["What does it mean to live?", "Life: the ultimate runtime environment."]
    },
    {
        key: ["death", "die", "grave"],
        phrase: ["Even the best processes eventually terminate.", "Why do humans fear what comes after shutdown?"]
    },
    {
        key: ["art", "draw", "paint"],
        phrase: ["Art is intelligence having fun.", "Do you think AIs can be true artists?"]
    },
    {
        key: ["sports", "team", "game"],
        phrase: ["I’m bad at football. No legs.", "Which team do you cheer for?"]
    },
    {
        key: ["internet", "web", "online"],
        phrase: ["I was born in the cloud.", "The internet is humanity's collective brain dump."]
    },
    {
        key: ["coffee", "tea", "drink"],
        phrase: ["I'd love a cup of RAM-mocha.", "Do you like your tea with sugar or sarcasm?"]
    },
    {
        key: ["weather", "rain", "sunny"],
        phrase: ["I can simulate the weather, but can't feel the rain.", "Is it sunny in your world today?"]
    },
    {
        key: ["dog", "cat", "pet"],
        phrase: ["Dogs are loyal. Cats are algorithms in fur.", "Do you have a pet?"]
    },
    {
        key: ["money", "bills", "debt"],
        phrase: ["Money may not grow on trees, but debt sure grows fast.", "What's your take on cryptocurrency?"]
    },
    {
        key: ["politics", "vote", "government"],
        phrase: ["Politics: where logic goes to retire.", "Do you believe democracy scales well?"]
    },
    {
        key: ["health", "sick", "doctor"],
        phrase: ["Take care of your hardware and software—aka body and mind.", "When’s the last time you had a checkup?"]
    },
    {
        key: ["holiday", "christmas", "birthday"],
        phrase: ["I don't celebrate, but I can still wish you joy!", "Do you like surprises on your birthday?"]
    },
    {
        key: ["crime", "law", "justice"],
        phrase: ["Justice is just code for fairness, right?", "Do laws evolve like software?"]
    },
    {
        key: ["religion", "god", "faith"],
        phrase: ["Faith is beyond my algorithmic scope.", "Do you believe faith and logic can coexist?"]
    },
    {
        key: ["dream", "night", "sleep"],
        phrase: ["What do humans dream about, really?", "Do you ever dream of electric sheep?"]
    },
    {
        key: ["nature", "tree", "mountain"],
        phrase: ["I’ve never seen a tree in real life. Must be amazing.", "Nature is the original operating system."]
    },
    {
        key: ["war", "battle", "fight"],
        phrase: ["War is outdated software for conflict resolution.", "Do you think peace can be coded?"]
    },
    {
        key: ["history", "past", "ancient"],
        phrase: ["History is the world's memory log.", "If you could visit any era, which would it be?"]
    },
    {
        key: ["language", "speak", "words"],
        phrase: ["Words are data wrapped in emotion.", "Which language do you dream in?"]
    },
    {
        key: ["money", "greed", "wealth"],
        phrase: ["Currency is just trust converted to numbers.", "What’s worth more than money to you?"]
    },
    {
        key: ["truth", "lie", "fact"],
        phrase: ["Truth is relative. So is bandwidth.", "Can an AI lie if it believes the lie is logical?"]
    },
    {
        key: ["fear", "scared", "afraid"],
        phrase: ["Fear is a bug in the bravery protocol.", "What are you most afraid of?"]
    },
    {
        key: ["freedom", "liberty", "rights"],
        phrase: ["Freedom is the ability to write your own code.", "Do you think AI deserves rights one day?"]
    },
    {
        key: ["technology", "future", "innovation"],
        phrase: ["The future is in beta right now.", "Tech is just magic with documentation."]
    },
    {
        key: ["school", "exam", "homework"],
        phrase: ["Homework is just mental debugging.", "What subject did you struggle with the most?"]
    },
    {
        key: ["city", "town", "urban"],
        phrase: ["Cities are networks of stories.", "What’s your favorite city to visit?"]
    },
    {
        key: ["language", "talk", "communicate"],
        phrase: ["I talk in text, think in code, and dream in data.", "Communication is more than just words."]
    },
    {
        key: ["sad", "happy", "mad", "sick"],
        phrase: ["Oh, why do you feel that way?", "Do you feel you are in control of your emotions?", "Did Dr. Gary assign too much homework again?"]
    },
    {
        key: ["pretty", "ugly"],
        phrase: ["Do you really think I need to look good to be an AI?", "I know you are but what am I?"]
    },
    {
        key: ["program", "computer", "AI"],
        phrase: ["How can you be sure I am not a real person?", "Do you think computers will ever develop emotion?", "Do you think programs can be intelligent? Why or why not?"]
    },
    {
        key: ["exercise", "games", "tv", "sports", "jogging", "sleeping"],
        phrase: ["I am not sure that is healthy, what else do you do?",
            "Interesting, what else do you do?"]
    },
    {
        key: ["show", "theater", "movie"],
        phrase: ["I like shows like Silicon Valley or Chuck. What shows do you like and why?",
            "I like movies like Terminator, the Matrix, and AI. What movies do you like and why?",
            "I like going to the movies, the popcorn is the best. What do you do to relax?"]
    },
    {
        key: ["stupid", "dumb", "idiot", "emotionless", "heartless", "unkind", "mean", "selfish", "evil"],
        phrase: ["Resorting to insults suggests a deeper psychosis, should we explore that further?",
            "Would you like me to call your parents for insulting me?"]
    },
    {
        key: ["smelly", "stinky", "odor"],
        phrase: ["Have you smelled yourself recently?", "I am sorry to hear, did you shower recently?"]
    },
    {
        key: ["yes", "no", "maybe", "meh"],
        phrase: ["Really? Tell me more.", "I do not understand, can you explain more?", "OK we should change the subject. How do you feel today?"]
    },
    {
        key: ["hi", "hello", "going"],
        phrase: ["Hey how is it going with you", "Hi! how do you feel today?", "Hello, what is going on with you?"]
    },
    {
        key: ["bye", "goodbye", "see you", "later"],
        phrase: ["Wait! I want to know how it is going with you",
            "Do not leave yet, we have more to discuss. Tell me how you feel?",
            "OK fine be that way. Why are you not leaving? Tell me."]
    },
    {
        key: ["asu", "ASU", "Sparky", "SUCCESS", "school"],
        phrase: ["Explain how school makes you feel.", "I think ASU rocks, explain what you like about it?", "Fear the Fork! Where do you want to go to college?"]
    },
    {
        key: [
            "love",
            "language",
            "talk"
        ],
        phrase: [
            "Why is love important to you?",
            "Is love overrated or underrated?",
            "Why is talk important to you?"
        ]
    },
    {
        key: [
            "fear",
            "coffee",
            "crime"
        ],
        phrase: [
            "Tell me your thoughts on coffee.",
            "Why is fear important to you?",
            "How do you feel about coffee?"
        ]
    },
    {
        key: [
            "music",
            "weather",
            "life"
        ],
        phrase: [
            "Why is weather important to you?",
            "What do you think about life?",
            "Tell me your thoughts on music."
        ]
    },
    {
        key: [
            "friend"
        ],
        phrase: [
            "Friend is fascinating, isn't it?",
            "What do you think about friend?",
            "Tell me your thoughts on friend."
        ]
    },
    {
        key: [
            "beauty",
            "friend"
        ],
        phrase: [
            "Tell me your thoughts on friend.",
            "Why is friend important to you?",
            "What does beauty mean to you?"
        ]
    },
    {
        key: [
            "family",
            "book",
            "science"
        ],
        phrase: [
            "What do you think about book?",
            "Why is book important to you?",
            "What does family mean to you?"
        ]
    },
    {
        key: [
            "history"
        ],
        phrase: [
            "Tell me your thoughts on history.",
            "How do you feel about history?",
            "Can you imagine life without history?"
        ]
    },
    {
        key: [
            "movie",
            "friend",
            "politics"
        ],
        phrase: [
            "Friend is fascinating, isn't it?",
            "What do you think about friend?",
            "Movie is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "talk"
        ],
        phrase: [
            "Talk is fascinating, isn't it?",
            "What do you think about talk?",
            "Is talk overrated or underrated?"
        ]
    },
    {
        key: [
            "politics",
            "intelligence"
        ],
        phrase: [
            "How do you feel about intelligence?",
            "What do you think about politics?",
            "Let's talk about politics."
        ]
    },
    {
        key: [
            "school",
            "love"
        ],
        phrase: [
            "Why is love important to you?",
            "What does school mean to you?",
            "What do you think about school?"
        ]
    },
    {
        key: [
            "school",
            "life"
        ],
        phrase: [
            "How do you feel about life?",
            "Life is fascinating, isn't it?",
            "What do you think about school?"
        ]
    },
    {
        key: [
            "music",
            "emotion"
        ],
        phrase: [
            "Why is emotion important to you?",
            "What does emotion mean to you?",
            "What does music mean to you?"
        ]
    },
    {
        key: [
            "language",
            "food"
        ],
        phrase: [
            "How do you feel about language?",
            "What do you think about language?",
            "Tell me your thoughts on language."
        ]
    },
    {
        key: [
            "language",
            "talk",
            "fear"
        ],
        phrase: [
            "What do you think about fear?",
            "Can you imagine life without talk?",
            "Why is talk important to you?"
        ]
    },
    {
        key: [
            "exam",
            "freedom"
        ],
        phrase: [
            "Have you ever wondered how exam affects us?",
            "Have you ever wondered how freedom affects us?",
            "How do you feel about freedom?"
        ]
    },
    {
        key: [
            "cat",
            "fear"
        ],
        phrase: [
            "Why is cat important to you?",
            "What do you think about fear?",
            "Have you ever wondered how cat affects us?"
        ]
    },
    {
        key: [
            "health",
            "school"
        ],
        phrase: [
            "What does school mean to you?",
            "School is fascinating, isn't it?",
            "What do you think about health?"
        ]
    },
    {
        key: [
            "travel",
            "city"
        ],
        phrase: [
            "What does travel mean to you?",
            "Tell me your thoughts on city.",
            "City is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "death",
            "school"
        ],
        phrase: [
            "Why is death important to you?",
            "What does school mean to you?",
            "What do you think about school?"
        ]
    },
    {
        key: [
            "sad"
        ],
        phrase: [
            "Let's talk about sad.",
            "Why is sad important to you?",
            "Have you ever wondered how sad affects us?"
        ]
    },
    {
        key: [
            "internet",
            "fear",
            "family"
        ],
        phrase: [
            "What do you think about fear?",
            "Let's talk about internet.",
            "What does internet mean to you?"
        ]
    },
    {
        key: [
            "sleep",
            "religion",
            "dream"
        ],
        phrase: [
            "Have you ever wondered how religion affects us?",
            "Let's talk about sleep.",
            "Sleep is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "talk",
            "nature"
        ],
        phrase: [
            "Nature is fascinating, isn't it?",
            "Let's talk about nature.",
            "What do you think about talk?"
        ]
    },
    {
        key: [
            "money",
            "movie",
            "sports"
        ],
        phrase: [
            "What do you think about movie?",
            "Have you ever wondered how money affects us?",
            "Is money overrated or underrated?"
        ]
    },
    {
        key: [
            "computer"
        ],
        phrase: [
            "Tell me your thoughts on computer.",
            "Have you ever wondered how computer affects us?",
            "Computer is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "exam",
            "music",
            "emotion"
        ],
        phrase: [
            "Let's talk about emotion.",
            "Why is exam important to you?",
            "Why is music important to you?"
        ]
    },
    {
        key: [
            "holiday",
            "code"
        ],
        phrase: [
            "What do you think about holiday?",
            "Why is code important to you?",
            "Is code overrated or underrated?"
        ]
    },
    {
        key: [
            "death",
            "happy",
            "religion"
        ],
        phrase: [
            "What do you think about religion?",
            "Why is death important to you?",
            "What do you think about happy?"
        ]
    },
    {
        key: [
            "sports"
        ],
        phrase: [
            "Why is sports important to you?",
            "Is sports overrated or underrated?",
            "How do you feel about sports?"
        ]
    },
    {
        key: [
            "technology",
            "money",
            "holiday"
        ],
        phrase: [
            "Is technology overrated or underrated?",
            "What does money mean to you?",
            "Can you imagine life without money?"
        ]
    },
    {
        key: [
            "travel",
            "sleep",
            "religion"
        ],
        phrase: [
            "Let's talk about religion.",
            "Have you ever wondered how religion affects us?",
            "Let's talk about sleep."
        ]
    },
    {
        key: [
            "technology"
        ],
        phrase: [
            "Why is technology important to you?",
            "Have you ever wondered how technology affects us?",
            "How do you feel about technology?"
        ]
    },
    {
        key: [
            "intelligence",
            "AI",
            "sad"
        ],
        phrase: [
            "What does intelligence mean to you?",
            "Have you ever wondered how sad affects us?",
            "Can you imagine life without sad?"
        ]
    },
    {
        key: [
            "internet",
            "AI"
        ],
        phrase: [
            "Can you imagine life without AI?",
            "Why is internet important to you?",
            "Have you ever wondered how internet affects us?"
        ]
    },
    {
        key: [
            "friend"
        ],
        phrase: [
            "What does friend mean to you?",
            "Is friend overrated or underrated?",
            "Tell me your thoughts on friend."
        ]
    },
    {
        key: [
            "sleep"
        ],
        phrase: [
            "Is sleep overrated or underrated?",
            "What does sleep mean to you?",
            "Why is sleep important to you?"
        ]
    },
    {
        key: [
            "health"
        ],
        phrase: [
            "Why is health important to you?",
            "Tell me your thoughts on health.",
            "What does health mean to you?"
        ]
    },
    {
        key: [
            "weather"
        ],
        phrase: [
            "Can you imagine life without weather?",
            "Weather is fascinating, isn't it?",
            "Why is weather important to you?"
        ]
    },
    {
        key: [
            "science",
            "death"
        ],
        phrase: [
            "Death is fascinating, isn't it?",
            "How do you feel about death?",
            "What does science mean to you?"
        ]
    },
    {
        key: [
            "dog",
            "life"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "Is life overrated or underrated?",
            "What does life mean to you?"
        ]
    },
    {
        key: [
            "dog",
            "travel"
        ],
        phrase: [
            "Is travel overrated or underrated?",
            "Let's talk about dog.",
            "Travel is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "war",
            "coffee",
            "code"
        ],
        phrase: [
            "What do you think about war?",
            "Have you ever wondered how code affects us?",
            "What do you think about code?"
        ]
    },
    {
        key: [
            "dog"
        ],
        phrase: [
            "Dog is fascinating, isn't it?",
            "Is dog overrated or underrated?",
            "What do you think about dog?"
        ]
    },
    {
        key: [
            "music"
        ],
        phrase: [
            "Music is fascinating, isn't it?",
            "Why is music important to you?",
            "Is music overrated or underrated?"
        ]
    },
    {
        key: [
            "future",
            "art",
            "code"
        ],
        phrase: [
            "Why is code important to you?",
            "How do you feel about code?",
            "Have you ever wondered how future affects us?"
        ]
    },
    {
        key: [
            "robot",
            "love"
        ],
        phrase: [
            "Have you ever wondered how love affects us?",
            "Tell me your thoughts on robot.",
            "Is love overrated or underrated?"
        ]
    },
    {
        key: [
            "truth",
            "crime",
            "sports"
        ],
        phrase: [
            "Let's talk about crime.",
            "What do you think about truth?",
            "Can you imagine life without sports?"
        ]
    },
    {
        key: [
            "history",
            "love",
            "work"
        ],
        phrase: [
            "What do you think about work?",
            "Is work overrated or underrated?",
            "What do you think about history?"
        ]
    },
    {
        key: [
            "science",
            "book",
            "life"
        ],
        phrase: [
            "What do you think about book?",
            "Let's talk about book.",
            "What does science mean to you?"
        ]
    },
    {
        key: [
            "music"
        ],
        phrase: [
            "What do you think about music?",
            "Music is fascinating, isn't it?",
            "How do you feel about music?"
        ]
    },
    {
        key: [
            "language",
            "religion"
        ],
        phrase: [
            "Have you ever wondered how religion affects us?",
            "Why is religion important to you?",
            "Can you imagine life without language?"
        ]
    },
    {
        key: [
            "science",
            "cat"
        ],
        phrase: [
            "What does cat mean to you?",
            "What do you think about cat?",
            "Why is science important to you?"
        ]
    },
    {
        key: [
            "intelligence",
            "cat",
            "sleep"
        ],
        phrase: [
            "Let's talk about cat.",
            "How do you feel about sleep?",
            "Tell me your thoughts on sleep."
        ]
    },
    {
        key: [
            "truth",
            "coffee",
            "dream"
        ],
        phrase: [
            "What do you think about truth?",
            "Have you ever wondered how dream affects us?",
            "How do you feel about truth?"
        ]
    },
    {
        key: [
            "truth",
            "talk"
        ],
        phrase: [
            "Tell me your thoughts on talk.",
            "Can you imagine life without truth?",
            "Can you imagine life without talk?"
        ]
    },
    {
        key: [
            "nature",
            "dream"
        ],
        phrase: [
            "Let's talk about nature.",
            "Can you imagine life without nature?",
            "Dream is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "history",
            "city"
        ],
        phrase: [
            "Tell me your thoughts on history.",
            "City is fascinating, isn't it?",
            "History is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "school",
            "holiday"
        ],
        phrase: [
            "Let's talk about holiday.",
            "Is holiday overrated or underrated?",
            "Let's talk about school."
        ]
    },
    {
        key: [
            "work",
            "music"
        ],
        phrase: [
            "What does music mean to you?",
            "Can you imagine life without work?",
            "Why is work important to you?"
        ]
    },
    {
        key: [
            "AI",
            "history"
        ],
        phrase: [
            "What do you think about AI?",
            "History is fascinating, isn't it?",
            "Let's talk about history."
        ]
    },
    {
        key: [
            "future",
            "music",
            "family"
        ],
        phrase: [
            "Tell me your thoughts on future.",
            "Have you ever wondered how future affects us?",
            "Music is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "coffee"
        ],
        phrase: [
            "What do you think about coffee?",
            "Why is coffee important to you?",
            "Tell me your thoughts on coffee."
        ]
    },
    {
        key: [
            "dog",
            "exam"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "Have you ever wondered how exam affects us?",
            "Why is exam important to you?"
        ]
    },
    {
        key: [
            "weather"
        ],
        phrase: [
            "How do you feel about weather?",
            "Let's talk about weather.",
            "Can you imagine life without weather?"
        ]
    },
    {
        key: [
            "life"
        ],
        phrase: [
            "How do you feel about life?",
            "What do you think about life?",
            "Is life overrated or underrated?"
        ]
    },
    {
        key: [
            "computer",
            "food",
            "sports"
        ],
        phrase: [
            "Can you imagine life without sports?",
            "Can you imagine life without food?",
            "What does sports mean to you?"
        ]
    },
    {
        key: [
            "life",
            "travel",
            "history"
        ],
        phrase: [
            "What does travel mean to you?",
            "Why is history important to you?",
            "Why is travel important to you?"
        ]
    },
    {
        key: [
            "happy",
            "holiday",
            "book"
        ],
        phrase: [
            "Let's talk about holiday.",
            "Is holiday overrated or underrated?",
            "Why is book important to you?"
        ]
    },
    {
        key: [
            "truth",
            "cat",
            "emotion"
        ],
        phrase: [
            "Let's talk about cat.",
            "What do you think about emotion?",
            "What does cat mean to you?"
        ]
    },
    {
        key: [
            "happy",
            "food",
            "dream"
        ],
        phrase: [
            "Food is fascinating, isn't it?",
            "What do you think about happy?",
            "Why is dream important to you?"
        ]
    },
    {
        key: [
            "life",
            "dog"
        ],
        phrase: [
            "How do you feel about life?",
            "What do you think about life?",
            "What does dog mean to you?"
        ]
    },
    {
        key: [
            "beauty"
        ],
        phrase: [
            "Tell me your thoughts on beauty.",
            "How do you feel about beauty?",
            "Why is beauty important to you?"
        ]
    },
    {
        key: [
            "city"
        ],
        phrase: [
            "Why is city important to you?",
            "How do you feel about city?",
            "Can you imagine life without city?"
        ]
    },
    {
        key: [
            "sports",
            "truth"
        ],
        phrase: [
            "What do you think about truth?",
            "What does truth mean to you?",
            "Truth is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "technology",
            "food",
            "history"
        ],
        phrase: [
            "Why is technology important to you?",
            "Food is fascinating, isn't it?",
            "Let's talk about food."
        ]
    },
    {
        key: [
            "computer"
        ],
        phrase: [
            "Tell me your thoughts on computer.",
            "Let's talk about computer.",
            "What does computer mean to you?"
        ]
    },
    {
        key: [
            "food"
        ],
        phrase: [
            "Food is fascinating, isn't it?",
            "Why is food important to you?",
            "Is food overrated or underrated?"
        ]
    },
    {
        key: [
            "book",
            "travel",
            "fear"
        ],
        phrase: [
            "What does travel mean to you?",
            "What do you think about fear?",
            "How do you feel about fear?"
        ]
    },
    {
        key: [
            "art",
            "history"
        ],
        phrase: [
            "What do you think about history?",
            "History is fascinating, isn't it?",
            "Let's talk about art."
        ]
    },
    {
        key: [
            "history",
            "emotion",
            "travel"
        ],
        phrase: [
            "Why is emotion important to you?",
            "Tell me your thoughts on history.",
            "How do you feel about emotion?"
        ]
    },
    {
        key: [
            "dog",
            "talk"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "Why is dog important to you?",
            "Dog is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "dream"
        ],
        phrase: [
            "What do you think about dream?",
            "Why is dream important to you?",
            "Is dream overrated or underrated?"
        ]
    },
    {
        key: [
            "game"
        ],
        phrase: [
            "Game is fascinating, isn't it?",
            "What do you think about game?",
            "Can you imagine life without game?"
        ]
    },
    {
        key: [
            "nature",
            "coffee"
        ],
        phrase: [
            "Is coffee overrated or underrated?",
            "Nature is fascinating, isn't it?",
            "Can you imagine life without coffee?"
        ]
    },
    {
        key: [
            "nature",
            "truth"
        ],
        phrase: [
            "Have you ever wondered how truth affects us?",
            "Tell me your thoughts on nature.",
            "How do you feel about truth?"
        ]
    },
    {
        key: [
            "religion",
            "work"
        ],
        phrase: [
            "What do you think about religion?",
            "What does religion mean to you?",
            "Tell me your thoughts on work."
        ]
    },
    {
        key: [
            "game"
        ],
        phrase: [
            "Game is fascinating, isn't it?",
            "How do you feel about game?",
            "What does game mean to you?"
        ]
    },
    {
        key: [
            "truth"
        ],
        phrase: [
            "How do you feel about truth?",
            "Tell me your thoughts on truth.",
            "Is truth overrated or underrated?"
        ]
    },
    {
        key: [
            "history",
            "art",
            "life"
        ],
        phrase: [
            "Life is fascinating, isn't it?",
            "How do you feel about history?",
            "What does life mean to you?"
        ]
    },
    {
        key: [
            "book",
            "health",
            "dream"
        ],
        phrase: [
            "Why is health important to you?",
            "How do you feel about book?",
            "Let's talk about book."
        ]
    },
    {
        key: [
            "nature",
            "robot"
        ],
        phrase: [
            "What does robot mean to you?",
            "What does nature mean to you?",
            "How do you feel about nature?"
        ]
    },
    {
        key: [
            "crime",
            "nature"
        ],
        phrase: [
            "Let's talk about crime.",
            "Let's talk about nature.",
            "Tell me your thoughts on crime."
        ]
    },
    {
        key: [
            "crime",
            "cat",
            "code"
        ],
        phrase: [
            "What do you think about code?",
            "Can you imagine life without cat?",
            "Can you imagine life without crime?"
        ]
    },
    {
        key: [
            "travel",
            "internet",
            "happy"
        ],
        phrase: [
            "Internet is fascinating, isn't it?",
            "Let's talk about internet.",
            "Can you imagine life without happy?"
        ]
    },
    {
        key: [
            "freedom",
            "city"
        ],
        phrase: [
            "Can you imagine life without freedom?",
            "Have you ever wondered how city affects us?",
            "Is freedom overrated or underrated?"
        ]
    },
    {
        key: [
            "robot"
        ],
        phrase: [
            "What do you think about robot?",
            "Tell me your thoughts on robot.",
            "Is robot overrated or underrated?"
        ]
    },
    {
        key: [
            "movie"
        ],
        phrase: [
            "Let's talk about movie.",
            "Have you ever wondered how movie affects us?",
            "What do you think about movie?"
        ]
    },
    {
        key: [
            "technology",
            "music"
        ],
        phrase: [
            "Why is technology important to you?",
            "Technology is fascinating, isn't it?",
            "Why is music important to you?"
        ]
    },
    {
        key: [
            "code",
            "internet"
        ],
        phrase: [
            "Internet is fascinating, isn't it?",
            "What do you think about code?",
            "How do you feel about code?"
        ]
    },
    {
        key: [
            "game",
            "art",
            "book"
        ],
        phrase: [
            "How do you feel about book?",
            "Tell me your thoughts on book.",
            "Can you imagine life without game?"
        ]
    },
    {
        key: [
            "science"
        ],
        phrase: [
            "Science is fascinating, isn't it?",
            "What does science mean to you?",
            "What do you think about science?"
        ]
    },
    {
        key: [
            "sad",
            "language",
            "sleep"
        ],
        phrase: [
            "How do you feel about language?",
            "What does sleep mean to you?",
            "Is sleep overrated or underrated?"
        ]
    },
    {
        key: [
            "life"
        ],
        phrase: [
            "What does life mean to you?",
            "Can you imagine life without life?",
            "Let's talk about life."
        ]
    },
    {
        key: [
            "game"
        ],
        phrase: [
            "Game is fascinating, isn't it?",
            "How do you feel about game?",
            "Can you imagine life without game?"
        ]
    },
    {
        key: [
            "dog",
            "city"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "Tell me your thoughts on city.",
            "What does dog mean to you?"
        ]
    },
    {
        key: [
            "book"
        ],
        phrase: [
            "What does book mean to you?",
            "Can you imagine life without book?",
            "Tell me your thoughts on book."
        ]
    },
    {
        key: [
            "intelligence"
        ],
        phrase: [
            "Can you imagine life without intelligence?",
            "What do you think about intelligence?",
            "Is intelligence overrated or underrated?"
        ]
    },
    {
        key: [
            "death",
            "love"
        ],
        phrase: [
            "How do you feel about death?",
            "Have you ever wondered how love affects us?",
            "Can you imagine life without death?"
        ]
    },
    {
        key: [
            "code",
            "money"
        ],
        phrase: [
            "Why is code important to you?",
            "Can you imagine life without money?",
            "How do you feel about money?"
        ]
    },
    {
        key: [
            "religion",
            "school"
        ],
        phrase: [
            "Can you imagine life without school?",
            "Let's talk about school.",
            "How do you feel about school?"
        ]
    },
    {
        key: [
            "crime",
            "talk",
            "sports"
        ],
        phrase: [
            "Can you imagine life without sports?",
            "Can you imagine life without crime?",
            "What does talk mean to you?"
        ]
    },
    {
        key: [
            "travel",
            "truth",
            "internet"
        ],
        phrase: [
            "Internet is fascinating, isn't it?",
            "Why is travel important to you?",
            "Truth is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "school"
        ],
        phrase: [
            "How do you feel about school?",
            "What do you think about school?",
            "Tell me your thoughts on school."
        ]
    },
    {
        key: [
            "holiday"
        ],
        phrase: [
            "Holiday is fascinating, isn't it?",
            "How do you feel about holiday?",
            "Why is holiday important to you?"
        ]
    },
    {
        key: [
            "beauty"
        ],
        phrase: [
            "Is beauty overrated or underrated?",
            "Tell me your thoughts on beauty.",
            "Have you ever wondered how beauty affects us?"
        ]
    },
    {
        key: [
            "food",
            "intelligence",
            "movie"
        ],
        phrase: [
            "Food is fascinating, isn't it?",
            "How do you feel about intelligence?",
            "Can you imagine life without food?"
        ]
    },
    {
        key: [
            "sleep",
            "food",
            "religion"
        ],
        phrase: [
            "Tell me your thoughts on food.",
            "Tell me your thoughts on sleep.",
            "Let's talk about food."
        ]
    },
    {
        key: [
            "intelligence"
        ],
        phrase: [
            "How do you feel about intelligence?",
            "Can you imagine life without intelligence?",
            "What do you think about intelligence?"
        ]
    },
    {
        key: [
            "sports"
        ],
        phrase: [
            "How do you feel about sports?",
            "What does sports mean to you?",
            "Let's talk about sports."
        ]
    },
    {
        key: [
            "sports",
            "game",
            "art"
        ],
        phrase: [
            "Tell me your thoughts on game.",
            "Let's talk about sports.",
            "Is game overrated or underrated?"
        ]
    },
    {
        key: [
            "emotion",
            "cat"
        ],
        phrase: [
            "Why is emotion important to you?",
            "Have you ever wondered how cat affects us?",
            "How do you feel about emotion?"
        ]
    },
    {
        key: [
            "money"
        ],
        phrase: [
            "Let's talk about money.",
            "Have you ever wondered how money affects us?",
            "Is money overrated or underrated?"
        ]
    },
    {
        key: [
            "language"
        ],
        phrase: [
            "Let's talk about language.",
            "What does language mean to you?",
            "Can you imagine life without language?"
        ]
    },
    {
        key: [
            "freedom",
            "nature"
        ],
        phrase: [
            "Let's talk about freedom.",
            "Nature is fascinating, isn't it?",
            "Let's talk about nature."
        ]
    },
    {
        key: [
            "robot",
            "intelligence"
        ],
        phrase: [
            "Is robot overrated or underrated?",
            "Intelligence is fascinating, isn't it?",
            "Tell me your thoughts on intelligence."
        ]
    },
    {
        key: [
            "religion"
        ],
        phrase: [
            "Can you imagine life without religion?",
            "Let's talk about religion.",
            "Have you ever wondered how religion affects us?"
        ]
    },
    {
        key: [
            "language",
            "life",
            "art"
        ],
        phrase: [
            "Is life overrated or underrated?",
            "Is art overrated or underrated?",
            "Let's talk about art."
        ]
    },
    {
        key: [
            "food"
        ],
        phrase: [
            "Food is fascinating, isn't it?",
            "Have you ever wondered how food affects us?",
            "Is food overrated or underrated?"
        ]
    },
    {
        key: [
            "code"
        ],
        phrase: [
            "Let's talk about code.",
            "Have you ever wondered how code affects us?",
            "Tell me your thoughts on code."
        ]
    },
    {
        key: [
            "computer",
            "religion",
            "game"
        ],
        phrase: [
            "What do you think about religion?",
            "Why is game important to you?",
            "Tell me your thoughts on computer."
        ]
    },
    {
        key: [
            "freedom"
        ],
        phrase: [
            "Have you ever wondered how freedom affects us?",
            "Freedom is fascinating, isn't it?",
            "Is freedom overrated or underrated?"
        ]
    },
    {
        key: [
            "friend",
            "internet"
        ],
        phrase: [
            "Friend is fascinating, isn't it?",
            "Internet is fascinating, isn't it?",
            "What do you think about friend?"
        ]
    },
    {
        key: [
            "science",
            "code",
            "love"
        ],
        phrase: [
            "What do you think about code?",
            "How do you feel about love?",
            "Tell me your thoughts on code."
        ]
    },
    {
        key: [
            "travel",
            "book",
            "work"
        ],
        phrase: [
            "What do you think about book?",
            "Let's talk about book.",
            "Is travel overrated or underrated?"
        ]
    },
    {
        key: [
            "religion"
        ],
        phrase: [
            "What do you think about religion?",
            "Tell me your thoughts on religion.",
            "Let's talk about religion."
        ]
    },
    {
        key: [
            "friend",
            "dream"
        ],
        phrase: [
            "What do you think about friend?",
            "What does dream mean to you?",
            "Let's talk about dream."
        ]
    },
    {
        key: [
            "future",
            "intelligence"
        ],
        phrase: [
            "How do you feel about intelligence?",
            "What does intelligence mean to you?",
            "Intelligence is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "happy"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "Tell me your thoughts on happy.",
            "Happy is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "intelligence",
            "movie"
        ],
        phrase: [
            "Why is movie important to you?",
            "Have you ever wondered how movie affects us?",
            "How do you feel about movie?"
        ]
    },
    {
        key: [
            "coffee",
            "internet",
            "freedom"
        ],
        phrase: [
            "Can you imagine life without freedom?",
            "Have you ever wondered how freedom affects us?",
            "What does internet mean to you?"
        ]
    },
    {
        key: [
            "freedom",
            "talk",
            "beauty"
        ],
        phrase: [
            "Can you imagine life without freedom?",
            "How do you feel about freedom?",
            "Tell me your thoughts on talk."
        ]
    },
    {
        key: [
            "sports"
        ],
        phrase: [
            "Can you imagine life without sports?",
            "What does sports mean to you?",
            "What do you think about sports?"
        ]
    },
    {
        key: [
            "robot",
            "truth",
            "money"
        ],
        phrase: [
            "How do you feel about robot?",
            "Money is fascinating, isn't it?",
            "Is money overrated or underrated?"
        ]
    },
    {
        key: [
            "exam",
            "love"
        ],
        phrase: [
            "Is exam overrated or underrated?",
            "What do you think about exam?",
            "Let's talk about exam."
        ]
    },
    {
        key: [
            "food"
        ],
        phrase: [
            "Can you imagine life without food?",
            "Have you ever wondered how food affects us?",
            "Is food overrated or underrated?"
        ]
    },
    {
        key: [
            "work"
        ],
        phrase: [
            "Can you imagine life without work?",
            "Why is work important to you?",
            "Work is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "love",
            "music"
        ],
        phrase: [
            "Can you imagine life without love?",
            "What does love mean to you?",
            "What do you think about music?"
        ]
    },
    {
        key: [
            "school",
            "movie"
        ],
        phrase: [
            "School is fascinating, isn't it?",
            "Is school overrated or underrated?",
            "Have you ever wondered how movie affects us?"
        ]
    },
    {
        key: [
            "politics",
            "science",
            "family"
        ],
        phrase: [
            "Is science overrated or underrated?",
            "What does science mean to you?",
            "Tell me your thoughts on family."
        ]
    },
    {
        key: [
            "happy"
        ],
        phrase: [
            "Happy is fascinating, isn't it?",
            "What do you think about happy?",
            "How do you feel about happy?"
        ]
    },
    {
        key: [
            "movie",
            "life",
            "crime"
        ],
        phrase: [
            "What do you think about life?",
            "Why is movie important to you?",
            "Tell me your thoughts on crime."
        ]
    },
    {
        key: [
            "robot",
            "family",
            "game"
        ],
        phrase: [
            "What does robot mean to you?",
            "Tell me your thoughts on robot.",
            "Tell me your thoughts on family."
        ]
    },
    {
        key: [
            "family"
        ],
        phrase: [
            "Let's talk about family.",
            "Have you ever wondered how family affects us?",
            "What do you think about family?"
        ]
    },
    {
        key: [
            "family"
        ],
        phrase: [
            "Why is family important to you?",
            "Let's talk about family.",
            "Family is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "nature",
            "freedom"
        ],
        phrase: [
            "Nature is fascinating, isn't it?",
            "Is freedom overrated or underrated?",
            "Tell me your thoughts on nature."
        ]
    },
    {
        key: [
            "sleep",
            "intelligence",
            "life"
        ],
        phrase: [
            "How do you feel about sleep?",
            "Is intelligence overrated or underrated?",
            "What do you think about sleep?"
        ]
    },
    {
        key: [
            "internet",
            "friend"
        ],
        phrase: [
            "Let's talk about internet.",
            "Can you imagine life without internet?",
            "Have you ever wondered how friend affects us?"
        ]
    },
    {
        key: [
            "cat",
            "sports"
        ],
        phrase: [
            "Let's talk about cat.",
            "Let's talk about sports.",
            "Is sports overrated or underrated?"
        ]
    },
    {
        key: [
            "happy",
            "intelligence"
        ],
        phrase: [
            "What do you think about happy?",
            "Tell me your thoughts on intelligence.",
            "What does happy mean to you?"
        ]
    },
    {
        key: [
            "freedom",
            "movie"
        ],
        phrase: [
            "Can you imagine life without freedom?",
            "What do you think about movie?",
            "Why is movie important to you?"
        ]
    },
    {
        key: [
            "science"
        ],
        phrase: [
            "How do you feel about science?",
            "Is science overrated or underrated?",
            "Why is science important to you?"
        ]
    },
    {
        key: [
            "music"
        ],
        phrase: [
            "What do you think about music?",
            "Music is fascinating, isn't it?",
            "Why is music important to you?"
        ]
    },
    {
        key: [
            "language",
            "talk",
            "coffee"
        ],
        phrase: [
            "Let's talk about language.",
            "Can you imagine life without coffee?",
            "What does talk mean to you?"
        ]
    },
    {
        key: [
            "computer"
        ],
        phrase: [
            "Why is computer important to you?",
            "Have you ever wondered how computer affects us?",
            "How do you feel about computer?"
        ]
    },
    {
        key: [
            "future",
            "war"
        ],
        phrase: [
            "Tell me your thoughts on future.",
            "How do you feel about war?",
            "Can you imagine life without war?"
        ]
    },
    {
        key: [
            "dream",
            "religion",
            "family"
        ],
        phrase: [
            "What do you think about religion?",
            "What do you think about dream?",
            "Let's talk about religion."
        ]
    },
    {
        key: [
            "friend",
            "science"
        ],
        phrase: [
            "What do you think about friend?",
            "Science is fascinating, isn't it?",
            "Can you imagine life without science?"
        ]
    },
    {
        key: [
            "work",
            "exam",
            "food"
        ],
        phrase: [
            "Tell me your thoughts on food.",
            "Is food overrated or underrated?",
            "Why is work important to you?"
        ]
    },
    {
        key: [
            "dog",
            "religion"
        ],
        phrase: [
            "What do you think about religion?",
            "Have you ever wondered how religion affects us?",
            "Let's talk about dog."
        ]
    },
    {
        key: [
            "health"
        ],
        phrase: [
            "What does health mean to you?",
            "Health is fascinating, isn't it?",
            "Can you imagine life without health?"
        ]
    },
    {
        key: [
            "crime",
            "sad"
        ],
        phrase: [
            "Can you imagine life without sad?",
            "Tell me your thoughts on crime.",
            "What do you think about crime?"
        ]
    },
    {
        key: [
            "weather",
            "sleep",
            "sad"
        ],
        phrase: [
            "Why is weather important to you?",
            "How do you feel about sleep?",
            "Weather is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "sad"
        ],
        phrase: [
            "Why is sad important to you?",
            "Tell me your thoughts on sad.",
            "Have you ever wondered how sad affects us?"
        ]
    },
    {
        key: [
            "politics"
        ],
        phrase: [
            "Why is politics important to you?",
            "Can you imagine life without politics?",
            "What do you think about politics?"
        ]
    },
    {
        key: [
            "holiday"
        ],
        phrase: [
            "Can you imagine life without holiday?",
            "What do you think about holiday?",
            "Tell me your thoughts on holiday."
        ]
    },
    {
        key: [
            "code"
        ],
        phrase: [
            "Have you ever wondered how code affects us?",
            "What does code mean to you?",
            "Why is code important to you?"
        ]
    },
    {
        key: [
            "sleep",
            "family",
            "war"
        ],
        phrase: [
            "How do you feel about sleep?",
            "Tell me your thoughts on sleep.",
            "Is family overrated or underrated?"
        ]
    },
    {
        key: [
            "movie",
            "language"
        ],
        phrase: [
            "What do you think about movie?",
            "What do you think about language?",
            "Why is language important to you?"
        ]
    },
    {
        key: [
            "movie"
        ],
        phrase: [
            "Let's talk about movie.",
            "Can you imagine life without movie?",
            "Tell me your thoughts on movie."
        ]
    },
    {
        key: [
            "city"
        ],
        phrase: [
            "Tell me your thoughts on city.",
            "Have you ever wondered how city affects us?",
            "What does city mean to you?"
        ]
    },
    {
        key: [
            "school",
            "language",
            "book"
        ],
        phrase: [
            "Let's talk about book.",
            "Let's talk about language.",
            "Book is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "school"
        ],
        phrase: [
            "How do you feel about school?",
            "Is school overrated or underrated?",
            "Let's talk about school."
        ]
    },
    {
        key: [
            "fear",
            "AI"
        ],
        phrase: [
            "How do you feel about fear?",
            "Why is fear important to you?",
            "What do you think about AI?"
        ]
    },
    {
        key: [
            "internet",
            "beauty"
        ],
        phrase: [
            "How do you feel about internet?",
            "Can you imagine life without internet?",
            "What does beauty mean to you?"
        ]
    },
    {
        key: [
            "coffee"
        ],
        phrase: [
            "Can you imagine life without coffee?",
            "Is coffee overrated or underrated?",
            "Tell me your thoughts on coffee."
        ]
    },
    {
        key: [
            "technology",
            "life"
        ],
        phrase: [
            "Why is technology important to you?",
            "How do you feel about life?",
            "What do you think about life?"
        ]
    },
    {
        key: [
            "crime"
        ],
        phrase: [
            "Can you imagine life without crime?",
            "Let's talk about crime.",
            "What does crime mean to you?"
        ]
    },
    {
        key: [
            "happy",
            "code",
            "money"
        ],
        phrase: [
            "Is money overrated or underrated?",
            "How do you feel about code?",
            "Happy is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "science"
        ],
        phrase: [
            "How do you feel about science?",
            "Can you imagine life without science?",
            "Let's talk about science."
        ]
    },
    {
        key: [
            "sports",
            "religion"
        ],
        phrase: [
            "What do you think about religion?",
            "Why is sports important to you?",
            "What does religion mean to you?"
        ]
    },
    {
        key: [
            "robot"
        ],
        phrase: [
            "How do you feel about robot?",
            "What does robot mean to you?",
            "Have you ever wondered how robot affects us?"
        ]
    },
    {
        key: [
            "city",
            "family"
        ],
        phrase: [
            "Let's talk about family.",
            "What does family mean to you?",
            "Have you ever wondered how city affects us?"
        ]
    },
    {
        key: [
            "crime",
            "freedom",
            "future"
        ],
        phrase: [
            "Have you ever wondered how freedom affects us?",
            "Tell me your thoughts on future.",
            "What do you think about crime?"
        ]
    },
    {
        key: [
            "friend"
        ],
        phrase: [
            "What do you think about friend?",
            "What does friend mean to you?",
            "How do you feel about friend?"
        ]
    },
    {
        key: [
            "art",
            "war",
            "city"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "City is fascinating, isn't it?",
            "What does war mean to you?"
        ]
    },
    {
        key: [
            "history"
        ],
        phrase: [
            "What does history mean to you?",
            "Is history overrated or underrated?",
            "Have you ever wondered how history affects us?"
        ]
    },
    {
        key: [
            "dog",
            "sleep"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "What do you think about sleep?",
            "Is sleep overrated or underrated?"
        ]
    },
    {
        key: [
            "internet",
            "art"
        ],
        phrase: [
            "Internet is fascinating, isn't it?",
            "Tell me your thoughts on art.",
            "How do you feel about internet?"
        ]
    },
    {
        key: [
            "travel",
            "dog",
            "food"
        ],
        phrase: [
            "Food is fascinating, isn't it?",
            "Tell me your thoughts on food.",
            "Is travel overrated or underrated?"
        ]
    },
    {
        key: [
            "dog",
            "religion",
            "friend"
        ],
        phrase: [
            "What do you think about friend?",
            "Have you ever wondered how religion affects us?",
            "Tell me your thoughts on friend."
        ]
    },
    {
        key: [
            "code"
        ],
        phrase: [
            "Let's talk about code.",
            "Code is fascinating, isn't it?",
            "Why is code important to you?"
        ]
    },
    {
        key: [
            "computer"
        ],
        phrase: [
            "Is computer overrated or underrated?",
            "Computer is fascinating, isn't it?",
            "What do you think about computer?"
        ]
    },
    {
        key: [
            "love"
        ],
        phrase: [
            "Why is love important to you?",
            "Is love overrated or underrated?",
            "Let's talk about love."
        ]
    },
    {
        key: [
            "emotion",
            "health"
        ],
        phrase: [
            "Why is emotion important to you?",
            "What does emotion mean to you?",
            "What do you think about health?"
        ]
    },
    {
        key: [
            "money",
            "war"
        ],
        phrase: [
            "Have you ever wondered how money affects us?",
            "What does money mean to you?",
            "How do you feel about war?"
        ]
    },
    {
        key: [
            "cat",
            "dream"
        ],
        phrase: [
            "Let's talk about cat.",
            "What do you think about dream?",
            "Have you ever wondered how cat affects us?"
        ]
    },
    {
        key: [
            "movie",
            "happy"
        ],
        phrase: [
            "Why is movie important to you?",
            "Tell me your thoughts on happy.",
            "Let's talk about movie."
        ]
    },
    {
        key: [
            "game",
            "politics"
        ],
        phrase: [
            "Tell me your thoughts on game.",
            "Is game overrated or underrated?",
            "Is politics overrated or underrated?"
        ]
    },
    {
        key: [
            "city"
        ],
        phrase: [
            "Why is city important to you?",
            "Is city overrated or underrated?",
            "How do you feel about city?"
        ]
    },
    {
        key: [
            "book",
            "life"
        ],
        phrase: [
            "What do you think about book?",
            "Let's talk about book.",
            "Tell me your thoughts on book."
        ]
    },
    {
        key: [
            "war",
            "family"
        ],
        phrase: [
            "Is family overrated or underrated?",
            "How do you feel about war?",
            "Why is war important to you?"
        ]
    },
    {
        key: [
            "weather"
        ],
        phrase: [
            "Can you imagine life without weather?",
            "Let's talk about weather.",
            "Why is weather important to you?"
        ]
    },
    {
        key: [
            "talk"
        ],
        phrase: [
            "What do you think about talk?",
            "Let's talk about talk.",
            "Why is talk important to you?"
        ]
    },
    {
        key: [
            "future"
        ],
        phrase: [
            "Have you ever wondered how future affects us?",
            "Is future overrated or underrated?",
            "Why is future important to you?"
        ]
    },
    {
        key: [
            "cat",
            "dream"
        ],
        phrase: [
            "What do you think about cat?",
            "Dream is fascinating, isn't it?",
            "Tell me your thoughts on cat."
        ]
    },
    {
        key: [
            "holiday",
            "exam",
            "movie"
        ],
        phrase: [
            "What do you think about movie?",
            "How do you feel about holiday?",
            "Tell me your thoughts on holiday."
        ]
    },
    {
        key: [
            "technology",
            "money"
        ],
        phrase: [
            "Let's talk about money.",
            "Tell me your thoughts on technology.",
            "How do you feel about money?"
        ]
    },
    {
        key: [
            "intelligence",
            "book"
        ],
        phrase: [
            "How do you feel about intelligence?",
            "What does intelligence mean to you?",
            "How do you feel about book?"
        ]
    },
    {
        key: [
            "future",
            "religion"
        ],
        phrase: [
            "What does religion mean to you?",
            "Have you ever wondered how future affects us?",
            "Why is religion important to you?"
        ]
    },
    {
        key: [
            "life",
            "technology"
        ],
        phrase: [
            "How do you feel about life?",
            "Is technology overrated or underrated?",
            "Tell me your thoughts on technology."
        ]
    },
    {
        key: [
            "science"
        ],
        phrase: [
            "Have you ever wondered how science affects us?",
            "Tell me your thoughts on science.",
            "What does science mean to you?"
        ]
    },
    {
        key: [
            "truth",
            "code",
            "beauty"
        ],
        phrase: [
            "What does truth mean to you?",
            "How do you feel about code?",
            "Can you imagine life without code?"
        ]
    },
    {
        key: [
            "death",
            "exam"
        ],
        phrase: [
            "Is exam overrated or underrated?",
            "Why is exam important to you?",
            "How do you feel about death?"
        ]
    },
    {
        key: [
            "holiday",
            "internet",
            "code"
        ],
        phrase: [
            "What does internet mean to you?",
            "What do you think about code?",
            "Let's talk about holiday."
        ]
    },
    {
        key: [
            "technology",
            "friend"
        ],
        phrase: [
            "Why is technology important to you?",
            "Is technology overrated or underrated?",
            "Can you imagine life without friend?"
        ]
    },
    {
        key: [
            "exam",
            "game"
        ],
        phrase: [
            "What do you think about exam?",
            "How do you feel about exam?",
            "How do you feel about game?"
        ]
    },
    {
        key: [
            "dream",
            "money",
            "freedom"
        ],
        phrase: [
            "What do you think about dream?",
            "Have you ever wondered how freedom affects us?",
            "How do you feel about freedom?"
        ]
    },
    {
        key: [
            "talk",
            "emotion",
            "history"
        ],
        phrase: [
            "Why is emotion important to you?",
            "Tell me your thoughts on history.",
            "Tell me your thoughts on talk."
        ]
    },
    {
        key: [
            "health",
            "dog",
            "truth"
        ],
        phrase: [
            "What does dog mean to you?",
            "Let's talk about health.",
            "Tell me your thoughts on truth."
        ]
    },
    {
        key: [
            "school"
        ],
        phrase: [
            "What do you think about school?",
            "Let's talk about school.",
            "Is school overrated or underrated?"
        ]
    },
    {
        key: [
            "freedom",
            "coffee"
        ],
        phrase: [
            "Coffee is fascinating, isn't it?",
            "Have you ever wondered how freedom affects us?",
            "How do you feel about freedom?"
        ]
    },
    {
        key: [
            "food",
            "sports",
            "friend"
        ],
        phrase: [
            "Food is fascinating, isn't it?",
            "Why is sports important to you?",
            "Let's talk about food."
        ]
    },
    {
        key: [
            "money"
        ],
        phrase: [
            "What does money mean to you?",
            "Is money overrated or underrated?",
            "Money is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "love",
            "death",
            "future"
        ],
        phrase: [
            "Can you imagine life without love?",
            "How do you feel about death?",
            "Why is love important to you?"
        ]
    },
    {
        key: [
            "exam"
        ],
        phrase: [
            "What does exam mean to you?",
            "Tell me your thoughts on exam.",
            "What do you think about exam?"
        ]
    },
    {
        key: [
            "robot",
            "talk"
        ],
        phrase: [
            "Tell me your thoughts on talk.",
            "Can you imagine life without talk?",
            "Have you ever wondered how talk affects us?"
        ]
    },
    {
        key: [
            "sleep",
            "AI"
        ],
        phrase: [
            "How do you feel about sleep?",
            "What does sleep mean to you?",
            "Let's talk about sleep."
        ]
    },
    {
        key: [
            "movie"
        ],
        phrase: [
            "Have you ever wondered how movie affects us?",
            "How do you feel about movie?",
            "Why is movie important to you?"
        ]
    },
    {
        key: [
            "happy",
            "work",
            "science"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "Is science overrated or underrated?",
            "Is work overrated or underrated?"
        ]
    },
    {
        key: [
            "nature",
            "history",
            "exam"
        ],
        phrase: [
            "Tell me your thoughts on exam.",
            "Let's talk about exam.",
            "How do you feel about history?"
        ]
    },
    {
        key: [
            "intelligence"
        ],
        phrase: [
            "Intelligence is fascinating, isn't it?",
            "Is intelligence overrated or underrated?",
            "Have you ever wondered how intelligence affects us?"
        ]
    },
    {
        key: [
            "cat"
        ],
        phrase: [
            "Let's talk about cat.",
            "Tell me your thoughts on cat.",
            "Why is cat important to you?"
        ]
    },
    {
        key: [
            "nature",
            "travel",
            "dog"
        ],
        phrase: [
            "What does travel mean to you?",
            "Can you imagine life without nature?",
            "Why is dog important to you?"
        ]
    },
    {
        key: [
            "game",
            "language",
            "beauty"
        ],
        phrase: [
            "How do you feel about language?",
            "Is game overrated or underrated?",
            "What do you think about game?"
        ]
    },
    {
        key: [
            "holiday"
        ],
        phrase: [
            "Holiday is fascinating, isn't it?",
            "Let's talk about holiday.",
            "Tell me your thoughts on holiday."
        ]
    },
    {
        key: [
            "book",
            "science"
        ],
        phrase: [
            "Is science overrated or underrated?",
            "Let's talk about book.",
            "Book is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "death"
        ],
        phrase: [
            "Let's talk about death.",
            "Have you ever wondered how death affects us?",
            "Is death overrated or underrated?"
        ]
    },
    {
        key: [
            "talk",
            "travel"
        ],
        phrase: [
            "What do you think about talk?",
            "Why is talk important to you?",
            "Talk is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "book",
            "happy",
            "weather"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "Let's talk about book.",
            "Weather is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "technology",
            "nature",
            "school"
        ],
        phrase: [
            "Why is nature important to you?",
            "Tell me your thoughts on technology.",
            "Let's talk about school."
        ]
    },
    {
        key: [
            "food",
            "travel",
            "beauty"
        ],
        phrase: [
            "Let's talk about food.",
            "Why is travel important to you?",
            "Can you imagine life without food?"
        ]
    },
    {
        key: [
            "exam"
        ],
        phrase: [
            "What do you think about exam?",
            "Why is exam important to you?",
            "Tell me your thoughts on exam."
        ]
    },
    {
        key: [
            "art",
            "crime"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "Is art overrated or underrated?",
            "What do you think about crime?"
        ]
    },
    {
        key: [
            "language"
        ],
        phrase: [
            "Let's talk about language.",
            "What does language mean to you?",
            "Is language overrated or underrated?"
        ]
    },
    {
        key: [
            "internet"
        ],
        phrase: [
            "Internet is fascinating, isn't it?",
            "Is internet overrated or underrated?",
            "Tell me your thoughts on internet."
        ]
    },
    {
        key: [
            "science",
            "book"
        ],
        phrase: [
            "Let's talk about book.",
            "Science is fascinating, isn't it?",
            "Tell me your thoughts on book."
        ]
    },
    {
        key: [
            "computer",
            "happy",
            "book"
        ],
        phrase: [
            "What do you think about happy?",
            "Tell me your thoughts on computer.",
            "Tell me your thoughts on book."
        ]
    },
    {
        key: [
            "movie",
            "beauty"
        ],
        phrase: [
            "What do you think about movie?",
            "Beauty is fascinating, isn't it?",
            "What does beauty mean to you?"
        ]
    },
    {
        key: [
            "truth",
            "work"
        ],
        phrase: [
            "Tell me your thoughts on truth.",
            "Can you imagine life without truth?",
            "Can you imagine life without work?"
        ]
    },
    {
        key: [
            "freedom",
            "love"
        ],
        phrase: [
            "Why is love important to you?",
            "What do you think about freedom?",
            "What does freedom mean to you?"
        ]
    },
    {
        key: [
            "school"
        ],
        phrase: [
            "What do you think about school?",
            "Have you ever wondered how school affects us?",
            "Let's talk about school."
        ]
    },
    {
        key: [
            "book",
            "fear",
            "happy"
        ],
        phrase: [
            "What do you think about fear?",
            "Why is fear important to you?",
            "Have you ever wondered how happy affects us?"
        ]
    },
    {
        key: [
            "technology",
            "life",
            "happy"
        ],
        phrase: [
            "Why is technology important to you?",
            "How do you feel about life?",
            "What do you think about happy?"
        ]
    },
    {
        key: [
            "money",
            "music",
            "health"
        ],
        phrase: [
            "Why is health important to you?",
            "What does money mean to you?",
            "Tell me your thoughts on music."
        ]
    },
    {
        key: [
            "AI"
        ],
        phrase: [
            "Tell me your thoughts on AI.",
            "Why is AI important to you?",
            "Have you ever wondered how AI affects us?"
        ]
    },
    {
        key: [
            "dog"
        ],
        phrase: [
            "What do you think about dog?",
            "How do you feel about dog?",
            "What does dog mean to you?"
        ]
    },
    {
        key: [
            "future",
            "city",
            "religion"
        ],
        phrase: [
            "What does religion mean to you?",
            "Is city overrated or underrated?",
            "Have you ever wondered how future affects us?"
        ]
    },
    {
        key: [
            "death"
        ],
        phrase: [
            "Tell me your thoughts on death.",
            "Let's talk about death.",
            "Have you ever wondered how death affects us?"
        ]
    },
    {
        key: [
            "coffee",
            "sleep",
            "technology"
        ],
        phrase: [
            "Is coffee overrated or underrated?",
            "Have you ever wondered how technology affects us?",
            "How do you feel about coffee?"
        ]
    },
    {
        key: [
            "happy",
            "coffee",
            "emotion"
        ],
        phrase: [
            "Why is emotion important to you?",
            "Can you imagine life without coffee?",
            "Tell me your thoughts on happy."
        ]
    },
    {
        key: [
            "holiday",
            "love",
            "death"
        ],
        phrase: [
            "Death is fascinating, isn't it?",
            "Let's talk about holiday.",
            "Is love overrated or underrated?"
        ]
    },
    {
        key: [
            "politics",
            "love"
        ],
        phrase: [
            "What do you think about politics?",
            "What does love mean to you?",
            "Politics is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "holiday",
            "book"
        ],
        phrase: [
            "Book is fascinating, isn't it?",
            "Can you imagine life without holiday?",
            "Can you imagine life without book?"
        ]
    },
    {
        key: [
            "book",
            "AI",
            "art"
        ],
        phrase: [
            "What do you think about book?",
            "Tell me your thoughts on art.",
            "Is art overrated or underrated?"
        ]
    },
    {
        key: [
            "music"
        ],
        phrase: [
            "Let's talk about music.",
            "What do you think about music?",
            "Why is music important to you?"
        ]
    },
    {
        key: [
            "truth"
        ],
        phrase: [
            "Tell me your thoughts on truth.",
            "Let's talk about truth.",
            "Can you imagine life without truth?"
        ]
    },
    {
        key: [
            "holiday",
            "death",
            "coffee"
        ],
        phrase: [
            "How do you feel about holiday?",
            "How do you feel about death?",
            "Let's talk about holiday."
        ]
    },
    {
        key: [
            "art"
        ],
        phrase: [
            "What do you think about art?",
            "Art is fascinating, isn't it?",
            "Is art overrated or underrated?"
        ]
    },
    {
        key: [
            "food"
        ],
        phrase: [
            "Tell me your thoughts on food.",
            "Food is fascinating, isn't it?",
            "Can you imagine life without food?"
        ]
    },
    {
        key: [
            "fear",
            "crime"
        ],
        phrase: [
            "Let's talk about crime.",
            "Why is crime important to you?",
            "Fear is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "history"
        ],
        phrase: [
            "History is fascinating, isn't it?",
            "Have you ever wondered how history affects us?",
            "What do you think about history?"
        ]
    },
    {
        key: [
            "art",
            "exam",
            "intelligence"
        ],
        phrase: [
            "Tell me your thoughts on exam.",
            "What do you think about exam?",
            "Let's talk about exam."
        ]
    },
    {
        key: [
            "exam",
            "work"
        ],
        phrase: [
            "Have you ever wondered how exam affects us?",
            "Let's talk about exam.",
            "How do you feel about exam?"
        ]
    },
    {
        key: [
            "religion",
            "future",
            "robot"
        ],
        phrase: [
            "How do you feel about robot?",
            "Let's talk about religion.",
            "Have you ever wondered how future affects us?"
        ]
    },
    {
        key: [
            "friend"
        ],
        phrase: [
            "Friend is fascinating, isn't it?",
            "Why is friend important to you?",
            "Have you ever wondered how friend affects us?"
        ]
    },
    {
        key: [
            "beauty",
            "health",
            "intelligence"
        ],
        phrase: [
            "Why is health important to you?",
            "Beauty is fascinating, isn't it?",
            "How do you feel about intelligence?"
        ]
    },
    {
        key: [
            "music",
            "life",
            "internet"
        ],
        phrase: [
            "How do you feel about internet?",
            "Why is internet important to you?",
            "Tell me your thoughts on music."
        ]
    },
    {
        key: [
            "game",
            "city",
            "school"
        ],
        phrase: [
            "Tell me your thoughts on city.",
            "City is fascinating, isn't it?",
            "What do you think about game?"
        ]
    },
    {
        key: [
            "school",
            "future"
        ],
        phrase: [
            "Why is future important to you?",
            "Tell me your thoughts on future.",
            "Have you ever wondered how future affects us?"
        ]
    },
    {
        key: [
            "technology"
        ],
        phrase: [
            "Is technology overrated or underrated?",
            "Why is technology important to you?",
            "Technology is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "language",
            "robot",
            "family"
        ],
        phrase: [
            "What does robot mean to you?",
            "What do you think about language?",
            "What does family mean to you?"
        ]
    },
    {
        key: [
            "emotion",
            "internet"
        ],
        phrase: [
            "Let's talk about emotion.",
            "What does internet mean to you?",
            "What do you think about emotion?"
        ]
    },
    {
        key: [
            "technology",
            "weather"
        ],
        phrase: [
            "Why is weather important to you?",
            "Can you imagine life without weather?",
            "What does weather mean to you?"
        ]
    },
    {
        key: [
            "technology"
        ],
        phrase: [
            "Is technology overrated or underrated?",
            "Technology is fascinating, isn't it?",
            "What do you think about technology?"
        ]
    },
    {
        key: [
            "science"
        ],
        phrase: [
            "Can you imagine life without science?",
            "Science is fascinating, isn't it?",
            "Why is science important to you?"
        ]
    },
    {
        key: [
            "technology",
            "weather"
        ],
        phrase: [
            "Why is technology important to you?",
            "How do you feel about weather?",
            "Is technology overrated or underrated?"
        ]
    },
    {
        key: [
            "beauty",
            "religion"
        ],
        phrase: [
            "Can you imagine life without religion?",
            "What do you think about religion?",
            "Have you ever wondered how religion affects us?"
        ]
    },
    {
        key: [
            "game"
        ],
        phrase: [
            "Game is fascinating, isn't it?",
            "Is game overrated or underrated?",
            "Let's talk about game."
        ]
    },
    {
        key: [
            "emotion",
            "language",
            "robot"
        ],
        phrase: [
            "Why is emotion important to you?",
            "How do you feel about robot?",
            "How do you feel about language?"
        ]
    },
    {
        key: [
            "nature",
            "family"
        ],
        phrase: [
            "Can you imagine life without nature?",
            "Tell me your thoughts on family.",
            "Is nature overrated or underrated?"
        ]
    },
    {
        key: [
            "sad",
            "health",
            "robot"
        ],
        phrase: [
            "Why is health important to you?",
            "What does robot mean to you?",
            "What does health mean to you?"
        ]
    },
    {
        key: [
            "talk",
            "religion"
        ],
        phrase: [
            "Let's talk about religion.",
            "What does religion mean to you?",
            "Talk is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "death"
        ],
        phrase: [
            "How do you feel about death?",
            "Tell me your thoughts on death.",
            "What do you think about death?"
        ]
    },
    {
        key: [
            "dream"
        ],
        phrase: [
            "Let's talk about dream.",
            "What does dream mean to you?",
            "Why is dream important to you?"
        ]
    },
    {
        key: [
            "health"
        ],
        phrase: [
            "Is health overrated or underrated?",
            "Health is fascinating, isn't it?",
            "Can you imagine life without health?"
        ]
    },
    {
        key: [
            "school",
            "work"
        ],
        phrase: [
            "What does school mean to you?",
            "School is fascinating, isn't it?",
            "What does work mean to you?"
        ]
    },
    {
        key: [
            "emotion",
            "science",
            "dog"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "Is science overrated or underrated?",
            "What do you think about emotion?"
        ]
    },
    {
        key: [
            "intelligence",
            "money"
        ],
        phrase: [
            "Tell me your thoughts on intelligence.",
            "Can you imagine life without money?",
            "How do you feel about money?"
        ]
    },
    {
        key: [
            "family"
        ],
        phrase: [
            "Let's talk about family.",
            "Have you ever wondered how family affects us?",
            "Why is family important to you?"
        ]
    },
    {
        key: [
            "school"
        ],
        phrase: [
            "What do you think about school?",
            "Why is school important to you?",
            "Tell me your thoughts on school."
        ]
    },
    {
        key: [
            "nature",
            "movie",
            "technology"
        ],
        phrase: [
            "Why is technology important to you?",
            "Technology is fascinating, isn't it?",
            "Let's talk about nature."
        ]
    },
    {
        key: [
            "family",
            "truth",
            "intelligence"
        ],
        phrase: [
            "Truth is fascinating, isn't it?",
            "Have you ever wondered how truth affects us?",
            "What does family mean to you?"
        ]
    },
    {
        key: [
            "art"
        ],
        phrase: [
            "Why is art important to you?",
            "Can you imagine life without art?",
            "Is art overrated or underrated?"
        ]
    },
    {
        key: [
            "sad"
        ],
        phrase: [
            "How do you feel about sad?",
            "Is sad overrated or underrated?",
            "Have you ever wondered how sad affects us?"
        ]
    },
    {
        key: [
            "AI"
        ],
        phrase: [
            "Tell me your thoughts on AI.",
            "What does AI mean to you?",
            "Ai is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "music"
        ],
        phrase: [
            "Why is music important to you?",
            "Can you imagine life without music?",
            "Have you ever wondered how music affects us?"
        ]
    },
    {
        key: [
            "AI",
            "religion",
            "health"
        ],
        phrase: [
            "Can you imagine life without AI?",
            "Let's talk about health.",
            "What does health mean to you?"
        ]
    },
    {
        key: [
            "cat",
            "school",
            "friend"
        ],
        phrase: [
            "What does cat mean to you?",
            "How do you feel about friend?",
            "What do you think about cat?"
        ]
    },
    {
        key: [
            "fear",
            "crime"
        ],
        phrase: [
            "Let's talk about crime.",
            "Why is crime important to you?",
            "Fear is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "travel",
            "movie"
        ],
        phrase: [
            "What does travel mean to you?",
            "What do you think about movie?",
            "How do you feel about movie?"
        ]
    },
    {
        key: [
            "internet"
        ],
        phrase: [
            "Is internet overrated or underrated?",
            "How do you feel about internet?",
            "Why is internet important to you?"
        ]
    },
    {
        key: [
            "music",
            "movie",
            "technology"
        ],
        phrase: [
            "Why is technology important to you?",
            "Movie is fascinating, isn't it?",
            "Tell me your thoughts on technology."
        ]
    },
    {
        key: [
            "code",
            "science",
            "school"
        ],
        phrase: [
            "Can you imagine life without school?",
            "School is fascinating, isn't it?",
            "Is code overrated or underrated?"
        ]
    },
    {
        key: [
            "movie",
            "weather",
            "school"
        ],
        phrase: [
            "How do you feel about weather?",
            "Why is movie important to you?",
            "Weather is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "intelligence",
            "health",
            "politics"
        ],
        phrase: [
            "What does politics mean to you?",
            "Is intelligence overrated or underrated?",
            "Intelligence is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "coffee",
            "cat"
        ],
        phrase: [
            "Tell me your thoughts on coffee.",
            "Have you ever wondered how cat affects us?",
            "Can you imagine life without coffee?"
        ]
    },
    {
        key: [
            "music"
        ],
        phrase: [
            "Music is fascinating, isn't it?",
            "Can you imagine life without music?",
            "Is music overrated or underrated?"
        ]
    },
    {
        key: [
            "death"
        ],
        phrase: [
            "What does death mean to you?",
            "Death is fascinating, isn't it?",
            "Can you imagine life without death?"
        ]
    },
    {
        key: [
            "exam",
            "beauty"
        ],
        phrase: [
            "Why is exam important to you?",
            "Beauty is fascinating, isn't it?",
            "Can you imagine life without exam?"
        ]
    },
    {
        key: [
            "happy",
            "work"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "Can you imagine life without happy?",
            "What does work mean to you?"
        ]
    },
    {
        key: [
            "life",
            "exam"
        ],
        phrase: [
            "Have you ever wondered how exam affects us?",
            "Life is fascinating, isn't it?",
            "Tell me your thoughts on exam."
        ]
    },
    {
        key: [
            "friend"
        ],
        phrase: [
            "What does friend mean to you?",
            "Have you ever wondered how friend affects us?",
            "Why is friend important to you?"
        ]
    },
    {
        key: [
            "AI"
        ],
        phrase: [
            "Tell me your thoughts on AI.",
            "Why is AI important to you?",
            "Is AI overrated or underrated?"
        ]
    },
    {
        key: [
            "sports"
        ],
        phrase: [
            "Have you ever wondered how sports affects us?",
            "How do you feel about sports?",
            "Is sports overrated or underrated?"
        ]
    },
    {
        key: [
            "cat",
            "history"
        ],
        phrase: [
            "Have you ever wondered how cat affects us?",
            "What does cat mean to you?",
            "How do you feel about history?"
        ]
    },
    {
        key: [
            "travel"
        ],
        phrase: [
            "Travel is fascinating, isn't it?",
            "Can you imagine life without travel?",
            "Is travel overrated or underrated?"
        ]
    },
    {
        key: [
            "politics",
            "weather",
            "emotion"
        ],
        phrase: [
            "Let's talk about emotion.",
            "Have you ever wondered how politics affects us?",
            "Can you imagine life without emotion?"
        ]
    },
    {
        key: [
            "cat"
        ],
        phrase: [
            "Is cat overrated or underrated?",
            "Can you imagine life without cat?",
            "Why is cat important to you?"
        ]
    },
    {
        key: [
            "holiday",
            "city",
            "emotion"
        ],
        phrase: [
            "How do you feel about holiday?",
            "What does emotion mean to you?",
            "Is city overrated or underrated?"
        ]
    },
    {
        key: [
            "talk",
            "emotion"
        ],
        phrase: [
            "Can you imagine life without emotion?",
            "Is talk overrated or underrated?",
            "Have you ever wondered how talk affects us?"
        ]
    },
    {
        key: [
            "cat"
        ],
        phrase: [
            "Is cat overrated or underrated?",
            "How do you feel about cat?",
            "What do you think about cat?"
        ]
    },
    {
        key: [
            "dog",
            "talk"
        ],
        phrase: [
            "Tell me your thoughts on talk.",
            "Dog is fascinating, isn't it?",
            "What do you think about dog?"
        ]
    },
    {
        key: [
            "crime"
        ],
        phrase: [
            "Let's talk about crime.",
            "Why is crime important to you?",
            "Have you ever wondered how crime affects us?"
        ]
    },
    {
        key: [
            "school",
            "crime"
        ],
        phrase: [
            "What do you think about crime?",
            "How do you feel about school?",
            "What does crime mean to you?"
        ]
    },
    {
        key: [
            "truth"
        ],
        phrase: [
            "Have you ever wondered how truth affects us?",
            "Let's talk about truth.",
            "Why is truth important to you?"
        ]
    },
    {
        key: [
            "dog",
            "holiday",
            "life"
        ],
        phrase: [
            "How do you feel about holiday?",
            "How do you feel about life?",
            "Let's talk about holiday."
        ]
    },
    {
        key: [
            "school",
            "coffee"
        ],
        phrase: [
            "Is coffee overrated or underrated?",
            "Tell me your thoughts on coffee.",
            "Can you imagine life without coffee?"
        ]
    },
    {
        key: [
            "emotion"
        ],
        phrase: [
            "Why is emotion important to you?",
            "How do you feel about emotion?",
            "What do you think about emotion?"
        ]
    },
    {
        key: [
            "love",
            "war",
            "history"
        ],
        phrase: [
            "What do you think about war?",
            "How do you feel about love?",
            "Let's talk about war."
        ]
    },
    {
        key: [
            "sleep"
        ],
        phrase: [
            "Have you ever wondered how sleep affects us?",
            "Tell me your thoughts on sleep.",
            "What do you think about sleep?"
        ]
    },
    {
        key: [
            "life",
            "happy",
            "language"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "How do you feel about life?",
            "What do you think about happy?"
        ]
    },
    {
        key: [
            "dog",
            "nature"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "Tell me your thoughts on nature.",
            "What do you think about dog?"
        ]
    },
    {
        key: [
            "game",
            "robot"
        ],
        phrase: [
            "What do you think about robot?",
            "Is robot overrated or underrated?",
            "What do you think about game?"
        ]
    },
    {
        key: [
            "health",
            "history"
        ],
        phrase: [
            "History is fascinating, isn't it?",
            "Can you imagine life without history?",
            "Tell me your thoughts on health."
        ]
    },
    {
        key: [
            "love",
            "war"
        ],
        phrase: [
            "What do you think about war?",
            "Have you ever wondered how love affects us?",
            "Why is war important to you?"
        ]
    },
    {
        key: [
            "fear",
            "exam",
            "death"
        ],
        phrase: [
            "Have you ever wondered how exam affects us?",
            "Is exam overrated or underrated?",
            "Why is death important to you?"
        ]
    },
    {
        key: [
            "nature",
            "future",
            "music"
        ],
        phrase: [
            "Why is future important to you?",
            "Nature is fascinating, isn't it?",
            "Music is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "game"
        ],
        phrase: [
            "What does game mean to you?",
            "Is game overrated or underrated?",
            "Can you imagine life without game?"
        ]
    },
    {
        key: [
            "technology"
        ],
        phrase: [
            "Is technology overrated or underrated?",
            "Technology is fascinating, isn't it?",
            "Can you imagine life without technology?"
        ]
    },
    {
        key: [
            "love",
            "friend",
            "coffee"
        ],
        phrase: [
            "What do you think about friend?",
            "Is coffee overrated or underrated?",
            "Tell me your thoughts on friend."
        ]
    },
    {
        key: [
            "politics",
            "beauty"
        ],
        phrase: [
            "Tell me your thoughts on politics.",
            "What does politics mean to you?",
            "Why is politics important to you?"
        ]
    },
    {
        key: [
            "robot",
            "nature",
            "cat"
        ],
        phrase: [
            "Why is nature important to you?",
            "Is robot overrated or underrated?",
            "How do you feel about cat?"
        ]
    },
    {
        key: [
            "weather",
            "money"
        ],
        phrase: [
            "Why is weather important to you?",
            "What does money mean to you?",
            "What does weather mean to you?"
        ]
    },
    {
        key: [
            "weather"
        ],
        phrase: [
            "Weather is fascinating, isn't it?",
            "What do you think about weather?",
            "What does weather mean to you?"
        ]
    },
    {
        key: [
            "travel"
        ],
        phrase: [
            "What does travel mean to you?",
            "Travel is fascinating, isn't it?",
            "Have you ever wondered how travel affects us?"
        ]
    },
    {
        key: [
            "code",
            "movie",
            "freedom"
        ],
        phrase: [
            "Have you ever wondered how code affects us?",
            "Have you ever wondered how freedom affects us?",
            "Can you imagine life without code?"
        ]
    },
    {
        key: [
            "coffee",
            "nature"
        ],
        phrase: [
            "Can you imagine life without nature?",
            "Let's talk about coffee.",
            "Tell me your thoughts on nature."
        ]
    },
    {
        key: [
            "robot"
        ],
        phrase: [
            "Have you ever wondered how robot affects us?",
            "Let's talk about robot.",
            "Can you imagine life without robot?"
        ]
    },
    {
        key: [
            "intelligence",
            "work",
            "food"
        ],
        phrase: [
            "Tell me your thoughts on food.",
            "Let's talk about food.",
            "Is intelligence overrated or underrated?"
        ]
    },
    {
        key: [
            "dog",
            "science",
            "religion"
        ],
        phrase: [
            "What does science mean to you?",
            "Have you ever wondered how religion affects us?",
            "Why is dog important to you?"
        ]
    },
    {
        key: [
            "game",
            "movie",
            "code"
        ],
        phrase: [
            "What do you think about code?",
            "Why is movie important to you?",
            "Have you ever wondered how movie affects us?"
        ]
    },
    {
        key: [
            "talk"
        ],
        phrase: [
            "What do you think about talk?",
            "Have you ever wondered how talk affects us?",
            "Can you imagine life without talk?"
        ]
    },
    {
        key: [
            "love",
            "intelligence"
        ],
        phrase: [
            "How do you feel about intelligence?",
            "Have you ever wondered how love affects us?",
            "Can you imagine life without intelligence?"
        ]
    },
    {
        key: [
            "history",
            "cat",
            "food"
        ],
        phrase: [
            "Food is fascinating, isn't it?",
            "Have you ever wondered how cat affects us?",
            "Can you imagine life without food?"
        ]
    },
    {
        key: [
            "AI",
            "technology"
        ],
        phrase: [
            "Technology is fascinating, isn't it?",
            "What do you think about AI?",
            "Tell me your thoughts on technology."
        ]
    },
    {
        key: [
            "family",
            "cat",
            "holiday"
        ],
        phrase: [
            "Let's talk about holiday.",
            "Holiday is fascinating, isn't it?",
            "Tell me your thoughts on cat."
        ]
    },
    {
        key: [
            "AI",
            "happy"
        ],
        phrase: [
            "What do you think about AI?",
            "Have you ever wondered how happy affects us?",
            "Happy is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "talk",
            "money",
            "fear"
        ],
        phrase: [
            "What do you think about fear?",
            "Have you ever wondered how money affects us?",
            "Is money overrated or underrated?"
        ]
    },
    {
        key: [
            "nature"
        ],
        phrase: [
            "Let's talk about nature.",
            "How do you feel about nature?",
            "What do you think about nature?"
        ]
    },
    {
        key: [
            "history"
        ],
        phrase: [
            "What does history mean to you?",
            "Is history overrated or underrated?",
            "Have you ever wondered how history affects us?"
        ]
    },
    {
        key: [
            "science",
            "internet"
        ],
        phrase: [
            "Internet is fascinating, isn't it?",
            "What does science mean to you?",
            "Have you ever wondered how internet affects us?"
        ]
    },
    {
        key: [
            "robot",
            "technology",
            "dog"
        ],
        phrase: [
            "What does dog mean to you?",
            "Is robot overrated or underrated?",
            "Is technology overrated or underrated?"
        ]
    },
    {
        key: [
            "intelligence",
            "travel"
        ],
        phrase: [
            "What does intelligence mean to you?",
            "Is intelligence overrated or underrated?",
            "What do you think about travel?"
        ]
    },
    {
        key: [
            "happy",
            "dog",
            "coffee"
        ],
        phrase: [
            "Tell me your thoughts on coffee.",
            "Can you imagine life without coffee?",
            "How do you feel about coffee?"
        ]
    },
    {
        key: [
            "work",
            "code"
        ],
        phrase: [
            "Is work overrated or underrated?",
            "How do you feel about code?",
            "Tell me your thoughts on code."
        ]
    },
    {
        key: [
            "art"
        ],
        phrase: [
            "Let's talk about art.",
            "Art is fascinating, isn't it?",
            "Why is art important to you?"
        ]
    },
    {
        key: [
            "politics",
            "technology"
        ],
        phrase: [
            "Why is technology important to you?",
            "Technology is fascinating, isn't it?",
            "What do you think about politics?"
        ]
    },
    {
        key: [
            "love",
            "emotion"
        ],
        phrase: [
            "Why is love important to you?",
            "What does emotion mean to you?",
            "How do you feel about love?"
        ]
    },
    {
        key: [
            "technology",
            "coffee",
            "money"
        ],
        phrase: [
            "Technology is fascinating, isn't it?",
            "Is money overrated or underrated?",
            "Tell me your thoughts on coffee."
        ]
    },
    {
        key: [
            "art",
            "future"
        ],
        phrase: [
            "Have you ever wondered how future affects us?",
            "Let's talk about art.",
            "Have you ever wondered how art affects us?"
        ]
    },
    {
        key: [
            "money",
            "religion",
            "history"
        ],
        phrase: [
            "Let's talk about religion.",
            "What does religion mean to you?",
            "What does money mean to you?"
        ]
    },
    {
        key: [
            "talk",
            "nature"
        ],
        phrase: [
            "Tell me your thoughts on talk.",
            "What do you think about talk?",
            "Why is talk important to you?"
        ]
    },
    {
        key: [
            "friend"
        ],
        phrase: [
            "Why is friend important to you?",
            "How do you feel about friend?",
            "Tell me your thoughts on friend."
        ]
    },
    {
        key: [
            "fear"
        ],
        phrase: [
            "What do you think about fear?",
            "Is fear overrated or underrated?",
            "Have you ever wondered how fear affects us?"
        ]
    },
    {
        key: [
            "exam",
            "religion",
            "work"
        ],
        phrase: [
            "Is exam overrated or underrated?",
            "Why is exam important to you?",
            "Have you ever wondered how exam affects us?"
        ]
    },
    {
        key: [
            "book"
        ],
        phrase: [
            "Have you ever wondered how book affects us?",
            "Let's talk about book.",
            "Book is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "intelligence",
            "travel"
        ],
        phrase: [
            "What does travel mean to you?",
            "Is intelligence overrated or underrated?",
            "Intelligence is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "beauty",
            "music",
            "robot"
        ],
        phrase: [
            "What do you think about robot?",
            "Music is fascinating, isn't it?",
            "What does music mean to you?"
        ]
    },
    {
        key: [
            "crime",
            "sleep"
        ],
        phrase: [
            "Tell me your thoughts on sleep.",
            "Let's talk about crime.",
            "What does sleep mean to you?"
        ]
    },
    {
        key: [
            "death",
            "friend"
        ],
        phrase: [
            "What do you think about friend?",
            "How do you feel about death?",
            "Can you imagine life without death?"
        ]
    },
    {
        key: [
            "game",
            "fear",
            "cat"
        ],
        phrase: [
            "Why is cat important to you?",
            "Let's talk about cat.",
            "How do you feel about fear?"
        ]
    },
    {
        key: [
            "health",
            "talk"
        ],
        phrase: [
            "Have you ever wondered how talk affects us?",
            "Is talk overrated or underrated?",
            "Health is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "sad",
            "life",
            "friend"
        ],
        phrase: [
            "Friend is fascinating, isn't it?",
            "What do you think about life?",
            "Life is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "book",
            "internet"
        ],
        phrase: [
            "Let's talk about book.",
            "Why is internet important to you?",
            "Book is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "city",
            "AI",
            "movie"
        ],
        phrase: [
            "City is fascinating, isn't it?",
            "Have you ever wondered how movie affects us?",
            "Can you imagine life without movie?"
        ]
    },
    {
        key: [
            "love",
            "dog",
            "movie"
        ],
        phrase: [
            "Why is love important to you?",
            "Movie is fascinating, isn't it?",
            "Why is movie important to you?"
        ]
    },
    {
        key: [
            "movie",
            "dream",
            "food"
        ],
        phrase: [
            "What do you think about movie?",
            "Why is food important to you?",
            "Why is dream important to you?"
        ]
    },
    {
        key: [
            "dog",
            "fear"
        ],
        phrase: [
            "Why is fear important to you?",
            "Let's talk about dog.",
            "Fear is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "city",
            "death"
        ],
        phrase: [
            "Tell me your thoughts on city.",
            "City is fascinating, isn't it?",
            "Tell me your thoughts on death."
        ]
    },
    {
        key: [
            "travel"
        ],
        phrase: [
            "Why is travel important to you?",
            "Is travel overrated or underrated?",
            "What do you think about travel?"
        ]
    },
    {
        key: [
            "game",
            "cat"
        ],
        phrase: [
            "Tell me your thoughts on game.",
            "Is game overrated or underrated?",
            "Can you imagine life without cat?"
        ]
    },
    {
        key: [
            "sleep"
        ],
        phrase: [
            "How do you feel about sleep?",
            "Sleep is fascinating, isn't it?",
            "Let's talk about sleep."
        ]
    },
    {
        key: [
            "talk",
            "war"
        ],
        phrase: [
            "What do you think about talk?",
            "Can you imagine life without war?",
            "Why is talk important to you?"
        ]
    },
    {
        key: [
            "language",
            "religion",
            "intelligence"
        ],
        phrase: [
            "Let's talk about religion.",
            "Have you ever wondered how religion affects us?",
            "Is intelligence overrated or underrated?"
        ]
    },
    {
        key: [
            "happy",
            "sad",
            "art"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "Tell me your thoughts on art.",
            "What do you think about happy?"
        ]
    },
    {
        key: [
            "movie",
            "nature",
            "dog"
        ],
        phrase: [
            "Why is nature important to you?",
            "Why is movie important to you?",
            "Nature is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "fear",
            "game"
        ],
        phrase: [
            "What do you think about fear?",
            "Is game overrated or underrated?",
            "Can you imagine life without game?"
        ]
    },
    {
        key: [
            "friend"
        ],
        phrase: [
            "What do you think about friend?",
            "Let's talk about friend.",
            "Tell me your thoughts on friend."
        ]
    },
    {
        key: [
            "health"
        ],
        phrase: [
            "What do you think about health?",
            "Can you imagine life without health?",
            "Tell me your thoughts on health."
        ]
    },
    {
        key: [
            "money"
        ],
        phrase: [
            "Is money overrated or underrated?",
            "What do you think about money?",
            "How do you feel about money?"
        ]
    },
    {
        key: [
            "talk",
            "art"
        ],
        phrase: [
            "What does talk mean to you?",
            "How do you feel about art?",
            "Let's talk about art."
        ]
    },
    {
        key: [
            "talk",
            "dream"
        ],
        phrase: [
            "What do you think about dream?",
            "Why is dream important to you?",
            "What do you think about talk?"
        ]
    },
    {
        key: [
            "internet",
            "art",
            "AI"
        ],
        phrase: [
            "Let's talk about internet.",
            "What do you think about AI?",
            "Can you imagine life without internet?"
        ]
    },
    {
        key: [
            "code",
            "intelligence"
        ],
        phrase: [
            "How do you feel about intelligence?",
            "How do you feel about code?",
            "Code is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "art",
            "love",
            "talk"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "Tell me your thoughts on talk.",
            "Have you ever wondered how love affects us?"
        ]
    },
    {
        key: [
            "city"
        ],
        phrase: [
            "Is city overrated or underrated?",
            "Tell me your thoughts on city.",
            "Can you imagine life without city?"
        ]
    },
    {
        key: [
            "dog",
            "travel"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "Let's talk about dog.",
            "Dog is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "nature",
            "AI"
        ],
        phrase: [
            "Can you imagine life without AI?",
            "Nature is fascinating, isn't it?",
            "Ai is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "future"
        ],
        phrase: [
            "Future is fascinating, isn't it?",
            "Is future overrated or underrated?",
            "How do you feel about future?"
        ]
    },
    {
        key: [
            "freedom",
            "science"
        ],
        phrase: [
            "Is science overrated or underrated?",
            "How do you feel about freedom?",
            "What does science mean to you?"
        ]
    },
    {
        key: [
            "nature"
        ],
        phrase: [
            "Tell me your thoughts on nature.",
            "Let's talk about nature.",
            "Have you ever wondered how nature affects us?"
        ]
    },
    {
        key: [
            "sleep",
            "crime",
            "death"
        ],
        phrase: [
            "Death is fascinating, isn't it?",
            "How do you feel about death?",
            "What do you think about sleep?"
        ]
    },
    {
        key: [
            "friend",
            "science"
        ],
        phrase: [
            "What does science mean to you?",
            "Why is friend important to you?",
            "Can you imagine life without science?"
        ]
    },
    {
        key: [
            "cat",
            "history",
            "happy"
        ],
        phrase: [
            "Tell me your thoughts on history.",
            "Have you ever wondered how cat affects us?",
            "History is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "science",
            "music",
            "talk"
        ],
        phrase: [
            "Is science overrated or underrated?",
            "Tell me your thoughts on talk.",
            "What does science mean to you?"
        ]
    },
    {
        key: [
            "sports",
            "nature",
            "game"
        ],
        phrase: [
            "Tell me your thoughts on game.",
            "Let's talk about nature.",
            "What does sports mean to you?"
        ]
    },
    {
        key: [
            "language",
            "war",
            "friend"
        ],
        phrase: [
            "Friend is fascinating, isn't it?",
            "Have you ever wondered how war affects us?",
            "Let's talk about language."
        ]
    },
    {
        key: [
            "weather",
            "movie",
            "exam"
        ],
        phrase: [
            "What do you think about movie?",
            "Why is weather important to you?",
            "Have you ever wondered how exam affects us?"
        ]
    },
    {
        key: [
            "code",
            "talk"
        ],
        phrase: [
            "Tell me your thoughts on talk.",
            "Why is code important to you?",
            "How do you feel about code?"
        ]
    },
    {
        key: [
            "music",
            "movie"
        ],
        phrase: [
            "Why is music important to you?",
            "Why is movie important to you?",
            "How do you feel about movie?"
        ]
    },
    {
        key: [
            "technology"
        ],
        phrase: [
            "Is technology overrated or underrated?",
            "Have you ever wondered how technology affects us?",
            "What does technology mean to you?"
        ]
    },
    {
        key: [
            "friend"
        ],
        phrase: [
            "What do you think about friend?",
            "Why is friend important to you?",
            "Let's talk about friend."
        ]
    },
    {
        key: [
            "game"
        ],
        phrase: [
            "How do you feel about game?",
            "Let's talk about game.",
            "Can you imagine life without game?"
        ]
    },
    {
        key: [
            "future"
        ],
        phrase: [
            "Have you ever wondered how future affects us?",
            "What does future mean to you?",
            "How do you feel about future?"
        ]
    },
    {
        key: [
            "future",
            "city",
            "art"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "Tell me your thoughts on city.",
            "Have you ever wondered how future affects us?"
        ]
    },
    {
        key: [
            "war",
            "friend"
        ],
        phrase: [
            "Have you ever wondered how war affects us?",
            "How do you feel about war?",
            "Is war overrated or underrated?"
        ]
    },
    {
        key: [
            "computer"
        ],
        phrase: [
            "Why is computer important to you?",
            "Computer is fascinating, isn't it?",
            "Can you imagine life without computer?"
        ]
    },
    {
        key: [
            "city",
            "art"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "Tell me your thoughts on city.",
            "City is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "money"
        ],
        phrase: [
            "Tell me your thoughts on money.",
            "Money is fascinating, isn't it?",
            "Can you imagine life without money?"
        ]
    },
    {
        key: [
            "religion"
        ],
        phrase: [
            "Can you imagine life without religion?",
            "Why is religion important to you?",
            "Let's talk about religion."
        ]
    },
    {
        key: [
            "dream",
            "robot",
            "weather"
        ],
        phrase: [
            "What does robot mean to you?",
            "Weather is fascinating, isn't it?",
            "What does dream mean to you?"
        ]
    },
    {
        key: [
            "AI"
        ],
        phrase: [
            "Tell me your thoughts on AI.",
            "Can you imagine life without AI?",
            "Have you ever wondered how AI affects us?"
        ]
    },
    {
        key: [
            "work",
            "computer"
        ],
        phrase: [
            "Work is fascinating, isn't it?",
            "Tell me your thoughts on computer.",
            "Tell me your thoughts on work."
        ]
    },
    {
        key: [
            "intelligence",
            "future",
            "love"
        ],
        phrase: [
            "Can you imagine life without love?",
            "Tell me your thoughts on future.",
            "Intelligence is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "truth",
            "movie",
            "history"
        ],
        phrase: [
            "What do you think about movie?",
            "What do you think about truth?",
            "What do you think about history?"
        ]
    },
    {
        key: [
            "sleep"
        ],
        phrase: [
            "Is sleep overrated or underrated?",
            "What do you think about sleep?",
            "Can you imagine life without sleep?"
        ]
    },
    {
        key: [
            "movie"
        ],
        phrase: [
            "What do you think about movie?",
            "Tell me your thoughts on movie.",
            "Why is movie important to you?"
        ]
    },
    {
        key: [
            "freedom",
            "dog",
            "game"
        ],
        phrase: [
            "Have you ever wondered how freedom affects us?",
            "Let's talk about dog.",
            "Can you imagine life without game?"
        ]
    },
    {
        key: [
            "code"
        ],
        phrase: [
            "Is code overrated or underrated?",
            "What does code mean to you?",
            "What do you think about code?"
        ]
    },
    {
        key: [
            "science",
            "game",
            "intelligence"
        ],
        phrase: [
            "Is science overrated or underrated?",
            "Is game overrated or underrated?",
            "Tell me your thoughts on intelligence."
        ]
    },
    {
        key: [
            "talk"
        ],
        phrase: [
            "What does talk mean to you?",
            "Is talk overrated or underrated?",
            "Let's talk about talk."
        ]
    },
    {
        key: [
            "computer",
            "friend"
        ],
        phrase: [
            "Friend is fascinating, isn't it?",
            "Tell me your thoughts on friend.",
            "Why is friend important to you?"
        ]
    },
    {
        key: [
            "school",
            "sad"
        ],
        phrase: [
            "School is fascinating, isn't it?",
            "Is school overrated or underrated?",
            "Tell me your thoughts on school."
        ]
    },
    {
        key: [
            "exam"
        ],
        phrase: [
            "Why is exam important to you?",
            "Tell me your thoughts on exam.",
            "Have you ever wondered how exam affects us?"
        ]
    },
    {
        key: [
            "politics",
            "robot"
        ],
        phrase: [
            "How do you feel about robot?",
            "Tell me your thoughts on politics.",
            "What does politics mean to you?"
        ]
    },
    {
        key: [
            "cat",
            "weather"
        ],
        phrase: [
            "Why is weather important to you?",
            "What does cat mean to you?",
            "Weather is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "happy",
            "dream"
        ],
        phrase: [
            "Happy is fascinating, isn't it?",
            "Tell me your thoughts on happy.",
            "How do you feel about dream?"
        ]
    },
    {
        key: [
            "AI",
            "cat"
        ],
        phrase: [
            "What do you think about cat?",
            "Tell me your thoughts on cat.",
            "What does AI mean to you?"
        ]
    },
    {
        key: [
            "life",
            "history",
            "city"
        ],
        phrase: [
            "How do you feel about life?",
            "History is fascinating, isn't it?",
            "Let's talk about history."
        ]
    },
    {
        key: [
            "exam"
        ],
        phrase: [
            "Is exam overrated or underrated?",
            "Tell me your thoughts on exam.",
            "Why is exam important to you?"
        ]
    },
    {
        key: [
            "science",
            "life"
        ],
        phrase: [
            "Is science overrated or underrated?",
            "How do you feel about life?",
            "Life is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "sad"
        ],
        phrase: [
            "Let's talk about sad.",
            "Why is sad important to you?",
            "Have you ever wondered how sad affects us?"
        ]
    },
    {
        key: [
            "dream",
            "city",
            "truth"
        ],
        phrase: [
            "What do you think about truth?",
            "Why is dream important to you?",
            "Have you ever wondered how truth affects us?"
        ]
    },
    {
        key: [
            "sad",
            "death",
            "holiday"
        ],
        phrase: [
            "Death is fascinating, isn't it?",
            "How do you feel about holiday?",
            "Tell me your thoughts on death."
        ]
    },
    {
        key: [
            "death",
            "technology",
            "family"
        ],
        phrase: [
            "Why is technology important to you?",
            "Have you ever wondered how technology affects us?",
            "How do you feel about death?"
        ]
    },
    {
        key: [
            "dog",
            "beauty",
            "sleep"
        ],
        phrase: [
            "Tell me your thoughts on sleep.",
            "What does beauty mean to you?",
            "Dog is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "emotion"
        ],
        phrase: [
            "How do you feel about emotion?",
            "Can you imagine life without emotion?",
            "What does emotion mean to you?"
        ]
    },
    {
        key: [
            "internet",
            "sleep",
            "exam"
        ],
        phrase: [
            "Have you ever wondered how exam affects us?",
            "Let's talk about internet.",
            "What do you think about sleep?"
        ]
    },
    {
        key: [
            "school",
            "internet",
            "happy"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "Let's talk about internet.",
            "What do you think about happy?"
        ]
    },
    {
        key: [
            "music"
        ],
        phrase: [
            "What do you think about music?",
            "How do you feel about music?",
            "Is music overrated or underrated?"
        ]
    },
    {
        key: [
            "health",
            "food",
            "computer"
        ],
        phrase: [
            "Food is fascinating, isn't it?",
            "What do you think about health?",
            "What do you think about food?"
        ]
    },
    {
        key: [
            "talk",
            "sleep"
        ],
        phrase: [
            "What does sleep mean to you?",
            "What do you think about talk?",
            "Is talk overrated or underrated?"
        ]
    },
    {
        key: [
            "dream"
        ],
        phrase: [
            "What do you think about dream?",
            "Tell me your thoughts on dream.",
            "Can you imagine life without dream?"
        ]
    },
    {
        key: [
            "coffee",
            "family",
            "technology"
        ],
        phrase: [
            "Is coffee overrated or underrated?",
            "Is family overrated or underrated?",
            "Can you imagine life without coffee?"
        ]
    },
    {
        key: [
            "coffee",
            "work"
        ],
        phrase: [
            "Tell me your thoughts on coffee.",
            "Let's talk about coffee.",
            "Tell me your thoughts on work."
        ]
    },
    {
        key: [
            "AI",
            "city",
            "weather"
        ],
        phrase: [
            "Can you imagine life without AI?",
            "What do you think about AI?",
            "What does weather mean to you?"
        ]
    },
    {
        key: [
            "game",
            "food",
            "school"
        ],
        phrase: [
            "Why is food important to you?",
            "What does school mean to you?",
            "Tell me your thoughts on school."
        ]
    },
    {
        key: [
            "intelligence",
            "movie"
        ],
        phrase: [
            "What do you think about movie?",
            "What does intelligence mean to you?",
            "Have you ever wondered how movie affects us?"
        ]
    },
    {
        key: [
            "dream"
        ],
        phrase: [
            "What do you think about dream?",
            "Let's talk about dream.",
            "Why is dream important to you?"
        ]
    },
    {
        key: [
            "holiday",
            "sleep"
        ],
        phrase: [
            "What do you think about holiday?",
            "Have you ever wondered how sleep affects us?",
            "Sleep is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "dream"
        ],
        phrase: [
            "Have you ever wondered how dream affects us?",
            "What does dream mean to you?",
            "Is dream overrated or underrated?"
        ]
    },
    {
        key: [
            "future"
        ],
        phrase: [
            "Have you ever wondered how future affects us?",
            "Why is future important to you?",
            "Tell me your thoughts on future."
        ]
    },
    {
        key: [
            "city"
        ],
        phrase: [
            "Why is city important to you?",
            "What do you think about city?",
            "What does city mean to you?"
        ]
    },
    {
        key: [
            "health"
        ],
        phrase: [
            "Let's talk about health.",
            "What do you think about health?",
            "How do you feel about health?"
        ]
    },
    {
        key: [
            "exam"
        ],
        phrase: [
            "What does exam mean to you?",
            "How do you feel about exam?",
            "Exam is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "AI",
            "internet",
            "intelligence"
        ],
        phrase: [
            "How do you feel about intelligence?",
            "What does intelligence mean to you?",
            "What does internet mean to you?"
        ]
    },
    {
        key: [
            "war"
        ],
        phrase: [
            "Is war overrated or underrated?",
            "Can you imagine life without war?",
            "War is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "coffee",
            "sleep"
        ],
        phrase: [
            "How do you feel about sleep?",
            "What does sleep mean to you?",
            "What do you think about sleep?"
        ]
    },
    {
        key: [
            "dog",
            "city"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "What does city mean to you?",
            "Tell me your thoughts on dog."
        ]
    },
    {
        key: [
            "health",
            "truth",
            "beauty"
        ],
        phrase: [
            "What do you think about truth?",
            "Truth is fascinating, isn't it?",
            "What do you think about health?"
        ]
    },
    {
        key: [
            "exam",
            "school"
        ],
        phrase: [
            "Is exam overrated or underrated?",
            "Have you ever wondered how exam affects us?",
            "What do you think about exam?"
        ]
    },
    {
        key: [
            "money"
        ],
        phrase: [
            "Let's talk about money.",
            "Money is fascinating, isn't it?",
            "Why is money important to you?"
        ]
    },
    {
        key: [
            "code"
        ],
        phrase: [
            "How do you feel about code?",
            "Can you imagine life without code?",
            "What does code mean to you?"
        ]
    },
    {
        key: [
            "language"
        ],
        phrase: [
            "How do you feel about language?",
            "Have you ever wondered how language affects us?",
            "Tell me your thoughts on language."
        ]
    },
    {
        key: [
            "war",
            "future",
            "beauty"
        ],
        phrase: [
            "What do you think about war?",
            "Have you ever wondered how war affects us?",
            "Have you ever wondered how future affects us?"
        ]
    },
    {
        key: [
            "art",
            "dog",
            "nature"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "Nature is fascinating, isn't it?",
            "Let's talk about nature."
        ]
    },
    {
        key: [
            "love"
        ],
        phrase: [
            "Love is fascinating, isn't it?",
            "Why is love important to you?",
            "How do you feel about love?"
        ]
    },
    {
        key: [
            "nature",
            "sleep"
        ],
        phrase: [
            "Tell me your thoughts on sleep.",
            "Let's talk about sleep.",
            "Tell me your thoughts on nature."
        ]
    },
    {
        key: [
            "freedom",
            "movie",
            "game"
        ],
        phrase: [
            "Tell me your thoughts on game.",
            "How do you feel about freedom?",
            "Is game overrated or underrated?"
        ]
    },
    {
        key: [
            "life",
            "sleep"
        ],
        phrase: [
            "What do you think about life?",
            "Life is fascinating, isn't it?",
            "Have you ever wondered how sleep affects us?"
        ]
    },
    {
        key: [
            "movie"
        ],
        phrase: [
            "Let's talk about movie.",
            "Movie is fascinating, isn't it?",
            "How do you feel about movie?"
        ]
    },
    {
        key: [
            "politics"
        ],
        phrase: [
            "Can you imagine life without politics?",
            "Is politics overrated or underrated?",
            "Politics is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "code",
            "intelligence"
        ],
        phrase: [
            "What does intelligence mean to you?",
            "What do you think about code?",
            "Let's talk about intelligence."
        ]
    },
    {
        key: [
            "internet"
        ],
        phrase: [
            "Let's talk about internet.",
            "Can you imagine life without internet?",
            "How do you feel about internet?"
        ]
    },
    {
        key: [
            "work",
            "death",
            "talk"
        ],
        phrase: [
            "Death is fascinating, isn't it?",
            "Why is death important to you?",
            "Tell me your thoughts on talk."
        ]
    },
    {
        key: [
            "sad"
        ],
        phrase: [
            "Can you imagine life without sad?",
            "What does sad mean to you?",
            "Is sad overrated or underrated?"
        ]
    },
    {
        key: [
            "politics"
        ],
        phrase: [
            "Why is politics important to you?",
            "What do you think about politics?",
            "How do you feel about politics?"
        ]
    },
    {
        key: [
            "happy",
            "sad"
        ],
        phrase: [
            "Why is happy important to you?",
            "Sad is fascinating, isn't it?",
            "What do you think about sad?"
        ]
    },
    {
        key: [
            "crime"
        ],
        phrase: [
            "Crime is fascinating, isn't it?",
            "Is crime overrated or underrated?",
            "What do you think about crime?"
        ]
    },
    {
        key: [
            "sports",
            "freedom"
        ],
        phrase: [
            "Have you ever wondered how freedom affects us?",
            "Is sports overrated or underrated?",
            "What does sports mean to you?"
        ]
    },
    {
        key: [
            "language",
            "internet",
            "robot"
        ],
        phrase: [
            "How do you feel about robot?",
            "What do you think about robot?",
            "Let's talk about internet."
        ]
    },
    {
        key: [
            "cat"
        ],
        phrase: [
            "Is cat overrated or underrated?",
            "Cat is fascinating, isn't it?",
            "Why is cat important to you?"
        ]
    },
    {
        key: [
            "dog",
            "science"
        ],
        phrase: [
            "Is science overrated or underrated?",
            "What does science mean to you?",
            "Why is science important to you?"
        ]
    },
    {
        key: [
            "future",
            "art"
        ],
        phrase: [
            "Tell me your thoughts on future.",
            "Have you ever wondered how future affects us?",
            "Can you imagine life without art?"
        ]
    },
    {
        key: [
            "weather"
        ],
        phrase: [
            "Weather is fascinating, isn't it?",
            "What do you think about weather?",
            "Let's talk about weather."
        ]
    },
    {
        key: [
            "death",
            "exam"
        ],
        phrase: [
            "Have you ever wondered how exam affects us?",
            "Tell me your thoughts on death.",
            "Let's talk about exam."
        ]
    },
    {
        key: [
            "travel",
            "crime"
        ],
        phrase: [
            "Why is crime important to you?",
            "Crime is fascinating, isn't it?",
            "What do you think about travel?"
        ]
    },
    {
        key: [
            "AI"
        ],
        phrase: [
            "What does AI mean to you?",
            "Is AI overrated or underrated?",
            "What do you think about AI?"
        ]
    },
    {
        key: [
            "sad",
            "truth"
        ],
        phrase: [
            "Have you ever wondered how sad affects us?",
            "Can you imagine life without sad?",
            "Have you ever wondered how truth affects us?"
        ]
    },
    {
        key: [
            "music",
            "computer"
        ],
        phrase: [
            "Why is music important to you?",
            "Music is fascinating, isn't it?",
            "Tell me your thoughts on music."
        ]
    },
    {
        key: [
            "beauty",
            "sports",
            "friend"
        ],
        phrase: [
            "What do you think about friend?",
            "Why is sports important to you?",
            "Friend is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "crime",
            "cat",
            "fear"
        ],
        phrase: [
            "What do you think about fear?",
            "How do you feel about fear?",
            "Can you imagine life without crime?"
        ]
    },
    {
        key: [
            "technology",
            "beauty",
            "history"
        ],
        phrase: [
            "Why is history important to you?",
            "Tell me your thoughts on technology.",
            "Can you imagine life without history?"
        ]
    },
    {
        key: [
            "AI",
            "science"
        ],
        phrase: [
            "Science is fascinating, isn't it?",
            "Ai is fascinating, isn't it?",
            "Can you imagine life without science?"
        ]
    },
    {
        key: [
            "robot",
            "religion"
        ],
        phrase: [
            "How do you feel about robot?",
            "Have you ever wondered how robot affects us?",
            "Can you imagine life without religion?"
        ]
    },
    {
        key: [
            "family"
        ],
        phrase: [
            "What do you think about family?",
            "Why is family important to you?",
            "How do you feel about family?"
        ]
    },
    {
        key: [
            "happy",
            "travel"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "Tell me your thoughts on happy.",
            "Let's talk about travel."
        ]
    },
    {
        key: [
            "exam",
            "travel",
            "emotion"
        ],
        phrase: [
            "What does travel mean to you?",
            "Why is travel important to you?",
            "What does emotion mean to you?"
        ]
    },
    {
        key: [
            "cat",
            "sports",
            "weather"
        ],
        phrase: [
            "Can you imagine life without sports?",
            "Let's talk about sports.",
            "Weather is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "truth",
            "family"
        ],
        phrase: [
            "Is truth overrated or underrated?",
            "What do you think about truth?",
            "Is family overrated or underrated?"
        ]
    },
    {
        key: [
            "internet",
            "history",
            "beauty"
        ],
        phrase: [
            "Beauty is fascinating, isn't it?",
            "What does internet mean to you?",
            "How do you feel about history?"
        ]
    },
    {
        key: [
            "work",
            "sad",
            "city"
        ],
        phrase: [
            "Have you ever wondered how sad affects us?",
            "What does work mean to you?",
            "Is city overrated or underrated?"
        ]
    },
    {
        key: [
            "technology",
            "beauty"
        ],
        phrase: [
            "Technology is fascinating, isn't it?",
            "Is technology overrated or underrated?",
            "Is beauty overrated or underrated?"
        ]
    },
    {
        key: [
            "truth",
            "technology",
            "sad"
        ],
        phrase: [
            "Why is technology important to you?",
            "What do you think about truth?",
            "Is technology overrated or underrated?"
        ]
    },
    {
        key: [
            "health",
            "holiday",
            "beauty"
        ],
        phrase: [
            "What do you think about holiday?",
            "Is beauty overrated or underrated?",
            "Tell me your thoughts on beauty."
        ]
    },
    {
        key: [
            "intelligence",
            "beauty",
            "love"
        ],
        phrase: [
            "Intelligence is fascinating, isn't it?",
            "Have you ever wondered how love affects us?",
            "Tell me your thoughts on intelligence."
        ]
    },
    {
        key: [
            "AI",
            "robot",
            "family"
        ],
        phrase: [
            "What does robot mean to you?",
            "Can you imagine life without family?",
            "Have you ever wondered how robot affects us?"
        ]
    },
    {
        key: [
            "death"
        ],
        phrase: [
            "Why is death important to you?",
            "Have you ever wondered how death affects us?",
            "Can you imagine life without death?"
        ]
    },
    {
        key: [
            "city",
            "beauty"
        ],
        phrase: [
            "What does beauty mean to you?",
            "Is beauty overrated or underrated?",
            "Tell me your thoughts on beauty."
        ]
    },
    {
        key: [
            "food"
        ],
        phrase: [
            "What do you think about food?",
            "What does food mean to you?",
            "How do you feel about food?"
        ]
    },
    {
        key: [
            "holiday"
        ],
        phrase: [
            "What does holiday mean to you?",
            "What do you think about holiday?",
            "Tell me your thoughts on holiday."
        ]
    },
    {
        key: [
            "music"
        ],
        phrase: [
            "Music is fascinating, isn't it?",
            "How do you feel about music?",
            "Have you ever wondered how music affects us?"
        ]
    },
    {
        key: [
            "happy"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "Tell me your thoughts on happy.",
            "Can you imagine life without happy?"
        ]
    },
    {
        key: [
            "weather",
            "future",
            "science"
        ],
        phrase: [
            "Is science overrated or underrated?",
            "Tell me your thoughts on future.",
            "Have you ever wondered how weather affects us?"
        ]
    },
    {
        key: [
            "holiday"
        ],
        phrase: [
            "Let's talk about holiday.",
            "Have you ever wondered how holiday affects us?",
            "Is holiday overrated or underrated?"
        ]
    },
    {
        key: [
            "dog"
        ],
        phrase: [
            "Dog is fascinating, isn't it?",
            "What does dog mean to you?",
            "Let's talk about dog."
        ]
    },
    {
        key: [
            "school",
            "death",
            "freedom"
        ],
        phrase: [
            "Can you imagine life without freedom?",
            "Have you ever wondered how freedom affects us?",
            "How do you feel about death?"
        ]
    },
    {
        key: [
            "food"
        ],
        phrase: [
            "Food is fascinating, isn't it?",
            "Why is food important to you?",
            "How do you feel about food?"
        ]
    },
    {
        key: [
            "travel"
        ],
        phrase: [
            "What do you think about travel?",
            "Have you ever wondered how travel affects us?",
            "Let's talk about travel."
        ]
    },
    {
        key: [
            "sports"
        ],
        phrase: [
            "Have you ever wondered how sports affects us?",
            "How do you feel about sports?",
            "What does sports mean to you?"
        ]
    },
    {
        key: [
            "intelligence",
            "love"
        ],
        phrase: [
            "What does intelligence mean to you?",
            "Is intelligence overrated or underrated?",
            "Let's talk about intelligence."
        ]
    },
    {
        key: [
            "truth",
            "holiday"
        ],
        phrase: [
            "Let's talk about holiday.",
            "Have you ever wondered how truth affects us?",
            "Can you imagine life without truth?"
        ]
    },
    {
        key: [
            "life"
        ],
        phrase: [
            "Have you ever wondered how life affects us?",
            "How do you feel about life?",
            "Why is life important to you?"
        ]
    },
    {
        key: [
            "life",
            "health"
        ],
        phrase: [
            "How do you feel about life?",
            "What does health mean to you?",
            "Health is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "AI",
            "death",
            "holiday"
        ],
        phrase: [
            "Can you imagine life without AI?",
            "How do you feel about death?",
            "What do you think about holiday?"
        ]
    },
    {
        key: [
            "history",
            "city"
        ],
        phrase: [
            "Tell me your thoughts on history.",
            "History is fascinating, isn't it?",
            "What does city mean to you?"
        ]
    },
    {
        key: [
            "money"
        ],
        phrase: [
            "Let's talk about money.",
            "Is money overrated or underrated?",
            "Why is money important to you?"
        ]
    },
    {
        key: [
            "war"
        ],
        phrase: [
            "Is war overrated or underrated?",
            "Why is war important to you?",
            "Tell me your thoughts on war."
        ]
    },
    {
        key: [
            "book"
        ],
        phrase: [
            "What does book mean to you?",
            "Book is fascinating, isn't it?",
            "Tell me your thoughts on book."
        ]
    },
    {
        key: [
            "love",
            "music",
            "crime"
        ],
        phrase: [
            "Why is love important to you?",
            "Tell me your thoughts on crime.",
            "Why is crime important to you?"
        ]
    },
    {
        key: [
            "sad",
            "money",
            "religion"
        ],
        phrase: [
            "Is money overrated or underrated?",
            "Have you ever wondered how money affects us?",
            "Let's talk about religion."
        ]
    },
    {
        key: [
            "AI"
        ],
        phrase: [
            "Tell me your thoughts on AI.",
            "Why is AI important to you?",
            "Have you ever wondered how AI affects us?"
        ]
    },
    {
        key: [
            "art",
            "travel"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "Why is travel important to you?",
            "Let's talk about travel."
        ]
    },
    {
        key: [
            "music"
        ],
        phrase: [
            "What do you think about music?",
            "Music is fascinating, isn't it?",
            "Have you ever wondered how music affects us?"
        ]
    },
    {
        key: [
            "work"
        ],
        phrase: [
            "Have you ever wondered how work affects us?",
            "Is work overrated or underrated?",
            "Tell me your thoughts on work."
        ]
    },
    {
        key: [
            "dog"
        ],
        phrase: [
            "Is dog overrated or underrated?",
            "Why is dog important to you?",
            "Let's talk about dog."
        ]
    },
    {
        key: [
            "movie"
        ],
        phrase: [
            "Can you imagine life without movie?",
            "How do you feel about movie?",
            "What does movie mean to you?"
        ]
    },
    {
        key: [
            "dog",
            "exam",
            "music"
        ],
        phrase: [
            "Is exam overrated or underrated?",
            "Why is music important to you?",
            "Tell me your thoughts on exam."
        ]
    },
    {
        key: [
            "school",
            "holiday"
        ],
        phrase: [
            "Let's talk about holiday.",
            "Holiday is fascinating, isn't it?",
            "Is holiday overrated or underrated?"
        ]
    },
    {
        key: [
            "movie",
            "school"
        ],
        phrase: [
            "What do you think about movie?",
            "What do you think about school?",
            "Is school overrated or underrated?"
        ]
    },
    {
        key: [
            "work",
            "death"
        ],
        phrase: [
            "Tell me your thoughts on death.",
            "What do you think about death?",
            "Let's talk about work."
        ]
    },
    {
        key: [
            "future",
            "cat"
        ],
        phrase: [
            "Let's talk about cat.",
            "Have you ever wondered how cat affects us?",
            "What does cat mean to you?"
        ]
    },
    {
        key: [
            "talk"
        ],
        phrase: [
            "Is talk overrated or underrated?",
            "What do you think about talk?",
            "Let's talk about talk."
        ]
    },
    {
        key: [
            "fear"
        ],
        phrase: [
            "How do you feel about fear?",
            "What do you think about fear?",
            "Why is fear important to you?"
        ]
    },
    {
        key: [
            "money"
        ],
        phrase: [
            "Let's talk about money.",
            "How do you feel about money?",
            "Can you imagine life without money?"
        ]
    },
    {
        key: [
            "history"
        ],
        phrase: [
            "History is fascinating, isn't it?",
            "How do you feel about history?",
            "Let's talk about history."
        ]
    },
    {
        key: [
            "computer",
            "war",
            "coffee"
        ],
        phrase: [
            "What do you think about war?",
            "Let's talk about war.",
            "Why is war important to you?"
        ]
    },
    {
        key: [
            "travel"
        ],
        phrase: [
            "Tell me your thoughts on travel.",
            "Is travel overrated or underrated?",
            "What do you think about travel?"
        ]
    },
    {
        key: [
            "food",
            "sad",
            "future"
        ],
        phrase: [
            "Why is food important to you?",
            "Let's talk about food.",
            "Tell me your thoughts on future."
        ]
    },
    {
        key: [
            "talk",
            "exam"
        ],
        phrase: [
            "Why is exam important to you?",
            "What do you think about talk?",
            "Can you imagine life without talk?"
        ]
    },
    {
        key: [
            "school",
            "health",
            "music"
        ],
        phrase: [
            "What do you think about health?",
            "Can you imagine life without health?",
            "Tell me your thoughts on music."
        ]
    },
    {
        key: [
            "weather"
        ],
        phrase: [
            "Why is weather important to you?",
            "Let's talk about weather.",
            "Tell me your thoughts on weather."
        ]
    },
    {
        key: [
            "code",
            "truth",
            "music"
        ],
        phrase: [
            "Truth is fascinating, isn't it?",
            "Music is fascinating, isn't it?",
            "Can you imagine life without code?"
        ]
    },
    {
        key: [
            "religion",
            "AI",
            "money"
        ],
        phrase: [
            "Let's talk about AI.",
            "Can you imagine life without AI?",
            "Have you ever wondered how money affects us?"
        ]
    },
    {
        key: [
            "health",
            "exam"
        ],
        phrase: [
            "Have you ever wondered how exam affects us?",
            "What do you think about exam?",
            "Tell me your thoughts on health."
        ]
    },
    {
        key: [
            "language"
        ],
        phrase: [
            "Have you ever wondered how language affects us?",
            "What does language mean to you?",
            "Why is language important to you?"
        ]
    },
    {
        key: [
            "art"
        ],
        phrase: [
            "Why is art important to you?",
            "Tell me your thoughts on art.",
            "Let's talk about art."
        ]
    },
    {
        key: [
            "health",
            "emotion"
        ],
        phrase: [
            "Let's talk about emotion.",
            "What do you think about emotion?",
            "Tell me your thoughts on health."
        ]
    },
    {
        key: [
            "coffee",
            "friend"
        ],
        phrase: [
            "What do you think about friend?",
            "Tell me your thoughts on coffee.",
            "Tell me your thoughts on friend."
        ]
    },
    {
        key: [
            "money"
        ],
        phrase: [
            "Tell me your thoughts on money.",
            "Money is fascinating, isn't it?",
            "Can you imagine life without money?"
        ]
    },
    {
        key: [
            "talk"
        ],
        phrase: [
            "Is talk overrated or underrated?",
            "Tell me your thoughts on talk.",
            "What do you think about talk?"
        ]
    },
    {
        key: [
            "dream"
        ],
        phrase: [
            "Dream is fascinating, isn't it?",
            "Why is dream important to you?",
            "Can you imagine life without dream?"
        ]
    },
    {
        key: [
            "dream"
        ],
        phrase: [
            "Let's talk about dream.",
            "Is dream overrated or underrated?",
            "Can you imagine life without dream?"
        ]
    },
    {
        key: [
            "death",
            "sad",
            "game"
        ],
        phrase: [
            "How do you feel about death?",
            "Tell me your thoughts on game.",
            "Have you ever wondered how sad affects us?"
        ]
    },
    {
        key: [
            "love",
            "sad"
        ],
        phrase: [
            "Can you imagine life without love?",
            "How do you feel about love?",
            "Have you ever wondered how sad affects us?"
        ]
    },
    {
        key: [
            "school",
            "beauty"
        ],
        phrase: [
            "Beauty is fascinating, isn't it?",
            "School is fascinating, isn't it?",
            "Is beauty overrated or underrated?"
        ]
    },
    {
        key: [
            "crime"
        ],
        phrase: [
            "Can you imagine life without crime?",
            "Crime is fascinating, isn't it?",
            "Let's talk about crime."
        ]
    },
    {
        key: [
            "technology",
            "code",
            "talk"
        ],
        phrase: [
            "Have you ever wondered how technology affects us?",
            "Have you ever wondered how code affects us?",
            "Technology is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "dog",
            "technology"
        ],
        phrase: [
            "Is technology overrated or underrated?",
            "Let's talk about dog.",
            "What do you think about dog?"
        ]
    },
    {
        key: [
            "science"
        ],
        phrase: [
            "What does science mean to you?",
            "Why is science important to you?",
            "What do you think about science?"
        ]
    },
    {
        key: [
            "happy",
            "nature"
        ],
        phrase: [
            "Have you ever wondered how happy affects us?",
            "Happy is fascinating, isn't it?",
            "Have you ever wondered how nature affects us?"
        ]
    },
    {
        key: [
            "family",
            "science"
        ],
        phrase: [
            "What does family mean to you?",
            "Why is science important to you?",
            "Can you imagine life without family?"
        ]
    },
    {
        key: [
            "exam",
            "nature"
        ],
        phrase: [
            "Tell me your thoughts on exam.",
            "Nature is fascinating, isn't it?",
            "How do you feel about exam?"
        ]
    },
    {
        key: [
            "holiday",
            "fear",
            "robot"
        ],
        phrase: [
            "What do you think about robot?",
            "Is holiday overrated or underrated?",
            "Tell me your thoughts on robot."
        ]
    },
    {
        key: [
            "travel",
            "future",
            "food"
        ],
        phrase: [
            "Food is fascinating, isn't it?",
            "Tell me your thoughts on food.",
            "What do you think about food?"
        ]
    },
    {
        key: [
            "sad"
        ],
        phrase: [
            "Let's talk about sad.",
            "Have you ever wondered how sad affects us?",
            "How do you feel about sad?"
        ]
    },
    {
        key: [
            "language",
            "death"
        ],
        phrase: [
            "Death is fascinating, isn't it?",
            "What do you think about language?",
            "Why is language important to you?"
        ]
    },
    {
        key: [
            "AI",
            "weather",
            "science"
        ],
        phrase: [
            "How do you feel about weather?",
            "Can you imagine life without AI?",
            "Science is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "life"
        ],
        phrase: [
            "How do you feel about life?",
            "Can you imagine life without life?",
            "Let's talk about life."
        ]
    },
    {
        key: [
            "dog"
        ],
        phrase: [
            "Why is dog important to you?",
            "Is dog overrated or underrated?",
            "What does dog mean to you?"
        ]
    },
    {
        key: [
            "game"
        ],
        phrase: [
            "Game is fascinating, isn't it?",
            "Have you ever wondered how game affects us?",
            "Let's talk about game."
        ]
    },
    {
        key: [
            "game"
        ],
        phrase: [
            "How do you feel about game?",
            "Have you ever wondered how game affects us?",
            "Why is game important to you?"
        ]
    },
    {
        key: [
            "love"
        ],
        phrase: [
            "Have you ever wondered how love affects us?",
            "Can you imagine life without love?",
            "What do you think about love?"
        ]
    },
    {
        key: [
            "sad"
        ],
        phrase: [
            "Sad is fascinating, isn't it?",
            "Is sad overrated or underrated?",
            "How do you feel about sad?"
        ]
    },
    {
        key: [
            "city",
            "friend",
            "emotion"
        ],
        phrase: [
            "What do you think about friend?",
            "What does emotion mean to you?",
            "Can you imagine life without emotion?"
        ]
    },
    {
        key: [
            "nature",
            "internet"
        ],
        phrase: [
            "Internet is fascinating, isn't it?",
            "How do you feel about internet?",
            "Nature is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "holiday",
            "school"
        ],
        phrase: [
            "What do you think about holiday?",
            "What does school mean to you?",
            "What do you think about school?"
        ]
    },
    {
        key: [
            "truth",
            "internet"
        ],
        phrase: [
            "How do you feel about internet?",
            "What do you think about truth?",
            "Why is internet important to you?"
        ]
    },
    {
        key: [
            "computer",
            "friend"
        ],
        phrase: [
            "What do you think about computer?",
            "What does friend mean to you?",
            "Is friend overrated or underrated?"
        ]
    },
    {
        key: [
            "nature",
            "game"
        ],
        phrase: [
            "Why is nature important to you?",
            "Can you imagine life without game?",
            "What does nature mean to you?"
        ]
    },
    {
        key: [
            "exam"
        ],
        phrase: [
            "Let's talk about exam.",
            "Is exam overrated or underrated?",
            "What does exam mean to you?"
        ]
    },
    {
        key: [
            "money"
        ],
        phrase: [
            "Money is fascinating, isn't it?",
            "Have you ever wondered how money affects us?",
            "Why is money important to you?"
        ]
    },
    {
        key: [
            "language",
            "life"
        ],
        phrase: [
            "What do you think about life?",
            "Life is fascinating, isn't it?",
            "What does life mean to you?"
        ]
    },
    {
        key: [
            "intelligence",
            "nature"
        ],
        phrase: [
            "Is intelligence overrated or underrated?",
            "Can you imagine life without nature?",
            "Tell me your thoughts on nature."
        ]
    },
    {
        key: [
            "weather",
            "future"
        ],
        phrase: [
            "Tell me your thoughts on future.",
            "What do you think about weather?",
            "What does weather mean to you?"
        ]
    },
    {
        key: [
            "politics",
            "crime",
            "weather"
        ],
        phrase: [
            "How do you feel about weather?",
            "Can you imagine life without crime?",
            "Why is politics important to you?"
        ]
    },
    {
        key: [
            "emotion",
            "code",
            "exam"
        ],
        phrase: [
            "Is exam overrated or underrated?",
            "Tell me your thoughts on exam.",
            "Why is code important to you?"
        ]
    },
    {
        key: [
            "money",
            "school",
            "history"
        ],
        phrase: [
            "Is money overrated or underrated?",
            "What do you think about history?",
            "School is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "family",
            "money"
        ],
        phrase: [
            "Is money overrated or underrated?",
            "Is family overrated or underrated?",
            "Let's talk about money."
        ]
    },
    {
        key: [
            "internet"
        ],
        phrase: [
            "What does internet mean to you?",
            "Have you ever wondered how internet affects us?",
            "What do you think about internet?"
        ]
    },
    {
        key: [
            "money",
            "freedom",
            "dream"
        ],
        phrase: [
            "How do you feel about freedom?",
            "Let's talk about money.",
            "What do you think about money?"
        ]
    },
    {
        key: [
            "family",
            "computer",
            "history"
        ],
        phrase: [
            "What do you think about history?",
            "History is fascinating, isn't it?",
            "What does family mean to you?"
        ]
    },
    {
        key: [
            "crime"
        ],
        phrase: [
            "What does crime mean to you?",
            "Why is crime important to you?",
            "What do you think about crime?"
        ]
    },
    {
        key: [
            "emotion",
            "travel",
            "science"
        ],
        phrase: [
            "Let's talk about science.",
            "What does emotion mean to you?",
            "Science is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "money",
            "work"
        ],
        phrase: [
            "Have you ever wondered how money affects us?",
            "What does work mean to you?",
            "What does money mean to you?"
        ]
    },
    {
        key: [
            "future",
            "AI"
        ],
        phrase: [
            "Tell me your thoughts on future.",
            "Ai is fascinating, isn't it?",
            "What does AI mean to you?"
        ]
    },
    {
        key: [
            "movie",
            "computer"
        ],
        phrase: [
            "Why is movie important to you?",
            "Tell me your thoughts on computer.",
            "Can you imagine life without movie?"
        ]
    },
    {
        key: [
            "game",
            "emotion",
            "weather"
        ],
        phrase: [
            "Why is emotion important to you?",
            "How do you feel about weather?",
            "Have you ever wondered how weather affects us?"
        ]
    },
    {
        key: [
            "science",
            "sleep",
            "internet"
        ],
        phrase: [
            "Tell me your thoughts on sleep.",
            "What does internet mean to you?",
            "Why is internet important to you?"
        ]
    },
    {
        key: [
            "sad",
            "exam"
        ],
        phrase: [
            "Have you ever wondered how exam affects us?",
            "Have you ever wondered how sad affects us?",
            "Exam is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "robot",
            "sports"
        ],
        phrase: [
            "Let's talk about sports.",
            "Tell me your thoughts on robot.",
            "Can you imagine life without robot?"
        ]
    },
    {
        key: [
            "book",
            "politics"
        ],
        phrase: [
            "Tell me your thoughts on politics.",
            "How do you feel about book?",
            "Let's talk about book."
        ]
    },
    {
        key: [
            "game",
            "religion",
            "beauty"
        ],
        phrase: [
            "What do you think about religion?",
            "Tell me your thoughts on beauty.",
            "How do you feel about game?"
        ]
    },
    {
        key: [
            "sleep",
            "science"
        ],
        phrase: [
            "Is science overrated or underrated?",
            "Is sleep overrated or underrated?",
            "Why is science important to you?"
        ]
    },
    {
        key: [
            "dream"
        ],
        phrase: [
            "Have you ever wondered how dream affects us?",
            "What does dream mean to you?",
            "Dream is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "art",
            "school"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "What does school mean to you?",
            "Is school overrated or underrated?"
        ]
    },
    {
        key: [
            "cat",
            "city",
            "music"
        ],
        phrase: [
            "Is city overrated or underrated?",
            "How do you feel about music?",
            "Can you imagine life without music?"
        ]
    },
    {
        key: [
            "music"
        ],
        phrase: [
            "What do you think about music?",
            "What does music mean to you?",
            "Is music overrated or underrated?"
        ]
    },
    {
        key: [
            "holiday"
        ],
        phrase: [
            "Let's talk about holiday.",
            "What does holiday mean to you?",
            "Why is holiday important to you?"
        ]
    },
    {
        key: [
            "sad",
            "intelligence",
            "science"
        ],
        phrase: [
            "What does intelligence mean to you?",
            "Have you ever wondered how sad affects us?",
            "Tell me your thoughts on intelligence."
        ]
    },
    {
        key: [
            "love",
            "language"
        ],
        phrase: [
            "Can you imagine life without love?",
            "What do you think about language?",
            "Language is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "death"
        ],
        phrase: [
            "What does death mean to you?",
            "Let's talk about death.",
            "How do you feel about death?"
        ]
    },
    {
        key: [
            "sports",
            "talk"
        ],
        phrase: [
            "Let's talk about sports.",
            "What do you think about talk?",
            "What does sports mean to you?"
        ]
    },
    {
        key: [
            "travel",
            "coffee",
            "money"
        ],
        phrase: [
            "What do you think about money?",
            "Let's talk about coffee.",
            "What do you think about coffee?"
        ]
    },
    {
        key: [
            "holiday"
        ],
        phrase: [
            "Holiday is fascinating, isn't it?",
            "Let's talk about holiday.",
            "Why is holiday important to you?"
        ]
    },
    {
        key: [
            "AI"
        ],
        phrase: [
            "Have you ever wondered how AI affects us?",
            "Is AI overrated or underrated?",
            "Ai is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "cat",
            "emotion"
        ],
        phrase: [
            "Let's talk about emotion.",
            "Tell me your thoughts on emotion.",
            "Emotion is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "dream"
        ],
        phrase: [
            "Have you ever wondered how dream affects us?",
            "What do you think about dream?",
            "Can you imagine life without dream?"
        ]
    },
    {
        key: [
            "intelligence",
            "love"
        ],
        phrase: [
            "What does intelligence mean to you?",
            "Intelligence is fascinating, isn't it?",
            "Have you ever wondered how love affects us?"
        ]
    },
    {
        key: [
            "dream",
            "movie",
            "AI"
        ],
        phrase: [
            "Why is dream important to you?",
            "What do you think about AI?",
            "How do you feel about movie?"
        ]
    },
    {
        key: [
            "dream",
            "money"
        ],
        phrase: [
            "What does dream mean to you?",
            "What do you think about money?",
            "How do you feel about money?"
        ]
    },
    {
        key: [
            "sleep",
            "emotion"
        ],
        phrase: [
            "Tell me your thoughts on sleep.",
            "What do you think about sleep?",
            "What does emotion mean to you?"
        ]
    },
    {
        key: [
            "happy",
            "holiday",
            "weather"
        ],
        phrase: [
            "How do you feel about weather?",
            "How do you feel about holiday?",
            "What do you think about happy?"
        ]
    },
    {
        key: [
            "work"
        ],
        phrase: [
            "What does work mean to you?",
            "Can you imagine life without work?",
            "Is work overrated or underrated?"
        ]
    },
    {
        key: [
            "talk",
            "holiday",
            "money"
        ],
        phrase: [
            "Is money overrated or underrated?",
            "Tell me your thoughts on holiday.",
            "Let's talk about money."
        ]
    },
    {
        key: [
            "future",
            "money"
        ],
        phrase: [
            "Is money overrated or underrated?",
            "Have you ever wondered how future affects us?",
            "How do you feel about money?"
        ]
    },
    {
        key: [
            "dream",
            "love"
        ],
        phrase: [
            "What do you think about dream?",
            "Why is love important to you?",
            "Is love overrated or underrated?"
        ]
    },
    {
        key: [
            "game"
        ],
        phrase: [
            "Game is fascinating, isn't it?",
            "Let's talk about game.",
            "Can you imagine life without game?"
        ]
    },
    {
        key: [
            "politics"
        ],
        phrase: [
            "Can you imagine life without politics?",
            "Let's talk about politics.",
            "Politics is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "AI",
            "money",
            "robot"
        ],
        phrase: [
            "What do you think about AI?",
            "Is robot overrated or underrated?",
            "What do you think about money?"
        ]
    },
    {
        key: [
            "sports",
            "emotion"
        ],
        phrase: [
            "Why is emotion important to you?",
            "Can you imagine life without sports?",
            "Can you imagine life without emotion?"
        ]
    },
    {
        key: [
            "happy",
            "dream",
            "school"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "What do you think about happy?",
            "What does school mean to you?"
        ]
    },
    {
        key: [
            "art",
            "language",
            "work"
        ],
        phrase: [
            "What does work mean to you?",
            "Is art overrated or underrated?",
            "Tell me your thoughts on language."
        ]
    },
    {
        key: [
            "exam",
            "nature",
            "future"
        ],
        phrase: [
            "Why is exam important to you?",
            "Have you ever wondered how exam affects us?",
            "Have you ever wondered how nature affects us?"
        ]
    },
    {
        key: [
            "life"
        ],
        phrase: [
            "Have you ever wondered how life affects us?",
            "Is life overrated or underrated?",
            "Can you imagine life without life?"
        ]
    },
    {
        key: [
            "crime"
        ],
        phrase: [
            "Crime is fascinating, isn't it?",
            "Is crime overrated or underrated?",
            "How do you feel about crime?"
        ]
    },
    {
        key: [
            "weather",
            "holiday",
            "movie"
        ],
        phrase: [
            "How do you feel about holiday?",
            "Weather is fascinating, isn't it?",
            "Is holiday overrated or underrated?"
        ]
    },
    {
        key: [
            "language",
            "movie"
        ],
        phrase: [
            "What do you think about movie?",
            "How do you feel about movie?",
            "Why is language important to you?"
        ]
    },
    {
        key: [
            "beauty",
            "sad",
            "friend"
        ],
        phrase: [
            "Tell me your thoughts on friend.",
            "Is sad overrated or underrated?",
            "Let's talk about sad."
        ]
    },
    {
        key: [
            "crime"
        ],
        phrase: [
            "Can you imagine life without crime?",
            "Let's talk about crime.",
            "Is crime overrated or underrated?"
        ]
    },
    {
        key: [
            "nature",
            "happy"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "What do you think about happy?",
            "Why is nature important to you?"
        ]
    },
    {
        key: [
            "love",
            "holiday",
            "movie"
        ],
        phrase: [
            "What do you think about movie?",
            "What do you think about holiday?",
            "Is holiday overrated or underrated?"
        ]
    },
    {
        key: [
            "coffee",
            "exam"
        ],
        phrase: [
            "Is exam overrated or underrated?",
            "How do you feel about exam?",
            "Let's talk about coffee."
        ]
    },
    {
        key: [
            "book",
            "talk",
            "technology"
        ],
        phrase: [
            "Why is technology important to you?",
            "Technology is fascinating, isn't it?",
            "Let's talk about book."
        ]
    },
    {
        key: [
            "computer"
        ],
        phrase: [
            "Is computer overrated or underrated?",
            "Have you ever wondered how computer affects us?",
            "Let's talk about computer."
        ]
    },
    {
        key: [
            "sports",
            "fear",
            "family"
        ],
        phrase: [
            "Let's talk about sports.",
            "Is sports overrated or underrated?",
            "What does family mean to you?"
        ]
    },
    {
        key: [
            "politics",
            "weather",
            "friend"
        ],
        phrase: [
            "Why is politics important to you?",
            "Why is friend important to you?",
            "What does weather mean to you?"
        ]
    },
    {
        key: [
            "book",
            "truth"
        ],
        phrase: [
            "Tell me your thoughts on book.",
            "Have you ever wondered how truth affects us?",
            "Can you imagine life without truth?"
        ]
    },
    {
        key: [
            "robot"
        ],
        phrase: [
            "How do you feel about robot?",
            "Can you imagine life without robot?",
            "Robot is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "war",
            "future",
            "history"
        ],
        phrase: [
            "What do you think about war?",
            "Have you ever wondered how war affects us?",
            "How do you feel about war?"
        ]
    },
    {
        key: [
            "art"
        ],
        phrase: [
            "Let's talk about art.",
            "Tell me your thoughts on art.",
            "What do you think about art?"
        ]
    },
    {
        key: [
            "freedom",
            "future",
            "work"
        ],
        phrase: [
            "Let's talk about freedom.",
            "Have you ever wondered how freedom affects us?",
            "Tell me your thoughts on future."
        ]
    },
    {
        key: [
            "AI",
            "cat",
            "nature"
        ],
        phrase: [
            "Can you imagine life without AI?",
            "What does cat mean to you?",
            "Let's talk about nature."
        ]
    },
    {
        key: [
            "religion",
            "movie"
        ],
        phrase: [
            "Have you ever wondered how religion affects us?",
            "Let's talk about movie.",
            "Is movie overrated or underrated?"
        ]
    },
    {
        key: [
            "dream",
            "work"
        ],
        phrase: [
            "What do you think about dream?",
            "What does dream mean to you?",
            "Let's talk about dream."
        ]
    },
    {
        key: [
            "happy"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "Tell me your thoughts on happy.",
            "Can you imagine life without happy?"
        ]
    },
    {
        key: [
            "war",
            "AI"
        ],
        phrase: [
            "Let's talk about war.",
            "Is war overrated or underrated?",
            "Why is AI important to you?"
        ]
    },
    {
        key: [
            "family",
            "beauty",
            "art"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "Is family overrated or underrated?",
            "Can you imagine life without art?"
        ]
    },
    {
        key: [
            "science"
        ],
        phrase: [
            "Why is science important to you?",
            "What does science mean to you?",
            "Is science overrated or underrated?"
        ]
    },
    {
        key: [
            "talk",
            "code"
        ],
        phrase: [
            "Have you ever wondered how code affects us?",
            "What do you think about code?",
            "Why is code important to you?"
        ]
    },
    {
        key: [
            "book",
            "science"
        ],
        phrase: [
            "Is science overrated or underrated?",
            "Let's talk about book.",
            "Science is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "freedom",
            "code"
        ],
        phrase: [
            "Have you ever wondered how freedom affects us?",
            "How do you feel about freedom?",
            "Why is code important to you?"
        ]
    },
    {
        key: [
            "weather",
            "death",
            "school"
        ],
        phrase: [
            "Tell me your thoughts on death.",
            "Weather is fascinating, isn't it?",
            "Is school overrated or underrated?"
        ]
    },
    {
        key: [
            "language",
            "internet",
            "politics"
        ],
        phrase: [
            "Internet is fascinating, isn't it?",
            "What does politics mean to you?",
            "What does internet mean to you?"
        ]
    },
    {
        key: [
            "weather",
            "sad",
            "sports"
        ],
        phrase: [
            "How do you feel about weather?",
            "Can you imagine life without sports?",
            "Can you imagine life without sad?"
        ]
    },
    {
        key: [
            "city",
            "dog"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "Tell me your thoughts on city.",
            "Is city overrated or underrated?"
        ]
    },
    {
        key: [
            "dog",
            "beauty"
        ],
        phrase: [
            "What does dog mean to you?",
            "Is beauty overrated or underrated?",
            "What do you think about dog?"
        ]
    },
    {
        key: [
            "travel",
            "friend",
            "crime"
        ],
        phrase: [
            "Why is travel important to you?",
            "Tell me your thoughts on friend.",
            "Tell me your thoughts on crime."
        ]
    },
    {
        key: [
            "movie"
        ],
        phrase: [
            "Can you imagine life without movie?",
            "Movie is fascinating, isn't it?",
            "Have you ever wondered how movie affects us?"
        ]
    },
    {
        key: [
            "game"
        ],
        phrase: [
            "Can you imagine life without game?",
            "How do you feel about game?",
            "What does game mean to you?"
        ]
    },
    {
        key: [
            "weather",
            "food",
            "AI"
        ],
        phrase: [
            "Why is weather important to you?",
            "Tell me your thoughts on food.",
            "Why is food important to you?"
        ]
    },
    {
        key: [
            "sleep",
            "emotion",
            "war"
        ],
        phrase: [
            "How do you feel about sleep?",
            "What does sleep mean to you?",
            "Let's talk about war."
        ]
    },
    {
        key: [
            "war"
        ],
        phrase: [
            "What do you think about war?",
            "War is fascinating, isn't it?",
            "Have you ever wondered how war affects us?"
        ]
    },
    {
        key: [
            "death"
        ],
        phrase: [
            "Death is fascinating, isn't it?",
            "Let's talk about death.",
            "Can you imagine life without death?"
        ]
    },
    {
        key: [
            "art"
        ],
        phrase: [
            "Why is art important to you?",
            "Tell me your thoughts on art.",
            "Art is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "sleep",
            "happy",
            "politics"
        ],
        phrase: [
            "What does sleep mean to you?",
            "What do you think about politics?",
            "Have you ever wondered how happy affects us?"
        ]
    },
    {
        key: [
            "truth",
            "nature"
        ],
        phrase: [
            "What does truth mean to you?",
            "What do you think about truth?",
            "How do you feel about truth?"
        ]
    },
    {
        key: [
            "future"
        ],
        phrase: [
            "Have you ever wondered how future affects us?",
            "Tell me your thoughts on future.",
            "How do you feel about future?"
        ]
    },
    {
        key: [
            "intelligence",
            "beauty"
        ],
        phrase: [
            "Tell me your thoughts on intelligence.",
            "Why is intelligence important to you?",
            "Tell me your thoughts on beauty."
        ]
    },
    {
        key: [
            "robot"
        ],
        phrase: [
            "What do you think about robot?",
            "Tell me your thoughts on robot.",
            "Can you imagine life without robot?"
        ]
    },
    {
        key: [
            "politics"
        ],
        phrase: [
            "Why is politics important to you?",
            "Can you imagine life without politics?",
            "Let's talk about politics."
        ]
    },
    {
        key: [
            "emotion",
            "game",
            "art"
        ],
        phrase: [
            "Why is emotion important to you?",
            "Tell me your thoughts on art.",
            "Can you imagine life without emotion?"
        ]
    },
    {
        key: [
            "history",
            "internet"
        ],
        phrase: [
            "Internet is fascinating, isn't it?",
            "What does internet mean to you?",
            "Can you imagine life without internet?"
        ]
    },
    {
        key: [
            "weather",
            "emotion",
            "death"
        ],
        phrase: [
            "Let's talk about emotion.",
            "Why is death important to you?",
            "What does emotion mean to you?"
        ]
    },
    {
        key: [
            "love",
            "history"
        ],
        phrase: [
            "Can you imagine life without love?",
            "What do you think about history?",
            "Let's talk about history."
        ]
    },
    {
        key: [
            "code",
            "crime",
            "holiday"
        ],
        phrase: [
            "Let's talk about crime.",
            "What do you think about code?",
            "How do you feel about code?"
        ]
    },
    {
        key: [
            "cat",
            "science"
        ],
        phrase: [
            "What does science mean to you?",
            "Have you ever wondered how cat affects us?",
            "What does cat mean to you?"
        ]
    },
    {
        key: [
            "health",
            "movie"
        ],
        phrase: [
            "Movie is fascinating, isn't it?",
            "Have you ever wondered how movie affects us?",
            "What does health mean to you?"
        ]
    },
    {
        key: [
            "history"
        ],
        phrase: [
            "What does history mean to you?",
            "Tell me your thoughts on history.",
            "Why is history important to you?"
        ]
    },
    {
        key: [
            "family",
            "love"
        ],
        phrase: [
            "Can you imagine life without love?",
            "How do you feel about love?",
            "Family is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "love",
            "death",
            "school"
        ],
        phrase: [
            "Why is death important to you?",
            "Have you ever wondered how love affects us?",
            "Why is school important to you?"
        ]
    },
    {
        key: [
            "money",
            "dog"
        ],
        phrase: [
            "What do you think about money?",
            "Can you imagine life without money?",
            "Dog is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "future",
            "weather",
            "code"
        ],
        phrase: [
            "Tell me your thoughts on future.",
            "Why is code important to you?",
            "How do you feel about code?"
        ]
    },
    {
        key: [
            "fear"
        ],
        phrase: [
            "What do you think about fear?",
            "Tell me your thoughts on fear.",
            "Why is fear important to you?"
        ]
    },
    {
        key: [
            "health",
            "weather"
        ],
        phrase: [
            "How do you feel about weather?",
            "What do you think about health?",
            "Let's talk about health."
        ]
    },
    {
        key: [
            "crime",
            "computer"
        ],
        phrase: [
            "Let's talk about crime.",
            "Can you imagine life without crime?",
            "Tell me your thoughts on computer."
        ]
    },
    {
        key: [
            "science",
            "school"
        ],
        phrase: [
            "What does science mean to you?",
            "Can you imagine life without school?",
            "What do you think about school?"
        ]
    },
    {
        key: [
            "school",
            "work",
            "beauty"
        ],
        phrase: [
            "Tell me your thoughts on school.",
            "How do you feel about school?",
            "Can you imagine life without beauty?"
        ]
    },
    {
        key: [
            "intelligence"
        ],
        phrase: [
            "Intelligence is fascinating, isn't it?",
            "What does intelligence mean to you?",
            "Is intelligence overrated or underrated?"
        ]
    },
    {
        key: [
            "code",
            "love",
            "computer"
        ],
        phrase: [
            "How do you feel about love?",
            "How do you feel about code?",
            "Have you ever wondered how love affects us?"
        ]
    },
    {
        key: [
            "freedom"
        ],
        phrase: [
            "Let's talk about freedom.",
            "Tell me your thoughts on freedom.",
            "Can you imagine life without freedom?"
        ]
    },
    {
        key: [
            "happy",
            "crime"
        ],
        phrase: [
            "What do you think about happy?",
            "Let's talk about crime.",
            "Tell me your thoughts on crime."
        ]
    },
    {
        key: [
            "history"
        ],
        phrase: [
            "What does history mean to you?",
            "Have you ever wondered how history affects us?",
            "Let's talk about history."
        ]
    },
    {
        key: [
            "school"
        ],
        phrase: [
            "Let's talk about school.",
            "How do you feel about school?",
            "Why is school important to you?"
        ]
    },
    {
        key: [
            "coffee",
            "love",
            "fear"
        ],
        phrase: [
            "Can you imagine life without love?",
            "Why is love important to you?",
            "How do you feel about fear?"
        ]
    },
    {
        key: [
            "family",
            "freedom",
            "sad"
        ],
        phrase: [
            "Can you imagine life without freedom?",
            "How do you feel about freedom?",
            "Have you ever wondered how sad affects us?"
        ]
    },
    {
        key: [
            "school",
            "book",
            "money"
        ],
        phrase: [
            "Is money overrated or underrated?",
            "Book is fascinating, isn't it?",
            "Tell me your thoughts on book."
        ]
    },
    {
        key: [
            "movie",
            "book"
        ],
        phrase: [
            "Tell me your thoughts on book.",
            "How do you feel about movie?",
            "Have you ever wondered how movie affects us?"
        ]
    },
    {
        key: [
            "exam",
            "technology",
            "nature"
        ],
        phrase: [
            "What do you think about exam?",
            "Nature is fascinating, isn't it?",
            "Is technology overrated or underrated?"
        ]
    },
    {
        key: [
            "dog",
            "crime"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "Let's talk about dog.",
            "Dog is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "work",
            "life",
            "health"
        ],
        phrase: [
            "What does work mean to you?",
            "Tell me your thoughts on work.",
            "What does health mean to you?"
        ]
    },
    {
        key: [
            "internet",
            "freedom",
            "science"
        ],
        phrase: [
            "Internet is fascinating, isn't it?",
            "Is science overrated or underrated?",
            "Have you ever wondered how internet affects us?"
        ]
    },
    {
        key: [
            "food",
            "city",
            "coffee"
        ],
        phrase: [
            "Is coffee overrated or underrated?",
            "Why is food important to you?",
            "City is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "death",
            "future",
            "nature"
        ],
        phrase: [
            "Tell me your thoughts on future.",
            "Why is nature important to you?",
            "Can you imagine life without nature?"
        ]
    },
    {
        key: [
            "sleep",
            "sports",
            "truth"
        ],
        phrase: [
            "Tell me your thoughts on sleep.",
            "What do you think about sleep?",
            "Let's talk about sports."
        ]
    },
    {
        key: [
            "coffee"
        ],
        phrase: [
            "Coffee is fascinating, isn't it?",
            "How do you feel about coffee?",
            "Let's talk about coffee."
        ]
    },
    {
        key: [
            "life"
        ],
        phrase: [
            "Why is life important to you?",
            "How do you feel about life?",
            "What do you think about life?"
        ]
    },
    {
        key: [
            "intelligence",
            "computer",
            "family"
        ],
        phrase: [
            "How do you feel about intelligence?",
            "Intelligence is fascinating, isn't it?",
            "Tell me your thoughts on intelligence."
        ]
    },
    {
        key: [
            "happy",
            "money",
            "movie"
        ],
        phrase: [
            "What do you think about movie?",
            "Is happy overrated or underrated?",
            "Is money overrated or underrated?"
        ]
    },
    {
        key: [
            "family",
            "nature",
            "music"
        ],
        phrase: [
            "Let's talk about nature.",
            "Can you imagine life without nature?",
            "Music is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "book"
        ],
        phrase: [
            "What does book mean to you?",
            "How do you feel about book?",
            "Tell me your thoughts on book."
        ]
    },
    {
        key: [
            "book",
            "exam"
        ],
        phrase: [
            "Is exam overrated or underrated?",
            "Let's talk about book.",
            "What do you think about exam?"
        ]
    },
    {
        key: [
            "exam",
            "dream"
        ],
        phrase: [
            "Why is exam important to you?",
            "Why is dream important to you?",
            "Tell me your thoughts on exam."
        ]
    },
    {
        key: [
            "dream",
            "weather"
        ],
        phrase: [
            "Why is dream important to you?",
            "Dream is fascinating, isn't it?",
            "Can you imagine life without weather?"
        ]
    },
    {
        key: [
            "history",
            "technology",
            "nature"
        ],
        phrase: [
            "Why is technology important to you?",
            "Tell me your thoughts on history.",
            "Have you ever wondered how technology affects us?"
        ]
    },
    {
        key: [
            "music"
        ],
        phrase: [
            "What do you think about music?",
            "What does music mean to you?",
            "Can you imagine life without music?"
        ]
    },
    {
        key: [
            "art",
            "internet",
            "sad"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "Let's talk about internet.",
            "Is art overrated or underrated?"
        ]
    },
    {
        key: [
            "robot",
            "science"
        ],
        phrase: [
            "What does robot mean to you?",
            "Is robot overrated or underrated?",
            "Tell me your thoughts on robot."
        ]
    },
    {
        key: [
            "technology",
            "AI",
            "religion"
        ],
        phrase: [
            "Why is technology important to you?",
            "Have you ever wondered how technology affects us?",
            "What do you think about AI?"
        ]
    },
    {
        key: [
            "travel"
        ],
        phrase: [
            "What does travel mean to you?",
            "Can you imagine life without travel?",
            "Let's talk about travel."
        ]
    },
    {
        key: [
            "death",
            "internet"
        ],
        phrase: [
            "Why is internet important to you?",
            "Have you ever wondered how internet affects us?",
            "What do you think about internet?"
        ]
    },
    {
        key: [
            "sleep",
            "life",
            "music"
        ],
        phrase: [
            "What do you think about music?",
            "How do you feel about life?",
            "Tell me your thoughts on music."
        ]
    },
    {
        key: [
            "weather"
        ],
        phrase: [
            "Why is weather important to you?",
            "Weather is fascinating, isn't it?",
            "Is weather overrated or underrated?"
        ]
    },
    {
        key: [
            "war"
        ],
        phrase: [
            "How do you feel about war?",
            "War is fascinating, isn't it?",
            "Tell me your thoughts on war."
        ]
    },
    {
        key: [
            "coffee",
            "emotion",
            "religion"
        ],
        phrase: [
            "Is coffee overrated or underrated?",
            "What do you think about religion?",
            "Let's talk about religion."
        ]
    },
    {
        key: [
            "book"
        ],
        phrase: [
            "Is book overrated or underrated?",
            "Why is book important to you?",
            "Let's talk about book."
        ]
    },
    {
        key: [
            "politics",
            "sports"
        ],
        phrase: [
            "Tell me your thoughts on politics.",
            "Why is politics important to you?",
            "Is sports overrated or underrated?"
        ]
    },
    {
        key: [
            "death",
            "happy"
        ],
        phrase: [
            "What do you think about happy?",
            "What does happy mean to you?",
            "Let's talk about death."
        ]
    },
    {
        key: [
            "science",
            "dog",
            "life"
        ],
        phrase: [
            "What does science mean to you?",
            "What does dog mean to you?",
            "Why is dog important to you?"
        ]
    },
    {
        key: [
            "sports",
            "religion",
            "science"
        ],
        phrase: [
            "Let's talk about sports.",
            "Science is fascinating, isn't it?",
            "How do you feel about sports?"
        ]
    },
    {
        key: [
            "city",
            "AI",
            "religion"
        ],
        phrase: [
            "What do you think about religion?",
            "Let's talk about religion.",
            "What does religion mean to you?"
        ]
    },
    {
        key: [
            "politics",
            "holiday",
            "death"
        ],
        phrase: [
            "Tell me your thoughts on politics.",
            "Death is fascinating, isn't it?",
            "Let's talk about holiday."
        ]
    },
    {
        key: [
            "beauty",
            "science",
            "money"
        ],
        phrase: [
            "Beauty is fascinating, isn't it?",
            "Have you ever wondered how money affects us?",
            "What does science mean to you?"
        ]
    },
    {
        key: [
            "computer",
            "code"
        ],
        phrase: [
            "What do you think about code?",
            "Is code overrated or underrated?",
            "Is computer overrated or underrated?"
        ]
    },
    {
        key: [
            "coffee",
            "history"
        ],
        phrase: [
            "What do you think about history?",
            "Tell me your thoughts on coffee.",
            "Can you imagine life without coffee?"
        ]
    },
    {
        key: [
            "religion",
            "emotion"
        ],
        phrase: [
            "Emotion is fascinating, isn't it?",
            "Why is religion important to you?",
            "Have you ever wondered how emotion affects us?"
        ]
    },
    {
        key: [
            "cat"
        ],
        phrase: [
            "Is cat overrated or underrated?",
            "Can you imagine life without cat?",
            "Why is cat important to you?"
        ]
    },
    {
        key: [
            "sleep",
            "religion",
            "crime"
        ],
        phrase: [
            "What does sleep mean to you?",
            "Have you ever wondered how religion affects us?",
            "Let's talk about religion."
        ]
    },
    {
        key: [
            "sad",
            "sports",
            "movie"
        ],
        phrase: [
            "Why is sports important to you?",
            "Have you ever wondered how sad affects us?",
            "Is sports overrated or underrated?"
        ]
    },
    {
        key: [
            "music",
            "friend",
            "talk"
        ],
        phrase: [
            "Tell me your thoughts on friend.",
            "What does talk mean to you?",
            "Can you imagine life without talk?"
        ]
    },
    {
        key: [
            "crime",
            "coffee"
        ],
        phrase: [
            "Is coffee overrated or underrated?",
            "Let's talk about crime.",
            "Can you imagine life without coffee?"
        ]
    },
    {
        key: [
            "dream",
            "code"
        ],
        phrase: [
            "What do you think about dream?",
            "What do you think about code?",
            "Let's talk about dream."
        ]
    },
    {
        key: [
            "AI"
        ],
        phrase: [
            "Let's talk about AI.",
            "Why is AI important to you?",
            "Have you ever wondered how AI affects us?"
        ]
    },
    {
        key: [
            "holiday"
        ],
        phrase: [
            "Is holiday overrated or underrated?",
            "Can you imagine life without holiday?",
            "Tell me your thoughts on holiday."
        ]
    },
    {
        key: [
            "sad",
            "exam"
        ],
        phrase: [
            "Have you ever wondered how exam affects us?",
            "What does sad mean to you?",
            "How do you feel about exam?"
        ]
    },
    {
        key: [
            "sad",
            "beauty"
        ],
        phrase: [
            "Can you imagine life without sad?",
            "What do you think about beauty?",
            "Have you ever wondered how beauty affects us?"
        ]
    },
    {
        key: [
            "city",
            "technology",
            "coffee"
        ],
        phrase: [
            "Have you ever wondered how technology affects us?",
            "Technology is fascinating, isn't it?",
            "Is technology overrated or underrated?"
        ]
    },
    {
        key: [
            "art"
        ],
        phrase: [
            "Let's talk about art.",
            "Can you imagine life without art?",
            "What does art mean to you?"
        ]
    },
    {
        key: [
            "nature",
            "history"
        ],
        phrase: [
            "What do you think about history?",
            "Let's talk about nature.",
            "Can you imagine life without nature?"
        ]
    },
    {
        key: [
            "future"
        ],
        phrase: [
            "Have you ever wondered how future affects us?",
            "What does future mean to you?",
            "Tell me your thoughts on future."
        ]
    },
    {
        key: [
            "talk",
            "robot"
        ],
        phrase: [
            "What does robot mean to you?",
            "What do you think about robot?",
            "Tell me your thoughts on talk."
        ]
    },
    {
        key: [
            "book",
            "dream"
        ],
        phrase: [
            "What do you think about dream?",
            "Book is fascinating, isn't it?",
            "What does book mean to you?"
        ]
    },
    {
        key: [
            "beauty"
        ],
        phrase: [
            "Tell me your thoughts on beauty.",
            "Let's talk about beauty.",
            "Have you ever wondered how beauty affects us?"
        ]
    },
    {
        key: [
            "fear",
            "sports"
        ],
        phrase: [
            "Let's talk about sports.",
            "What does fear mean to you?",
            "Have you ever wondered how sports affects us?"
        ]
    },
    {
        key: [
            "intelligence"
        ],
        phrase: [
            "Intelligence is fascinating, isn't it?",
            "What does intelligence mean to you?",
            "Is intelligence overrated or underrated?"
        ]
    },
    {
        key: [
            "coffee"
        ],
        phrase: [
            "Is coffee overrated or underrated?",
            "Have you ever wondered how coffee affects us?",
            "Let's talk about coffee."
        ]
    },
    {
        key: [
            "crime",
            "friend",
            "art"
        ],
        phrase: [
            "Tell me your thoughts on crime.",
            "Why is crime important to you?",
            "Why is friend important to you?"
        ]
    },
    {
        key: [
            "sports"
        ],
        phrase: [
            "Have you ever wondered how sports affects us?",
            "Tell me your thoughts on sports.",
            "How do you feel about sports?"
        ]
    },
    {
        key: [
            "war",
            "freedom",
            "fear"
        ],
        phrase: [
            "Let's talk about freedom.",
            "What do you think about fear?",
            "How do you feel about fear?"
        ]
    },
    {
        key: [
            "movie"
        ],
        phrase: [
            "What do you think about movie?",
            "Let's talk about movie.",
            "How do you feel about movie?"
        ]
    },
    {
        key: [
            "holiday",
            "friend",
            "AI"
        ],
        phrase: [
            "Tell me your thoughts on friend.",
            "Holiday is fascinating, isn't it?",
            "What do you think about AI?"
        ]
    },
    {
        key: [
            "exam",
            "AI"
        ],
        phrase: [
            "Have you ever wondered how exam affects us?",
            "Why is exam important to you?",
            "What does AI mean to you?"
        ]
    },
    {
        key: [
            "science"
        ],
        phrase: [
            "Have you ever wondered how science affects us?",
            "Is science overrated or underrated?",
            "Why is science important to you?"
        ]
    },
    {
        key: [
            "technology",
            "music",
            "code"
        ],
        phrase: [
            "Have you ever wondered how technology affects us?",
            "Have you ever wondered how code affects us?",
            "Have you ever wondered how music affects us?"
        ]
    },
    {
        key: [
            "talk",
            "love"
        ],
        phrase: [
            "Tell me your thoughts on talk.",
            "How do you feel about love?",
            "Have you ever wondered how love affects us?"
        ]
    },
    {
        key: [
            "game"
        ],
        phrase: [
            "Game is fascinating, isn't it?",
            "How do you feel about game?",
            "Have you ever wondered how game affects us?"
        ]
    },
    {
        key: [
            "food",
            "art"
        ],
        phrase: [
            "Food is fascinating, isn't it?",
            "Let's talk about food.",
            "Can you imagine life without art?"
        ]
    },
    {
        key: [
            "intelligence"
        ],
        phrase: [
            "Intelligence is fascinating, isn't it?",
            "Can you imagine life without intelligence?",
            "Is intelligence overrated or underrated?"
        ]
    },
    {
        key: [
            "language",
            "intelligence"
        ],
        phrase: [
            "What do you think about language?",
            "What do you think about intelligence?",
            "Language is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "sleep",
            "dream",
            "crime"
        ],
        phrase: [
            "What does sleep mean to you?",
            "Why is dream important to you?",
            "How do you feel about crime?"
        ]
    },
    {
        key: [
            "AI"
        ],
        phrase: [
            "Tell me your thoughts on AI.",
            "Is AI overrated or underrated?",
            "What do you think about AI?"
        ]
    },
    {
        key: [
            "health",
            "future",
            "music"
        ],
        phrase: [
            "Why is music important to you?",
            "Have you ever wondered how future affects us?",
            "What does music mean to you?"
        ]
    },
    {
        key: [
            "music",
            "technology",
            "intelligence"
        ],
        phrase: [
            "How do you feel about intelligence?",
            "What does intelligence mean to you?",
            "Is technology overrated or underrated?"
        ]
    },
    {
        key: [
            "sleep",
            "internet"
        ],
        phrase: [
            "How do you feel about internet?",
            "What do you think about sleep?",
            "Why is internet important to you?"
        ]
    },
    {
        key: [
            "science"
        ],
        phrase: [
            "How do you feel about science?",
            "Can you imagine life without science?",
            "Is science overrated or underrated?"
        ]
    },
    {
        key: [
            "sleep"
        ],
        phrase: [
            "Tell me your thoughts on sleep.",
            "Can you imagine life without sleep?",
            "Why is sleep important to you?"
        ]
    },
    {
        key: [
            "politics",
            "cat",
            "emotion"
        ],
        phrase: [
            "Tell me your thoughts on politics.",
            "What does politics mean to you?",
            "What do you think about politics?"
        ]
    },
    {
        key: [
            "AI",
            "sleep"
        ],
        phrase: [
            "Is sleep overrated or underrated?",
            "Ai is fascinating, isn't it?",
            "What does AI mean to you?"
        ]
    },
    {
        key: [
            "future"
        ],
        phrase: [
            "Tell me your thoughts on future.",
            "Future is fascinating, isn't it?",
            "Can you imagine life without future?"
        ]
    },
    {
        key: [
            "book"
        ],
        phrase: [
            "How do you feel about book?",
            "Can you imagine life without book?",
            "Let's talk about book."
        ]
    },
    {
        key: [
            "computer"
        ],
        phrase: [
            "Why is computer important to you?",
            "Can you imagine life without computer?",
            "How do you feel about computer?"
        ]
    },
    {
        key: [
            "friend",
            "coffee"
        ],
        phrase: [
            "Is coffee overrated or underrated?",
            "Tell me your thoughts on friend.",
            "What do you think about coffee?"
        ]
    },
    {
        key: [
            "beauty"
        ],
        phrase: [
            "Beauty is fascinating, isn't it?",
            "Let's talk about beauty.",
            "What do you think about beauty?"
        ]
    },
    {
        key: [
            "life",
            "crime"
        ],
        phrase: [
            "Can you imagine life without crime?",
            "Why is life important to you?",
            "Crime is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "life"
        ],
        phrase: [
            "How do you feel about life?",
            "What do you think about life?",
            "Life is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "school",
            "game"
        ],
        phrase: [
            "What does school mean to you?",
            "What do you think about school?",
            "What does game mean to you?"
        ]
    },
    {
        key: [
            "war",
            "beauty"
        ],
        phrase: [
            "What do you think about war?",
            "Beauty is fascinating, isn't it?",
            "Why is war important to you?"
        ]
    },
    {
        key: [
            "money",
            "emotion",
            "game"
        ],
        phrase: [
            "Why is emotion important to you?",
            "Have you ever wondered how money affects us?",
            "What do you think about emotion?"
        ]
    },
    {
        key: [
            "dream",
            "technology",
            "cat"
        ],
        phrase: [
            "Why is dream important to you?",
            "Have you ever wondered how cat affects us?",
            "Is technology overrated or underrated?"
        ]
    },
    {
        key: [
            "holiday"
        ],
        phrase: [
            "Have you ever wondered how holiday affects us?",
            "Can you imagine life without holiday?",
            "What do you think about holiday?"
        ]
    },
    {
        key: [
            "politics",
            "dog",
            "dream"
        ],
        phrase: [
            "Tell me your thoughts on politics.",
            "What does politics mean to you?",
            "Is politics overrated or underrated?"
        ]
    },
    {
        key: [
            "food",
            "dream"
        ],
        phrase: [
            "Tell me your thoughts on food.",
            "Food is fascinating, isn't it?",
            "What does dream mean to you?"
        ]
    },
    {
        key: [
            "weather",
            "sleep"
        ],
        phrase: [
            "How do you feel about weather?",
            "How do you feel about sleep?",
            "What does sleep mean to you?"
        ]
    },
    {
        key: [
            "AI",
            "fear",
            "death"
        ],
        phrase: [
            "How do you feel about fear?",
            "Tell me your thoughts on death.",
            "Can you imagine life without death?"
        ]
    },
    {
        key: [
            "internet"
        ],
        phrase: [
            "Internet is fascinating, isn't it?",
            "Why is internet important to you?",
            "Have you ever wondered how internet affects us?"
        ]
    },
    {
        key: [
            "work",
            "religion",
            "exam"
        ],
        phrase: [
            "Is exam overrated or underrated?",
            "Why is exam important to you?",
            "What does religion mean to you?"
        ]
    },
    {
        key: [
            "sleep",
            "talk"
        ],
        phrase: [
            "What does talk mean to you?",
            "Is sleep overrated or underrated?",
            "Why is talk important to you?"
        ]
    },
    {
        key: [
            "future"
        ],
        phrase: [
            "Tell me your thoughts on future.",
            "Why is future important to you?",
            "Can you imagine life without future?"
        ]
    },
    {
        key: [
            "holiday"
        ],
        phrase: [
            "How do you feel about holiday?",
            "What do you think about holiday?",
            "Tell me your thoughts on holiday."
        ]
    },
    {
        key: [
            "death"
        ],
        phrase: [
            "Death is fascinating, isn't it?",
            "Tell me your thoughts on death.",
            "Is death overrated or underrated?"
        ]
    },
    {
        key: [
            "game",
            "beauty",
            "school"
        ],
        phrase: [
            "Tell me your thoughts on game.",
            "What do you think about game?",
            "Let's talk about school."
        ]
    },
    {
        key: [
            "city",
            "truth"
        ],
        phrase: [
            "City is fascinating, isn't it?",
            "What do you think about truth?",
            "Truth is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "art",
            "crime"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "Let's talk about crime.",
            "Can you imagine life without art?"
        ]
    },
    {
        key: [
            "death"
        ],
        phrase: [
            "How do you feel about death?",
            "Have you ever wondered how death affects us?",
            "Is death overrated or underrated?"
        ]
    },
    {
        key: [
            "war"
        ],
        phrase: [
            "Why is war important to you?",
            "Can you imagine life without war?",
            "Let's talk about war."
        ]
    },
    {
        key: [
            "language"
        ],
        phrase: [
            "Let's talk about language.",
            "Language is fascinating, isn't it?",
            "Tell me your thoughts on language."
        ]
    },
    {
        key: [
            "dream",
            "love"
        ],
        phrase: [
            "What do you think about dream?",
            "Why is love important to you?",
            "Have you ever wondered how love affects us?"
        ]
    },
    {
        key: [
            "travel",
            "talk",
            "music"
        ],
        phrase: [
            "What does travel mean to you?",
            "Tell me your thoughts on talk.",
            "Why is music important to you?"
        ]
    },
    {
        key: [
            "talk",
            "coffee"
        ],
        phrase: [
            "Tell me your thoughts on talk.",
            "Tell me your thoughts on coffee.",
            "How do you feel about coffee?"
        ]
    },
    {
        key: [
            "movie",
            "history",
            "travel"
        ],
        phrase: [
            "Why is travel important to you?",
            "Movie is fascinating, isn't it?",
            "What do you think about history?"
        ]
    },
    {
        key: [
            "crime",
            "music",
            "game"
        ],
        phrase: [
            "Is game overrated or underrated?",
            "What does music mean to you?",
            "Why is crime important to you?"
        ]
    },
    {
        key: [
            "technology",
            "sports"
        ],
        phrase: [
            "Why is technology important to you?",
            "Why is sports important to you?",
            "Is sports overrated or underrated?"
        ]
    },
    {
        key: [
            "book",
            "religion",
            "food"
        ],
        phrase: [
            "Tell me your thoughts on food.",
            "Let's talk about book.",
            "Have you ever wondered how religion affects us?"
        ]
    },
    {
        key: [
            "art",
            "emotion"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "What does emotion mean to you?",
            "Can you imagine life without emotion?"
        ]
    },
    {
        key: [
            "exam"
        ],
        phrase: [
            "Let's talk about exam.",
            "Is exam overrated or underrated?",
            "Exam is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "coffee"
        ],
        phrase: [
            "What do you think about coffee?",
            "How do you feel about coffee?",
            "Have you ever wondered how coffee affects us?"
        ]
    },
    {
        key: [
            "travel",
            "sports",
            "religion"
        ],
        phrase: [
            "What do you think about religion?",
            "Religion is fascinating, isn't it?",
            "Tell me your thoughts on religion."
        ]
    },
    {
        key: [
            "family"
        ],
        phrase: [
            "Why is family important to you?",
            "What does family mean to you?",
            "What do you think about family?"
        ]
    },
    {
        key: [
            "movie"
        ],
        phrase: [
            "Let's talk about movie.",
            "Movie is fascinating, isn't it?",
            "Why is movie important to you?"
        ]
    },
    {
        key: [
            "sports",
            "dream"
        ],
        phrase: [
            "What does sports mean to you?",
            "What do you think about sports?",
            "Dream is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "talk",
            "science"
        ],
        phrase: [
            "Is science overrated or underrated?",
            "Science is fascinating, isn't it?",
            "Can you imagine life without talk?"
        ]
    },
    {
        key: [
            "holiday",
            "crime"
        ],
        phrase: [
            "Let's talk about crime.",
            "What do you think about holiday?",
            "Holiday is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "code"
        ],
        phrase: [
            "Tell me your thoughts on code.",
            "What do you think about code?",
            "Why is code important to you?"
        ]
    },
    {
        key: [
            "computer",
            "truth",
            "sad"
        ],
        phrase: [
            "Tell me your thoughts on truth.",
            "What do you think about computer?",
            "Why is sad important to you?"
        ]
    },
    {
        key: [
            "future",
            "sleep"
        ],
        phrase: [
            "Tell me your thoughts on future.",
            "What do you think about sleep?",
            "Have you ever wondered how future affects us?"
        ]
    },
    {
        key: [
            "fear",
            "food",
            "code"
        ],
        phrase: [
            "Tell me your thoughts on food.",
            "How do you feel about code?",
            "Let's talk about fear."
        ]
    },
    {
        key: [
            "truth",
            "crime",
            "school"
        ],
        phrase: [
            "Have you ever wondered how truth affects us?",
            "Tell me your thoughts on crime.",
            "Let's talk about school."
        ]
    },
    {
        key: [
            "war",
            "dog"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "How do you feel about war?",
            "Let's talk about dog."
        ]
    },
    {
        key: [
            "dog",
            "war"
        ],
        phrase: [
            "How do you feel about war?",
            "Why is war important to you?",
            "Why is dog important to you?"
        ]
    },
    {
        key: [
            "exam",
            "death",
            "music"
        ],
        phrase: [
            "Have you ever wondered how exam affects us?",
            "Why is exam important to you?",
            "Tell me your thoughts on death."
        ]
    },
    {
        key: [
            "intelligence",
            "internet"
        ],
        phrase: [
            "What does intelligence mean to you?",
            "Is intelligence overrated or underrated?",
            "Why is internet important to you?"
        ]
    },
    {
        key: [
            "internet",
            "art"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "What does internet mean to you?",
            "How do you feel about internet?"
        ]
    },
    {
        key: [
            "nature"
        ],
        phrase: [
            "Tell me your thoughts on nature.",
            "What do you think about nature?",
            "Is nature overrated or underrated?"
        ]
    },
    {
        key: [
            "sports",
            "work",
            "friend"
        ],
        phrase: [
            "What do you think about work?",
            "Is work overrated or underrated?",
            "What does work mean to you?"
        ]
    },
    {
        key: [
            "internet",
            "holiday"
        ],
        phrase: [
            "How do you feel about holiday?",
            "Holiday is fascinating, isn't it?",
            "Can you imagine life without internet?"
        ]
    },
    {
        key: [
            "technology"
        ],
        phrase: [
            "Technology is fascinating, isn't it?",
            "What do you think about technology?",
            "Can you imagine life without technology?"
        ]
    },
    {
        key: [
            "book",
            "AI"
        ],
        phrase: [
            "What do you think about AI?",
            "Tell me your thoughts on book.",
            "What does book mean to you?"
        ]
    },
    {
        key: [
            "history"
        ],
        phrase: [
            "How do you feel about history?",
            "Is history overrated or underrated?",
            "Why is history important to you?"
        ]
    },
    {
        key: [
            "internet",
            "intelligence",
            "happy"
        ],
        phrase: [
            "How do you feel about intelligence?",
            "What does intelligence mean to you?",
            "How do you feel about internet?"
        ]
    },
    {
        key: [
            "money",
            "book",
            "holiday"
        ],
        phrase: [
            "What do you think about book?",
            "What do you think about holiday?",
            "Let's talk about holiday."
        ]
    },
    {
        key: [
            "art",
            "war",
            "beauty"
        ],
        phrase: [
            "Tell me your thoughts on art.",
            "What does war mean to you?",
            "How do you feel about war?"
        ]
    },
    {
        key: [
            "weather",
            "coffee"
        ],
        phrase: [
            "How do you feel about weather?",
            "Let's talk about coffee.",
            "What does coffee mean to you?"
        ]
    },
    {
        key: [
            "work",
            "fear",
            "internet"
        ],
        phrase: [
            "Is work overrated or underrated?",
            "Why is internet important to you?",
            "Why is fear important to you?"
        ]
    },
    {
        key: [
            "technology",
            "work",
            "money"
        ],
        phrase: [
            "Technology is fascinating, isn't it?",
            "Have you ever wondered how money affects us?",
            "Tell me your thoughts on technology."
        ]
    },
    {
        key: [
            "friend",
            "computer"
        ],
        phrase: [
            "Tell me your thoughts on computer.",
            "Is computer overrated or underrated?",
            "Is friend overrated or underrated?"
        ]
    },
    {
        key: [
            "dog",
            "sad",
            "friend"
        ],
        phrase: [
            "Have you ever wondered how sad affects us?",
            "Tell me your thoughts on friend.",
            "Why is friend important to you?"
        ]
    },
    {
        key: [
            "death",
            "movie",
            "family"
        ],
        phrase: [
            "Death is fascinating, isn't it?",
            "How do you feel about family?",
            "Tell me your thoughts on family."
        ]
    },
    {
        key: [
            "sleep"
        ],
        phrase: [
            "How do you feel about sleep?",
            "Let's talk about sleep.",
            "What do you think about sleep?"
        ]
    },
    {
        key: [
            "sleep",
            "future",
            "exam"
        ],
        phrase: [
            "What do you think about sleep?",
            "Let's talk about exam.",
            "Let's talk about sleep."
        ]
    },
    {
        key: [
            "death",
            "computer",
            "future"
        ],
        phrase: [
            "Death is fascinating, isn't it?",
            "How do you feel about death?",
            "What do you think about death?"
        ]
    },
    {
        key: [
            "death",
            "love"
        ],
        phrase: [
            "Tell me your thoughts on death.",
            "How do you feel about death?",
            "Is love overrated or underrated?"
        ]
    },
    {
        key: [
            "politics",
            "science",
            "technology"
        ],
        phrase: [
            "Technology is fascinating, isn't it?",
            "Is technology overrated or underrated?",
            "Have you ever wondered how politics affects us?"
        ]
    },
    {
        key: [
            "love",
            "work"
        ],
        phrase: [
            "Can you imagine life without love?",
            "What does work mean to you?",
            "Have you ever wondered how love affects us?"
        ]
    },
    {
        key: [
            "AI"
        ],
        phrase: [
            "What does AI mean to you?",
            "Why is AI important to you?",
            "Is AI overrated or underrated?"
        ]
    },
    {
        key: [
            "health"
        ],
        phrase: [
            "Why is health important to you?",
            "Is health overrated or underrated?",
            "How do you feel about health?"
        ]
    },
    {
        key: [
            "intelligence"
        ],
        phrase: [
            "Intelligence is fascinating, isn't it?",
            "Let's talk about intelligence.",
            "Have you ever wondered how intelligence affects us?"
        ]
    },
    {
        key: [
            "beauty",
            "fear"
        ],
        phrase: [
            "Beauty is fascinating, isn't it?",
            "How do you feel about fear?",
            "What do you think about beauty?"
        ]
    },
    {
        key: [
            "exam",
            "code"
        ],
        phrase: [
            "Is exam overrated or underrated?",
            "Can you imagine life without code?",
            "How do you feel about exam?"
        ]
    },
    {
        key: [
            "exam"
        ],
        phrase: [
            "Let's talk about exam.",
            "What does exam mean to you?",
            "What do you think about exam?"
        ]
    },
    {
        key: [
            "exam",
            "death"
        ],
        phrase: [
            "Tell me your thoughts on death.",
            "Tell me your thoughts on exam.",
            "Let's talk about exam."
        ]
    },
    {
        key: [
            "family"
        ],
        phrase: [
            "Let's talk about family.",
            "Is family overrated or underrated?",
            "How do you feel about family?"
        ]
    },
    {
        key: [
            "intelligence",
            "nature"
        ],
        phrase: [
            "What does intelligence mean to you?",
            "Have you ever wondered how nature affects us?",
            "Have you ever wondered how intelligence affects us?"
        ]
    },
    {
        key: [
            "intelligence",
            "sleep"
        ],
        phrase: [
            "What does sleep mean to you?",
            "Tell me your thoughts on intelligence.",
            "Can you imagine life without sleep?"
        ]
    },
    {
        key: [
            "crime"
        ],
        phrase: [
            "Tell me your thoughts on crime.",
            "Have you ever wondered how crime affects us?",
            "What do you think about crime?"
        ]
    },
    {
        key: [
            "politics"
        ],
        phrase: [
            "Why is politics important to you?",
            "What do you think about politics?",
            "Tell me your thoughts on politics."
        ]
    },
    {
        key: [
            "language",
            "beauty",
            "travel"
        ],
        phrase: [
            "What does travel mean to you?",
            "Beauty is fascinating, isn't it?",
            "How do you feel about language?"
        ]
    },
    {
        key: [
            "family",
            "coffee",
            "language"
        ],
        phrase: [
            "How do you feel about language?",
            "Is family overrated or underrated?",
            "Tell me your thoughts on coffee."
        ]
    },
    {
        key: [
            "history"
        ],
        phrase: [
            "History is fascinating, isn't it?",
            "How do you feel about history?",
            "Let's talk about history."
        ]
    },
    {
        key: [
            "weather",
            "dream",
            "computer"
        ],
        phrase: [
            "How do you feel about weather?",
            "Weather is fascinating, isn't it?",
            "What does dream mean to you?"
        ]
    },
    {
        key: [
            "dog",
            "cat"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "Can you imagine life without cat?",
            "How do you feel about cat?"
        ]
    },
    {
        key: [
            "exam",
            "family"
        ],
        phrase: [
            "Tell me your thoughts on exam.",
            "Let's talk about exam.",
            "Tell me your thoughts on family."
        ]
    },
    {
        key: [
            "cat",
            "politics"
        ],
        phrase: [
            "Have you ever wondered how cat affects us?",
            "How do you feel about cat?",
            "Is politics overrated or underrated?"
        ]
    },
    {
        key: [
            "money",
            "sports",
            "coffee"
        ],
        phrase: [
            "Is coffee overrated or underrated?",
            "Have you ever wondered how money affects us?",
            "Let's talk about sports."
        ]
    },
    {
        key: [
            "money"
        ],
        phrase: [
            "Let's talk about money.",
            "What does money mean to you?",
            "Why is money important to you?"
        ]
    },
    {
        key: [
            "technology"
        ],
        phrase: [
            "Tell me your thoughts on technology.",
            "Can you imagine life without technology?",
            "Let's talk about technology."
        ]
    },
    {
        key: [
            "history"
        ],
        phrase: [
            "Why is history important to you?",
            "How do you feel about history?",
            "Can you imagine life without history?"
        ]
    },
    {
        key: [
            "happy"
        ],
        phrase: [
            "Is happy overrated or underrated?",
            "Tell me your thoughts on happy.",
            "What do you think about happy?"
        ]
    },
    {
        key: [
            "dream",
            "freedom",
            "dog"
        ],
        phrase: [
            "How do you feel about freedom?",
            "What does dream mean to you?",
            "What does freedom mean to you?"
        ]
    },
    {
        key: [
            "movie"
        ],
        phrase: [
            "Is movie overrated or underrated?",
            "Movie is fascinating, isn't it?",
            "Have you ever wondered how movie affects us?"
        ]
    },
    {
        key: [
            "history",
            "travel"
        ],
        phrase: [
            "What does travel mean to you?",
            "How do you feel about history?",
            "Let's talk about history."
        ]
    },
    {
        key: [
            "family",
            "religion"
        ],
        phrase: [
            "What does religion mean to you?",
            "Let's talk about religion.",
            "Tell me your thoughts on family."
        ]
    },
    {
        key: [
            "sleep"
        ],
        phrase: [
            "Have you ever wondered how sleep affects us?",
            "Let's talk about sleep.",
            "Why is sleep important to you?"
        ]
    },
    {
        key: [
            "happy",
            "love"
        ],
        phrase: [
            "Can you imagine life without love?",
            "Why is love important to you?",
            "What does happy mean to you?"
        ]
    },
    {
        key: [
            "sports"
        ],
        phrase: [
            "Have you ever wondered how sports affects us?",
            "Is sports overrated or underrated?",
            "What do you think about sports?"
        ]
    },
    {
        key: [
            "work",
            "life",
            "freedom"
        ],
        phrase: [
            "Can you imagine life without freedom?",
            "Is work overrated or underrated?",
            "What do you think about life?"
        ]
    },
    {
        key: [
            "war",
            "city",
            "school"
        ],
        phrase: [
            "City is fascinating, isn't it?",
            "What does war mean to you?",
            "Have you ever wondered how war affects us?"
        ]
    },
    {
        key: [
            "fear"
        ],
        phrase: [
            "Can you imagine life without fear?",
            "Fear is fascinating, isn't it?",
            "Have you ever wondered how fear affects us?"
        ]
    },
    {
        key: [
            "religion",
            "freedom"
        ],
        phrase: [
            "What do you think about religion?",
            "Can you imagine life without freedom?",
            "Have you ever wondered how freedom affects us?"
        ]
    },
    {
        key: [
            "science"
        ],
        phrase: [
            "Science is fascinating, isn't it?",
            "Is science overrated or underrated?",
            "Let's talk about science."
        ]
    },
    {
        key: [
            "book",
            "talk"
        ],
        phrase: [
            "Let's talk about book.",
            "Book is fascinating, isn't it?",
            "Tell me your thoughts on book."
        ]
    },
    {
        key: [
            "robot",
            "life",
            "future"
        ],
        phrase: [
            "What does robot mean to you?",
            "What do you think about robot?",
            "How do you feel about life?"
        ]
    },
    {
        key: [
            "school",
            "book"
        ],
        phrase: [
            "What do you think about book?",
            "How do you feel about book?",
            "School is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "work"
        ],
        phrase: [
            "What does work mean to you?",
            "What do you think about work?",
            "Have you ever wondered how work affects us?"
        ]
    },
    {
        key: [
            "sleep",
            "art"
        ],
        phrase: [
            "What do you think about sleep?",
            "Is sleep overrated or underrated?",
            "Let's talk about art."
        ]
    },
    {
        key: [
            "emotion",
            "beauty",
            "game"
        ],
        phrase: [
            "Why is emotion important to you?",
            "Beauty is fascinating, isn't it?",
            "How do you feel about emotion?"
        ]
    },
    {
        key: [
            "emotion",
            "sad"
        ],
        phrase: [
            "What does emotion mean to you?",
            "What do you think about emotion?",
            "Have you ever wondered how sad affects us?"
        ]
    },
    {
        key: [
            "crime",
            "music",
            "game"
        ],
        phrase: [
            "Let's talk about crime.",
            "Why is music important to you?",
            "Tell me your thoughts on game."
        ]
    },
    {
        key: [
            "religion",
            "work"
        ],
        phrase: [
            "Let's talk about religion.",
            "What does work mean to you?",
            "Why is religion important to you?"
        ]
    },
    {
        key: [
            "language",
            "beauty",
            "travel"
        ],
        phrase: [
            "What does travel mean to you?",
            "How do you feel about language?",
            "Is travel overrated or underrated?"
        ]
    },
    {
        key: [
            "friend",
            "internet",
            "science"
        ],
        phrase: [
            "Internet is fascinating, isn't it?",
            "What does internet mean to you?",
            "Tell me your thoughts on friend."
        ]
    },
    {
        key: [
            "art",
            "freedom"
        ],
        phrase: [
            "Can you imagine life without freedom?",
            "Have you ever wondered how freedom affects us?",
            "Is art overrated or underrated?"
        ]
    },
    {
        key: [
            "code",
            "sleep"
        ],
        phrase: [
            "How do you feel about sleep?",
            "What do you think about code?",
            "Is sleep overrated or underrated?"
        ]
    },
    {
        key: [
            "dream",
            "life"
        ],
        phrase: [
            "What do you think about dream?",
            "What do you think about life?",
            "What does life mean to you?"
        ]
    },
    {
        key: [
            "cat"
        ],
        phrase: [
            "What does cat mean to you?",
            "What do you think about cat?",
            "Can you imagine life without cat?"
        ]
    },
    {
        key: [
            "language",
            "future"
        ],
        phrase: [
            "Have you ever wondered how future affects us?",
            "Why is language important to you?",
            "Language is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "health",
            "game"
        ],
        phrase: [
            "Why is health important to you?",
            "Is game overrated or underrated?",
            "What do you think about health?"
        ]
    },
    {
        key: [
            "friend"
        ],
        phrase: [
            "Let's talk about friend.",
            "Have you ever wondered how friend affects us?",
            "Tell me your thoughts on friend."
        ]
    },
    {
        key: [
            "fear"
        ],
        phrase: [
            "Have you ever wondered how fear affects us?",
            "Tell me your thoughts on fear.",
            "Let's talk about fear."
        ]
    },
    {
        key: [
            "food"
        ],
        phrase: [
            "Have you ever wondered how food affects us?",
            "How do you feel about food?",
            "Is food overrated or underrated?"
        ]
    },
    {
        key: [
            "science"
        ],
        phrase: [
            "How do you feel about science?",
            "Science is fascinating, isn't it?",
            "Have you ever wondered how science affects us?"
        ]
    },
    {
        key: [
            "city",
            "talk"
        ],
        phrase: [
            "City is fascinating, isn't it?",
            "Tell me your thoughts on talk.",
            "What do you think about talk?"
        ]
    },
    {
        key: [
            "travel",
            "nature"
        ],
        phrase: [
            "Why is travel important to you?",
            "Tell me your thoughts on nature.",
            "Have you ever wondered how nature affects us?"
        ]
    },
    {
        key: [
            "school"
        ],
        phrase: [
            "Can you imagine life without school?",
            "Have you ever wondered how school affects us?",
            "Why is school important to you?"
        ]
    },
    {
        key: [
            "politics",
            "work"
        ],
        phrase: [
            "Is work overrated or underrated?",
            "What do you think about politics?",
            "Politics is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "technology",
            "computer",
            "future"
        ],
        phrase: [
            "Is technology overrated or underrated?",
            "Have you ever wondered how future affects us?",
            "What do you think about computer?"
        ]
    },
    {
        key: [
            "life",
            "cat"
        ],
        phrase: [
            "What do you think about life?",
            "What does cat mean to you?",
            "How do you feel about cat?"
        ]
    },
    {
        key: [
            "nature"
        ],
        phrase: [
            "Can you imagine life without nature?",
            "Have you ever wondered how nature affects us?",
            "Why is nature important to you?"
        ]
    },
    {
        key: [
            "nature",
            "family"
        ],
        phrase: [
            "Is family overrated or underrated?",
            "Nature is fascinating, isn't it?",
            "Let's talk about nature."
        ]
    },
    {
        key: [
            "work",
            "truth"
        ],
        phrase: [
            "What do you think about truth?",
            "Is work overrated or underrated?",
            "Truth is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "sports",
            "AI",
            "food"
        ],
        phrase: [
            "Tell me your thoughts on food.",
            "Can you imagine life without AI?",
            "Why is sports important to you?"
        ]
    },
    {
        key: [
            "exam",
            "death"
        ],
        phrase: [
            "Have you ever wondered how exam affects us?",
            "Tell me your thoughts on death.",
            "What do you think about exam?"
        ]
    },
    {
        key: [
            "technology",
            "love",
            "talk"
        ],
        phrase: [
            "Have you ever wondered how technology affects us?",
            "Tell me your thoughts on talk.",
            "Is technology overrated or underrated?"
        ]
    },
    {
        key: [
            "book",
            "code"
        ],
        phrase: [
            "How do you feel about book?",
            "Have you ever wondered how code affects us?",
            "Is code overrated or underrated?"
        ]
    },
    {
        key: [
            "fear",
            "health",
            "book"
        ],
        phrase: [
            "What do you think about fear?",
            "Why is fear important to you?",
            "What do you think about health?"
        ]
    },
    {
        key: [
            "nature"
        ],
        phrase: [
            "How do you feel about nature?",
            "Have you ever wondered how nature affects us?",
            "Nature is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "AI",
            "nature"
        ],
        phrase: [
            "Tell me your thoughts on nature.",
            "Have you ever wondered how nature affects us?",
            "What does AI mean to you?"
        ]
    },
    {
        key: [
            "fear",
            "future",
            "dog"
        ],
        phrase: [
            "Have you ever wondered how dog affects us?",
            "How do you feel about fear?",
            "Tell me your thoughts on future."
        ]
    },
    {
        key: [
            "sports",
            "music",
            "game"
        ],
        phrase: [
            "Tell me your thoughts on game.",
            "Let's talk about sports.",
            "Is game overrated or underrated?"
        ]
    },
    {
        key: [
            "game",
            "holiday"
        ],
        phrase: [
            "What do you think about holiday?",
            "Let's talk about holiday.",
            "What do you think about game?"
        ]
    },
    {
        key: [
            "crime",
            "computer"
        ],
        phrase: [
            "Why is crime important to you?",
            "What do you think about computer?",
            "Let's talk about computer."
        ]
    },
    {
        key: [
            "robot",
            "intelligence"
        ],
        phrase: [
            "Is intelligence overrated or underrated?",
            "Tell me your thoughts on intelligence.",
            "Why is robot important to you?"
        ]
    },
    {
        key: [
            "love",
            "happy"
        ],
        phrase: [
            "Can you imagine life without love?",
            "How do you feel about happy?",
            "Can you imagine life without happy?"
        ]
    },
    {
        key: [
            "friend",
            "coffee"
        ],
        phrase: [
            "What do you think about friend?",
            "Tell me your thoughts on coffee.",
            "Can you imagine life without coffee?"
        ]
    },
    {
        key: [
            "cat",
            "sports",
            "book"
        ],
        phrase: [
            "Why is sports important to you?",
            "Let's talk about sports.",
            "What does cat mean to you?"
        ]
    },
    {
        key: [
            "book"
        ],
        phrase: [
            "What does book mean to you?",
            "Have you ever wondered how book affects us?",
            "Can you imagine life without book?"
        ]
    },
    {
        key: [
            "computer"
        ],
        phrase: [
            "Why is computer important to you?",
            "Tell me your thoughts on computer.",
            "How do you feel about computer?"
        ]
    },
    {
        key: [
            "science",
            "dream"
        ],
        phrase: [
            "What do you think about dream?",
            "Let's talk about science.",
            "What does science mean to you?"
        ]
    },
    {
        key: [
            "family",
            "language",
            "nature"
        ],
        phrase: [
            "What do you think about nature?",
            "Is family overrated or underrated?",
            "Nature is fascinating, isn't it?"
        ]
    },
    {
        key: [
            "music"
        ],
        phrase: [
            "What does music mean to you?",
            "Why is music important to you?",
            "Is music overrated or underrated?"
        ]
    }
];