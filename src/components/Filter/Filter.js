import shortid from 'shortid';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-action';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  const findId = shortid.generate();
  return (
    <>
      <label for={findId}>Find contacts by name</label>
      <input className={s.input} id={findId} type="text" value={value} onChange={onChange} />
    </>
  );
}

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
