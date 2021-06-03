import { connect } from "react-redux";
import { actions } from "../../redux/contacts/contacts-actions";
import PropTypes from "prop-types";
import { filterWrapper, filterLabel } from "./Filter.module.css";

const Filter = (props) => {
  const { value, changeFilter } = props;
  return (
    <div className={filterWrapper}>
      <label className={filterLabel} htmlFor="filter">
        Find contacts by name or number
      </label>
      <input
        id="filter"
        onInput={(e) => changeFilter(e.target.value)}
        value={value}
        type="text"
      ></input>
    </div>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filter }) => ({ value: filter });

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (value) => dispatch(actions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
