import React from 'react'
import Head from 'next/head'
import { Header, Footer } from '../index'

const Layout = ({children }) => {
    return (
        <div className='layout'>
            <Head>
                <title>Laraway - Makerting agency</title>
            </Head>
            <header>
                <Header />
            </header>
            <main className='main-container'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export const getServerSideProps = async () => {
    const footerQuery = '*[_type == "footer"]'
    const footer = await client.fetch(footerQuery)

    return {
        props: { footer }
    }
}

export default Layout