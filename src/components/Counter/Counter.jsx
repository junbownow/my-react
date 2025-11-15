import './Counter.css'
// useStateを使用するためにReactからインポートする
import React, { useState } from 'react';

const Counter = () => {
  // Stateを定義：count（現在の値）、setCount（更新関数）、初期値0
  const [count, setCount] = useState(0);

  // ボタンをクリックした時の処理
  const handleClickUp = () => {
    setCount(count + 1);
  };
  const handleClickDown = () => {
    setCount(count - 1);
  };
  const handleClickReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>現在のカウント： **{count}**</p>

      {/* ボタンをクリックするとカウントが1ずつ増える */}
      <button onClick={handleClickUp} className="count-up">カウントを増やす</button>

      {/* ボタンをクリックするとカウントが1ずつ減る */}
      <button onClick={handleClickDown} className="count-down">カウントを減らす</button>

      {/* ボタンをクリックするとカウントがリセットされる */}
      <button onClick={handleClickReset} className="reset">カウントリセット</button>
    </div>
  );
};

export default Counter;
