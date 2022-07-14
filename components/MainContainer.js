import Head from 'next/head'
import NavBar from './NavBar'

const MainContainer = ({children, keywords, title}) => {
  return (
    <div>
        <Head>
            <meta keywords = {"test, nextjs " + keywords}></meta>
            <title>{title}</title>
        </Head>

        <NavBar/>

        <div>
            {children}
        </div>
    </div>
  )
}

export default MainContainer