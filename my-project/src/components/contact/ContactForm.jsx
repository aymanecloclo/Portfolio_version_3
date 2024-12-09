import FormInput from '../reusable/FormInput';

const ContactForm = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-xl m-4 p-6 sm:p-10 bg-white dark:bg-gray-800 rounded-xl shadow-xl text-left"
        >
          <p className="font-medium text-gray-800 dark:text-gray-100 text-2xl mb-8">
            Contact Form
          </p>

          {/* Full Name Input */}
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />

          {/* Email Input */}
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />

          {/* Subject Input */}
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />

          {/* Message Textarea */}
          <div className="mt-6">
            <label
              className="block text-lg text-gray-800 dark:text-gray-100 mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-gray-600 border-opacity-50 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md shadow-sm text-md focus:ring-[#113264] dark:focus:ring-[#0588F0] transition-all ease-out duration-300"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              className="w-full md:w-auto flex items-center justify-center text-sm font-medium bg-[#0D74CE] text-[#FBFDFF] h-12 px-6 py-3 rounded-md shadow hover:bg-[#0D74CE]/90 focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-out"
            >
              <span className="absolute right-0 -mt-12 h-32 w-12 translate-x-12 rotate-12 bg-[#F4FAFF] opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              <span className="text-[#FBFDFF]">Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
