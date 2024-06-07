// Components
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'
// Data
import siteMetadata from '@/data/siteMetadata'
// Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Contact
          </h1>
          <div className="flex space-x-4">
            <ContactLink href="mailto:oliviawilcox07@gmail.com" icon={<MdEmail />} />
            <ContactLink
              href="https://www.linkedin.com/in/oliviawilcox007/"
              icon={<FaLinkedin />}
            />
            <ContactLink href="" icon={<FaGithub />} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
