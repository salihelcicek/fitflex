/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {UserResource} from '@clerk/types'
import CornerElements from './CornerElements'
const ProfileHeader = ({user} : {user:UserResource | null | undefined }) => {
  return (
    <div className='mb-10 relative backdrop-blur-sm border border-border p-6 w-10/12  mx-auto'>
      <CornerElements />

      <div className='flex flex-col md:flex-row items-start md:items-center gap-6'>
        <div className='relative'>
          {user?.imageUrl ? (
                <div className="relative w-24 h-24 overflow-hidden rounded-lg">
                  <img
                    src={user?.imageUrl}
                    alt={user?.fullName || "Profile"}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">
                    {user?.fullName?.charAt(0) || "U"}
                  </span>
                </div>
              )}
              <div className='absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-background'></div>
        </div>

          {/* USER INFO */}
        <div className='flex flex-col gap-2 w-full'>
          <div className='flex flex-row gap-2 items-center justify-between'>
          <h1 className='text-2xl font-bold text-primary'>{user?.fullName}</h1>
          <div className='font-mono text-sm text-muted-foreground'>
            <div className='flex flex-row gap-2 items-center border border-purple-950 bg-black rounded-full px-5 py-1'>
            USER ACTIVE
            <div className='relative bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-background'></div>
            </div>
          </div>
          </div>
          <hr className='w-full border-b-4 border-border'/>
          <p className='text-sm text-muted-foreground'>{user?.emailAddresses[0]?.emailAddress}</p>
        </div>

      </div>

    </div>
  )
}

export default ProfileHeader