import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Aside from './components/Aside';
import QuizApp from "./components/QuizApp";

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
