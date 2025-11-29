import './NotifierButton.css';

const NotifierButton = ({ buttonText, onNotify }) => {
  const handleClick = () => {
    // 親から渡された関数 onNotify を呼び出す（実行する）
    // 引数として、親がログに出したい「メッセージ」を渡す
    onNotify(buttonText + 'がクリックされました');
  };

  return <button onClick={handleClick}>{buttonText}</button>;
};

export default NotifierButton;
