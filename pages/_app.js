import '@/styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react'
import Background from '@/components/Background/background'

export default function App({ Component, pageProps }) {
  const domain = process.env.AUTH0_ISSUER_BASE_URL
  const clientId = process.env.AUTH0_CLIENT_ID
  const redirectUri = process.env.AUTH0_REDIRECT_URI
  return (
    <Auth0Provider
      domain="dev-38se6zvu8y7kxej4.jp.auth0.com"
      clientId="MyLt1jOYrS3QiiZNpyF1kNXpNwuRlH9I"
      authorizationParams={{
        redirect_uri: "https://vercel.com/nosscafe66/tarotwayomikuji/main"
      }}
    ><Background />
      <Component {...pageProps} />
    </Auth0Provider>
  )
}