import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [])

  return (
  
                <div className="success-wrapper">
                  <div className="success">
                    <p className="icon">
                      <BsBagCheckFill />
                    </p>
                    <h2>Thank you for your order!</h2>
                    <p className="description">
                      If you have any questions, please email &#160;
                      <a className="p-text" href="mailto:shoesandco.pk@gmail.com">
                        shoesandco.pk@gmail.com
                      </a>
                      <br />
                      <br />
                      OR <br /><br /> Contact us on Whatsapp <br />
                      <a target='_blank' href='https://wa.me/923229894490?text='>

                        <AiOutlineWhatsApp color='green' size={30} /></a>

                    </p>
                    <Link href='/'>
                      <button type="button"  className="mybutton">
                        Continue Shopping
                      </button>
                      </Link>
                    </div>

                </div>
                
                )
}

                export default Success
