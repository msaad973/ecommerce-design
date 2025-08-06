import React from 'react';

const Blog = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#17313E',
            color: 'white',
            padding: '90px 20px',
            textAlign: 'center',
        }}
    >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '20px' }}>Blog</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 'normal', maxWidth: '600px', marginTop: '170px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum iusto iure ea qui voluptates eius, explicabo accusamus voluptatibus inventore at omnis libero minima asperiores modi beatae? Ratione, enim natus!
        </p>
    </div>
);

export default Blog;
