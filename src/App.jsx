import "./App.css";
import Greeting from './components/Greeting'; // 1. 子コンポーネントをインポート

function App() {
  // 2. Propsとして子コンポーネントに渡したいデータを用意します
  const customMessage = "React学習頑張りましょう！";
  const otherMessage = "これは2つ目のメッセージです。";

  return (
    <>
      <h1>Propsの学習</h1>
      
      {/* 3. Greetingコンポーネントに Props (ここでは `message`) を渡します */}
      {/* HTMLの属性のように記述します。**message="文字列"** */}
      <Greeting message={customMessage} />
      
      {/* 4. 別の Props を渡して、再利用できることを確認します */}
      <Greeting message={otherMessage} />

      {/* 5. 文字列以外（例えば数値や変数）を渡す場合は、波括弧 {} で囲みます */}
      <Greeting message="Propsで渡した情報がここに表示されます。" />
    </>
  );
}

export default App;