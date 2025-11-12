const DisplayCount = ({ countValue, onIncrement, resetIncrement }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
      <h3>子コンポーネント</h3>
      <p>親から渡された値: {countValue}</p>
      <button onClick={onIncrement}>
        親のstateを操作する
      </button>
      <button onClick={resetIncrement}>
        stateをリセットする
      </button>
    </div>
  );
};

export default DisplayCount;