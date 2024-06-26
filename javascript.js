var questions = [
  "What have you created that you are most proud of?",
  "What's the best thing you got from one of your parents?",
  "What bends your mind every time you think about it?",
  "In your group of friends, what role do you play?",
  "What incredibly strong opinion do you have that is completely unimportant in the grand scheme of things?",
  "What's your favorite piece of clothing you own?",
  "What fictional place would you most like to go to?",
  "What's one place you've travelled that you never want to go back to?",
  "When people come to you for help, what do they usually want help with?",
  "What are you interested in that most people haven't heard of?",
  "Mountains or ocean?",
  "What was your best birthday?",
  "Pizza or tacos?",
  "What's the story behind one of your scars?",
  "Pancakes or waffles?",
  "Pirates or ninjas?",
  "What was the best compliment you've ever received?",
  "If you lost all of your possessions but one, what would you want it to be?",
  "Who inspires you to be better?",
  "What dumb accomplishment are you most proud of?",
  "When was the last time you changed your opinion about something major?",
  "What is something you can never seem to finish?",
  "What is one of your favorite smells?",
  "If you had to change your name, what would you change it to?",
  "What are you a natural at?",
  "What do you like most about your family?",
  "Have you ever saved someone's life?",
  "What's an unpopular opinion you have?",
  "Who is one of your best friends, and what do you love about them?",
  "Do you have any nicknames?",
  "What's one of your favorite comfort foods?",
  "What is your theme song?",
  "What is one of the great values that guides your life?",
  "What's your favorite book?",
  "What's the last book you gave up on and stopped reading?",
  "What's the worst movie you've ever seen?",
  "What issue will you always speak your mind about?",
  "What would you do on a free afternoon in the middle of the week?",
  "Pet peeves?",
  "What's the best piece of advice you ever received?",
  "Who was your favorite teacher and why?",
  "If you could have any superpower, what would it be and why?",
  "What's on your bucket list this year?",
  "If you could live in a book, TV show, or movie, what would it be?",
  "What languages do you speak?",
  "Would you rather be stuck on a broken ski lift or a broken elevator?",
  "If you were a vegetable, what vegetable would you be?",
  "What makes you cry?",
  "Who are some of your heroes?",
  "What's something you wish you'd figured out sooner?",
  "What's your favorite candy?",
  "What's your worst habit?",
  "Favorite city?",
  "What's your go-to dance move?",
  "Do you ever sing when you're alone? What songs?",
  "What's your earliest memory?",
  "What's something you learned in the last week?",
  "What story does your family always tell about you?",
  "What talent would you show off in a talent show?",
];

