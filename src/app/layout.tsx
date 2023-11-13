import './styles/globals.css'
import type { Metadata, ResolvingMetadata } from 'next'
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight:["400", "700"]})

export async function generateMetadata( parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title: (await parent).title,
    description: (await parent).description
  }
}

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={poppins.className}>        
        {children}
      </body>
    </html>
  )
}
