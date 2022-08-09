import React from 'react'
import ReactPlayer from 'react-player'
import Link from 'next/link'

export default function video(){
    return(
        <div>
            <Link href="/"> Menu </Link>
            <ReactPlayer url='https://www.youtube.com/watch?v=tjU76_CCQPM' />
        </div>
    )
}