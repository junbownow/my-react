import React, { useState } from 'react';
import './Counter.css';

// 1. PropsにonResetを追加して受け取る
const Counter = ({ title, color, startValue, onReset }) => {
  const [count, setCount] = useState(startValue);

  const handleClickUp = () => setCount(count + 1);
  const handleClickDown = () => setCount(count - 1);

  const handleClickReset = () => {
    // 2. まず自分のStateをリセットする
    setCount(startValue);

    // 3. 親から預かっていた「防犯ブザー」を押す（関数を実行する）
    // 引数として自分の名前(title)を親に渡してあげる
    onReset(title);
  };

  return (
    // 受け取ったcolorをインラインスタイルで枠線の色に使用
    <div className="counter-container" style={{ '--theme-color': color }}>
      {/* 受け取ったtitleを表示 */}
      <h2 style={{ '--theme-color': color }}>{title}</h2>

      <p>現在のカウント：**{count}**</p>
      <div className="button-container">
        <button onClick={handleClickUp} className="count-up">
          増やす
        </button>
        <button onClick={handleClickDown} className="count-down">
          減らす
        </button>
        {/* ボタンが押されたらhandleClickResetが動く */}
        <button onClick={handleClickReset} className="reset">
          リセット
        </button>
      </div>
    </div>
  );
};

export default Counter;
