import { getProjects } from '../../actions'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { ThemeToggle } from '@/components/theme-toggle'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events | Claude Code Metadata Browser',
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <>
      <AppSidebar projects={projects} />
      <SidebarInset>
        <header className='flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b px-4 py-2'>
          <div className='flex items-center gap-2'>
            <SidebarTrigger />
            <h1 className='text-lg font-semibold'>Events</h1>
          </div>
          <ThemeToggle />
        </header>
        <main className='flex items-center justify-center min-h-[calc(100vh-57px)]'>
          <div className='text-center text-muted-foreground'>
            <p className='text-lg mb-2'>Select a project to get started</p>
            <p className='text-sm'>
              Choose a project from the sidebar to view its events
            </p>
          </div>
        </main>
      </SidebarInset>
    </>
  )
}
