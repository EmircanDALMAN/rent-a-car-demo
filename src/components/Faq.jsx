import { useState } from 'react';

function Faq() {
 const [activeQ, setActiveQ] = useState('q1');

 const openQ = (id) => {
  setActiveQ(activeQ === id ? '' : id);
 };

 const getClassAnswer = (id) => {
  return activeQ === id ? 'active-answer' : '';
 };

 const getClassQuestion = (id) => {
  return activeQ === id ? 'active-question' : '';
 };

 const items = [
  {
   id: 'q1',
   q: 'Kiralık araba fırsatlarını karşılaştırmanın özelliği nedir?',
   a: 'Kiralık araba fırsatlarını karşılaştırmak, bütçenize ve gereksinimlerinize uyan en iyi anlaşmayı bulmanıza yardımcı olduğu ve paranızın karşılığını en iyi şekilde almanızı sağladığı için önemlidir. Çeşitli seçenekleri karşılaştırarak daha düşük fiyatlar, ek hizmetler veya daha iyi araba modelleri sunan fırsatlar bulabilirsiniz. İnternetten araştırma yaparak ve farklı kiralama şirketlerinin fiyatlarını karşılaştırarak araç kiralama fırsatlarını bulabilirsiniz.',
  },
  {
   id: 'q2',
   q: 'Araç kiralama fırsatlarını nasıl bulabilirim?',
   a: 'İnternetten araştırma yaparak ve farklı kiralama şirketlerinin fiyatlarını karşılaştırarak araç kiralama fırsatlarını bulabilirsiniz. Expedia, Kayak ve Travelocity gibi web siteleri, fiyatları karşılaştırmanıza ve mevcut kiralama seçeneklerini görüntülemenize olanak tanır. Ayrıca herhangi bir özel fırsat veya promosyondan haberdar olmak için e-posta bültenlerine kaydolmanız ve sosyal medyada araç kiralama şirketlerini takip etmeniz önerilir.',
  },
  {
   id: 'q3',
   q: 'Bu kadar düşük kiralık araç fiyatlarını nasıl bulabilirim?',
   a: 'Önceden rezervasyon yapın: Kiralık arabanızı önceden rezerve etmek genellikle daha düşük fiyatlara neden olabilir. Birden çok şirketin fiyatlarını karşılaştırın: Birden çok araç kiralama şirketinin fiyatlarını karşılaştırmak için Kayak, Expedia veya Travelocity gibi web sitelerini kullanın. İndirim kodlarını ve kuponları arayın: Kiralama fiyatını düşürmek için kullanabileceğiniz indirim kodlarını ve kuponları arayın. Havalimanı dışındaki bir yerden kiralamak bazen daha düşük fiyatlara neden olabilir.',
  },
 ];

 return (
  <>
   <section className="faq-section">
    <div className="container">
     <div className="faq-content">
      <div className="faq-content__title">
       <h5>SSS</h5>
       <h2>Sıkça Sorulan Sorular</h2>
       <p>Web Sitemizde Araç Kiralama Rezervasyon Süreci Hakkında Sıkça Sorulan Sorular: Yaygın Endişelerin ve Soruların Yanıtları.</p>
      </div>

      <div className="all-questions">
       {items.map((item, index) => (
        <div className="faq-box" key={index}>
         <div id={item.id} onClick={() => openQ(item.id)} className={`faq-box__question  ${getClassQuestion(item.id)}`}>
          <p>
           {index + 1}. {item.q}
          </p>
          <i className="fa-solid fa-angle-down"></i>
         </div>
         <div id={item.id} onClick={() => openQ(item.id)} className={`faq-box__answer ${getClassAnswer(item.id)}`}>
          {item.a}
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>
   </section>
  </>
 );
}

export default Faq;
