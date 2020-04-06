import React from 'react';

import './App.css';

import Sentencer from 'sentencer';

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

function GeneratedName({children}) {
  return (
    <span className="generated-name">{children}</span>
  );
}

function Button({children, color="indigo", className="", onClick, ...rest}) {
  return (
    <button onClick={onClick} className={`p-2 rounded-md text-white bg-${color}-600 hover:bg-${color}-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out ${className}`} {...rest}>
      {children}
    </button>
  );
}



class App extends React.Component {
  state = {
    generatedName: 'Thunder Ponies',
  }

  generateName = () => this.setState({generatedName: Sentencer.make("{{adjective}} {{noun}}")});

  render() {
    const {generatedName} = this.state

    return (
      <Layout>
        <Header>Namerator</Header>
        <div className="text-center">
          <GeneratedName>{generatedName}</GeneratedName>
          <Button onClick={this.generateName} className="ml-2">Generate</Button>
        </div>
      </Layout>
    )
  }
}

export default App;
