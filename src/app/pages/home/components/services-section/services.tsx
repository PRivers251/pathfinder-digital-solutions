

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
                    <p>Guide your customers through a clear and specific sales process that keeps them engaged and focused on your solutions.</p>
                    <p>Separate your various offers into highly customized funnels for better performance tracking and offer optimization.</p>
                </CardContent>
            </Card>

            <Card>
                <CardTitle>
                    Mobile Friendly Websites
                </CardTitle>
                <CardImage 
                    src="/images/mobile_friendly.png"                    
                />

                <CardContent>
                    <p>Cater to over 65% of modern web traffic which interacts through mobile devices.</p>
                    <p>Avoid higher bounce rates. Studies show, sites that are not mobile friendly experience a 20% higer rate of customer loss.</p>
                    <p>Offer your visitors a premium mobile experience.</p>
                    <p>Meet your customers where they are. Your customers are clicking your adds and links on mobile devices. If they are not greeted with a friendly mobile experience they are likely gone forever.</p>
                </CardContent>
            </Card>

            <Card>
                <CardTitle>
                    Lead Capture Systems
                </CardTitle>
                <CardImage 
                    src="/images/lead_capture.png"                    
                />

                <CardContent>
                    <p>Capture information to stay in touch with your customers and build valuable relationships with them.</p>
                    <p>Give your customers and visitors the opportunity to tell you how you can best serve them.</p>
                    <p>Never wonder where your next customer will come from. Have an ever growing list of high quality prospects who are interested in your solution.</p>
                    <p>Have a clear and dedicated plan for every customer that enters your funnel.</p>
                </CardContent>
            </Card>
        </section>
    )
}