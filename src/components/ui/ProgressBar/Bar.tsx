type Props = {
  value?: number
  className?: string
  showValue?: boolean
  striped?: boolean
  animate?: boolean
}

const Bar = ({ value, className, showValue, striped, animate }: Props) => {
  // striped style

  return (
    <div
      className={`progress-bar flex h-full flex-col justify-center whitespace-nowrap text-center  ${
        className && className
      } ${striped ? 'stripes' : ''}
      ${animate ? 'animate-stripes' : ''}
      `}
      style={{ width: `${value}%` }}
    >
      {showValue && <span className='text-[10px] font-bold text-white'>{value + '%'}</span>}
    </div>
  )
}

export default Bar
