import { getLayoutMessages } from "@/lib/i18n/getLayoutMessages";
import { Locale } from "@/lib/i18n/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sora, Zen_Kaku_Gothic_New } from "next/font/google";
import "../globals.css";
import { LayoutMessages } from "@/types/i18n";

const sora = Sora({ variable: "--font-heading", subsets: ["latin"] });
const zenKaku = Zen_Kaku_Gothic_New({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const layoutMessages = (await getLayoutMessages(locale)) as LayoutMessages;

    return (
        <html lang={locale}>
        <body className={`${sora.variable} ${zenKaku.variable} antialiased mt-17 md:mt-18`}>
        <Header navItems={layoutMessages.navItems} locale={locale} />
        {children}
        <Footer
            navItems={layoutMessages.navItems}
            footer={layoutMessages.footer}
            footerLinks={layoutMessages.footerLinks}
            locale={locale}
        />
        </body>
        </html>
    );
}
