import Sentencer from 'sentencer';
import Syllable from 'syllable';

const wordUtils = {
    groupByLetter: function (words) {
        return words.reduce(function(groupedWords, word) {
            word = word.toLowerCase();
            groupedWords[word[0]] = groupedWords[word[0]] || []
            groupedWords[word[0]].push(word);
            return groupedWords;
        }, {})
    },
      
    getWordsStartingWithLetter: function (letter, words) {
        const groupedWords = this.groupByLetter(words);
        return groupedWords[letter] || [];
    },
    
    getRandomWord: function (words) {
        return words[Math.floor(Math.random() * words.length)];
    },
    
    getRandomWordStartingWithLetter: function (letter, words) {
        const wordsStartingWithLetter = this.getWordsStartingWithLetter(letter, words);
        return this.getRandomWord(wordsStartingWithLetter);
    },
    
    getAlliterativeWords: function () {
        let word1 = this.getRandomWord(Sentencer._adjectives);
        let word2 = this.getRandomWordStartingWithLetter(word1[0], Sentencer._nouns);
        return [word1, word2];
    },

    getWordsWithSyllables: function(num, words) {
        return words.filter(function(word) {
            return Syllable(word) === num;
        });
    },

    getWords: function() {
        return [Sentencer.make("{{adjective}}"), Sentencer.make("{{nouns}}")];
    }
}

export default wordUtils;