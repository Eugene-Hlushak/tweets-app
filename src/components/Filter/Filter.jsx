import { FilterSelector, FilterBox, FilterLabel } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ filterHandler }) => {
  return (
    <FilterBox>
      <FilterLabel>Show</FilterLabel>
      <FilterSelector onChange={filterHandler}>
        <option value="all">All</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </FilterSelector>
    </FilterBox>
  );
};

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default Filter;
