import { useState } from 'react';
import Image from 'next/image';

function CarBox({ data, carID }) {
 const [carLoad, setCarLoad] = useState(true);
 return (
  <>
   {data[carID].map((car, id) => (
    <div key={id} className="box-cars">
     {/* car */}
     <div className="pick-car">
      {/*{carLoad && <span className="loader"></span>}*/}
      <Image
       // style={{display: carLoad ? "none" : "block"}}
       src={car.img}
       alt="car_img"
      />
     </div>
     {/* description */}
     <div className="pick-description">
      <div className="pick-description__price">
       <span>${car.price}</span>/ Günlük
      </div>
      <div className="pick-description__table">
       <div className="pick-description__table__col">
        <span>Marka</span>
        <span>{car.model}</span>
       </div>

       <div className="pick-description__table__col">
        <span>Model</span>
        <span>{car.mark}</span>
       </div>

       <div className="pick-description__table__col">
        <span>Yıl</span>
        <span>{car.year}</span>
       </div>

       <div className="pick-description__table__col">
        <span>Kapı</span>
        <span>{car.doors}</span>
       </div>

       <div className="pick-description__table__col">
        <span>Klima</span>
        <span>{car.air}</span>
       </div>

       <div className="pick-description__table__col">
        <span>Vites</span>
        <span>{car.transmission}</span>
       </div>

       <div className="pick-description__table__col">
        <span>Yakıt</span>
        <span>{car.fuel}</span>
       </div>
      </div>
      {/* btn cta */}
      <a className="cta-btn" href="contact">
       Şimdi Kirala
      </a>
     </div>
    </div>
   ))}
  </>
 );
}

export default CarBox;
