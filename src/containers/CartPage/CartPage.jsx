import 'assets/css/base.scss';
import withLayout from 'components/Layout';
import BannerImg from 'assets/images/banner.png';
import { DATA_HOME_PAGE } from '../../constants';
import { Category } from 'components/HomePage';
import css from './CartPage';

const CartPage = props => {
  return (
    <div className={css.cartContainer}>
      <div className={css.cartContent}>
        <div className={css.cartList}>
          <div className={css.cartItem}>
            <div className={css.itemImg}> 

            </div>
            <div className={css.itemInfo}>
              'h'
            </div>
          </div>
        </div>
        <div className={css.cartInfo}>
          <div className={css.cartInfoContent}>
            <div className={css.titleInfo}>THÔNG TIN GIỎ HÀNG</div>
            <div className={css.priceInfo}>
              <p><span>Tạm tính: 4,150,000</span></p>
              <p><span>(Chưa bao gồm thuế VAT)</span></p>
            </div>
            <button>Đặt Hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLayout(CartPage);
