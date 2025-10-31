
import styles from "./Card.tsx.module.css"
import React from 'react'
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardProps {
    children?: React.ReactNode;
}

interface CardImgProps {
    src: string | StaticImport;
}


function Card({
    children
} : CardProps) {

    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

function CardTitle ({children}: CardProps) {
    return (
        <h2 className={styles.card_title}>
            {children}
        </h2>
    )
}

function CardImage ({src}: CardImgProps) {
    return (
        <Image 
            src={src}
            alt="Photo showing landing page examples."
            width={2000}
            height={750}
            className={styles.card_image}
        />
    )
}

function CardContent ({children}: CardProps) {
    return (
        <article className={styles.card_content}>
            {children}
        </article>
    )
}

export {
    Card,
    CardTitle,
    CardImage,
    CardContent
}