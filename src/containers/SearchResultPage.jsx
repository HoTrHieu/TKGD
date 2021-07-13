import 'assets/css/base.scss';
import withLayout from 'components/Layout';
import { FilterBar, ProductList, Pagination } from 'components/SearchResult';
import { useMemo, useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import queryString from 'query-string'
import { filterByKeySearch, getAllProduct } from './../utils/api';
import { maxPerPage } from './../utils/helper'
import css from './SearchResultPage.module.css'
import classNames from 'classnames';

const SearchResultPage = (props) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');


  const { search } = useLocation();
  const values = queryString.parse(search)
  const keySearch = values.keySearch || "";
  const keyWord = values.keyWord || "";

  useEffect(() => {
    getAllProduct().then(res => {
      if(res.data) {
        const listProduct = res.data;
        const filterWord = keyWord != "" ? listProduct.filter(item => {
          const name = item.name.toLowerCase();
          const word = keyWord.toLowerCase();
          return name.indexOf(word) > -1;
        }): [...listProduct];

        const filterSearch = keySearch != "" ? filterWord.filter(item => {
          return item.type == keySearch;
        }): [...filterWord];

        const filterKey = filter != 'all' ? filterSearch.filter(item => {
          return item.filter == filter;
        }) : [...filterSearch];
        
        setProducts(filterKey);
      }
    })
  }, [keyWord, keySearch, filter]);

  const [activeIndex, setActiveIndex] = useState(0);
  const totalProduct = useMemo(() => products.length, [products]);
  const activeProducts = useMemo(() => products.slice(activeIndex === 0 ? 0 : (activeIndex * maxPerPage), activeIndex ? ((activeIndex + 1) * maxPerPage) : maxPerPage), [products, activeIndex]);
  return (
    <div className="search_result">
      <div className="row">
        <div className="col-3">
          <FilterBar total={totalProduct} />
        </div>
        <div className="col-9">
          <div className="search_result_title">
            Search products
            <div className={css.filterSearch}>
              Filter:
              <div onClick={() => setFilter('all')} className={classNames(css.filterItem, {[css.choose]: filter == 'all'})}>All</div>
              <div onClick={() => setFilter('latest')} className={classNames(css.filterItem, {[css.choose]: filter == 'latest'})}>Latest</div>
              <div onClick={() => setFilter('selling')} className={classNames(css.filterItem, {[css.choose]: filter == 'selling'})}>Selling</div>
            </div>
          </div>
          <div className={classNames(css.searchBy, {[css.multiple]: keyWord && keySearch})}>
            <span className={css.lableSearch}>Search by: </span>
            {keyWord &&
              <div className={css.searchItem}>
                {keyWord}
              </div>
            }
            {
              keySearch &&
              <div className={css.searchItem}>
                {keySearch}
              </div>
            }

          </div>
          <ProductList products={activeProducts} />
          <Pagination setActiveIndex={setActiveIndex} total={totalProduct} activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
}

export default withLayout(SearchResultPage);
