import Head from "next/head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/icon.png" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
            </Head>
            {children}
        </>
    )
}
