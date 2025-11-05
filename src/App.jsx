import './App.css';
import UserCard from './components/UserCard';

export default function App() {
  const user = {
    name: '純',
    age: 32,
    hobby: 'コーヒー',
  };

  return (
    <div>
      <h1>ユーザー情報</h1>
      <UserCard user={user} />
    </div>
  );
}
