import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
      <div className='flex flex-col items-center relative w-full h-auto font-serif'>
        <h1 className="text-7xl text-center mt-20 mb-20 font-bold text-orange-300">Contact Me:</h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center justify-center w-full">
          <input type="text" name="from_name" placeholder="Full Name" className="m-5 w-1/6 p-1" />
          <input type="email" name="email" placeholder="Email" className="m-5 w-1/6 p-1" />
          <textarea name="message" placeholder="Message" className="m-5 w-1/6 p-1" />
          <input type="submit" value="Send" className="bg-orange-200 border-solid border-orange-300 border-2 rounded-xl w-32 h-12 hover:text-lg transition-all duration-700" />
        </form>
      </div>
    </>
  );
};

export default Contact;