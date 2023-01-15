// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import { Skillset } from './components/Skills/Skill';
import Qualification from './components/Qualification/Qualification';
import Git from './components/Gitclander/Git';
import Contact from './components/Contact/Contact'; 
import Project from './components/Project/Project';

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skillset/> 
      <Qualification/>
      <Git/>
      <Project/>
      <Contact/>
    </main>
    </>
  );
}


export default App;
