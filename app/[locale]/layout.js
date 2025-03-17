import { Inter } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YZ UZMAN - Web Tasarım ve Geliştirme Ekibi',
  description: 'Web tasarım, mobil uygulama ve yazılım geliştirme hizmetleri sunan profesyonel ekip',
}

export default function LocaleLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}