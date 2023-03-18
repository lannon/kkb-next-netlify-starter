import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ravenously Recovered Eating Disorder Recovery Coaching with Katie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to The Ravenously Recovered" />
        <p className="description">
        Hello Everyone! I’m Katie and I am incredibly excited that you’re here! I am a certified eating disorder and Body Image coach through RLC university and participate in ongoing supervision.  I started Ravenously Recovered with a mission to meet you wherever you are on your journey and help you kick your ED’s a**!  Together we will navigate healing your relationship with food and your body. Recovery is not a linear process and everyone’s path is truly unique. I use my personal and professional experience to provide a compassionate, yet kick a** approach to support you along the way. As your coach we will focus on the “How’s” of recovery in your daily life and challenge disordered thinking and behaviors.
        </p>
      </main>

      <Footer />
    </div>
  )
}
