"use client"

import { UserProfile } from "@clerk/nextjs"

const SettingsPage = () => {
  return (
    <div className="flex justify-center pb-10 -mt-24">
      <UserProfile path="/settings" />
    </div>
  )
}

export default SettingsPage
