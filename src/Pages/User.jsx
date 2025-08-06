import React from 'react';

const User = () => (
    <div
        style={{
            display: 'flex',
            minHeight: '100vh',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '4.5rem',
            fontWeight: 700,
            padding: '90px 20px',
            backgroundColor: '#17313E',
            color: 'white',
        }}
    >
       <h1 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '20px' }}>User Page</h1>

       <p style={{ fontSize: '2.2rem', fontWeight: 'normal', maxWidth: '600px', marginTop: '170px' }} >User Not Found!</p>
    </div>
);

export default User;
