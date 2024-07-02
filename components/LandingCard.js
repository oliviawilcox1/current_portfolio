import Link from 'next/link'

const LandingCard = ({
  href,
  gradientFrom,
  gradientTo,
  svgColor,
  svgPath,
  title,
  subtitle,
  textColor,
}) => (
  <div className="my-2 flex justify-center">
    <div className="group relative w-80">
      <div
        className={`animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-${gradientFrom} to-${gradientTo} opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200`}
      ></div>
      <Link href={href}>
        <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
          <span className="flex items-center space-x-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 -rotate-6 ${svgColor}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={svgPath} />
            </svg>
            <span className={`pr-6 text-gray-900 dark:text-gray-100`}>{title}</span>
          </span>
          <span
            className={`pl-6 ${textColor} transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100`}
          >
            {subtitle}&nbsp;&rarr;
          </span>
        </span>
      </Link>
    </div>
  </div>
)

export default LandingCard
