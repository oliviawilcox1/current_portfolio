import { currentDayName } from '@/lib/utils/dateUtils'
import Link from './Link'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <Link className="link-underline">Olivia Wilcox{` © ${new Date().getFullYear()}`}</Link>
          </div>
          {/* {`•`} */}
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link className="link-underline">Olivia Wilcox{` © ${new Date().getFullYear()}`}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
