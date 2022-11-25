import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { getStatusFilter, getTasks } from 'redux/contacts/selectors';
import { contactsDeleteApi } from 'redux/contacts/operations';
function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(getTasks);
  const filter = useSelector(getStatusFilter)
  const onDeleteBtn = e => dispatch(contactsDeleteApi(e.target.id));

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = filteredContacts(items, filter);
  return (
    <ul className={s.Item}>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <li className={s.list} key={id}>
            <p>
              {name}: {number}
            </p>
            <button className={s.button} id={id} onClick={e => onDeleteBtn(e)}>
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
