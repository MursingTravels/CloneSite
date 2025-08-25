import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <Image
        src="/mursing-logo.png"
        alt="Mursing Travels Logo"
        width={200}
        height={200}
      />
      <h1 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>
        Welcome to Mursing Travels
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
        A Premium Travel Agency For Nurses and More
      </p>
    </main>
  );
}
