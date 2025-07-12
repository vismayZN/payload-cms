import React from 'react'

import type { Page } from '@/payload-types'

import { MediaHero } from '@/heros/Media'
import { SliderHero } from './Slider'

const heroes = {
  media: MediaHero,
  slider: SliderHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
