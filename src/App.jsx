import './App.css';
import Counter from './components/Counter/Counter';

const App = () => {
  // 1. 親側で「実行したい関数」を定義する
  const handleShowMessage = (teamName) => {
    console.log(`${teamName}のリセットボタンが押されました`);
    alert(`${teamName}がリセットされました！`);
  };

  return (
    <>
      <h1>カウントアップ大会</h1>
      <div className="app-container">
        {/* 
        2.定義した関数をPropsとして渡す
        習慣として渡すProps名は"on　+　動作"（onReset）にすることが多いです
        */}
        <Counter title="Aチーム" color="red" startValue={10} onReset={handleShowMessage} />
        <Counter title="Bチーム" color="blue" startValue={100} onReset={handleShowMessage} />
      </div>
    </>
  );
};

export default App;
