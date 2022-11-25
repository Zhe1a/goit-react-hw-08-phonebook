import { LoginApi } from 'redux/UserSlice/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from "../Signup/Signup.module.css"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassworld] = useState('');
  const dictach = useDispatch();

  const hendelSumbit = (el)=>{
    el.preventDefault()
    dictach(LoginApi({email,password}))
  }

  return (
    <div className={s.main}>
      <form onSubmit={hendelSumbit}className={s.box}>
        <p className={s.title}>email</p>
        <input
        name='email'
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <p className={s.title}>password</p>
        <input
        name='password'
          type="password"
          value={password}
          onChange={e => setPassworld(e.target.value)}
        />
        <button type="sumdit" className={s.button}>sumdit</button>
      </form>
    </div>
  );
};

export default Login;
