import React, { useState } from 'react';
import Image from 'next/image';
import { client } from '../lib/client'
import styles from '../styles/contact.module.scss';
import { emailpic, mobile } from '../assets';

const contact = () => {
  const [myformdata, setmyformdata] = useState({ name: '', email: '', message: '' });
  const [FormSubmitted, setFormSubmitted] = useState(false);
  const [isloading, setisloading] = useState(false);

  const { username, email, message } = myformdata;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setmyformdata({ ...myformdata, [name]: value });
  };

  const handleSubmit = () => {
    setisloading(true);

    const contact = {
      _type: 'contact',
      name: myformdata.username,
      email: myformdata.email,
      message: myformdata.message,
    };

    client.create(contact)
      .then(() => {
        setisloading(false);
        setFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.app__footer}>
      <div className='products-heading' >
        <h2>Drop your Message</h2>
      </div>
      <div className={styles.app__footer_cards}>
        <div className={styles.app__footer_card}>
          <Image src={emailpic} height={20} width={30} />
          <a href="mailto:shoesandco.pk@gmail.com" className="p-text">&nbsp;shoesandco.pk@gmail.com</a>
        </div>
        <div className={styles.app__footer_card}>
          <Image src={mobile} height={20} width={30} />
          <a href="tel:+92 322-9894490" className="p-text"> +92 322-9894490</a>
        </div>
      </div>
      {!FormSubmitted ? (
        <div className={styles.app__footer_form}>
          <div className={styles.app__flex}>
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className={styles.app__flex}>
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div className={styles.app__flex}>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className={styles.button_send} onClick={handleSubmit}>{!isloading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div >
          <h3 className={styles.head_text}>
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  );
};

export default contact

