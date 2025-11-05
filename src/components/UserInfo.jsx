export default function UserInfo({ user }) {
  return (
    <div>
      <p>名前：{user.name}</p>
      <p>年齢：{user.age}歳</p>
      <p>趣味：{user.hobby}</p>
    </div>
  );
}
