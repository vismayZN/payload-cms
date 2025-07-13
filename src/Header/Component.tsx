import { getCachedGlobal } from '@/utilities/getGlobals'
import { HeaderClient } from './Component.client'
import { Header as HeaderType } from '@/payload-types'

export async function Header() {
  const headerData = (await getCachedGlobal('header', 1)()) as HeaderType

  return <HeaderClient {...headerData} />
}
