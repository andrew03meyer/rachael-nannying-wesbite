import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TopBanner from '../TopBanner/TopBanner';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yyf2sly', 'template_krykwfy', form.current, {
        publicKey: 'U41YQeEE_LZ0ZcVpz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className='flex flex-col items-center relative h-screen w-full font-roboto'>
        <TopBanner />
        <h1 className="text-7xl text-center mt-20 mb-20 font-bold text-black">Contact Us:</h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center justify-center w-full">
          <input type="text" name="from_name" placeholder="Full Name" className="m-5 w-1/6 p-1 bg-gradient-to-br from-white to-orange-100" />
          <input type="email" name="email" placeholder="Your Email" className="m-5 w-1/6 p-1 bg-gradient-to-br from-white to-orange-100" />
          <textarea name="message" placeholder="Message" className="m-5 w-1/6 p-1 bg-gradient-to-br from-white to-orange-100" />
          <input type="submit" value="Send" className="bg-gradient-to-br from-white to-orange-100 border-solid border-orange-100 border-2 rounded-xl w-32 h-12 hover:text-lg transition-all duration-700 p-1" />
        </form>

        <div className="w-full bg-gradient-to-br from-white to-orange-50 mt-16 h-1/6 mb-16">
          <h1 className="text-4xl p-5 w-full font-bold text-black">Contact Information:</h1>
          <p>Phone: 123-456-7890</p>
          <p>Email: </p>
      </div>
      </div>
    </>
  );
};

export default Contact;