// https://www.surfoffice.com/blog/icebreaker-questions-work
var icebreakerQuestions = [
  // Fashion, Food, and Identity
  "What is the worst fashion decision you ever made?",
  "If you had to eat one meal for the rest of your life what would it be?",
  "If you could change gender for a day what's the first thing you would do?",
  "What's your biggest irrational phobia and why?",
  "If you became president today, what's the first bill you would pass?",
  "If you could have any superpower what would it be?",
  "Who was your first celebrity crush?",
  "If you could be somebody else for a day who would you be?",
  "If you were a wrestler what would your entrance theme be?",
  "If aliens landed on earth today and offered to abduct you, would you go with them?",
  "If you could time travel, where is the first place you would go?",
  "If you could live in any historical period, which one would you choose?",
  "If you could be reincarnated as any animal, which one would you choose?",
  "Which famous actor would play you in the movie of your life?",
  "Which famous person, dead or alive, would like by your side during a zombie apocalypse?",
  "What is the worst date you've ever been on and why?",
  "What's a common phrase used in your family that nobody else uses?",
  "What are your most commonly used emojis?",
  "If you could teleport anywhere in the world right now, where would you go?",
  "If you could appear on any game show, which one would you choose?",

  // "Would you rather..." Icebreaker questions
  "Would you rather be stranded on a desert island alone or with your worst enemy?",
  "Would you rather be at the beach or in the mountains?",
  "Would you rather be great at physical activities but stupid or a genius with terrible coordination?",
  "Would you rather go into the past and meet your ancestors or go into the future to meet your great-great-grandchildren?",
  "Would you rather have more money or more time?",
  "Would you rather talk like Yoda or breathe like Darth Vader for the rest of your life?",
  "Would you rather be without elbows or knees?",
  "Would you rather lose the ability to lie or believe everything you're told?",
  "Would you rather always arrive at a red light or experience slow internet every time the sun goes down?",
  "Would you rather speak to animals or know other people's thoughts?",
  "Would you rather be always cold or always hot?",
  "Would you rather own a yacht or a private jet?",
  "Would you rather take the red pill or the blue pill when approached by Morpheus in the Matrix?",
  "Would you rather have lots of small bad things happen to you throughout the month or have one day per month where lots of bad things happen to you?",
  "Would you rather wear divers flippers or boxing gloves for the rest of your life?",
  "Would you rather only be able to whisper or only able to shout?",
  "Would you rather laugh every time someone said something sad or cry every time someone said something funny?",
  "Would you rather your life had a cinematic soundtrack or a sitcom laughter track?",
  "Would you rather live in Middle-Earth from The Lord of The Rings or the Wizarding World from Harry Potter?",
  "Would you rather come face to face with a polar bear in the arctic or a snake in the desert?",

  // Reflective Icebreaker questions
  "When you die, what do you want to be remembered for?",
  "What's something you always thought you would do but never have?",
  "If you could give your child-self one piece of advice what would you say?",
  "When was the last time you felt like everything was going your way?",
  "What phrase or cliche do you most live by?",
  "What's something you learned about yourself in the last three months?",
  "If you could see yourself through the eyes of somebody else for a moment which person would that be?",
  "Which part of your personality do you usually hold back and why?",
  "What's something that most people don't know about you?",
  "What was the last thing you did that you were proud of?",
  "Can you think of a time you said “No” to something when you wish you said “Yes”?",
  "When was the last time somebody did something for you that you greatly appreciated?",
  "Who do you look up to most in life?",
  "What do you do to unwind after a long day at work?",
  "If you're feeling down, what's the simplest thing somebody can do for you to cheer you up?",
  "What's something you couldn't live without?",
  "If you could rid the world of one thing what would it be?",
  "What's a small act of kindness you were once shown that you'll never forget?",
  "What's one activity that grants you pure escapism?",
  "What's a common piece of advice you don't agree with and why?",

  // Icebreaker questions for remote teams
  "If you could learn any language from another country which would you choose?",
  "What's the most important thing you have on or near your desk right now?",
  "What's one productivity tool you couldn't live without?",
  "Are you more productive in the evening or the morning?",
  "Do you have any routines for improving your energy and focus?",
  "What is your go-to drink or snack while working?",
  "What's one thing you wish could be automated about your job?",
  "Which website do you most often defer to when procrastinating?",
  "How do you get motivated for difficult tasks?",
  "What are some strategies that you've found to be helpful in your recent work?",
  "What's a common slang phrase that's used where you live and what does it mean?",
  "Would you rather someone took a boring task off your to-do list or invited you to participate in a project of great interest to you?",
  "Do you listen to music while you're working? If so, what type of music do you most like to listen to?",
  "What goals are you currently working towards outside of work?",
  "What's something that puts you in a state of flow?",
  "If you had a magic button on your desk that could bring you whatever you wanted, what would you summon?",
  "Do you have a desk mascot? If so, please show it to us and tell us more.",
  "Which strange position do you most commonly find yourself sitting in?",
  "Do you have any household pets? If so, introduce us to them!",
  "Be honest. How often do you work from your bed?",

  // Quick icebreaker questions
  "What's your biggest claim to fame?",
  "What's your best party trick?",
  "What is a weird fact that you know?",
  "Who is your favourite comedian?",
  "Who is your favourite actor?",
  "What is your favourite book?",
  "What is your favourite movie?",
  "What is your favourite song?",
  "Who is your favourite music artist?",
  "What is your favourite season?",
  "What is your favourite public holiday?",
  "What is your favourite animal?",
  "What's the best place you ever visited?",
  "What is your favourite musical instrument?",
  "What hidden talents do you have?",
  "What's your favourite cuisine?",
  "What's your biggest phobia?",
  "Who was your favourite school teacher and why?",
  "Are you a lone wolf or a social butterfly?",
  "Do you prefer the beach or the countryside?",

  // Ice-breaker questions for coworkers
  "Who's most likely to make a cup of tea for themselves without asking anybody else?",
  "Who's most likely to arrive late to the office?",
  "Which person would you rely on most to help you in a crisis?",
  "Who's most likely to bring home-baked goods to the office?",
  "Who is the most productive at work?",
  "Who procrastinates most at work?",
  "Who is most likely to write a book?",
  "Who's most likely to get too drunk at the staff party?",
  "Which person comes to work looking the smartest?",
  "Which person comes to work looking the most scruffy?",
  "Who drinks the most coffee?",
  "Who's the most likely to win a wellness challenge?",
  "Who has the funniest laugh?",
  "Who would you sing a duet with at karaoke?",
  "What's the simplest thing somebody can do to cheer you up at work when you're feeling down?",
  "Who keeps their desk the tidiest?",
  "Who's most likely to get into an argument with the manager?",
  "Who's most likely to become a crazy cat lady (or man) when they're older?",
  "Who would scream the loudest on a rollercoaster?",
  "Who has the biggest (and fullest) wardrobe in their bedroom?",

  // Strictly-business icebreaker questions
  "What motivates you most to come to work?",
  "What's the most important thing about your job?",
  "Who has influenced you most when it comes to your work ethic?",
  "What was your first job and what was your experience?",
  "How do you prefer to start your day?",
  "What's the worst job you ever had and what did you learn from it?",
  "Which professional skill are you currently working on?",
  "What's one thing that surprised you about working for this company?",
  "What's one improvement you would like to see at this company?",
  "What's a work-related accomplishment you're proud of?",
  "What thing do you do every day that often goes unnoticed?",
  "If you could change one thing about the office what would it be?",
  "What's your biggest pet peeve?",
  "If you were the manager for a day what would you change or do differently?",
  "Do you feel like your work is sufficiently acknowledged and rewarded?",
  "How can people come to you for help and what can you help with best?",
  "What's your go-to tactic for unwinding after a stressful day?",
  "Who do you usually go to if you need help with a work-related task?",
  "In what kind of environment are you most productive?",
  "How do you motivate yourself to take on difficult tasks?",

  // Silly icebreaker questions
  "What “old person” habits do you have?",
  "What was the moment you realised you were officially an adult?",
  "What's the strangest tradition in your family?",
  "What's the worst meal you ever cooked?",
  "What's your most embarrassing moment?",
  "What's the naughtiest thing you got away with doing as a kid?",
  "What trendy phrase or expression did you use the most when you were younger?",
  "If you were a gangster, what would your gangster name be?",
  "What is the best prank you ever pulled (or was pulled on you)?",
  "What's the silliest thing you ever did when you were drunk?",
  "If you could only watch one TV show for the rest of your life which one would you choose?",
  "If you could be the main character in any movie who would you be?",
  "What sound or feeling gives you the shivers?",
  "Which accent do you find the least attractive?",
  "If you were alive in the middle ages how would you make your living?",
  "If you could go back to the stone age, what cave-painting would you make to confuse future mankind?",
  "If you could only eat one food for the rest of your life what would it be?",
  "What's your biggest guilty pleasure?",
  "What's an unusual skill you would love to master?",
  "You can only have one condiment for the rest of your life. Which one do you choose?",

  // Random icebreaker questions
  "If you came home and found a penguin in your freezer what would you do?",
  "If the world was about to end in 24 hours, what would you do?",
  "If money was no object, what are the first three things you would buy?",
  "If you were suddenly shrunk to the size of a grain of rice, what would you do to draw attention to yourself?",
  "If your life was a musical, in what genre would you like the songs to be?",
  "If your house caught on fire, what's the first object you would run to save?",
  "You walk into a pub and three people are sitting at the bar: your high-school bully, your ex-partner and the local conspiracy theorist. Who do you talk to?",
  "If you could give a Ted talk on one thing, what would it be?",
  "If you could choose to stop ageing at any age which would you choose?",
  "If you could join mankind's maiden voyage to Mars, would you go?",
  "If you could have wings or breathe underwater, which would you choose?",
  "What do you think was the most important invention in history?",
  "What's your favourite all-time movie quote?",
  "If you could direct a blockbuster movie, what would it be about?",
  "What's your strategy for breaking an awkward silence?",
  "You walk into a bar and see your crush. She doesn't know who you are yet but you want to approach him/her. What do you say?",
  "If you could have one weapon in a zombie apocalypse what would you choose?",
  "If you had to choose, which animal would you say you most look like?",
  "Do you prefer to text somebody regularly or have phone calls less often?",
  "You're on the run from Interpol, where do you choose to hide?",

  // Christmas icebreaker questions
  "If you could only listen to one Christmas song for the rest of your life what would it be?",
  "Are you more like Santa Claus or the Grinch?",
  "What thing did you do this year that would put you on the naughty list?",
  "If you could receive any present this year what would you get?",
  "What age were you when you stopped believing in Santa Claus?",
  "How did you find out that Santa Claus isn't real?",
  "What do you like and dislike the most about the festive season?",
  "What's your favourite part about Christmas dinner?",
  "If you could, would you ban Brussel sprouts forever?",
  "How big is your Christmas tree this year and where have you put it?",
];

var allQuestions = [...questions, ...icebreakerQuestions];

function newQuestion() {
  var randomNumber = Math.floor(Math.random() * allQuestions.length);
  document.getElementById("questionDisplay").innerHTML =
    allQuestions[randomNumber];
}
