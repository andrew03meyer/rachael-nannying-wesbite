import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TopBanner from '../TopBanner/TopBanner';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(document.getElementById("from_name").length === 0 || document.getElementById("email").length === 0 || document.getElementById("message").length === 0)

    if(document.getElementById("from_name").length === 0 || document.getElementById("email").length === 0 || document.getElementById("message").length === 0) {
      emailjs
        .sendForm('service_yyf2sly', 'template_krykwfy', form.current, {
          publicKey: 'U41YQeEE_LZ0ZcVpz',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            window.location.replace('/sent')
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <>
      <div className='flex flex-col items-center relative h-screen w-full font-roboto mb-20'>
        <TopBanner />
        <h1 className="text-7xl text-center mt-20 mb-20 font-bold text-black">Contact Us:</h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center h-auto justify-center w-2/6">
          <input type="text" id="from_name" name="from_name" placeholder="Full Name" className="m-5 w-full p-1 bg-gradient-to-br from-white to-gray-200" />
          <input type="email" id="email" name="email" placeholder="Your Email" className="m-5 w-full p-1 bg-gradient-to-br from-white to-gray-200" />
          <textarea name="message" id="message" placeholder="Message" className="m-5 w-full p-1 bg-gradient-to-br from-white to-gray-200" />
          <input type="submit" value="Send" className="bg-gradient-to-br from-white to-gray-200 border-solid border-gray-300 border-2 rounded-xl w-32 h-12 hover:w-36 hover:h-16 transition-all duration-700 p-1" />
        </form>

      {/* <div className="w-full bg-gradient-to-br from-white to-orange-50 mt-16 h-1/6 mb-16">
        <h1 className="text-4xl p-5 w-full font-bold text-black">Contact Information:</h1>
        <p>Phone: 123-456-7890</p>
        <p>Email: </p>
      </div> */}
      </div>
    </>
  );
};

export default Contact;