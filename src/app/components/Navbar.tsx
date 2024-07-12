import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div className='flex  justify-center gap-20'>
      <Link className='p-4 bg-slate-500 mt-4 text-white rounded-xl' href="/">Home</Link>
      <Link className='p-4 bg-slate-500 mt-4 text-white rounded-xl' href="/answers">Answers</Link>
    </div>
  )
}

export default Navbar