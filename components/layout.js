import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Akshat Singhal'
export const siteTitle = 'Osano + Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script src="https://cmp.osano.com/16COqgTbuKRHb45MG/0500889f-7a62-4ff7-8696-728f8d8372ea/osano.js"></script>
        <script>
          (function temp (w, d, s, l, i) {w[l] = w[l] || [];w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });let f = d.getElementsByTagName(s)[0],j = d.createElement(s),dl = l != "dataLayer" ? "&l=" + l : "";j.async = true;j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;f.parentNode.insertBefore(j, f);})(window,document,'script','dataLayer','GTM-P7F3423');
        </script>
      </Head>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P7F3423"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
