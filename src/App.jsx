import './App.css';
// 1. カウンターコンポーネントをインポート
import Counter from './components/Counter'; 

function App() {
  return (
    <>
      <h1>React State 学習</h1>
      
      {/* 2. カウンターを配置 */}
      <Counter />
      
      {/* おさらい: PropsだけのコンポーネントとStateを持ったコンポーネントを同時に使えます */}
      {/* <UserInfo username="テスト" isLoggedIn={true} /> */}
    </>
  );
}

export default App;