import 'assets/css/base.scss';
import withLayout from 'components/Layout';
import { FilterBar, ProductList, Pagination } from 'components/SearchResult';
import { useMemo, useState, useEffect } from 'react';
import { MAX_PRODUCTS_PER_PAGE, DATA_PRODUCTS } from '../constants';


const SearchResultPage = (props) => {
  
  // if (dataSearch) {
  //   dataSearch = DATA_PRODUCTS;
  // }
  const [products, setProducts] = useState(DATA_PRODUCTS);
  useEffect(() => {
    const params = props.match.params;
    const keySearch = params.word;
    let dataSearch = DATA_PRODUCTS.filter((dt) => {
      const name = dt.name.toLowerCase();
      if (dt.name) {
        return name.indexOf(keySearch) > -1;
      }
      return false;
    });
    setProducts(dataSearch);
  }, [props.match.params]);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalProduct = useMemo(() => products.length, [products]);
  const activeProducts = useMemo(() => products.slice(activeIndex === 0 ? 0 : (activeIndex * MAX_PRODUCTS_PER_PAGE), activeIndex ? ((activeIndex + 1) * MAX_PRODUCTS_PER_PAGE) : MAX_PRODUCTS_PER_PAGE), [products, activeIndex]);
  return (
    <div className="search_result">
      <div className="row">
        <div className="col-3">
          <FilterBar total={totalProduct} />
        </div>
        <div className="col-9">
          <p className="search_result_title">
            All products
          </p>
          <Pagination setActiveIndex={setActiveIndex} total={totalProduct} activeIndex={activeIndex} />
          <ProductList products={activeProducts} />
        </div>
      </div>
    </div>
  );
}

export default withLayout(SearchResultPage);