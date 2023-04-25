import { useState } from 'react';
const Filter = ({ filterHandler }) => {
  return (
    <label>
      Show
      <select onChange={filterHandler}>
        <option value="all">All</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </select>
    </label>
  );
};

export default Filter;
