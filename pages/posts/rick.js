import Link from "next/link"
import Image from "next/image"

export default function rick() {
    return (
        <>  
            <Link href="/"> Menu </Link>
            <h1> omg welcome to my website</h1>
            <p> this is so cool right <br/>
                here is cool image right <br/>
                she likes to collect rocks </p>
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <Image 
                    src="/images/IMG_20220807_092716.jpg"
                    height={250}
                    width={1000} />
            </Link>
            <p>
                she has something to show you <br/>
                she wants you to see her rock collection <br/>
                click on her and she will bring you to it :D <br/>
            </p>
        </>
    )
}