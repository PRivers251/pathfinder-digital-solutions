

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
                    Speak directly to your customers.
                </CardContent>
                
            </Card>
        </section>
    )
}