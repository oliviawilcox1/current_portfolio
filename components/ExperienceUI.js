import Link from '@/components/Link'
import { useTheme } from 'next-themes'

const ExperienceUI = ({ title, company, location, range, url, text1, text2, text3, text4 }) => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const color = theme === 'light' ? 'text-primary-color-200' : 'text-primary-color-500'
  return (
    <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-gray-500 dark:text-gray-400">{title}</span>{' '}
        {company && (
          <>
            <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{' '}
            <span className={color}>
              <Link href={url} className="company">
                {company}
              </Link>
            </span>
          </>
        )}
      </div>
      <div>
        <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">{range}</div>
        {text1 && (
          <div className="p-2">
            <div className="flex flex-row ">
              <div className={`mr-2 text-lg ${color}`}> &#8227;</div>
              <div className="text-gray-500 dark:text-gray-400">{text1}</div>
            </div>
            <div className="flex flex-row">
              <div className={`mr-2 text-lg ${color}`}> &#8227;</div>
              <div className="text-gray-500 dark:text-gray-400">{text2}</div>
            </div>
            <div className="items-top flex flex-row">
              <div className={`mr-2 text-lg ${color}`}> &#8227;</div>
              <div className="text-gray-500 dark:text-gray-400">{text3}</div>
            </div>
            <div className="items-top flex flex-row">
              <div className={`mr-2 text-lg ${color}`}> &#8227;</div>
              <div className="text-gray-500 dark:text-gray-400">{text4}</div>
            </div>
          </div>
        )}
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-200  dark:text-gray-600">
        &#126;&#126;&#126;
      </div>
    </div>
  )
}

export default ExperienceUI
