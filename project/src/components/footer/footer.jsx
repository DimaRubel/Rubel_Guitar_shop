import React from "react";

function Footer() {
  return(
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <a className="footer__logo-link" href="#">
            <img className="footer__logo-guitar" src="./image/logo-white.svg" width="67" height="70" alt="logo" />
          </a>
          <div className="social">
          <a className="social__link" href="https://www.facebook.com/" aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37294 0 0 5.40537 0 12.0724C0 18.0972 4.38764 23.0909 10.1254 24V15.5629H7.07711V12.0724H10.1254V9.41262C10.1254 6.38455 11.9172 4.71476 14.6571 4.71476C15.97 4.71476 17.3453 4.9502 17.3453 4.9502V7.91911H15.8284C14.3402 7.91911 13.8746 8.85119 13.8746 9.80622V12.07H17.2001L16.6685 15.5605H13.8746V23.9976C19.6124 23.0933 24 18.0984 24 12.0724C24 5.40537 18.6271 0 12 0Z" fill="white"/>
            </svg>
          </a>
          <a className="social__link" href="https://www.instagram.com/" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24C10.375 24 8.82031 23.6836 7.33594 23.0508C5.85156 22.418 4.57422 21.5664 3.50391 20.4961C2.43359 19.4258 1.58203 18.1484 0.949219 16.6641C0.316406 15.1797 0 13.625 0 12C0 10.375 0.316406 8.82031 0.949219 7.33594C1.58203 5.85156 2.43359 4.57422 3.50391 3.50391C4.57422 2.43359 5.85156 1.58203 7.33594 0.949219C8.82031 0.316406 10.375 0 12 0C13.625 0 15.1797 0.316406 16.6641 0.949219C18.1484 1.58203 19.4258 2.43359 20.4961 3.50391C21.5664 4.57422 22.418 5.85156 23.0508 7.33594C23.6836 8.82031 24 10.375 24 12C24 13.625 23.6836 15.1797 23.0508 16.6641C22.418 18.1484 21.5664 19.4258 20.4961 20.4961C19.4258 21.5664 18.1484 22.418 16.6641 23.0508C15.1797 23.6836 13.625 24 12 24ZM18 7.5C18 7.09375 17.8555 6.74219 17.5664 6.44531C17.2773 6.14844 16.9219 6 16.5 6H7.5C7.09375 6 6.74219 6.14844 6.44531 6.44531C6.14844 6.74219 6 7.09375 6 7.5V9H8.67188C9.57812 8 10.6875 7.5 12 7.5C13.3125 7.5 14.4219 8 15.3281 9H18V7.5ZM9 12C9 12.8281 9.29297 13.5352 9.87891 14.1211C10.4648 14.707 11.1719 15 12 15C12.8281 15 13.5352 14.707 14.1211 14.1211C14.707 13.5352 15 12.8281 15 12C15 11.1719 14.707 10.4648 14.1211 9.87891C13.5352 9.29297 12.8281 9 12 9C11.1719 9 10.4648 9.29297 9.87891 9.87891C9.29297 10.4648 9 11.1719 9 12ZM18 10.5H16.2188C16.4062 11.0156 16.5 11.5156 16.5 12C16.5 13.25 16.0625 14.3125 15.1875 15.1875C14.3125 16.0625 13.25 16.5 12 16.5C10.75 16.5 9.6875 16.0625 8.8125 15.1875C7.9375 14.3125 7.5 13.25 7.5 12C7.5 11.5156 7.59375 11.0156 7.78125 10.5H6V16.5C6 16.9219 6.14453 17.2773 6.43359 17.5664C6.72266 17.8555 7.07812 18 7.5 18H16.5C16.9219 18 17.2773 17.8555 17.5664 17.5664C17.8555 17.2773 18 16.9219 18 16.5V10.5Z" fill="white"/>
            </svg>
          </a>
          <a className="social__link" href="https://www.twitter.com" aria-label="Twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0005 0.480469C5.63807 0.480469 0.480469 5.63807 0.480469 12.0005C0.480469 18.3629 5.63807 23.5205 12.0005 23.5205C18.3629 23.5205 23.5205 18.3629 23.5205 12.0005C23.5205 5.63807 18.3629 0.480469 12.0005 0.480469ZM16.6865 9.91727C16.6913 10.0157 16.6925 10.1141 16.6925 10.2101C16.6925 13.2101 14.4113 16.6673 10.2377 16.6673C9.00442 16.6693 7.79683 16.3151 6.76007 15.6473C6.93647 15.6689 7.11767 15.6773 7.30127 15.6773C8.36447 15.6773 9.34247 15.3161 10.1189 14.7065C9.64573 14.6972 9.18727 14.5405 8.8074 14.2583C8.42753 13.9761 8.14517 13.5824 7.99967 13.1321C8.33946 13.1967 8.68949 13.1831 9.02327 13.0925C8.50973 12.9886 8.04791 12.7104 7.71612 12.3049C7.38433 11.8994 7.203 11.3916 7.20287 10.8677V10.8401C7.50887 11.0093 7.85927 11.1125 8.23127 11.1245C7.74983 10.804 7.40901 10.3117 7.27852 9.74823C7.14803 9.18478 7.23773 8.59277 7.52927 8.09327C8.09921 8.79407 8.80998 9.36736 9.61555 9.77604C10.4211 10.1847 11.3035 10.4197 12.2057 10.4657C12.091 9.97884 12.1403 9.46776 12.3461 9.01187C12.5518 8.55599 12.9024 8.18086 13.3434 7.94479C13.7843 7.70871 14.2909 7.62494 14.7843 7.70647C15.2778 7.78801 15.7305 8.0303 16.0721 8.39567C16.5799 8.2952 17.0668 8.10893 17.5121 7.84487C17.3428 8.37063 16.9885 8.81708 16.5149 9.10127C16.9647 9.04709 17.4039 8.92616 17.8181 8.74247C17.5139 9.19834 17.1306 9.59619 16.6865 9.91727Z" fill="white"/>
            </svg>
          </a>
        </div>
        </div>
        <div className="about-us">
          <h3 className="about-us__header">О нас</h3>
          <ul className="about-us__list">
            <li className="about-us__item">Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</li>
            <li className="about-us__item">Все инструменты проверены, отстроены и доведены до идеала!</li>
          </ul>
        </div>

        <div className="footer-catalog">
          <h3 className="footer-catalog__header">Каталог</h3>
          <ul className="footer-catalog__list">
            <li className="footer-catalog__item"><a href="#">Акустические гитары</a></li>
            <li className="footer-catalog__item"><a href="#">Классические гитары</a></li>
            <li className="footer-catalog__item"><a href="#">Электрогитары</a></li>
            <li className="footer-catalog__item"><a href="#">Бас-гитары</a></li>
            <li className="footer-catalog__item"><a href="#">Укулеле</a></li>
          </ul>
        </div>

        <div className="information">
          <h3 className="information__header">Информация</h3>
          <ul className="information__list">
            <li className="information__item"><a href="#">Где купить?</a></li>
            <li className="information__item"><a href="#">Блог</a></li>
            <li className="information__item"><a href="#">Вопрос - ответ</a></li>
            <li className="information__item"><a href="#">Возврат</a></li>
            <li className="information__item"><a href="#">Сервис-центры</a></li>
          </ul>
        </div>

        <div className="contacts">
          <h3 className="contacts__header">Контакты</h3>
          <ul className="contacts__list">
            <li className="contacts__item">г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</li>
            <li className="contacts__item"><a className="contacts__item-link" href="tel:88125005050">8-812-500-50-50</a></li>
            <li className="contacts__item">Режим работы:</li>
            <li className="contacts__item"><span className="contacts__item-time">с 11:00 до 20:00,</span></li>
            <li className="contacts__item">без выходных.</li>
          </ul>
        </div>

  
      </div>
    </footer>
  );
}

export default Footer;