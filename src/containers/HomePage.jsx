import 'assets/css/base.scss';
import Layout from 'components/Layout';
import BannerImg from 'assets/images/banner.png';
import ProductImg from 'assets/images/products/img-9.png';
import { Category } from 'components/HomePage';

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

function App() {
  return (
    <Layout>
      <div className="homepage">
        <img className="homepage_banner" alt="banner" src={BannerImg}/>
        <Category products={data} boldTitle="Newest" title="Products" />
      </div>
    </Layout>
  );
}

export default App;
