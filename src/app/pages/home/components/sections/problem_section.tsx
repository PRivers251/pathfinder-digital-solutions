

import styles from "../../page.tsx.module.css"

export default function ProblemSection() {
    return(
        <section className={styles.problem_section}>
            <div className={`${styles.problem_section_title_container}`}>
                <h1>
                    The 5 Worst Web Presence Mistakes Small Businesses Make
                </h1>
            </div>

            <div className={styles.problem_section_content}>
                <ul>
                    <li>
                        <h3 className="underline">1. Generic:</h3><p>The main problem I see with traditional websites, is they are not speaking to their customer. They list facts about the business, they list features, they talk about how big and great the business is, and they are loaded with distracting links that confuse customers. This is all well and good in certain contexts, but the customer has a problem they are looking for a solution to. A generic website, by nature, can not speak directly to the customer's specific needs. A traditional website is not there to present a specific offer to a specific customer in that customer's time of need. A traditional website relies on the customer to uncover the offer for themselves instead of the business being able to lay it out plainly and conveniently for the customer.</p>
                    </li>
                    <li>
                        <h3>2. Lack of Clear Call-to-Action (CTA):</h3><p>Visitors land on your site but have no clear, compelling instruction on what to do next. This leads to confusion and lost opportunities.</p>
                    </li>
                    <li>
                        <h3>3. Slow and Unresponsive Design:</h3>
                    </li>
                    <li>
                        <h3>4. Zero Lead Capture Mechanisms:</h3>
                    </li>
                    <li>
                        <h3>5. Weak and Confusing Content:</h3>
                    </li>
                </ul>

            </div>

        </section>
    )
}