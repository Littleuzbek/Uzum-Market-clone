import Wishes from '@/components/wishes/Wishes'
import clases from './page.module.css'
import { Suspense } from 'react'

export default function Wishes() {
  return (
    <div className={clases.wishes}>
      <Suspense fallback='Loading...'>
        <Wishes />
      </Suspense>
    </div>
  )
}
