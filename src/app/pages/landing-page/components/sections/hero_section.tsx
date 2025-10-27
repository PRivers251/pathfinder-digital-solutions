

import styles from "../../page.tsx.module.css"


export default function HeroSection() {
    return (
        <section className={styles.hero_section}>
            <div className={styles.hero_section_overlay} />

            <div className={styles.hero_section_content}>
                <h1>
                    Mobile Area Businesses...
                </h1>
                <h3>
                    Are you ready to take your sales and business growth to the next level?
                </h3>
                <hr className='small_screen'/>
                    <p>
                        Having a solid <strong>Web Presence is vital</strong> when it comes to capturing and holding the attention of your perspective customers and clients. Our <strong>Web Development Services</strong> help you reach the right people.
                    </p>
                
                <a className={`${styles.contact_button}`}>
                    Contact us Today!
                </a>
            </div>
            
        </section>
    )
}