import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor : "#00d8ff",
        color : "white",
        fontSize : "20px",
        padding : "10px",
        border : "5px solid red",
        fontWeight : "bold"
    };
    return (
        <footer style={footerStyle}>
            <p>Footer</p>
            <p>&copy; Copyright 2024 by YMYP</p>
        </footer>
    );
}

export default Footer;