import s from './App.module.css';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import Login from './login/login';
import Signup from './Signup/Signup';
import { useDispatch, useSelector } from 'react-redux';
import {  useEffect,  } from 'react';
import { fetchCurrentUser } from '../redux/UserSlice/operations';
import { selectIsLoggedIn } from 'redux/UserSlice/selectors';

// const Contact = lazy(() => import('./Contact/Contact'));
// const Signup = lazy(() => import('./Signup/Signup'));
// const Login = lazy(() => import('./login/login'));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <div>
          <nav className={s.box}>
            <NavLink className={s.link} to="/register">
              Register
            </NavLink>
            <NavLink className={s.link} to="/login">
              Login
            </NavLink>
          </nav>
          <Routes>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
