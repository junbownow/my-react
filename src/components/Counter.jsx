// 1. Reactから useState Hook をインポートします
import { useState } from 'react';

const Counter = () => {
  // 2. Stateの定義（重要！）
  // [現在の値, 値を更新するための関数] = useState(初期値)
  const [count, setCount] = useState(0);

  // 3. 値を増やすための関数（イベントハンドラ）
  const handleClick = () => {
    // 4. setCount() を使って State の値を更新します
    // これを行うと、Reactはこのコンポーネントを再レンダリング（再描画）します
    setCount(count + 1);
  };

  return (
    <div>
      <h2>カウントアプリ</h2>
      {/* 5. Stateの現在の値を表示します */}
      <p>現在のカウント: **{count}**</p>
      
      {/* 6. ボタンの onClick イベントに handleClick 関数を割り当てます */}
      <button onClick={handleClick}>
        カウントアップ
      </button>
    </div>
  );
};

export default Counter;