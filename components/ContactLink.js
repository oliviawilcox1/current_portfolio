const ContactLink = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <li className="duration-250 mr-2 inline cursor-pointer text-4xl transition-colors ease-in hover:text-gray-400 sm:text-xl md:text-xl lg:text-xl">
        <span className="duration-250 transition-colors ease-in hover:text-gray-500 dark:hover:text-primary-400">
          {icon}
        </span>
      </li>
    </a>
  )
}

export default ContactLink
