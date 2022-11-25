import { logOutApi } from 'redux/UserSlice/operations';
import { useDispatch, useSelector } from 'react-redux';

import s from "./UserMenu.module.css"
import { selectUser } from 'redux/UserSlice/selectors';
const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onHendelLogout = () => dispatch(logOutApi());

  return (
    <div className={s.header}>
     <div className={s.box}>
     <p className={s.title}>Name: {user.name}</p>
      <p className={s.title}>Email: {user.email}</p>
     </div>
      <button type="button" onClick={onHendelLogout} className={s.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
