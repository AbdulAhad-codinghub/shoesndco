import React from 'react'
import { AiOutlineForm } from 'react-icons/ai'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/contact.module.scss';


import { client, urlFor } from '../lib/client'
import { useStateContext } from '../context/StateContext';
import orderDetail from '../sanity_shoesndco/schemas/orderDetail'
import { Cart } from '../components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

const form = () => {
    const { cartItems, totalPrice } = useStateContext();
    const [formData, setFormData] = useState({ name: '', city: '', phoneno: '', phoneno2: '', email: '', address: '',notes:'',zipcode:''});
    
    const totalprice = totalPrice;
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { image, takeScreenShot,setShowCart} = useStateContext();

    const { qty } = useStateContext();

    // const { totalPrice, totalQuantities, cartItems, setShowForm,showForm, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

    const { name, city, zipcode, phoneno, phoneno2, email, address,notes } = formData;
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };




    const handleSubmit = () => {
        console.log('hello');
        const orderdetail = [];
        cartItems.map((item) => {
            orderDetail = {
                _type: 'orderDetail',
                _key: item.slug,
                itemname: item.name,
                itemquantity: item.quantity,
                itemprice: item.price
            }
            orderdetail.push(orderDetail);
        })



        setLoading(true);



        const orders = {
            _type: 'orders',
            name: name,
            email: email,
            city: city,
            zipcode:zipcode,
            phoneno: phoneno,
            phoneno2: phoneno2,
            address: address,
            notes:notes,
            cart: orderdetail,
            totalBill: totalprice
        };

        client.create(orders, orderDetail)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };


    return (
        <>
        <div className='products-heading' style={{marginLeft:'1rem'}}>
        <h3>Order Summary</h3>
      </div>
            <div className="col-md-8 mb-4" style={{ margin: 'auto' }}>

                <div className="card mb-4">

                    <div className="card-header py-3">
                        <h5 className="mb-0">Summary</h5>
                        <button type="button" className="btnn" onClick={() => setShowCart(true)}>Cart</button>

                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Products
                                <span>Rs {totalPrice}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                Shipping
                                <span>Rs 250</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>Total amount</strong>

                                </div>
                                <span><strong>Rs {totalPrice + 250}</strong></span>
                                
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div className='products-heading' style={{marginLeft:'2rem'}}>
        <h2>Delivery Details</h2>
      </div>
           
                <div className="col-md-8 mb-4"  style={{ margin: 'auto' }}>
                    <div className="card mb-4">
                        <div className="card-header py-3">
                            <h5 className="mb-0">Delivery details</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline">
                                            <input type="text" id="form7Example1" className="form-control" name="name" value={name} onChange={handleChangeInput}/>
                                            <label className="form-label" for="form7Example1">Full Name</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <input type="email" id="form7Example2" className="form-control" name="email" value={email} onChange={handleChangeInput}/>
                                            <label className="form-label" for="form7Example2">Email</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline">
                                            <input type="text" id="form7Example1" className="form-control" name="city" value={city} onChange={handleChangeInput} />
                                            <label className="form-label" for="form7Example1">City</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <input type="text" id="form7Example2" className="form-control" name="zipcode" value={zipcode} onChange={handleChangeInput}/>
                                            <label className="form-label" for="form7Example2">Zipcode</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline">
                                            <input type="text" id="form7Example1" className="form-control" name="phoneno" value={phoneno} onChange={handleChangeInput}/>
                                            <label className="form-label" for="form7Example1">Contact No</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <input type="text" id="form7Example2" className="form-control" name="phoneno2" value={phoneno2} onChange={handleChangeInput} />
                                            <label className="form-label" for="form7Example2">Contact No (Alternate)</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-outline mb-4">
                                    <textarea className="form-control" id="form7Example7" rows="4" value={address} name="address" onChange={handleChangeInput}></textarea>
                                    <label className="form-label" for="form7Example7">Address</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <textarea className="form-control" id="form7Example7" rows="4" value={notes} name="notes" onChange={handleChangeInput}></textarea>
                                    <label className="form-label" for="form7Example7">Additional information / Notes</label>
                                </div>

                                <div className="form-check d-flex justify-content-center mb-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form7Example8" unchecked />
                                    <label className="form-check-label" for="form7Example8">
                                        I agree with the terms & conditions
                                    </label>
                                </div>
                            </form>
                        </div>
                        <Link href="/sucess">
        <button type="button" className={styles.button_send} onClick={handleSubmit} style={{maxWidth:'fit-content',margin:'auto', backgroundColor:'burlywood'}}>
            Submit
        </button>
    </Link>
            <br/>
                    </div>
                    
                </div>

                

        </>
    )
}

export default form


{/* <div className={styles.app__footer}>
            

<div className={styles.app__footer_form}>
    <div className={styles.app__flex}>
        <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
    </div>
    <div className={styles.app__flex}>
        <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
    </div>
    
    <div className={styles.app__flex}>
        <input className="p-text" type="text" placeholder="Contact Number" name="phoneno" value={phoneno} onChange={handleChangeInput} />
    </div>
    <div className={styles.app__flex}>
        <input className="p-text" type="text" placeholder="Alternate Contact Number" name="phoneno2" value={phoneno2} onChange={handleChangeInput} />
    </div>
    <div className={styles.app__flex}>
        <input className="p-text" type="text" placeholder="Your City" name="city" value={city} onChange={handleChangeInput} />
    </div>
    <div className={styles.app__flex}>
        <textarea
            className="p-text"
            placeholder="Address"
            value={address}
            name="address"
            onChange={handleChangeInput}
        />
    </div>
    
</div>
</div> */}