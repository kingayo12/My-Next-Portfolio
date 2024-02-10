import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import { useRef } from "react";
import emailjs from "emailjs-com";

//farmer
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../../variants";
//icons
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rvy5ztc", "template_iznui1s", form.current, "fMUbpbkAXKitGy6dT")
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='h-full bg-primary/30'>
      <Circles />
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full '>
        {/* text & form  */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text  */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className=' h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>

          {/* form  */}
          <motion.form
            variants={fadeIn("down", 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={sendEmail}
            ref={form}
          >
            {/* input group  */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' name='from_name' className='input' />
              <input
                type='text'
                placeholder='name'
                name='to_name'
                className='input hidden'
                value=''
                Kings
              />
              <input type='email' placeholder='email' name='email' className='input' />
            </div>
            <input type='text' placeholder='subject' name='subject' className='input' />
            <textarea className='textarea' name='message' placeholder='message'></textarea>

            {/* button  */}
            <button
              className=' btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
              type='submit'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
