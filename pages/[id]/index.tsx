
import Image from 'next/image'
import React from 'react'

export default function CourseDetails() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h4>JLG Course detail</h4>

            <Image
                src="https://images.pexels.com/photos/19748403/pexels-photo-19748403/free-photo-of-a-red-and-white-striped-tent-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
