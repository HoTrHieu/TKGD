import 'assets/css/base.scss';
import withLayout from 'components/Layout';
import ProductImg from 'assets/images/products/img-9.png';
import { FilterBar, ProductList, Pagination } from 'components/SearchResult';

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
  }
]

const SearchResultPage = () => {
  return (
    <div className="search_result">
      <div className="row">
        <div className="col-3">
          <FilterBar total={30}/>
        </div>
        <div className="col-9">
          <p className="search_result_title">
            All products
          </p>
          <Pagination total={30}/>
          <ProductList/>
        </div>
      </div>
    </div>
  );
}

export default withLayout(SearchResultPage);
