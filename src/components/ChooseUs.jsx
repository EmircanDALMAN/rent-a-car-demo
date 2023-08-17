import MainImg from '../images/chooseUs/main.png';
import Box1 from '../images/chooseUs/icon1.png';
import Box2 from '../images/chooseUs/icon2.png';
import Box3 from '../images/chooseUs/icon3.png';
import Image from 'next/image';

function ChooseUs() {
 return (
  <>
   <section className="choose-section">
    <div className="container">
     <div className="choose-container">
      <Image className="choose-container__img" src={MainImg} alt="car_img" />
      <div className="text-container">
       <div className="text-container__left">
        <h4>Neden Bizi Seçmelisiniz?</h4>
        <h2>Bulabileceğiniz en değerli fırsatlar</h2>
        <p>
         Rakipsiz tekliflerimizle bulabileceğiniz en iyi fırsatları keşfedin. Bankanızı bozmadan en kaliteli hizmet ve ürünlerin keyfini çıkarabilmeniz için paranızın karşılığını en iyi şekilde
         vermeye kendimizi adadık. Fırsatlarımız size en iyi kiralama deneyimini yaşatmak için tasarlanmıştır, bu nedenle büyük tasarruf etme şansınızı kaçırmayın.{' '}
        </p>
        <a href="#home">
         Detaylar &nbsp;
         <i className="fa-solid fa-angle-right"></i>
        </a>
       </div>
       <div className="text-container__right">
        <div className="text-container__right__box">
         <Image src={Box1} alt="car-img" />
         <div className="text-container__right__box__text">
          <h4>Cross Sürüşü</h4>
          <p>Arazi maceralarınız için birinci sınıf araçlarımızla sürüş deneyiminizi bir sonraki seviyeye taşıyın.</p>
         </div>
        </div>
        <div className="text-container__right__box">
         {' '}
         <Image src={Box2} alt="coin-img" />
         <div className="text-container__right__box__text">
          <h4>Herşey Dahil Fiyatlandırma</h4>
          <p>Her şey dahil fiyatlandırma politikamızla ihtiyacınız olan her şeyi tek bir uygun, şeffaf fiyata alın.</p>
         </div>
        </div>
        <div className="text-container__right__box">
         {' '}
         <Image src={Box3} alt="coin-img" />
         <div className="text-container__right__box__text">
          <h4>Gizli Masraf Yok</h4>
          <p>Hiçbir gizli masraf politikamızla içiniz rahat olsun. Şeffaf ve dürüst fiyatlandırmaya inanıyoruz.</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}

export default ChooseUs;
