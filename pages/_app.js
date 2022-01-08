import '../styles/globals.css'
import buildClient from '../api/build-client'
import { appWithTranslation } from '../utils/i18n'

const AppComponent = ({ Component, pageProps, currentUser, footerData }) => {
  return (
    <Component currentUser={currentUser} {...pageProps} />
  )
}

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);
  }

  return {
    pageProps,
    ...data,
  }
}



export default appWithTranslation(AppComponent)