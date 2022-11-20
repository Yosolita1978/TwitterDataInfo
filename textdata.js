import natural from 'natural';
import stopword from 'stopword';
import XRegExp from 'xregexp';

//Helper function 1: count how many tweets are in the file
const countTweets = (array) => {
    let count = 0;
    for(let register of array){
        count++
    }
    return count;
}

//Helper function 2: Grab the Full_Text of the tweets - return an array with all the tweets in lowerCase
const grabTweets = (array) => {
    let tweetsArray = [];
    let singleText = "";
    for(let register of array){
        singleText = register.tweet.full_text.toLowerCase();
        const regex = XRegExp("[^\\s\\p{Latin}]+", "g");
        let textOnlyReview = XRegExp.replace(singleText, regex, "");
        tweetsArray.push(textOnlyReview);
        singleText = "";
    }
    return tweetsArray;
}

//Return an array of words without the common words in Spanish
const stopWords = (array) => {
    let noWords = ["la", "las", "los", "lo", "que", "de", "del", 
    "el", "esa", "le", "ese", "ni", "mi", "le", "les", "esas", "por", 
    "para", "con", "is", "si", "no", "nos", "ya", "y", "eso", "i", "o", 
    "for", "te", "the", "in", "was", "en", "a", "an", "me", "no", "rt", 
    "tu", "or", "se", "qu", "es", "una", "uno", "un", "yo", "mas", "una", "si", 
    "por", "pero", "a", "e", "i", "o", "u", "q", "que", "este", "esta", "al", 
    "qué", "muy", "to", "of", "so", "su", "pa"  ];
    let cleanWords = [];
    for (let phrase of array) {
      let testWords = phrase.split(" ");
      for (let word of testWords) {
        if (!noWords.includes(word) && word != "") {
          cleanWords.push(word);
        }
      }
    }
    return cleanWords;
  }

  const createObj = (array) =>{
    let tweetDictionary = {};
      for (let phrase of array){
        let words = phrase.split(" ");
        for(let word of words){
          if(!tweetDictionary[word]){
            tweetDictionary[word] = 1;
          } else{
            tweetDictionary[word]++
          }
        }
      }
      return tweetDictionary;
  };

  const createTemplate = (obj) =>{
    //let template = {};
    let result = [];
    for(let key in obj){
      //console.log(key, obj[key]);
      let template = {text: key, value: obj[key]};
      result.push(template)
    }
    return result
  }

export {countTweets, grabTweets, stopWords, createObj, createTemplate};
