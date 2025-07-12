import { cn } from '@/utilities/ui'
import React from 'react'

export type MapBlockProps = {
  className?: string
}

export const MapField: React.FC<MapBlockProps> = (props) => {
  const { className } = props
  console.log('🚀 ~ props:', props)

  return (
    <div className={cn('', className)}>
      asdadsd
      <div>
        <div>
          <iframe
            src="https://maps.google.com/maps?q=nikol&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
