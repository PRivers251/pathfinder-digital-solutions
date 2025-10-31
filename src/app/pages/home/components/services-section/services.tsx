

import styles from "./services.tsx.module.css"
import { Card, CardImage, CardTitle, CardContent } from "./components/Card"

export default function Services(){

    return (
        <section className={styles.services_section}>
            <Card>
                <CardTitle>
                    Landing Pages
                </CardTitle>
                <CardImage 
                    src="/images/landing_pages.png"                    
                />

                <CardContent>
                    <p>Speak directly to your customer's problems, needs, & wants.</p>
                    <p>Present clear and compelling offers that get to the heart of solving your customer's problems.</p>
                </CardContent>
                
            </Card>
        </section>
    )
}