import React from 'react'
import { AiOutlineForm } from 'react-icons/ai'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/contact.module.scss';

import { client } from '../lib/client'
import { useStateContext } from '../context/StateContext';
import orderDetail from '../sanity_shoesndco/schemas/orderDetail'

const form = () => {
    const {cartItems,totalPrice} =useStateContext();
    const [formData, setFormData] = useState({ firstname: '',lastname:'' , city: '', zipcode:'',phoneno:'',email:'',address:''});
    
    const totalprice=totalPrice;
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const {image,takeScreenShot} = useStateContext();
    
    const {qty} =useStateContext();

    // const { totalPrice, totalQuantities, cartItems, setShowForm,showForm, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
    
    const {firstname,lastname,city,zipcode,phoneno,email,address} = formData;
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };



    
    const handleSubmit = () => {
        console.log('hello');
        const orderdetail =[];
        cartItems.map((item) => {
            orderDetail={
                _type:'orderDetail',
                _key:item.slug,
                itemname:item.name,
                itemquantity:item.quantity,
                itemprice:item.price
            }
            orderdetail.push(orderDetail);
        })
        
        
       
        setLoading(true);
    
        

        const orders = {
          _type: 'orders',
          firstname: firstname,
          lastname: lastname,
          city: city,
          zipcode:zipcode,
          phoneno:phoneno,
          email:email,
          address:address,
          cart:orderdetail,
          totalBill:totalprice
        };

        client.create(orders,orderDetail)
          .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
          })
          .catch((err) => console.log(err));
      };
    

    return (
        <div className="form-wrapper">
            <div className="formm">
                <br/>
                <br/>
                <p className="icon">
                    <AiOutlineForm />
                </p>
                <h2>Enter your Details to Complete your order</h2>
                <br/>
           
                <div className="fields fields--2">
                    <label className="field">
                        <span className="field__label" htmlFor="firstname">First name</span>
                        <input className="field__input" type="text"  name="firstname" value={firstname} onChange={handleChangeInput} />
                    </label>
                    <label className="field">
                        <span className="field__label" htmlFor="lastname">Last name</span>
                        <input className="field__input" type="text"  name="lastname" value={lastname} onChange={handleChangeInput} />
                    </label>
                </div>
               
                <div className="fields fields--3">
                    <label className="field">
                        <span className="field__label" htmlFor="zipcode">Zip code</span>
                        <input className="field__input" type="text"  name="zipcode" value={zipcode} onChange={handleChangeInput} />
                    </label>
                    <label className="field">
                        <span className="field__label" htmlFor="city">City</span>
                        <input className="field__input" type="text"  name="city" value={city} onChange={handleChangeInput} />
                    </label>
                </div>

                <div className="fields fields--3">
                    <label className="field">
                        <span className="field__label" htmlFor="phone">Contact No</span>
                        <input className="field__input" type="text"  name="phoneno" value={phoneno} onChange={handleChangeInput} />
                    </label>
                    <label className="field">
                        <span className="field__label" htmlFor="email">Email</span>
                        <input className="field__input" type="text"  name="email" value={email} onChange={handleChangeInput} />
                    </label>
                </div>

                <div className="fields fields--4">
                <label className="field">
                    <span className="field__label" htmlFor="address">Address</span>
                    <textarea rows='4' className="field__input" type="text" name='address' value={address} onChange={handleChangeInput} />
                </label>
               
                </div>
                
                <Link href="/sucess">
                    <button type="button" width="300px" className="btn" style={{backgroundColor:"red" , color:'white'}} onClick={handleSubmit}>
                        Submit
                    </button>
                </Link>
            </div>
            
        </div>
    )
}

export default form




// import React, { useState } from 'react';


// const Footer = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const { username, email, message } = formData;

//   const handleChangeInput = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     setLoading(true);

//     const contact = {
//       _type: 'contact',
//       name: formData.username,
//       email: formData.email,
//       message: formData.message,
//     };

//     client.create(contact)
//       .then(() => {
//         setLoading(false);
//         setIsFormSubmitted(true);
//       })
//       .catch((err) => console.log(err));
//   };

// //   return (
// //     <>
// //       <h2 className="head-text">Lets Chat with me</h2>

// //       <div className="app__footer-cards">
// //         <div className="app__footer-card ">
// //           <img src={images.email} alt="email" />
// //           <a href="mailto:boaytariq1@gmail.com" className="p-text">boaytariq1@gmail.com</a>
// //         </div>
// //         <div className="app__footer-card">
// //           <img src={images.mobile} alt="phone" />
// //           <a href="tel:+92 348-3293080" className="p-text">+92 3483293080</a>
// //         </div>
// //       </div>
//       {!isFormSubmitted ? (
//         <div className="app__footer-form app__flex">
//           <div className="app__flex">
//             <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
//           </div>
//           <div className="app__flex">
//             <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
//           </div>
//           <div>
//             <textarea
//               className="p-text"
//               placeholder="Your Message"
//               value={message}
//               name="message"
//               onChange={handleChangeInput}
//             />
//           </div>
//           <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
//         </div>
//       ) : (
//         <div>
//           <h3 className="head-text">
//             Thank you for getting in touch!
//           </h3>
//         </div>
//       )}
//     </>
//   );
// };

