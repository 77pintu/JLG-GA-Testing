
import React from 'react'
export default function CourseDetails() {
    const downloadAsPDF = async () => {
        try {
            const iframeElement = document.createElement('iframe');
            iframeElement.src = "https://jlgdevstorage.blob.core.windows.net/digitalidcard/jlg-id-card-21056031.pdf";
            iframeElement.width = '100%';
            iframeElement.height = '100%';
            // Append the iframe element to the body
            document.body.appendChild(iframeElement)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h4>JLG Course detail</h4>
            <button onClick={downloadAsPDF}>Download</button>
        </div>
    )
}
