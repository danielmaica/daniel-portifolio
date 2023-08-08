import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'
import Head from 'next/head'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Daniel Maicá Portifolio',
  description: 'Portifolio de projetos do Desenvolvedor Full Stack Daniel Maicá.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta charSet='utf-8' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./favicon" type="image/x-icon" />
        <title>Daniel Maicá</title>
      </Head>
      <body className='flex flex-col items-center justify-center box-border font-sans bg-zinc-700 text-white'>
        <div className='w-full'>
          <Header />
        </div>
        <main className='container m-2 p-2 border-2 rounded-md bg-zinc-800'>
          {children}
        </main>
        <Footer />
      </body>
    </html >
  )
}
