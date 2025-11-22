import React, { useState } from 'react';
import './Counter.css';

const Counter = ({ title, color, startValue }) => {
  const [count, setCount] = useState(startValue);

  const handleClickUp = () => {
    setCount(count + 1);
  };
  const handleClickDown = () => {
    setCount(count - 1);
  };
  const handleClickReset = () => {
    setCount(startValue);
  };

  return (
    // 受け取ったcolorをインラインスタイルで枠線の色に使用
    <div className="counter-container" style={{ borderColor: color }}>
      {/* 受け取ったtitleを表示 */}
      <h2 style={{ color: color }}>{title}</h2>

      <p>現在のカウント：**{count}**</p>
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
