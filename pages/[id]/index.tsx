
import Image from 'next/image'
import React from 'react'

export default function CourseDetails() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h4>JLG Course details</h4>

            <Image
                src="https://plus.unsplash.com/premium_photo-1700182583065-1505105ae4cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                alt="Next.js Logo"
                width={290}
                height={180}
                priority
                style={{
                    // objectFit: 'cover',
                    maxWidth: '100%', // Ensure the image doesn't exceed its container's width
                    maxHeight: '180px',
                    height: 'auto',
                }}
            />
        </div>
    )
}
