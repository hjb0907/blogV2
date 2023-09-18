import './Mypage.css';

function Mypage() {
  return (
    <div className="Mypage">
      <div className='logo'></div>
      <div className='profile'>
        <div className='profileImg'></div>
        <p className='profileName'>홍길동</p>
      </div>
      <div className='Menu'>
        <ul>
          <li>캘린더</li>
          <li>마이로그</li>
          <li>잇로그</li>
          <li>산책로그</li>
          <li>플로그:인</li>
        </ul>
      </div>
      <div className='btMenu'>
        <a>정보변경</a>
        <a>로그아웃</a>
      </div>
    </div>
  );
}

export default Mypage;
