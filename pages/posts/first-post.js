import Link from 'next/link'
import Image from 'next/image'

const YourComponent = () => (
    <Image
      src="/images/cat.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  );

export default function FirstPost() {
    return (
        <>
            <h1> Your mother </h1>
            <h1> hee hee hee <Link href="/">haw </Link></h1>
            <img src="/images/cat.jpg" />
            <YourComponent/>
            <style jsx>{`
            a {
                color: #0070f3;
            }

            `}</style>
        </>
    )
}