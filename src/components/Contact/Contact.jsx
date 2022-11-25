import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import s from '../App.module.css';
import { useEffect } from 'react';
import { contactsListApi } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';

const Contact = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsListApi());
  }, [dispatch]);

  return (
    <>
      <UserMenu />
      <h1 className={s.titel}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.titel}>Contacts</h2>
      <Filter />
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <ContactList />
    </>
  );
};

export default Contact;
