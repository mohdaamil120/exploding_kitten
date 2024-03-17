import logo from './logo.svg';
import './App.css';
import GameBoard from './Components/GameBoard';
import LeaderBoard from './Components/LeaderBoard';

function App() {
  return (
    <div className="App">
      <h1>😸 Exploding Kitten </h1>
      <LeaderBoard/>
      <GameBoard/>
    </div>
  );
}

export default App;

