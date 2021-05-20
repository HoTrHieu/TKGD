import React from 'react';

const Pagination = (props) => {
  return (
    <div className="search_result_pagination">
      <div className="sort">
        Sort by
        <select name="property" id="property">
          <option value="price">Price</option>
          <option value="most_viewed">Most Viewed</option>
          <option value="best_seller">Best Seller</option>
        </select>
      </div>
      <div className="paging">

      </div>
    </div>
  )
};

export default Pagination;
