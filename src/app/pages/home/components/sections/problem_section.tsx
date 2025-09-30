

import styles from "../../page.tsx.module.css"

export default function ProblemSection() {
    return(
        <section className={styles.problem_section}>
            <div className={`${styles.problem_section_title_container}`}>
                <h1>
                    The 5 Worst Web Presence Mistakes Businesses Make
                </h1>
            </div>

            <div className={styles.problem_section_content}>
                <ul>
                    <li>
                        <h3>1. Generic:</h3><p></p>
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