import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './HomePage.css';
import { useCart } from './CartContext';

const trendingDrugs = [
  {
    id:1,
    name: 'Nexium',
    price: 22 ,
    image: 'https://media.npr.org/assets/img/2015/05/01/gettyimages-453912462_wide-3f50a25f9547a945aae1ba61d57ab175500d9d93.jpg',
    description: ' Nexium is a proton pump inhibitor that decreases the amount of acid produced in the stomach.',
  },
  {
    id:2,
    name: 'Generic Drug 1',
    price: 17,
    image: 'https://149918304.v2.pressablecdn.com/wp-content/uploads/2022/08/Prescription-Drug-scaled-1-1024x683-4959255.jpeg',
    description: 'Drug in dosage form, safety, strength, route of administration, quality, performance characteristics,  intended use.',
  },
  {
    id:3,
    name: 'Generic Drug 2',
    price: 21,
    image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/4977/3687af9d-7e14-43ee-999b-7c9f3a341b9d.jpg',
    description: 'Drug in dosage form, safety, strength, route of administration, quality, performance characteristics, intended use.',
  },
  {
    id:4,
    name: 'Lenalidomide',
    price: 21,
    image: 'https://5.imimg.com/data5/KY/BR/MY-6964226/lenalid-10-mg-capsules-500x500.jpg',
    description: 'Drug in dosage form, safety, strength, route of administration, quality, performance characteristics, intended use.',
  },
  {
    id:5,
    name: 'Concerta',
    price: 15,
    image: 'https://media.sciencephoto.com/c0/16/72/82/c0167282-800px-wm.jpg',
    description: 'Drug in dosage form, safety, strength, route of administration, quality, performance characteristics, intended use.',
  },
  {
    id:6,
    name: 'Xtandi',
    price: 29,
    image: 'https://www.mmm-online.com/wp-content/uploads/sites/2/2018/08/xtandi_945224.jpg',
    description: 'Drug in dosage form, safety, strength, route of administration, quality, performance characteristics, intended use.',
  },
  {
    id:7,
    name: 'Rx drug',
    price: 18,
    image: 'https://t4.ftcdn.net/jpg/02/87/86/27/360_F_287862773_eVjRtEA5jOYUKywa9xy9kunFr4BquZdO.jpg',
    description: 'Drug in dosage form, safety, strength, route of administration, quality, performance characteristics, intended use.',
  },
  {
    id:8,
    name: 'Amoxicillin',
    price: 23,
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/GY/WG/RO/51330036/new-product-500x500.jpeg',
    description: 'Drug in dosage form, safety, strength, route of administration, quality, performance characteristics, intended use.',
  },
  { id: 13, name: 'ClovirValganci', description: 'Drug in dosage form, safety, strength, route of administration, quality, performance characteristics, intended use.', price: 34.0, image: 'https://5.imimg.com/data5/SELLER/Default/2022/1/YX/BY/OZ/133780755/sustiva-efavirenz-tablets-500x500.jpg' },
];

