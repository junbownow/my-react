import UserInfo from './UserInfo';

export default function UserCard({ user }) {
  return (
    <div>
      <h2>カードコンポーネント</h2>
      <UserInfo user={user} />
    </div>
  );
}
