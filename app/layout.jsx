import '../src/index.css'

export const metadata = {
  title: 'Portfolio',
  description: 'A creative developer portfolio.',
}

export const viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
