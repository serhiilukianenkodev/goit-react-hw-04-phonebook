import PropTypes from 'prop-types';
import { Button } from 'components/Utils/ButtonStyled';
import { ContactsList, Item } from 'components/ContactList/contactListStyled';

export const ContactList = ({ list, removeContact }) => {
  return (
    <ContactsList>
      {list.map(({ id, name, number }) => {
        console.log();
        return (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Button type="button" onClick={() => removeContact(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </ContactsList>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  removeContact: PropTypes.func.isRequired,
};
