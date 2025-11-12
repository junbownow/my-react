// 分割代入を使って、propsオブジェクトからuserNameとisLoggedInを直接取り出す。
const UserInfo = ({ username, isLoggedIn }) => {
  // 変数名userNameとisloggedInが使用できるようになった。
  return (
    <div>
      {isLoggedIn ? <p>ようこそ、{username}さん！ログイン中です。</p> : <p>ゲスト様、ログインしてください。</p>}
    </div>
  );
};

export default UserInfo;
