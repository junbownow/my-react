// useStateを使用するためにRectから{ useState }をインポートする
import React, { useState } from 'react';

function Counter() {
  // Stateを定義。count（現在の値）とsetCount（更新関数）、初期値は0
  const [count, setCount] = useState(0);

  // ボタンがクリックされた時の処理
  const handleClick = () => {
    // setCountを呼び出してcountの値を1増やす
    // Stateは必ず専用の更新関数（setCount）で更新
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  }
  return (
    <div>
      {/* countの現在の値を表示 */}
      <p>現在のカウント： **{count}**</p>

      {/* ボタンがクリックされたらhandleClick関数を実行 */}
      <button onClick={handleClick}>カウントを増やす</button>
      {/* ボタンがクリックされたら0に戻す */}
      <button onClick={handleReset}>カウントをリセットする</button>
    </div>
  );
}

// 他のファイルで使うためのエクスポート
export default Counter;
