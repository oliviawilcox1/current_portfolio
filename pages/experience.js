import { motion } from 'framer-motion'
import fetcher from 'lib/fetcher'
import useSWR from 'swr'
// Components
import { PageSEO } from '@/components/SEO'
import ExperienceUI from '@/components/ExperienceUI'
import Timeline from '@/components/Timeline'
import Link from '@/components/Link'
// Data
import siteMetadata from '@/data/siteMetadata'
import experienceData from '@/data/experienceData'
import usesData from '@/data/usesData'
// Icons
import { FaCloudShowersHeavy } from 'react-icons/fa'
import {
  BsCloudDrizzleFill,
  BsCloudsFill,
  BsCloudLightningFill,
  BsCloudSnowFill,
  BsCloudFogFill,
  BsMoonFill,
  BsSunFill,
  BsFillCloudSunFill,
  BsFillCloudMoonFill,
  BsFillCloudFill,
} from 'react-icons/bs'
import { getCurrentlyReading } from '@/lib/goodreads'

const Experience = () => {
  const { data } = useSWR('/api/now-playing', fetcher)
  //let currentlyReadingData = currentlyReading['currentlyReading']
  //let weatherData = currentlyReading['data']
  // const { temp: temperature } = weatherData.main
  // const { icon: weatherIcon, description: weatherDescription } = weatherData.weather[0]

  const icons = {
    _01d: <BsSunFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _01n: <BsMoonFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _02d: <BsFillCloudSunFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _02n: <BsFillCloudMoonFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _03d: <BsFillCloudFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _03n: <BsFillCloudFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _04d: <BsCloudsFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _04n: <BsCloudsFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _09d: <BsCloudDrizzleFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _09n: <BsCloudDrizzleFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _10d: <FaCloudShowersHeavy className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _10n: <FaCloudShowersHeavy className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _11d: <BsCloudLightningFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _11n: <BsCloudLightningFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _13d: <BsCloudSnowFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _13n: <BsCloudSnowFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _50d: <BsCloudFogFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _50n: <BsCloudFogFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
  }
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="My Experience" />
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experience
        </h1>
      </div>
      <div className="max-w-none pt-8 pb-8 xl:col-span-2">
        {experienceData.map((d) => (
          <ExperienceUI
            key={d.company}
            title={d.title}
            company={d.company}
            location={d.location}
            range={d.range}
            url={d.url}
            text1={d.text1}
            text2={d.text2}
            text3={d.text3}
            text4={d.text4}
          />
        ))}
      </div>
      <div>
        {/* <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.9 }}
          variants={{
            hidden: {
              opacity: 0.5,
              y: 10,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <Timeline />
        </motion.div> */}
      </div>
      <div>
        {/* <div className="my-2">
          <h3>Where am I and what am I doing?</h3>
          <div className=" mt-4 mb-6 text-xs text-neutral-700 dark:text-neutral-400">
             This page was automatically updated @ {date}-{month}-{year} {hour}:{minute}:{second} 
          </div>
        </div> */}

        <div>
          <div className="flex justify-between gap-5">
            {/* <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">
                Location:
              </span> 
              <span>

              </span>
              <br />
              <span className="ml-2 font-semibold">Weather:</span>{' '}
              <span>
                <a
                  href="https://weather.com/en-GB/weather/today/l/f42d9f8baa19b4d8d5e034449faa703839993366f64551a56a2b530297075dc2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-1 hover:underline"
                >
                   {icons[`_${weatherIcon}`]} Currently <b>{parseInt(temperature)}°C</b>
                  {' with '}
                  <span>{weatherDescription}</span> 
                </a>
              </span>
            </div> */}

            {/* <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Reading:</span>{' '}
               <a
                href={currentlyReadingData[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-1 hover:underline"
              >
                <span>{currentlyReadingData[0].title}</span> by{' '}
                <span>{currentlyReadingData[0].author}</span>
              </a> 
              <br />

            </div> */}
          </div>

          {/* <div className="-my-6 flex justify-between gap-5">
            <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Date:</span>{' '}
             <span>{TodayDate.format('DD/MM/YYYY')}</span> 
              <br />
              <span className="ml-2 font-semibold">Time:</span>{' '}
              <span>
               <BsClock className="mb-0.5 inline h-3 w-3 hover:animate-spin" />{' '}
                 {TodayDate.format('h:mm:ss A')}
              </span>
            </div>

            <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Listening:</span>{' '}
              <span>
                {data?.songUrl ? (
                  <a
                    href={data.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-1 hover:underline"
                  >
                    <span>{data.title}</span>
                  </a>
                ) : (
                  <span>Not Playing</span>
                )}
              </span> 
              <br />
              <span className="ml-2 font-semibold">Drinking:</span> <span>Coffee</span>
            </div>
          </div> */}
        </div>

        {/* <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div> */}
        {/* Work */}
        {/* <div className="pb-4">
          <p>

            <Link
              href={''}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
 
            </Link>
            .
          </p>
          <br />
          <p>

          </p>
          <br />
          <p>

          </p>
          <br />
          <p>

          </p>
          <br />
          <p>

            <Link
              // href={

              // }
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
       
            </Link>
            .
          </p>
        </div> */}
        {/* <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div> */}

        {/* Personal life */}
        {/* <div className="pt-6">
          <p>

            <Link
              // href={'https://www.swyx.io/learn-in-public'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >

            </Link>{' '}

          </p>
          <br />

          <p>

          </p>
        </div> */}
        {/* <div className="mt-3 text-sm">

          <Link
            href={'https://nownownow.com/'}
            className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
          >

          </Link>
          
        </div> */}
      </div>
      {/* <div className="mx-auto max-w-4xl divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
   
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Software and hardware collection of things I'm using daily.
          </p>
          <div className="mt-5 mb-3 text-xs text-gray-500 dark:text-gray-400">

          </div>
        </div>
        <div className="container py-12">
          <div className="flex flex-row flex-wrap">
            {usesData.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group mb-4 w-full cursor-pointer rounded-xl p-6 backdrop-filter transition duration-100 hover:scale-[1.02] hover:bg-gray-300 hover:bg-opacity-40 dark:hover:bg-gray-500 dark:hover:bg-opacity-40 md:w-1/2"
              >
                <div className="flex items-center justify-start">
                  <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50 ">
                    <svg
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-12 w-12 stroke-current text-center align-middle leading-6 text-gray-700 dark:text-gray-50"
                    >
                      <path d="M4 17L10 11 4 5" />
                      <path d="M12 19L20 19" />
                    </svg>
                  </div>
                  <div className="flex flex-col p-3">
                    <h3 className="truncate text-sm font-bold leading-5 text-gray-800 dark:text-white sm:text-base lg:text-base">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                      {d.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Experience
