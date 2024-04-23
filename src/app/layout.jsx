import './globals.scss'
import Header from '@/components/Header'


export const metadata = {
  title: 'George Lambert',
  description: 'Личная страница Георга',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru' style={{ scrollBehavior: 'smooth' }} className='html'>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <body className='body'>
        <Header />
        {children}
      </body>
    </html>
  )
}
