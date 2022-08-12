import React,{useState} from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import {logo} from '../assets'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
      const [toggle, setToggle] = useState(false)

  const { showCart, setShowCart, totalQuantities } = useStateContext();
       return (
        <nav className={styles.app__navbar}>
          <div className={styles.app__navbar_logo}>
          <Link href="/"><Image className="logo-image" src={logo} width={100} height={70}  /></Link>
               
            </div>
            <ul className={styles.app__navbar_links}>
                
                    <li className={styles.app__flex} key={'link-home'}>
                        <div/>
                        <Link href='/'>Home</Link>
                    </li>
                    
                    <li className={styles.app__flex} key={'link-about'}>
                        <div/>
                        <Link href='/about'>About</Link>
                    </li>

                    <li className={styles.app__flex} key={'link-contact'}>
                        <div/>
                        <Link href='/contact'>Contact</Link>
                    </li>
                    <li className={styles.app__flex} key={'link-reviews'}>
                        <div/>
                        <Link href='/reviews'>Reviews</Link>
                    </li>
              
            </ul>
            <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
<AiOutlineShopping />
<span className="cart-item-qty">{totalQuantities}</span>
</button>

  {showCart && <Cart />}
            <div className={styles.app__navbar_menu}>
            
                <AiOutlineMenu onClick={() => setToggle(true)} />
                {
                    toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul>
                                {['home', 'about', 'contact','reviews'].map((item) => (
                                    <li key={{ item }}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )
                }
                
            </div>
          
        </nav>
    )
}

export default Navbar



// import React from 'react'
// import './Navbar.scss'
// import { HiMenuAlt4, HiX } from 'react-icons/hi'
// import { motion } from 'framer-motion';
// import { images } from '../../constants'
// import { useState } from 'react';
// const Navbar = () => {

// }

// export default Navbar






// return(
//   <div className="navbar-container">

  
//   
  
  
  
 

// </div> 
// )