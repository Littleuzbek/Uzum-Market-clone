import Wishes from '@/components/wishes/Wishes'
import clases from './page.module.css'
import { Suspense } from 'react'
import Loader from '@/components/loader/Loader'

export const metadata = {
  title: 'Saralanganlar - Uzum'
}

export default function WishesPage() {
  return (
    <div className={clases.wishes}>
      <Suspense fallback={<Loader />}>
        <Wishes />
      </Suspense>
    </div>
  )
}
