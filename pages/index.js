import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>KKB Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to The KKB Website!" />
        <p className="description">
          This is the KKB website.
        </p>
      </main>

      <Footer />
    </div>
  )
}
