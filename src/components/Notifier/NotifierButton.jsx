import './NotifierButton.css';

const NotifierButton = ({ buttonText, onNotify }) => {
  const handleClick = () => {
    onNotify(buttonText + 'がクリックされました');
  };

  return <button onClick={handleClick}>{buttonText}</button>;
};

export default NotifierButton;
