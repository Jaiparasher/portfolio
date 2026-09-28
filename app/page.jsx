'use client'

import dynamic from 'next/dynamic'

const PortfolioApp = dynamic(() => import('../src/App'), {
  ssr: false,
  loading: () => <main className="min-h-screen bg-[#0a0a0a]" />,
})

export default function Page() {
  return <PortfolioApp />
}
