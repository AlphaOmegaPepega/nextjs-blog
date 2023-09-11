import NavBar from './components/NavBar'
import './globals.css'

import Provider from './components/Provider'



export const metadata = {
  title: 'Produktize Managment Skill Map',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Provider>
        <NavBar/>
        
        {children}
        </Provider>
        </body>
    </html>
  )
}
