import React from 'react';

const Product = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#17313E',
            color: 'white',
            padding: '90px ',
            textAlign: 'center',
        }}
    >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '20px',textDecoration:'underline' }}>Product Page</h1>

        <p style={{ fontSize: '2.2rem', fontWeight: 'normal', maxWidth: '600px', marginTop: '170px' }}> Product Not Found!</p>
    </div>
);

export default Product;
