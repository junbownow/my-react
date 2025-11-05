// ブランチ練習中
import Message from './Message';
import UserInfo from './UserInfo';

function App() {
  return (
    <div>
      <Message text="こんにちは！Reactのpropsの練習中です！" />
      <UserInfo name="純" age={29} />
    </div>
  );
}

export default App;
