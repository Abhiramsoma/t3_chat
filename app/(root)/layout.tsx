
import Header from '@/components/header'
import { requireAuth,currentUser } from '@/modules/authentication/actions'
import { getAllChats } from '@/modules/chat/actions'
import ChatSidebar from '@/modules/chat/components/chat-sidebar'
import { Heading, User } from 'lucide-react'
import React from 'react'

const Layout = async ({children}:{children:React.ReactNode}) => {
    const session=await requireAuth()

    // const {data:chats} = await getAllChats();
  return (
    <div className='flex h-screen overflow-hidden'>
        <ChatSidebar user={session?.user} />
        <main className='flex-1 overflow-hidden'>
          <Header/>
            {children}
        </main>
      
    </div>
  )
}

export default Layout
