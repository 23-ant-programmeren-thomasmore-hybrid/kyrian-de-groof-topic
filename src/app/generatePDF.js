import React from '@react-pdf/renderer';
const { Page, Text, View, Document, StyleSheet } = React;

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
const MyDocument = () => {
    return React.createElement(
        Document,
        null,
        React.createElement(
            Page,
            { size: 'A4', style: styles.page },
            React.createElement(
                View,
                { style: styles.section },
                React.createElement(Text, null, 'Section #1')
            ),
            React.createElement(
                View,
                { style: styles.section },
                React.createElement(Text, null, 'Section #2')
            )
        )
    );
};

// Render the PDF to a file
const pdfPath = `${__dirname}/example.pdf`;
React.render(MyDocument(), pdfPath)
    .then(() => {
        console.log(`PDF created at: ${pdfPath}`);
    })
    .catch((error) => {
        console.error('Error rendering PDF:', error);
    });
