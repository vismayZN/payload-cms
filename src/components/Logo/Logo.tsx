import { Header } from '@/payload-types'
import clsx from 'clsx'
import React from 'react'
import { Media } from '../Media'

type Props = {
  logo: Header['logo']
  className?: string
  loading?: 'lazy' | 'eager'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, className, logo } = props

  const loading = loadingFromProps || 'lazy'

  if (!logo) return null

  return (
    <Media
      alt="Ng Group Logo"
      loading={loading}
      className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
      resource={logo}
    />
  )
}
