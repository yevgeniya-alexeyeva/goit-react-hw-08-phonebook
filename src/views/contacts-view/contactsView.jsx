import { Component } from "react";
import { connect } from "react-redux";
import { getContacts } from "../../redux/contacts/contacts-operations";
import ContactsForm from "../../components/ContactsForm";
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter";
import Loader from "react-loader-spinner";
import { getIsLoading } from "../../redux/contacts/contacts-selectors";
import PropTypes from "prop-types";
import {mainTitle, title} from './contacts-view.module.css';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  static propTypes = {
    getContacts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    const { isLoading } = this.props;
    return (
      <>
        <h1 className={mainTitle} >Phonebook</h1>
        <ContactsForm />
        <h2 className={title}>Contacts</h2>
        <Filter />
        {isLoading ? (
          <Loader
            type="ThreeDots"
            color="#fc4445"
            height={100}
            width={100}
            timeout={3000}
          />
        ) : (
          <ContactList />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
