import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { LanguageProvider } from './context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YZ UZMAN - Web Tasarım ve Geliştirme Ekibi',
  description: 'Web tasarım, mobil uygulama ve yazılım geliştirme hizmetleri sunan profesyonel ekip',
}

export default function RootLayout({ children }) {
  // Not: Bu kısım tam olarak çalışmaz, çünkü layout.js server component, LanguageContext ise client component.
  // Gerçek dil değişikliği için bir middleware eklemek daha uygun olacaktır.
  // Şimdilik lang="tr" olarak bırakıyoruz.
  return (
    <html lang="tr">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}