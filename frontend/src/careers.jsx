import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {

  return (
    <div className='bg-white'>
       <div className="w-full h-screen flex justify-center items-center pt-4 pb-11 md:pb-4">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddnFLLAnt9jbMA69RbRo8lqVmTwaoIakNFY0-MuLQNxkOhNw/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginwidth="0">Loading…</iframe>
      </div>
      <Link to="/">
        <button className="back-button m-4">Home</button>
      </Link>
    </div>
  );
};

export default Careers;
