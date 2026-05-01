import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
});

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
});

const spaceMono = Space_Mono({
    variable: "--font-space-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: {
        default: "FaceStore — Editorial Commerce by Facebrasil",
        template: "%s — FaceStore",
    },
    description: "A plataforma de editorial commerce que conecta 16 anos de autoridade da Facebrasil às melhores marcas e produtos do mercado.",
    keywords: ["editorial commerce", "facebrasil", "reviews", "produtos", "recomendação", "parceiros verificados"],
    openGraph: {
        type: "website",
        locale: "pt_BR",
        siteName: "FaceStore",
        title: "FaceStore — Editorial Commerce by Facebrasil",
        description: "Produtos selecionados pela Facebrasil com reviews verificadas e links de compra seguros.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body
                className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable} antialiased font-sans`}
            >
                {children}
            </body>
        </html>
    );
}
