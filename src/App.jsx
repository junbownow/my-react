import './App.css';
import NotifierButton from './components/Notifier/NotifierButton';

const App = () => {
  // 1.親の仕事：子から通知が来た時に実行する関数を定義
  const handleNotification = (message) => {
    // messageには子から渡された文字列が入る
    console.log('【通常受信】' + message);
  };

  const handleUrgentNotification = (message) => {
    console.error("!!! 緊急アラート受信 !!!" + message);
  };

  return (
    <>
      <h1>コールバック関数ドリル</h1>

      {/* 2.親の仕事：その関数をPropsとして子に渡す */}
      <NotifierButton buttonText="通知ボタンA" onNotify={handleNotification} />
      <NotifierButton buttonText="通知ボタンB" onNotify={handleNotification} />
      <NotifierButton buttonText="緊急通知" onNotify={handleUrgentNotification} />
    </>
  );
};

export default App;
