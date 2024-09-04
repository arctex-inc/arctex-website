import React from 'react';

const TextboxContent = ({ clickedObjectId }) => {

  switch (clickedObjectId) {
    case "briefcase":
      return <div className="md:p-5 p-3 px-6 md:px-8">
        <h4 className="text-center text-2xl font-bold p-3 pb-6 md:text-3xl">Careers</h4>
        <p className='text-md pb-5'>Whether you're a developer, marketer, designer, or product manager, there's a place for you here at Arctex. We are always on the lookout for passionate, innovative, and driven individuals to help us make an impact on the world.
        </p>
        <p className='text-md pb-5'>Interested in joining us? We post jobs on LinkedIn and Handshake.</p>
        <p>Our Handshake:</p>
        <a target="_blank" className='text-md text-blue-500' href="https://app.joinhandshake.com/e/983808">app.joinhandshake.com/e/983808</a>
        <p className='pt-5'>Our LinkedIn:</p>
        <a target="_blank" className='text-md text-blue-500' href="https://www.linkedin.com/company/arctex-inc">linkedin.com/company/arctex-inc</a>
      </div>;
    case "collegeAppAssist":
      return <div className="md:p-5 p-3 px-6 md:px-8">
      <h4 className="text-center text-2xl font-bold p-3 pb-6 md:text-3xl">CollegeAppAssist</h4>
      <p className='text-md pb-5 md:text-md'>CollegeAppAssist is a website + Chrome extension to help students with their college applications & scholarships. Students are able to ask questions, analyze their answers on the application, and automate filling in information.
      </p>
      <p>Are you a high school student wanting help on your college applications? Try out it today!</p>
      <a target="_blank" className='text-md text-blue-500' href="https://www.collegeappassist.com">collegeappassist.com</a>
      <p className='pt-5'>Are you a school administrator or counselor wanting to utilize CollegeAppAssist at your school? Schedule a meeting with us.</p>
      <a target="_blank" className='text-md pb-5 text-blue-500' href="https://cal.com/chrisho/schools">cal.com/chrisho/schools</a>
    </div>;
    case "shoppingBag":
      return <div className="md:p-5 p-3 px-6 md:px-8">
      <h4 className="text-center text-2xl font-bold p-3 pb-6 md:text-3xl">Products</h4>
      {/* <p className='text-md'>Elevate your online presence with our 3D website template!  Perfect for businesses and individuals looking to create a stunning, immersive digital experience that will captivate your audience and set you apart from the competition. By purchasing the template from the link below, you'll gain access to the exact code used to develop the 3D website you're on right now. 
      </p> */}
      {/* <p className='text-md pt-5'>Buy it now:</p> */}
      {/* <a target="_blank" className='text-md text-blue-500' href=""></a> */}

      <p className='text-md pt-5'>Are you a student navigating the complex college application process? Meet CollegeAppAssist—your personal digital counselor. Designed to streamline the entire application journey, CollegeAppAssist provides tailored advice, automates filling in information, and 24/7 real-time assistance to help you present your best self to colleges and universities.
      </p>
      <p className='text-md pt-5'>Try out it today!</p>
      <a target="_blank" className='text-md text-blue-500' href="https://www.linkedin.com/company/arctex-inc">collegeappassist.com</a>

      <p className='text-md pt-5'>Want a custom software solution for your business? Arctex offers contract software development services too. Schedule a meeting with us to learn more!</p>
      <a target="_blank" className='text-md pb-5 md:text-md text-blue-500' href="https://cal.com/chrisho/contract">cal.com/chrisho/contract</a>
    </div>;
    case "gear":
      return <div className="md:p-5 p-3 px-6 md:px-8">
      <h4 className="text-center text-2xl font-bold p-3 pb-6 md:text-3xl">Services</h4>
      <p className='text-md pb-5'>Arctex offers contract software development services for organizations wanting custom software solutions.
      </p>
      <p className='text-md pb-5 md:text-md'>From interactive websites to mobile apps, our team of experienced developers and UX/UI designers will create software that fits your needs.
      </p>
      <p>Want to learn more about our services? Schedule a meeting with us today!</p>
      <a target="_blank" className='text-md pb-5 md:text-md text-blue-500' href="https://cal.com/chrisho/contract">cal.com/chrisho/contract</a>
    </div>;
    default: // about us on initial load
      return <div className="md:p-5 p-3 px-6 md:px-8">
        <h4 className="text-center text-2xl font-bold p-3 pb-6 md:text-3xl">About Us</h4>
        <p className='text-md pb-5 md:text-md'>Arctex is a software-as-a-service (SaaS) development company creating EdTech software and mobile apps infused with artificial intelligence.</p>

        <p className='text-md pb-5 md:text-md'>From conceptualization to deployment, we design, develop, and launch custom software applications. We specialize in leveraging the latest technologies while focusing on efficiency and effectiveness. Our commitment to problem-solving and innovation can be found in each of our robust, user-friendly products.</p>

        <p className='text-md pb-5 md:text-md'>Our product tech stack includes MongoDB, Express, React, Node, JavaScript, Tailwind, Python, FastAPI, and various libraries and frameworks to help us accomplish our goals.</p>

        <p className='text-md pb-5 md:text-md'>Explore our website to learn more about us!</p>

        <p>Contact:</p>
        <a className='text-md text-blue-500' href="mailto:contact@arctexsoftware.com">contact@arctexsoftware.com</a>
      </div>;
  }

  // const product = products.find(product => product.id === clickedObjectId);

  // return (
  //   product ? <ProductOrServiceDisplay product={product} /> : <Home />
  // );
};

export default TextboxContent;