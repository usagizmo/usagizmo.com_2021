import { ReactNode, VFC } from 'react'
import Head from 'next/head'
import CONST from '../constants/const'

interface Props {
  children: ReactNode
  pageTitle?: string
  description?: string
}

const Layout: VFC<Props> = ({ children, pageTitle, description = 'usagizmo - Web Engineer' }) => {
  const title = `${pageTitle ? pageTitle + ' | ' : ''}` + CONST.SITE_NAME
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://usagizmo.com/" />
        <meta property="og:image" content="https://usagizmo.com/images/ogp.png" />
        <meta property="og:site_name" content={CONST.SITE_NAME} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://usagizmo.com/images/ogp.png" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        <link rel="canonical" href="https://usagizmo.com/" />
      </Head>
      {children}
    </>
  )
}

export default Layout
