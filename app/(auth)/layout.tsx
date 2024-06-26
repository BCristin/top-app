import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Layout auth',
	description: 'Invatam next14',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={notoSans.className}>
				<nav className="nav">
					<p>dsa</p>
				</nav>
				{children}
			</body>
		</html>
	);
}
