import React from 'react';
import OrderIcon from 'assets/images/footer/order.png';
import DeliveryIcon from 'assets/images/footer/delivery-truck.png';
import LetterIcon from 'assets/images/footer/letter.png';
import ReturnIcon from 'assets/images/footer/return.png';
import QuestionIcon from 'assets/images/footer/question-mark.png';
import InfoIcon from 'assets/images/footer/info.png';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="content">
        <div className="left">
          <div className="top">
            <div className="content-block">
              <p className="article">NEED HELP?</p>
              <p>Working hours</p>
              <div className="working-hour"><p className="hour">9:30 - 20:30</p> <p>Monday - Saturday</p></div>
              <div className="working-hour"><p className="hour">12:00 - 20:30</p> <p>Sunday</p></div>
              <p>Holidays off</p>
            </div>
            <div className="content-block">
              <p className="article">WHERE TO FIND US?</p>
              <p>Ho Chi Minh City (Main store)</p>
              <p>123 Pham Van Dong, Thu Duc District</p>
            </div>
            <div className="content-block">
              <p className="article">QUICK ACCESS</p>
              <p>Home</p>
              <p>Store</p>
              <p>About</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="bot">
            <div className="title">
              <p className="hotline">HOTLINE: 0123.123.123</p>
              <p className="departments">Other departments in Vietnam</p>
            </div>
            <div className="content">
              <div  className="content-left">
                <ul className="block">
                  <li>
                    <img alt="" src={OrderIcon} />
                    Order status
                  </li>
                  <li>
                    <img alt="" src={ReturnIcon} />
                    Return policy
                  </li>
                  <li>
                    <img alt="" src={InfoIcon} />
                    Shopping instruction
                  </li>
                </ul>
                <ul className="block end">
                  <li>
                    <img alt="" src={DeliveryIcon} />
                    Delivery
                  </li>
                  <li>
                    <img alt="" src={QuestionIcon} />
                    Common questions
                  </li>
                  <li>
                    <img alt="" src={LetterIcon} />
                    Request supports
                  </li>
                </ul>
              </div>
              <ul className="block end">
                <li>
                  Hanoi
                </li>
                <li>
                  Dalat
                </li>
                <li>
                  Thai Nguyen
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
