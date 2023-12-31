import BgShape from '../images/hero/hero-bg.png';
import HeroCar from '../images/hero/main-car.png';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
 const [goUp, setGoUp] = useState(false);

 const scrollToTop = () => {
  window.scrollTo({ top: (0, 0), behavior: 'smooth' });
 };

 const bookBtn = () => {
  document.querySelector('#booking-section').scrollIntoView({ behavior: 'smooth' });
 };

 useEffect(() => {
  const onPageScroll = () => {
   if (window.pageYOffset > 600) {
    setGoUp(true);
   } else {
    setGoUp(false);
   }
  };
  window.addEventListener('scroll', onPageScroll);

  return () => {
   window.removeEventListener('scroll', onPageScroll);
  };
 }, []);
 return (
  <>
   <section id="home" className="hero-section">
    <div className="container">
     <Image className="bg-shape" src={BgShape} alt="bg-shape" />
     <div className="hero-content">
      <div className="hero-content__text">
       <h4>Seyahatinizi şimdi planlayın</h4>
       <h1>
        Araç kiralama hizmetimizle <span>büyük</span> tasarruf edin
       </h1>
       <p>Hayalinizdeki arabayı kiralayın. Rakipsiz fiyatlar, sınırsız mil, esnek teslim alma seçenekleri ve çok daha fazlası.</p>
       <div className="hero-content__text__btns">
        <Link onClick={bookBtn} className="hero-content__text__btns__book-ride" href="/contact">
         Şimdi Kirala &nbsp; <i className="fa-solid fa-circle-check"></i>
        </Link>
        <Link className="hero-content__text__btns__learn-more" href="/about">
         Hakkımızda &nbsp; <i className="fa-solid fa-angle-right"></i>
        </Link>
       </div>
      </div>

      {/* img */}
      <Image src={HeroCar} alt="car-img" className="hero-content__car-img" />
     </div>
    </div>

    {/* page up */}
    <div onClick={scrollToTop} className={`scroll-up ${goUp ? 'show-scroll' : ''}`}>
     <i className="fa-solid fa-angle-up"></i>
    </div>
   </section>
  </>
 );
}

export default Hero;
