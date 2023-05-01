import Voting from '@/components/Vote/Voting'
import Login from '@/components/auth/Login'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* <Voting /> */}
      <Login />
    </main>
  )
}
