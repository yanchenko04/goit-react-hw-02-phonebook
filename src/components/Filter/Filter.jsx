import propTypes from 'prop-types';

export default function Filter({ onChange }) {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input onChange={onChange} />
      </>
    );
  };
  Filter.propTypes = {
    onChange: propTypes.func.isRequired,
  };