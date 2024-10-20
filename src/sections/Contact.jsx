import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: 'sujata@jsmastery.pro',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="min-h-screen flex items-center justify-center flex-col">
        <div className='flex justify-start flex-col w-full gap-5'>
          <div className=''>
            <h3 className="text-5xl font-semibold text-white">Let's talk</h3>
            <hr className="rounded-4xl border-2 border-[#0140CB] w-[13.5rem] "/>
          </div>
          <p className="text-xl text-white-600">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>
        </div>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex text-4xl flex-col w-full space-y-7">
            <label className="block text-white leading-loose sm:leading-normal sm:space-y-5">
              Hello, my name is 
              <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name" 
                className="w-52 sm:w-72 px-2 inline-block  bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 placeholder-gray-400 text-white"
              />
              , and you can reach me at
              <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email" 
              className="w-52 sm:w-96 bg-transparent px-2 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 placeholder-gray-400 text-white"
            />
            , I would like to say (Message):
            <textarea 
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={1}
              placeholder="Your Message" 
              className="bg-transparent py-2 text- mt-2 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 placeholder-gray-400 text-white w-full"
            ></textarea>
            </label>
            <div className="min-h-12 w-full">  
              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}

                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
              </button>
            </div>
          </form>
        </div>
    </section>
  );
};

export default Contact;