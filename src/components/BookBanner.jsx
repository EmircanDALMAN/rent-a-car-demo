import React from 'react';

function BookBanner() {
 return (
  <div className="book-banner">
   <div className="book-banner__overlay"></div>
   <div className="container">
    <div className="text-content w-full flex justify-center">
     <h2>Bizimle iletişime geçerek araç rezervasyonu yapın</h2>
     <span>
      <i className="fa-solid fa-phone"></i>
      <h3>+90 (552) 456 41 26</h3>
     </span>
    </div>
   </div>
  </div>
 );
}

export default BookBanner;
