import React from 'react';
import ExpandIcon from 'assets/images/products/expand.svg';

const FilterBar = (props) => {
  const { total } = props;
  return (
    <div className="search_result_filter_bar">
      <div className="filter_bar_top">
        <div className="filter_bar_top_title">
          PRODUCT FILTER
        </div>
        <div className="filter_bar_top_content">
          <p>{total}</p>&nbsp; products found
        </div>
      </div>
      <div className="filter_bar_bot">
        <ul>
          <li>
            <p>CATEGORIES</p>
            <img alt="expand" src={ExpandIcon} />
          </li>
          <li>
            <p>PRICE</p>&nbsp; (VND)
            <img alt="expand" src={ExpandIcon} />
          </li>
          <li>
            <p>COLOR</p>
            <img alt="expand" src={ExpandIcon} />
          </li>
          <li>
            <p>SIZE</p>
            <img alt="expand" src={ExpandIcon} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBar;
