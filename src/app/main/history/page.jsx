import Link from 'next/link'
import React from 'react'

export default function History() {
  return (
    <main className='text-4xl text-center'>
        <section className=' relative top-36 bg-white text text-cyan-900 border-b-2 p-3'>
<ul className='drop-shadow-xl z-10' >
<li className='border-b-2'><Link href='/main/history/Personal'>PERSONAL TRAITS</Link></li>
<li className='border-b-2'><Link href='/main/history/Discovery'>DISCOVERY AND IDEATION</Link></li>
<li className='border-b-2'><Link href='/main/history/Design'>DESIGN</Link></li>
<li className='border-b-2'><Link href='/main/history/Delivery'>DELIVERY</Link></li>
<li className='border-b-2'><Link href='/main/history/StackholderManagement'>STAKEHOLDER MANAGEMENT</Link></li>
<li className='border-b-2'><Link href='/main/history/Vision'>VISION AND STRATEGY</Link></li>
<li className='border-b-2 '><Link href='/main/history/BusinessKnowleadge'>BUSINESS INDUSTRY KNOWLEDGE</Link></li>

</ul>
</section>

    </main>
  )
}
