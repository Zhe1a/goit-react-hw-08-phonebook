import { RegisterApi } from 'redux/UserSlice/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from "./Signup.module.css"

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassworld] = useState('');
  const dictach = useDispatch();

  const hendeSumbit = (el)=>{
    el.preventDefault()
    console.log({email,password,name});
    dictach(RegisterApi({name,email,password}))
  }


  return (
    <div className={s.main}>
      <form onSubmit={hendeSumbit} className={s.box}>
        <p className={s.title}>name</p>
        <input
          type="name"
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <p className={s.title}>email</p>
        <input
          type="email"
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <p className={s.title}>password</p>
        <input
          type="password"
          name='password'
          value={password}
          onChange={e => setPassworld(e.target.value)}
        />
        <button type="sumdit" className={s.button}>sumdit</button> 
      </form>
    </div>
  );
};

export default Signup;
