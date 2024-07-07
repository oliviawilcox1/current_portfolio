import { getFileBySlug } from '@/lib/mdx'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import { RoughNotation } from 'react-rough-notation'
import { MdOutlineEmail } from 'react-icons/md'
import { useTheme } from 'next-themes'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('about', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails
  const { theme, setTheme, resolvedTheme } = useTheme()
  const color = theme === 'light' ? '#FBA4BC' : '#DE1D8D'
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About | ${name}`} description={`Personal Information`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full xl:rounded-full"
              placeholder="blur"
              blurDataURL="/static/images/SVG-placeholder.png"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex flex-col pt-3">
              <a
                className="rounded-full border px-8 py-2 text-center text-sm font-light text-gray-700 transition-colors hover:border-[#e5e5e5] hover:bg-[#fff] hover:text-black hover:shadow dark:text-white dark:hover:bg-[#e5e5e5] dark:hover:text-black"
                href="mailto:oliviawilcox07@gmail.com?subject=Let's Connect&body=Hi Olivia,"
                target="_blank"
                rel="noreferrer noopener"
              >
                <MdOutlineEmail className="mr-2 mb-0.5 inline h-5 w-5" />
                Contact Me!
              </a>
            </div>
          </div>

          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color={color}
                animationDelay={300}
                animationDuration={3000}
              >
                {text1}
              </RoughNotation>
            </p>
            <br />
            <p>
              {text2}
              <Link
                href={'https://www.nextiles.com'}
                className="special-underline text-gray-700 no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                {' '}
                {company}.{' '}
              </Link>
              {text3}
            </p>

            <br />

            <p className="sm:block md:hidden lg:hidden">
              In my spare time, you can find me learning{' '}
              <RoughNotation
                animationDelay="1000"
                animationDuration="3000"
                type="underline"
                color={color}
                strokeWidth="3"
                show={true}
              >
                <span className="text-black dark:text-white">Python </span>
              </RoughNotation>
              or participating in a Hackathon. I'm extremely interested in AI and Machine Learning
              and eager to continue growing my knowledge and skills through the courses I'm taking
              online.
            </p>

            <p className="hidden md:block">
              In my spare time, you can find me learning{' '}
              <RoughNotation
                animationDelay="1000"
                animationDuration="3000"
                type="underline"
                color={color}
                strokeWidth="3"
                show={true}
              >
                <span className="text-black dark:text-white">Python </span>
              </RoughNotation>
              or participating in a Hackathon. I'm extremely interested in AI and Machine Learning
              and eager to continue growing my knowledge and skills through the courses I'm taking
              online.
            </p>

            <br />

            <p>
              Here is a link to my{' '}
              <Link
                href={'https://github.com/oliviawilcox1'}
                className="special-underline text-gray-700 no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                GitHub.
              </Link>{' '}
              Feel free to take a look at what I have been working on or reach out to me via{' '}
              <Link
                href={'mailto:oliviawilcox07@gmail.com'}
                className="special-underline text-gray-700 no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Email
              </Link>{' '}
              with any questions or inquiries!
            </p>

            <br />

            <br />
            <h3>About this Portfolio</h3>
            <p>
              I was inspired how to create this portfolio through numerous other coders online.
              <ul>
                <li>
                  <Link
                    href={'https://github.com/pycoder2000/blog/tree/master'}
                    className="special-underline text-gray-700 no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    pycoder2000's Mere Musings
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="ml-0.5 inline-block h-4 w-4 fill-current"
                    >
                      <g data-name="Layer 2">
                        <g data-name="external-link">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                          <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                        </g>
                      </g>
                    </svg>
                  </Link>
                  - The source of inspiration
                </li>
                <li>
                  <Link
                    href={'https://github.com/timlrx/tailwind-nextjs-starter-blog'}
                    className="special-underline text-gray-700 no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Timothy's Next.js and Tailwind CSS template
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="ml-0.5 inline-block h-4 w-4 fill-current"
                    >
                      <g data-name="Layer 2">
                        <g data-name="external-link">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                          <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href={'https://www.einargudni.com/'}
                    className="special-underline text-gray-700 no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Einar Guðjónsson
                    <svg
                      xmlns="http:text-gray-7000/svg"
                      viewBox="0 0 24 24"
                      className="ml-0.5 inline-block h-4 w-4 fill-current"
                    >
                      <g data-name="Layer 2">
                        <g data-name="external-link">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                          <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
