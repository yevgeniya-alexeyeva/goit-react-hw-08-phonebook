import { connect } from "react-redux";
import { removeContact } from "../../redux/contacts/contacts-operations";
import PropTypes from "prop-types";
import { contactItem, contactItemName } from "./Contact.module.css";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Contact = (props) => {
  const { item, onDelete } = props;
  return (
    <li className={contactItem}>
      <span className={contactItemName}>
        {item.name}: {item.number}
      </span>
      <Button
            type="button"
            onClick={() => onDelete(item.id)}
            variant="contained"
            color="secondary"
          ><DeleteOutlineIcon/>Delete</Button>
    </li>
  );
};

Contact.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (contactId) => dispatch(removeContact(contactId)),
});

export default connect(null, mapDispatchToProps)(Contact);
