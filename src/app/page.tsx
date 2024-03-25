// pages/index.js
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1>Next.js React-PDF Demo</h1>
          <Link href="/pdf" passHref>
            View PDF
          </Link>
        </div>
      </div>
  );
};

export default Home;
