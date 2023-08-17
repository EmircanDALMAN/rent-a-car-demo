import logo from '../images/logo/logo.png';
import Image from 'next/image';

function Footer() {
 return (
  <>
   <footer>
    <div className="container">
     <div className="footer-content">
      <ul className="footer-content__1">
       <li>
        {/*<span>CAR</span> Rental*/}
        <Image src={logo} alt="" className="w-3/6" />
       </li>
       <li>Tüm sürüş ihtiyaçlarınız için geniş bir araç yelpazesi sunuyoruz. İhtiyaçlarınızı karşılamak için mükemmel bir araca sahibiz.</li>
       <li>
        <a href="#">
         <i className="fa-solid fa-phone"></i> &nbsp; +90 (552) 456 41 26
        </a>
       </li>

       <li>
        <a href="#">
         <i className="fa-solid fa-envelope"></i>
         &nbsp; firmaniz@domain.com
        </a>
       </li>

       <li>
        <a style={{ fontSize: '14px' }} target="_blank" rel="noreferrer" href="#">
         Design by Emircan Dalman
        </a>
       </li>
      </ul>

      <ul className="footer-content__2">
       <li>ŞİRKET</li>
       <li>
        <a href="#">Anasayfa</a>
       </li>
       <li>
        <a href="about">Hakkımızda</a>
       </li>
       <li>
        <a href="models">Araç Modelleri</a>
       </li>
       <li>
        <a href="team">Ekibimiz</a>
       </li>
       <li>
        <a href="contact">İletişim</a>
       </li>
      </ul>

      <ul className="footer-content__2">
       <li>MESAİ SAATLERİ</li>
       <li>HAFTAİÇİ: 9:00AM - 9:00PM</li>
       <li>CUMRTSİ: 9:00AM - 19:00PM</li>
       <li>PAZAR: Kapalı</li>
      </ul>

      <ul className="footer-content__2">
       <li>ABONELİK</li>
       <li>
        <p>En son haberler ve güncellemeler için E-posta adresinize abone olun.</p>
       </li>
       <li>
        <input type="email" placeholder="E-mail Adresinizi Giriniz"></input>
       </li>
       <li>
        <button className="submit-email">Abone Ol</button>
       </li>
      </ul>
     </div>
    </div>
   </footer>
  </>
 );
}

export default Footer;
