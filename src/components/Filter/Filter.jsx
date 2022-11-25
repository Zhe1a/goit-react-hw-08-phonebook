import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from 'redux/contacts/selectors';
import { statusFilter } from 'redux/filterSliceReducer';


function Filter() {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const {value} = e.target;
    dispatch(statusFilter(value))
  };

  return (
    <div className={s['heder']}>
      <input
        value={filter}
        className={s['input']}
        onChange={handleChangeFilter}
      ></input>
    </div>
  );
}

export default Filter;
