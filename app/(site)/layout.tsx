import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import React from 'react';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import Sidebar from './componets/Sidebar/Sidebar';
import './globals.css';
import styles from './layout.module.css';
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
			<body className={(notoSans.className, styles.wrapper)}>
				<Header className={styles.header}></Header>
				<Sidebar className={styles.sidebar}></Sidebar>
				{children}
				<Footer className={styles.footer}></Footer>
			</body>
		</html>
	);
}
