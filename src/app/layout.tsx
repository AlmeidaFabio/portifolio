import './globals.css'
import type { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata( parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title: (await parent).title,
    description: (await parent).description
  }
}

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>        
        {children}
      </body>
    </html>
  )
}
