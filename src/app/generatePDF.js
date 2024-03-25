import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);

// Render the PDF to a file
const pdfPath = `${__dirname}/example.pdf`;
ReactPDF.render(<MyDocument />, pdfPath)
    .then(() => {
        console.log(`PDF created at: ${pdfPath}`);
    })
    .catch((error) => {
        console.error('Error rendering PDF:', error);
    });
