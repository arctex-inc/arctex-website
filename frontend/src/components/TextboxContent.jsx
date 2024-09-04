import React from 'react';

const TextboxContent = ({ clickedObjectId }) => {

  switch (clickedObjectId) {
    case "briefcase":
      return <div className="md:p-5 p-3 px-6 md:px-8">
        <h4 className="text-center text-2xl font-bold p-3 pb-6 md:text-3xl">Careers</h4>
        <p className='text-md pb-5'>Interested in working at Arctex? We are always on the lookout for passionate, innovative, and driven individuals to help us revolutionize the tech landscape.
        </p>
        <p className='text-md pb-5'>Whether you're a developer, marketer, or designer, there's a place for you here at Arctex.
        </p>
        <p>Our Handshake:</p>
        <a className='text-md text-blue-500' href="https://app.joinhandshake.com/e/983808">app.joinhandshake.com/e/983808</a>
        <p className='pt-5'>Our LinkedIn:</p>
        <a className='text-md text-blue-500' href="https://www.linkedin.com/company/arctex-inc">linkedin.com/company/arctex-inc</a>
      </div>;
    case "collegeAppAssist":
      return <div className="md:p-5 p-3 px-6 md:px-8">
      <h4 className="text-center text-2xl font-bold p-3 pb-6 md:text-3xl">CollegeAppAssist</h4>
      <p className='text-md pb-5 md:text-md'>CollegeAppAssist is a website + Chrome extension college applications & scholarships.
      </p>
      <p className='text-md pb-5 md:text-md'>Students
      </p>
      <p>Try it today!</p>
      <a className='text-md pb-5 md:text-md text-blue-500' href="https://www.linkedin.com/company/arctex-inc">collegeappassist.com</a>
    </div>;
    case "shoppingBag":
      return <div className="md:p-5 p-3 px-6 md:px-8">
      <h4 className="text-center text-2xl font-bold p-3 pb-6 md:text-3xl">CollegeAppAssist</h4>
      <p className='text-md pb-5 md:text-md'>CollegeAppAssist is a website + Chrome extension college applications & scholarships.
      </p>
      <p className='text-md pb-5 md:text-md'>Students
      </p>
      <p>Try it today!</p>
      <a className='text-md pb-5 md:text-md text-blue-500' href="https://www.linkedin.com/company/arctex-inc">collegeappassist.com</a>
    </div>;
    case "services":
      return <div className="md:p-5 p-3 px-6 md:px-8">
      <h4 className="text-center text-2xl font-bold p-3 pb-6 md:text-3xl">CollegeAppAssist</h4>
      <p className='text-md pb-5 md:text-md'>CollegeAppAssist is a website + Chrome extension college applications & scholarships.
      </p>
      <p className='text-md pb-5 md:text-md'>Students
      </p>
      <p>Try it today!</p>
      <a className='text-md pb-5 md:text-md text-blue-500' href="https://www.linkedin.com/company/arctex-inc">collegeappassist.com</a>
    </div>;
    default: // about us on initial load
      return <div className="md:p-5 p-3 px-6 md:px-8">
        <h4 className="text-center text-2xl font-bold p-3 pb-6 md:text-3xl">About Us</h4>
        <p className='text-md pb-5 md:text-md'>Arctex is a software-as-a-service (SaaS) development company creating EdTech software and mobile apps infused with artificial intelligence.</p>

        <p className='text-md pb-5 md:text-md'>From conceptualization to deployment, we design, develop, and launch custom software applications. We specialize in leveraging the latest technologies while focusing on efficiency and effectiveness. Our commitment to problem-solving and innovation can be found in each of our robust, user-friendly products.</p>

        <p className='text-md pb-5 md:text-md'>Our product tech stack includes MongoDB, Express, React, Node, JavaScript, Tailwind, Python, FastAPI, and various libraries and frameworks to help us accomplish our goals.</p>

        <p className='text-md pb-5 md:text-md'>Explore our website to learn more about us!</p>

        <p className='text-md pb-5 md:text-md'>Contact: contact@arctexsoftware.com</p>
      </div>;
  }

  // const product = products.find(product => product.id === clickedObjectId);

  // return (
  //   product ? <ProductOrServiceDisplay product={product} /> : <Home />
  // );
};

export default TextboxContent;