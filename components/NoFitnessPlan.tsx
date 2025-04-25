import React from 'react'
import CornerElements from './CornerElements'
import Link from 'next/link'
const NoFitnessPlan = () => {
  return (
    <div className='mb-10 relative backdrop-blur-sm border border-border p-6 w-10/12  mx-auto'>
    <CornerElements />
    <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none" />
    <div className='flex flex-col items-center justify-center gap-6'>
      <h1 className='text-2xl font-bold text-primary/50'>No Fitness Plan Found</h1>
      <p className='text-sm text-muted-foreground'>Please create a fitness plan to get started with FitFlex AI Personal Trainer</p>
      <Link href='/generate-program' className='flex items-center font-mono'>
      <button className='bg-violet-900 hover:bg-violet-950 transition-colors hover:text-gray-300 text-white px-4 py-2 rounded-lg'>Create Fitness Plan</button>
      </Link>
    </div>

    </div>
  )
}

export default NoFitnessPlan