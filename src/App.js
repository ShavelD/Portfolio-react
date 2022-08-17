import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Project";
import DistantWork from "./distantWork/DistantWork";
import Contacts from "./contacts/Contacts";

function App() {

  return (
    <div className="App">
        <Header />
        <Main />
        <Skills />
        <Projects />
        <DistantWork />
        <Contacts />
    </div>
  );
}

export default App;
