import React from 'react';

import './App.css';

function Layout({children}) {
  return (
    <div className="h-full w-full flex flex-auto flex-col justify-center align-middle">
      {children}
    </div>
  );
}

function Header({children}) {
  return (
    <h1 className="mb-4 text-center text-3xl font-bold leading-7 text-gray-900">
      {children}
    </h1>
  );
}

function GeneratedName() {
  return (
    <span className="generated-name">Thunder Ponies</span>
  );
}

function Button({children, color="indigo", className="", onClick, ...rest}) {
  return (
    <button onClick={onClick} className={`p-2 rounded-md text-white bg-${color}-600 hover:bg-${color}-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out ${className}`} {...rest}>
      {children}
    </button>
  );
}

function generateName() {
  alert ("hello");
}

function App() {
  return (
    <Layout>
      <Header>Namerator</Header>
      <div className="text-center">
        <GeneratedName></GeneratedName>
        <Button onClick={generateName} className="ml-2">Generate</Button>
      </div>
    </Layout>
  );
}

export default App;
