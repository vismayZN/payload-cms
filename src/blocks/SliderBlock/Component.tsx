import type { Slider as SliderType } from '@/payload-types'

import * as React from 'react'

import { Media } from '@/components/Media'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import clsx from 'clsx'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const Slider: React.FC<SliderType> = ({ sliderFields }) => {
  const { slides, introContent } = sliderFields

  if (!slides || slides.length === 0) {
    return null
  }

  return (
    <div className={clsx('lg:container')}>
      {introContent && introContent.root.children.length > 0 && (
        <div className="cols-12 cols-m-8">
          <RichText data={introContent} />
        </div>
      )}

      <Carousel>
        <CarouselContent>
          {slides?.map((doc) => {
            const { image, link, enableLink } = doc
            return (
              <CarouselItem key={doc.id}>
                {enableLink ? (
                  <CMSLink {...link}>
                    {image && typeof image !== 'string' && <Media resource={image} />}
                  </CMSLink>
                ) : (
                  image && typeof image !== 'string' && <Media resource={image} />
                )}
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
