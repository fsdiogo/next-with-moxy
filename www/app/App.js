import React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import KeyboardOnlyOutlines from '@moxy/react-keyboard-only-outlines';
import { withNextIntlSetup } from '@moxy/next-intl';
import { PageTransition } from 'next-page-transitions';
import nextIntlConfig from '../../intl';
import registerGoogleTracking from './ga-tracking';
import favicon from '../shared/media/favicons/favicon.ico';
// Data
import SEO_DATA from './App.data.js';
// Components
import PageLoader from '../shared/components/page-loader';
// Styles
import '../shared/styles/index.css';
import './App.css';

export class App extends NextApp {
    componentDidMount() {
        this.unregisterGoogleTracking = registerGoogleTracking(this.props.router);
    }

    componentWillUnmount() {
        this.unregisterGoogleTracking();
    }

    render() {
        const { Component, pageProps, router } = this.props;

        return (
            <>
                <Head>
                    <title>{ SEO_DATA.title }</title>
                    <meta name="description" content={ SEO_DATA.description } />
                    <meta name="keywords" content={ SEO_DATA.keywords.join(' ') } />
                    <link rel="shortcut icon" type="image/x-icon" href={ favicon } />
                    {/* Facebook & search engines */}
                    <meta property="og:url" content={ SEO_DATA.url } />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={ SEO_DATA.title } />
                    <meta property="og:description" content={ SEO_DATA.description } />
                    <meta property="og:site_name" content={ SEO_DATA.title } />
                    <meta property="og:image" content={ SEO_DATA.image.src } />
                    <meta property="og:image:width" content={ SEO_DATA.image.width } />
                    <meta property="og:image:height" content={ SEO_DATA.image.height } />
                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content={ SEO_DATA.url } />
                    <meta property="twitter:title" content={ SEO_DATA.title } />
                    <meta property="twitter:description" content={ SEO_DATA.description } />
                    <meta property="twitter:image" content={ SEO_DATA.image.src } />
                </Head>
                <KeyboardOnlyOutlines>
                    <PageTransition
                        timeout={ 300 }
                        classNames="page-transition"
                        loadingTimeout={ 0 }
                        loadingDelay={ 800 }
                        loadingComponent={ <PageLoader /> }>
                        <Component { ...pageProps } key={ router.route } />
                    </PageTransition>
                </KeyboardOnlyOutlines>
            </>
        );
    }
}

export default withNextIntlSetup(nextIntlConfig)(App);
