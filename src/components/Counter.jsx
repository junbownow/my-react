import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // カウントアップのイベントハンドラ
  const handleClick = () => {
    setCount(count + 1);
  };
  
  // TODO: 1. リセット用のイベントハンドラ (handleReset) を作成する

  // TODO: 2. setCount を使って count を 0 に戻す処理を書く
  const handleReset = () => {
    // ここに処理を記述
    setCount(0);
  };


  return (
    <div>
      <h2>カウントアプリ</h2>
      <p>現在のカウント: **{count}**</p>
      
      <button onClick={handleClick}>
        カウントアップ
      </button>
      
      {/* TODO: 3. リセットボタンを追加し、handleReset 関数を割り当てる */}
      <button onClick={handleReset}>
        カウントリセット
      </button>
      
    </div>
  );
};

export default Counter;