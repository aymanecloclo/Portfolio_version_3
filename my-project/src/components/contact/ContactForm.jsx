import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";  // Importer toast pour afficher les notifications
import FormInput from "../reusable/FormInput";  // Assurez-vous que ce composant est adapté à Formik
import emailjs from '@emailjs/browser';
import { useShowContext } from "../ShowProvider";

const ContactForm = () => {
  const {language}=useShowContext();
  console.log(language);
  // Validation Schema
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, language === 'en' ? "Name must be at least 2 characters" : "Le nom doit contenir au moins 2 caractères")
    .required(language === 'en' ? "Name is required" : "Le nom est requis"),
  email: Yup.string()
    .email(language === 'en' ? "Invalid email address" : "Adresse e-mail invalide")
    .required(language === 'en' ? "Email is required" : "L'e-mail est requis"),
  subject: Yup.string()
    .min(3, language === 'en' ? "Subject must be at least 3 characters" : "Le sujet doit contenir au moins 3 caractères")
    .required(language === 'en' ? "Subject is required" : "Le sujet est requis"),
  message: Yup.string()
    .min(10, language === 'en' ? "Message must be at least 10 characters" : "Le message doit contenir au moins 10 caractères")
    .required(language === 'en' ? "Message is required" : "Le message est requis"),
});

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Envoi du message via emailjs
      emailjs
        .send(
          "service_i0welv9",   // Replace with your Service ID
          "template_9px3uig",   // Replace with your Template ID
          values,               // Send contact form data
          "uxWKIwBThJlF-L6GU"  // Replace with your User ID (public key)
        )
        .then((result) => {
          console.log(result.text);
          // Afficher une notification de succès après l'envoi
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // Réinitialiser le formulaire après l'envoi
          resetForm();
        })
        .catch((error) => {
          console.error(error.text);
          toast.error("An error occurred while sending the message.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    },
  });

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-white dark:bg-gray-800 rounded-xl shadow-xl text-left "
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
            value={formik.values.name}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            errorMessage={formik.touched.name && formik.errors.name}
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
            value={formik.values.email}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            errorMessage={formik.touched.email && formik.errors.email}
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
            value={formik.values.subject}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            errorMessage={formik.touched.subject && formik.errors.subject}
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
              className="w-full px-5 py-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md shadow-sm focus:ring-[#113264] dark:focus:ring-[#0588F0] transition-all ease-out duration-300"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
              placeholder="Type your message here..."
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="mt-1 text-red-500 text-sm">{formik.errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center text-sm font-medium bg-[#0D74CE] text-[#FBFDFF] h-12 px-6 py-3 rounded-md shadow hover:bg-[#0D74CE]/90 focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
