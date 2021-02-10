import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={footerStyle}>
            <p>copyright Project Room4 © {currentYear}</p>
        </footer>
    );
};

const footerStyle = { 
    
    color: 'darkslategrey',
    textAlign: 'center',
    padding: '2px',
    margin: '2px',
};


export default Footer;