import React from 'react';

import Sentencer from 'sentencer';

function Layout({children}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full">
        {children}
      </div>
    </div>
  );
}

function Card({children, className=""}) {
  return (
    <div className={`mx-10 my-2 p-10 bg-white shadow overflow-hidden sm:rounded-lg ${className}`}>
      {children}
    </div>
  )
}

function Header({children}) {
  return (
    <h1 className="text-center text-3xl font-bold leading-7 text-gray-900">
      {children}
    </h1>
  );
}

function TeamName({children}) {
  return (
    <span className="team-name">{children}</span>
  );
}

function Button({children, color="indigo", className="", onClick, ...rest}) {
  return (
    <button onClick={onClick} className={`p-2 rounded-md text-white bg-${color}-600 hover:bg-${color}-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out ${className}`} {...rest}>
      {children}
    </button>
  );
}

function groupByLetter(words) {
  return words.reduce(function(groupedWords, word) {
    word = word.toLowerCase();
    groupedWords[word[0]] = groupedWords[word[0]] || []
    groupedWords[word[0]].push(word);
    return groupedWords;
  }, {})
}

function getWordsStartingWithLetter(letter, words) {
  const groupedWords = groupByLetter(words);
  return groupedWords[letter] || [];
}

function getRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

function getRandomWordStartingWithLetter(letter, words) {
  const wordsStartingWithLetter = getWordsStartingWithLetter(letter, words);
  return getRandomWord(wordsStartingWithLetter);
}

function getAlliterativeWords() {
  let word1 = getRandomWord(Sentencer._adjectives);
  let word2 = getRandomWordStartingWithLetter(word1[0], Sentencer._nouns);
  return `${word1} ${word2}`;
}

function App() {
  const generateTeamName = (alliterate) => {
    if (alliterate) {
      return getAlliterativeWords();
    }
    else {
      return Sentencer.make("{{adjective}} {{noun}}");
    }
  };

  const [teamName, setTeamName] = React.useState(generateTeamName());
  const [alliterate, setAlliterate] = React.useState(false);

  const randomizeTeamName = () => setTeamName(generateTeamName(alliterate));

  const handleAlliterateCheckbox = (event) => setAlliterate(event.target.checked);

  return (
    <Layout>
      <Card>
        <Header>Namerator</Header>
      </Card>
      <Card className="text-center">
        <div>
          <TeamName>{teamName}</TeamName>
          <Button onClick={randomizeTeamName} className="ml-2">Generate</Button>
        </div>
        <label class="text-gray-500">
          <input class="mr-2" type="checkbox" checked={alliterate} onChange={handleAlliterateCheckbox} />
          <span class="text-sm">
            Alliterate
          </span>
        </label>
      </Card>
    </Layout>
  )
}

export default App;
