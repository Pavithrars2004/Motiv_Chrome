const motivationalQuotes = [
  "Your only limit is your mind.",
  "Dream bigger. Do bigger.",
  "Success is built one day at a time.",
  "Make today count.",
  "Believe in yourself and all that you are.",
  "Your future is created by what you do today, not tomorrow.",
  "The best way to predict the future is to create it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Believe you can and you're halfway there.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "The way to get started is to quit talking and begin doing.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "You are never too old to set another goal or to dream a new dream.",
  "It does not matter how slowly you go as long as you do not stop.",
  "If you can dream it, you can do it.",
  "The only way to do great work is to love what you do.",
  "Opportunities don't happen, you create them.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "The harder the battle, the sweeter the victory.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Don’t wait for opportunity. Create it.",
  "Act as if what you do makes a difference. It does.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "Nothing is impossible, the word itself says ‘I’m possible!’",
  "A winner is a dreamer who never gives up.",
  "The best revenge is massive success.",
  "You can’t cross the sea merely by standing and staring at the water.",
  "Don’t be afraid to give up the good to go for the great.",
  "If you want to achieve greatness stop asking for permission.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The key to success is to focus on goals, not obstacles.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "You don't have to be great to start, but you have to start to be great.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to start before you are ready.",
  "Dream it, believe it, build it.",
  "A goal without a plan is just a wish.",
  "Failure is not the opposite of success; it’s part of success.",
  "The difference between who you are and who you want to be is what you do.",
  "Don’t limit your challenges, challenge your limits.",
  "It always seems impossible until it’s done.",
  "Try not to become a person of success, but rather try to become a person of value.",
  "I find that the harder I work, the more luck I seem to have.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Opportunities are usually disguised as hard work, so most people don’t recognize them.",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "What we think, we become.",
  "Success is liking yourself, liking what you do, and liking how you do it.",
  "If you want to fly, you have to give up the things that weigh you down.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
  "It always seems impossible until it’s done.",
  "If you want to achieve greatness stop asking for permission.",
  "Life is not about waiting for the storm to pass, but learning to dance in the rain.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "The secret to getting ahead is getting started.",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "You are braver than you believe, stronger than you seem, and smarter than you think.",
  "Be a voice, not an echo.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Good things come to those who hustle.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Keep going. Be all in.",
  "Make it happen.",
  "Stay focused and never give up.",
  "What you do today can improve all your tomorrows.",
  "Believe you can and you’re halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "The best way to predict the future is to create it.",
  "The only way to do great work is to love what you do.",
  "Be yourself; everyone else is already taken.",
  "The only limit to our realization of tomorrow is our doubts of today."
];


const images = [
  "images/001-light-bulb.png",
  "images/002-be-inspired.png",
  "images/003-raise-hand.png",
  "images/004-motivation.png",
  "images/005-inspiration.png",
  "images/007-solution.png",
  "images/006-inspiration-1.png",
  "images/008-inspiration-2.png",
  "images/009-inspiration-3.png" ,
  "images/010-stars.png",
  "images/creativity(2).png",
  "images/dream.png",
  "images/girl-power.png",
 "images/imagination.png",
  "images/keep-going.png",
 "images/motivation.png",
  "images/team-spirit.png"
];


function showNextQuoteAndImage() {
  
  chrome.storage.local.get(['currentQuoteIndex', 'currentImageIndex'], function(data) {
    let currentQuoteIndex = data.currentQuoteIndex || 0; 
    let currentImageIndex = data.currentImageIndex || 0; 

   
    let quote = motivationalQuotes[currentQuoteIndex];
    let imageUrl = images[currentImageIndex];

    
    chrome.notifications.create({
      type: 'basic',
      iconUrl: imageUrl,
      title: 'Motivation for You!',
      message: quote,
      priority: 1
    });

   
    currentQuoteIndex = (currentQuoteIndex + 1) % motivationalQuotes.length;

    
    currentImageIndex = (currentImageIndex + 1) % images.length;

   
    chrome.storage.local.set({ 
      currentQuoteIndex: currentQuoteIndex,
      currentImageIndex: currentImageIndex
    });
  });
}


chrome.runtime.onStartup.addListener(() => {
  showNextQuoteAndImage();
});


chrome.runtime.onInstalled.addListener(() => {
  showNextQuoteAndImage();
});
chrome.action.onClicked.addListener(() => {
  showNextQuoteAndImage();
});


