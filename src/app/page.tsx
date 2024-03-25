import React, { useEffect } from 'react';
import Image from 'next/image';

const Home = () => {
    useEffect(() => {
        const downloadPdf = () => {
            // You can implement logic to trigger PDF generation here
            // Once the PDF is generated on the server, provide a link for the user to download it
            // For demonstration purposes, let's assume the PDF is already generated and stored in a known location

            // Replace 'example.pdf' with the actual path to the generated PDF
            const pdfPath = '/example.pdf';
            // Navigate to the PDF file
            window.open(pdfPath);
        };

        // Add event listener to button when component mounts
        const button = document.getElementById('downloadPdfButton');
        if (button) {
            button.addEventListener('click', downloadPdf);

            // Cleanup function to remove event listener when component unmounts
            return () => {
                button.removeEventListener('click', downloadPdf);
            };
        }
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* Your existing JSX content */}
            {/* ... */}

            {/* Button to trigger PDF download */}
            <button id="downloadPdfButton" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Download PDF
            </button>
        </main>
    );
};

export default Home;
