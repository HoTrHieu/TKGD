import 'assets/css/base.scss';
import withLayout from 'components/Layout';
import ProductImg from 'assets/images/products/img-9.png';
import { FilterBar, ProductList, Pagination } from 'components/SearchResult';
import { useMemo, useState } from 'react';
import { MAX_PRODUCTS_PER_PAGE } from '../constants';

const data = [
  {
    imgSrc: ProductImg,
    name: 'RHAPSODIES',
    price: '900,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BLOOMING JOY',
    price: '1,800,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'WILD BEAUTY',
    price: '2,950,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  },
  {
    imgSrc: ProductImg,
    name: 'BOHEMIAN PINK',
    price: '1,200,000 VND',
    onClick: () => console.log('hihi'),
  }
  
]

const SearchResultPage = () => {
  const [products, setProducts] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalProduct = useMemo(() => products.length, [products]);
  const activeProducts = useMemo(() => products.slice(activeIndex, MAX_PRODUCTS_PER_PAGE), [products, activeIndex]);
  return (
    <div className="search_result">
      <div className="row">
        <div className="col-3">
          <FilterBar total={totalProduct}/>
        </div>
        <div className="col-9">
          <p className="search_result_title">
            All products
          </p>
          <Pagination setActiveIndex={setActiveIndex} total={totalProduct} activeIndex={activeIndex}/>
          <ProductList products={activeProducts} />
        </div>
      </div>
    </div>
  );
}

export default withLayout(SearchResultPage);
