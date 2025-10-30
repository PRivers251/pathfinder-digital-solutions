

import styles from "./heroSection.tsx.module.css"
import Image from "next/image"

export default function HeroSection() {
    return (
        < section className={styles.hero_section}>
        <h1>
            Mobile, AL's <span>Dedicated Web Partner</span> for Small Business Success.
        </h1>
        <div className={styles.hero_image_container}>
        <Image 
            src={'/images/hero_image.png'}
            alt="Hero Image of laptop with caption your-site-here"
            height={250}
            width={500}
            className={styles.hero_image}
        />
        </div>

        <div className={styles.subhead_container}>
            <h3>
                Stop losing customers to outdated websites. Pat Rivers Web Development & Design builds fast, mobile-friendly sites that grow your business, right here in the Mobile area.
            </h3>
        </div>

        <a href="">Connect With Me!</a>
        </section>
    )
}