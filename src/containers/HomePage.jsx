import 'assets/css/base.scss';
import withLayout from 'components/Layout';
import BannerImg from 'assets/images/banner.png';
import { DATA_HOME_PAGE } from '../constants';
import { Category } from 'components/HomePage';

const HomePage = () => {
  return (
    <div className="homepage">
      <img className="homepage_banner" alt="banner" src={BannerImg}/>
      <Category products={DATA_HOME_PAGE} boldTitle="Newest" title="Products" />
    </div>
  );
}

export default withLayout(HomePage);
