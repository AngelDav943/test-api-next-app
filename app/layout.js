import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shop',
  description: 'API SHOP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <span>LOGO</span>
          <input type='text' className='search' placeholder='Search here'/>
          <a href="/">Home</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
