import './App.css';
import NotifierButton from './components/Notifier/NotifierButton';

const App = () => {
  const handleNotification = (message) => {
    console.log('親が受信：' + message);
  };

  const handleUrgentNotification = (message) => {
    console.error('!!! 緊急通知 !!!' + message);
  };

  const handleResetRequest = (source) => {
    console.log(`[リセット]${source}から要求が来ました`);
  };

  const handleThankYou = () => {
    console.log('親：いつもありがとう！');
  };

  const handleFailuer = (message) => {
    console.log(`--- 失敗：${message} ---`);
  };

  return (
    <>
      <h1>コールバック関数ドリル</h1>
      <NotifierButton buttonText="通知ボタンA" onNotify={handleNotification} />
      <NotifierButton buttonText="通知ボタンB" onNotify={handleNotification} />
      <NotifierButton buttonText="緊急ボタン" onNotify={handleUrgentNotification} />

      <NotifierButton buttonText="リセット要求" onNotify={handleResetRequest} />
      <NotifierButton buttonText="ありがとう" onNotify={handleThankYou} />
      <NotifierButton buttonText="失敗通知" onNotify={handleFailuer} />
    </>
  );
};

export default App;
