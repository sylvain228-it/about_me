import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://about-me.com'

type SEOProps = {
  title: string
  description: string
  path?: string
}

export function SEO({ title, description, path = '' }: SEOProps) {
  const fullTitle = title.includes('ANANI') ? title : `${title} | ANANI Kokouvi Yovo`
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
