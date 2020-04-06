import React from 'react';

import './App.css';

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

function App() {
  const generateTeamName = () => Sentencer.make("{{noun}} {{noun}}");

  const [teamName, setTeamName] = React.useState(generateTeamName());

  const randomizeTeamName = () => setTeamName(generateTeamName());

  return (
    <Layout>
      <Card>
        <Header>Namerator</Header>
      </Card>
      <Card className="text-center">
        <TeamName>{teamName}</TeamName>
        <Button onClick={randomizeTeamName} className="ml-2">Generate</Button>
      </Card>
    </Layout>
  )
}

export default App;
