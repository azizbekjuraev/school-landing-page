import { ReactNode } from 'react'
import Bar from './Bar'

type Props = {
  title?: string
  children?: ReactNode
  value?: number
  backClass?: string
  className?: string
  titleClass?: string
  striped?: boolean
  animate?: boolean
  showValue?: boolean
}

const ProgressBar = ({
  title,
  children,
  value,
  backClass = 'rounded-[999px]',
  className = 'bg-slate-900 dark:bg-slate-900',
  titleClass = 'text-base font-normal',
  striped,
  animate,
  showValue
}: Props) => {
  return (
    <div className='relative'>
      {title && <span className={`mb-2 block   tracking-[0.01em] text-slate-500 ${titleClass}`}>{title}</span>}
      {
        // if no children, then show the progress bar
        !children && (
          <div className={`progress  w-full overflow-hidden bg-opacity-10  ${backClass}`}>
            <Bar value={value} className={className} striped={striped} animate={animate} showValue={showValue} />
          </div>
        )
      }
      {
        // if children, then show the progress bar with children
        children && (
          <div className={`progress  flex w-full overflow-hidden bg-opacity-10  ${backClass}`}>{children}</div>
        )
      }
    </div>
  )
}

export default ProgressBar
