// pdf.js

import React from 'react';
import { Document, Page, pdf } from '@react-pdf/renderer';
import localPDF from '/public/pdfs/Concept.pdf';

// Set up pdfjs worker
const workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdf.version}/pdf.worker.js`;
pdf.workerSrc = workerSrc;

const PDFPage = () => {
    return (
        <div>
            <Document file={localPDF}>
                <Page />
            </Document>
        </div>
    );
};

export default PDFPage;
