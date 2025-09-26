import styles from './page.tsx.module.css';

export default function HomePage() {
    return(
        <>
        <section className={styles.hero_section}>
            <div className={styles.hero_section_overlay} />

            <div className={styles.hero_section_content}>
                <h1>
                    Mobile Area Business Owners...
                </h1>
                <h3>
                    Are you ready to take your sales and business growth to the next level?
                </h3>
                <hr />
                    <p>
                        Having a solid <strong>Web Presence is vital</strong> when it comes to capturing and holding the attention of your perspective customers and clients.
                    </p>
                <hr />

                <h3>
                    Our <strong>Web Development Services</strong> help you reach the right people. 
                </h3>
                <button className={`${styles.contact_button} small_screen`}>
                    Contact us Today!
                </button>
            </div>
            <button className={`${styles.contact_button} large_screen`}>
                Contact us Today
            </button>
            
        </section>
        
        <main>
           
        </main>
        </>
    )
}