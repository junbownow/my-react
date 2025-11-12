import { useState } from 'react';
import DisplayColor from './components/DisplayColor';

function App() {
  const [appColor, setAppColor] = useState('blue');

  const toggleColor = () => {
    setAppColor(appColor === 'blue' ? 'red' : 'blue');
  };

  return (
    <>
      <h1>背景色切り替え</h1>
      <DisplayColor backgroundColor={appColor} changeColor={toggleColor} />
    </>
  );
}

export default App;
