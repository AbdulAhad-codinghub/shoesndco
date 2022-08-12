import React from 'react'
import styles from '../styles/about.module.scss';
import { zainab,hafsa, aboutpic } from '../assets';
import Image from 'next/image';


const about = () => {
    return (
        <body>
            <div className={styles.container}>
                <div className={styles.circles}></div>
                <div className={styles.details_container}>
                    <div className={styles.avatar}>
                        <div className={styles.img_fluid}>
                        <Image src={aboutpic}  alt="" />
                        </div>
                    </div>
                    <div className={styles.about}>
                        <div className={styles.name}>
                            <h1>
                                About Us
                            </h1>
                        </div>
                        <div className={styles.about_content}>
                            <p>
                                We're university friends and now
                                business partners who run this
                                amazing business together.
                                Come check us out!
                            </p>
                        </div>

                        <div className={styles.name}>
                            <h2>
                                Our Business
                            </h2>
                        </div>
                        <div className={styles.about_content}>
                            <p>
                                Boots are a source of happiness for
                                us so we thought we should share
                                this happiness with the world while
                                creating something so beautiful and
                                aesthetically pleasing hence
                                 <b> @shoesandco.pk</b> was formed and we
                                have been nourishing it so far with
                                the love and care that you guys give
                                to us.
                            </p>
                        </div>
                    </div>
                    <div className={styles.clear}></div>
                </div>

            </div>
<br/>
            <section className="section-team">
		<div className="container">
			
			<div className="row" style={{alignItems:'center',justifyContent:'center'}}>
				<div className="col-sm-6 col-lg-4 col-xl-3">
					<div className="single-person">
						<div className="person-image">
							<Image src={zainab} alt="" width={800} height={900}/>
						
						</div>
						<div className="person-info">
							<h3 className="full-name">Zainab Siddiqui</h3>
							<span className="speciality">Founder</span>
						</div>
					</div>
				</div>
				
				<div className="col-sm-6 col-lg-4 col-xl-3">
					<div className="single-person">
						<div className="person-image">
							<Image src={hafsa} width={800} height={900} alt=""/>
							
						</div>
						<div className="person-info">
							<h3 className="full-name">Hafsa Malik</h3>
							<span className="speciality">Director</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    
        </body>
    )
}

export default about