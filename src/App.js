import React from 'react';

import WordUtils from './wordUtils';

function Layout({children}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
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

function App() {
  const generateTeamName = (alliterate) => {
    if (alliterate) {
      return WordUtils.getAlliterativeWords();
    }
    else {
      return WordUtils.getWords();
    }
  };

  const words = generateTeamName();
  const [word0, setWord0] = React.useState(words[0]);
  const [word1, setWord1] = React.useState(words[1]);
  const [alliterate, setAlliterate] = React.useState(false);

  const randomizeTeamName = () => {
    let words = generateTeamName(alliterate);
    setWord0(words[0]);
    setWord1(words[1]);
  };

  const handleAlliterateCheckbox = (event) => setAlliterate(event.target.checked);

  return (
    <Layout>
      <Card>
        <Header>Namerator</Header>
      </Card>
      <Card className="text-center">
        <div class="flex">
          <div class="flex-2">
            <TeamName>
              <div class="flex">
                <div class="flex-1">
                  <div>{word0}</div>
                  <div>
                    <label class="text-gray-500">
                      <span class="text-sm mr-2">
                        Syllables
                      </span>
                      <input class="border" type="number" />
                    </label>
                  </div>
                </div>
                <div class="flex-1">
                  <div>
                    {word1}
                  </div>
                  <div class="mx-10">
                    <label class="text-gray-500">
                      <span class="text-sm mr-2">
                        Syllables
                      </span>
                      <input class="border" type="number" />
                    </label>
                  </div>
                </div>
              </div>
            </TeamName>
          </div>
          <div class="flex-1">
            <Button onClick={randomizeTeamName} className="ml-2">Generate</Button>
          </div>
        </div>
        <div>
          <label class="text-gray-500">
            <input class="mr-2" type="checkbox" checked={alliterate} onChange={handleAlliterateCheckbox} />
            <span class="text-sm">
              Alliterate
            </span>
          </label>
        </div>
        
      </Card>
    </Layout>
  )
}

export default App;
