import './App.css';
import Counter from './components/Counter/Counter';

const App = () => {
  return (
    <>
      <h1>カウントアップ</h1>
      <Counter startValue={10} />
      <Counter startValue={100} />
    </>
  );
};

export default App;
