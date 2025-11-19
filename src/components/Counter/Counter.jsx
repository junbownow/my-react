import React, { useState } from 'react';
import './Counter.css';

// 引数にpropsを受け取る
const Counter = ({ startValue }) => {
  // useStateの初期値に受け取った'props.startValue'を使用
  // これで親から渡された数字がスタート地点になる
  const [count, setCount] = useState(startValue);

  const handleClickUp = () => {
    setCount(count + 1);
  };
  const handleClickDown = () => {
    setCount(count - 1);
  };
  const handleClickReset = () => {
    // リセット時は初期値に戻る
    setCount(startValue);
  };

  return (
    <div className="counter-container">
      <p>現在のカウント： **{count}**</p>
      <div className="button-container">
        <button onClick={handleClickUp} className="count-up">
          増やす
        </button>
        <button onClick={handleClickDown} className="count-down">
          減らす
        </button>
        <button onClick={handleClickReset} className="reset">
          リセット
        </button>
      </div>
    </div>
  );
};

export default Counter;
