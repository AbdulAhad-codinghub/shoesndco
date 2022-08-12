import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { urlFor, client } from '../lib/client';
import styles from '../styles/reviews.module.scss';
import styles1 from '../styles/contact.module.scss';
import Image from 'next/image';
import About from './About';
import { user } from '../assets';


const reviews = () => {
  const [myformdata, setmyformdata] = useState({ name: '', city: '', message: '' });
  const [FormSubmitted, setFormSubmitted] = useState(false);
  const [isloading, setisloading] = useState(false);
  const { username, city, message } = myformdata;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setmyformdata({ ...myformdata, [name]: value });
  };


  const handleSubmit = () => {
    setisloading(true);
    const testimonials = {
      _type: 'testimonials',
      name: myformdata.username,
      city: myformdata.city,
      feedback: myformdata.message,
    };
    client.create(testimonials)
      .then(() => {
        setisloading(false);
        setFormSubmitted(true);
      })
      .catch((err) => console.log(err));

  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <div className='reviewss'>
      <br />

      <div className={styles1.app__footer}>
        <div className='products-heading'>
          <h2 style={{ marginLeft: '3rem' }}>Share your Review</h2>
        </div>

        {!FormSubmitted ? (
          <div className={styles1.app__footer_form}>
            <div className={styles1.app__flex}>
              <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
            </div>
            <div className={styles1.app__flex}>
              <input className="p-text" type="text" placeholder="Your City" name="city" value={city} onChange={handleChangeInput} />
            </div>
            <div className={styles1.app__flex}>
              <textarea
                className="p-text"
                placeholder="Your Review"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className={styles1.button_send} onClick={handleSubmit}>{!isloading ? 'Submit Review' : 'Sending...'}</button>
          </div>
        ) : (
          <div>
            <h3 className={styles1.head_text}>
              Thank you for getting in touch!
            </h3>
          </div>
        )}
      </div>

      <div className='products-heading'>
        <h2 style={{ marginLeft: '2rem' }}>Our Customer Reviews</h2>
        <p > What our customers says </p>
      </div>
      <div className={styles.app__testimonial}>

        {testimonials.length && (
          <>

            <div className={styles.app__testimonial_item}>
              {testimonials[currentIndex].imgurl && (
                <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
              )}
              {!testimonials[currentIndex].imgurl && (
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt={testimonials[currentIndex].name} />
              )}

              <div className={styles.app__testimonial_content}>
                <p className="p-text">{testimonials[currentIndex].feedback}</p>
                <div>
                  <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                  <h5 className="p-text">{testimonials[currentIndex].city}</h5>
                </div>
              </div>
            </div>

            <div className={styles.app__testimonial_btns}>
              <div className={styles.app__flex} onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>

              <div className={styles.app__flex} onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>

          </>
        )}
      </div>

    </div>
  );
};

export default reviews;