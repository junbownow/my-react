import './App.css';
import Counter from './components/Counter/Counter';

const App = () => {
  return (
    <>
      <h1>カウンターアップ大会</h1>
      <div className="app-container">
        {/* 
          propsとして3つの情報を渡す
          1. title：表示する名前
          2. color：枠線の色
          3. startValue 開始する数字
         */}
        <Counter title="Aチーム" color="red" startValue={10} />
        <Counter title="Bチーム" color="blue" startValue={100} />
      </div>
    </>
  );
};

export default App;
