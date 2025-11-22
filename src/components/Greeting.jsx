// 1. コンポーネント定義。引数として `props` を受け取ります。
// 通常、ここではオブジェクトの分割代入を使って { name, message } のように直接取り出すことが多いです。
const Greeting = (props) => {
  // 2. 受け取った props オブジェクトから特定のプロパティ（ここでは `message`）にアクセスします。
  const displayMessage = props.message;

  return (
    <div>
      {/* 3. 受け取ったメッセージを表示します */}
      <p>メッセージ: **{displayMessage}**</p>
    </div>
  );
};

export default Greeting;