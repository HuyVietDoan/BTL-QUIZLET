import logo from './logo.svg';
import './App.css';
import Header from './components/Flashcards/Header';
import Container from './components/Flashcards/Container';
import Aside from './components/Flashcards/Aside';
import QuizApp from "./components/Flashcards/QuizApp";

function App() {
  return (
    <div id="main">
      <Header />
      <Container />
      <Aside />
      <QuizApp />
    </div>
  );
}

export default App;