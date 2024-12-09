import { FiMapPin, FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

const contacts = [
  {
    id: 2,
    name: 'aymane.rachid.web@gmail.com',
    icon: <FiMail />,
  },
  {
    id: 3,
    name: '+2126 18 94 1000',
    icon: <FiPhone />,
  },
  {
    id: 4,
    name: 'LinkedIn: aymane-rachid-106700317',
    icon: <FiLinkedin />,
    link: 'https://www.linkedin.com/in/aymane-rachid-106700317/',
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-5/12">
      <div className="text-left max-w-xl px-6 py-4">
        <h2 className="font-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Contact Details
        </h2>
        <ul className="font-regular text-neutral-700 dark:text-neutral-300">
          {contacts.map((contact) => (
            <li className="flex items-center mb-6" key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4 hover:text-primary-500 dark:hover:text-primary-300 transition-colors">
                {contact.icon}
              </i>
              <span className="text-lg text-ternary-dark dark:text-ternary-light">
                {contact.link ? (
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    {contact.name}
                  </a>
                ) : (
                  contact.name
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
