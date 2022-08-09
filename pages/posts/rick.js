import Link from "next/link"
import Image from "next/image"

export default function rick() {
    return (
        <>
            <h1> omg welcome to my website</h1>
            <p> this is so cool right \n
                here is cool image right \n
                she likes to collect rocks </p>
            <Image 
                src="\images\IMG_20220807_092716.jpg"
                height={250}
                width={1000} />
        </>
    )
}