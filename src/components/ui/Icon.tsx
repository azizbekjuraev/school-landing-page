import React from 'react'
import { Icon, IconifyIcon } from '@iconify/react'

interface IconsProps {
  icon: string
  className?: string
  width?: string | number
  rotate?: number
  hFlip?: boolean
  vFlip?: boolean
}

const Icons: React.FC<IconsProps> = ({ icon, className, width, rotate, hFlip, vFlip }) => {
  return <Icon icon={icon} className={className} width={width} rotate={rotate} hFlip={hFlip} vFlip={vFlip} />
}

export default Icons
