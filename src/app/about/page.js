import Footer from '../../components/Footer';
import HeroPages from '../../components/HeroPages';
import PlanTrip from '../../components/PlanTrip';
import AboutMain from '../../images/about/about-main.jpg';
import Box1 from '../../images/about/icon1.png';
import Box2 from '../../images/about/icon2.png';
import Box3 from '../../images/about/icon3.png';
import Image from 'next/image';
import BookBanner from '@/components/BookBanner';

function About() {
 const items = [
  {
   img: Box1,
   amount: '20',
   text: 'Araç Tipi',
  },
  {
   img: Box2,
   amount: '85',
   text: 'Bayi',
  },
  {
   img: Box3,
   amount: '75',
   text: 'Onarım Mağazası',
  },
 ];

 return (
  <>
   <section className="about-page">
    <HeroPages name="Hakkımızda" />
    <div className="container">
     <div className="about-main">
      <Image className="about-main__img" src={AboutMain} alt="car-renting" />
      <div className="about-main__text">
       <h3>Şirketimiz Hakkında</h3>
       <h2>Motoru çalıştırıyorsunuz ve maceranız başlıyor</h2>
       <p>
        Keyifli Yolculuklar İçin Biz Buradayız! Araba Kiralama Firmamız, uygun fiyatlarla kaliteli araçları sizinle buluşturuyor. Sizin için en iyi seçenekleri sunarak, güvenli ve konforlu bir seyahat
        deneyimi yaşamanızı sağlıyoruz. Hemen rezervasyon yapın, keyifli yolculuğunuz başlasın!{' '}
       </p>
       <div className="about-main__text__icons">
        {items.map((item, index) => (
         <div className="about-main__text__icons__box" key={index}>
          <Image src={item.img} alt="car-icon" className="mx-auto max-w-[40px]" />
          <span>
           <h4>{item.amount}</h4>
           <p>{item.text}</p>
          </span>
         </div>
        ))}
       </div>
      </div>
     </div>
     <PlanTrip />
    </div>
   </section>
   <BookBanner />
   <Footer />
  </>
 );
}

export default About;