const Home = (props) => {
  const history = useHistory();
  const [searchedDrug, setSearchedDrug] = useState([])
  const drugClickd = (item) => {
    history.push(`/drug/${item.id}/${encodeURIComponent(item.name)}`);
  };
  const { addToCart,cartList,removeFromCart } = useCart();
console.log(props.searchId);
    const drugDetails = [
      {
        id:1,
        name: 'Nexium',
        price: 22 ,
        image: 'https://media.npr.org/assets/img/2015/05/01/gettyimages-453912462_wide-3f50a25f9547a945aae1ba61d57ab175500d9d93.jpg',
        description: ' Nexium is decreases the amount of acid produced in the stomach.',
      },
      {
        id:2,
        name: 'Generic Drug 1',
        price: 17,
        image: 'https://149918304.v2.pressablecdn.com/wp-content/uploads/2022/08/Prescription-Drug-scaled-1-1024x683-4959255.jpeg',
        description: 'Drug in dosage form, safety, strength',
      },
      {
        id:3,
        name: 'Generic Drug 2',
        price: 21,
        image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/4977/3687af9d-7e14-43ee-999b-7c9f3a341b9d.jpg',
        description: 'Drug in dosage form, safety, strength',
      },
      {
        id:4,
        name: 'Lenalidomide',
        price: 21,
        image: 'https://5.imimg.com/data5/KY/BR/MY-6964226/lenalid-10-mg-capsules-500x500.jpg',
        description: 'Drug in dosage form, safety, strength',
      },
      {
        id:5,
        name: 'Concerta',
        price: 15,
        image: 'https://media.sciencephoto.com/c0/16/72/82/c0167282-800px-wm.jpg',
        description: 'Drug in dosage form, safety, strength',
      },
      {
        id:6,
        name: 'Xtandi',
        price: 29,
        image: 'https://www.mmm-online.com/wp-content/uploads/sites/2/2018/08/xtandi_945224.jpg',
        description: 'Drug in dosage form, safety, strength',
      },
      {
        id:7,
        name: 'Rx drug',
        price: 18,
        image: 'https://t4.ftcdn.net/jpg/02/87/86/27/360_F_287862773_eVjRtEA5jOYUKywa9xy9kunFr4BquZdO.jpg',
        description: 'Drug in dosage form, safety, strength',
      },
      {
        id:8,
        name: 'Amoxicillin',
        price: 23,
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/GY/WG/RO/51330036/new-product-500x500.jpeg',
        description: 'Drug in dosage form, safety, strength',
      },
      { id: 9, name: 'Ivermectin', description: 'Anti-infective', price: 10.0, image: 'https://independentnews.co.sz/wp-content/uploads/2021/02/file-20210205-21-1g1yuct.jpg' },
      { id: 10, name: 'Amikacin', description: 'Anti-tuberculosis', price: 20.0, image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/OX/MY/YA/46457290/amikacin-500-methyl-paraben-0-18-w-v-propyl-paraben-0-02-w-v-2ml-vial-zenikacin-500-500x500.jpg' },
      { id: 11, name: 'Delamanid', description: 'Anti-tuberculosis', price: 40.0, image: 'https://5.imimg.com/data5/SELLER/Default/2022/4/ML/KY/KT/147809161/deltyba-1.png' },
      { id: 12, name: 'Terbinafine', description: 'Anti-fungal', price: 55.0, image: 'https://c8.alamy.com/comp/2K6MX18/terbinafine-pill-bottle-conceptual-image-2K6MX18.jpg' },
      { id: 13, name: 'ClovirValganci', description: 'Anti-Cytomegalovirus', price: 34.0, image: 'https://5.imimg.com/data5/SELLER/Default/2022/1/YX/BY/OZ/133780755/sustiva-efavirenz-tablets-500x500.jpg' },
      { id: 14, name: 'Lamivudine', description: 'HIV medicine', price: 28.0, image: 'https://5.imimg.com/data5/SELLER/Default/2022/2/TP/WF/EF/113955293/avonza-tablets-500x500.png' },
      { id: 15, name: 'Daclatasvir', description: 'Hepatitis B & c', price: 98.0, image: 'https://www.healthizalife.com/wp-content/uploads/2022/04/Abacavir-Tablets-4.jpg' },
      { id: 16, name: 'Lidomide', description: 'Ant-Cancer', price: 76.0, image: 'https://www.mbapharmaceuticals.com/wp-content/uploads/2020/01/LIDOMIDE-25-NEW-PACK.png' },
      { id: 17, name: 'Dabigatran', description: 'Blood disorder', price: 34.0, image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/NK/CN/CF/3468355/pradaxa-dabigatran-medicine-.jpg' },
      { id: 18, name: 'Insulin Glargine', description: 'Anti-diabetic', price: 47.0, image: 'https://5.imimg.com/data5/SELLER/Default/2020/12/QT/YX/VR/115213003/lantus-insulin-glargine-injection-500x500.jpg' },
      { id: 19, name: 'Montelukast', description: 'anti-Asthemetic', price: 83.0, image: 'https://greenpharmacyonline.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/16729011910_3.jpg' },
      { id: 20, name: 'Rotavirus Cap', description: 'Immunologicals', price: 67.0, image: 'https://etimg.etb2bimg.com/photo/70713070.cms' },
      { id: 21, name: 'Cefuroxime', description: 'Anti-infective', price: 90.0, image: 'https://wellonapharma.com/admincms/product_img/product_resize_img/cefuroxime-injection_1486638860.jpg' },
      { id: 22, name: 'Bedaquiline', description: 'Anti-tuberculosis', price: 70.0, image: 'https://cms.swasth-egurukul.in/sites/default/files/bdq.jpeg' },
      { id: 23, name: 'Latanoprost', description: 'Anti-glaucoma', price: 43.0, image: 'https://wellonapharma.com/admincms/product_img/product_actual_img/latanoprost-eye-drops_1486634880.jpg' },
      { id: 24, name: 'Mupirocin', description: 'Anti-fungal', price: 51.0, image: 'https://www.netmeds.com/images/product-v1/600x600/803922/mupricon_2_ointment_5gm_398927_0_0.jpg' },
    ];
    useEffect(() => {
     if(props.searchId){
      const result = drugDetails.filter((drugs) => drugs.name.toLowerCase().includes(props.searchId));
      console.log(result);
      setSearchedDrug(result)
     }
    },[]);
  
  return (
    <>
  {  props.searchId ?
    <div>
      <div className='Container'>
        {searchedDrug.map((drug, index) => (
          <div key={index} className="drug-card" >
            <div onClick={() => drugClickd(drug)}>
            <img src={drug.image} alt={`Drug ${index + 1}`} />
            <h2>{drug.name}</h2>
            <p>{drug.description}</p>
            <h4>INR {drug.price}</h4>
            </div>
            <button onClick={()=>addToCart(drug)}><span className='bi bi-cart4'></span> Add to Cart</button>
          </div>
        ))}
      </div>
      </div>:
    <div className='Home-page'>
      <h1>Top Trending Drugs</h1>
      <div className='back'>
        <img src='https://pharmax.com.np/wp-content/uploads/2021/06/5.png' alt='offerimage' />
      </div>
      <div className='Container'>
        {trendingDrugs.map((drug, index) => (
          <div key={index} className="drug-card" >
            <div onClick={() => drugClickd(drug)}>
            <img src={drug.image} alt={`Drug ${index + 1}`} />
            <h2>{drug.name}</h2>
            <p>{drug.description}</p>
            <h4 style={{color:'#555'}}>USD.$ {drug.price}</h4>
            </div>
            <button onClick={cartList.find(item=>item.id === drug.id) ? () => removeFromCart(drug.id) :() => addToCart(drug)} className={cartList.find(item=>item.id === drug.id) && "focus"}><span className='bi bi-cart4'></span> Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
}
    </>
  );
};

export default Home;