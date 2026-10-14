import type { Metadata } from "next"
import { Manjari } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const manjari = Manjari({
	subsets: ["latin"],
	weight: ["100", "400", "700"],
	variable: "--next-font-manjari",
	display: "swap",
})

const realce = localFont({
	src: "../public/fonts/realce-black.otf",
	variable: "--next-font-realce",
	display: "swap",
})

export const metadata: Metadata = {
	title: "Hackathon Template",
	description: "Work Repo",
}

export default function RootLayout({ children, modal }: LayoutProps<"/">) {
	return (
		<html
			lang='en'
			className={`${manjari.variable} ${realce.variable} h-full antialiased`}
		>
			<body className='max-h-dvh h-dvh min-h-screen flex flex-col'>
				{children}
				{modal}
			</body>
		</html>
	)
}
