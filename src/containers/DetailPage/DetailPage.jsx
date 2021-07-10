import React from 'react';
import css from './DetailPage.module.css'
import withLayout from 'components/Layout';

const DetailPage = props => {
    return (
      <div className={css.detailContainer}>
        <div className={css.subMenu}>
          <div>CHI TIẾT</div>
          <div>MÔ TẢ</div>
          <div>ĐÁNH GIÁ</div>
          <div>Q & A</div>
        </div>

        <div className={css.deatailInfo}>
          <div className={css.info}>

          </div>
          <div className={css.related}>

          </div>
        </div>
      </div>    
    );
};

export default withLayout(DetailPage);