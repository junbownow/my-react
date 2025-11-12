const DisplayColor = ({ backgroundColor, changeColor }) => {
  return (
    <div style={{ border: '1px solid', padding: '10px', marginTop: '10px', backgroundColor: backgroundColor }}>
      <h3>子コンポーネント</h3>
      <button onClick={changeColor}>色を切り替える</button>
    </div>
  );
};

export default DisplayColor;
