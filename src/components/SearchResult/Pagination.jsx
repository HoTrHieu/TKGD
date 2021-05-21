import React, { useMemo } from 'react';
import { createIncArray } from 'utils/array';
import { MAX_PRODUCTS_PER_PAGE } from '../../constants';

const PaginationItem = ({ children, active = false, onClick = () => {} }) => {
  return (
    <div onClick={onClick} className={`paging_item ${active ? 'active' : ''}`}>
      {children}
    </div>
  );
};

const Pagination = (props) => {
  const { total, activeIndex, setActiveIndex } = props;
  const pagingArray = useMemo(() => createIncArray(Math.ceil(total / MAX_PRODUCTS_PER_PAGE)), [total]);
  console.log(activeIndex);
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
        <PaginationItem  onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}>
          {'<'}
        </PaginationItem>
        {pagingArray.map((paging) => {
          const displayPaging = paging + 1;
          return (
          <PaginationItem active={paging === activeIndex} onClick={() => setActiveIndex(paging)} key={paging}>
           {displayPaging}
          </PaginationItem>
          );
        })}
        <PaginationItem onClick={() => activeIndex < pagingArray.length - 1 && setActiveIndex(activeIndex + 1)}>
          {'>'}
        </PaginationItem>
      </div>
    </div>
  )
};

export default Pagination;
