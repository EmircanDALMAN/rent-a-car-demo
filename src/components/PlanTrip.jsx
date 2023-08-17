import SelectCar from '../images/plan/icon1.png';
import Contact from '../images/plan/icon2.png';
import Drive from '../images/plan/icon3.png';
import Image from 'next/image';

function PlanTrip() {
 return (
  <>
   <section className="plan-section">
    <div className="container">
     <div className="plan-container">
      <div className="plan-container__title">
       <h3>Seyahatinizi şimdi planlayın</h3>
       <h2>Hızlı ve kolay araç kiralama</h2>
      </div>

      <div className="plan-container__boxes">
       <div className="plan-container__boxes__box">
        <Image src={SelectCar} alt="icon_img" className="mx-auto" />
        <h3>Araba Seç</h3>
        <p>Tüm sürüş ihtiyaçlarınız için geniş bir araç yelpazesi sunuyoruz. İhtiyaçlarınızı karşılamak için mükemmel bir araca sahibiz.</p>
       </div>

       <div className="plan-container__boxes__box">
        <Image src={Contact} alt="icon_img" className="mx-auto" />
        <h3>İletişime Geç</h3>
        <p>Bilgili ve arkadaş canlısı operatörlerimiz her türlü soru veya endişeniz için her zaman yardıma hazırdır.</p>
       </div>

       <div className="plan-container__boxes__box">
        <Image src={Drive} alt="icon_img" className="mx-auto" />
        <h3>Tatilin Tadını Çıkart!</h3>
        <p>İster açık yola çıkıyor olun, geniş araç yelpazemizle yanınızdayız.</p>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}

export default PlanTrip;
