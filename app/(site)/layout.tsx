import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Layout',
	description: 'Invatam next14',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={(notoSans.className, 'red')}>
				<nav className="nav">
					<ul>
						<li>curs</li>
						<li>pt copii</li>
						<li>test</li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
