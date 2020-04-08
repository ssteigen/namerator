import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice, faRandom } from '@fortawesome/free-solid-svg-icons'

import WordUtils from './wordUtils';

function Layout({children}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-200 py-12 px-4 sm:px-6 lg:px-8">
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
      <Card className="text-center">
        <Header><FontAwesomeIcon icon={faDice} className="mr-2" />Namerator</Header>
        <hr className="my-8" />
        <div className="flex items-center">
          <div className="flex-1 py-2 text-xl capitalize">
            <div className="flex">
              <div className="flex-1 bg-gray-200 rounded p-2 mr-4">{word0}</div>
              <div className="flex-1 bg-gray-200 rounded p-2 mr-4">{word1}</div>
            </div>
          </div>
          <div class="flex-2 text-xl">
            <Button onClick={randomizeTeamName} className="">
              <FontAwesomeIcon icon={faRandom} className="mx-2" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col my-4">
          <label className="text-gray-darkest">
            <input className="mr-2" type="checkbox" checked={alliterate} onChange={handleAlliterateCheckbox} />
            <span className="text-sm">
              Alliterate
            </span>
          </label>
        </div>
        
      </Card>
    </Layout>
  )
}

export default App;
