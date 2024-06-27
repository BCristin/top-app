'use client';

import { Noto_Sans } from 'next/font/google';

import { getMenu } from '@/api/menu';
import { AppContextProvider } from '@/context/app.context';
import { TopLevelCategory } from '@/interfaces/page.interface';
import React from 'react';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import Sidebar from './componets/Sidebar/Sidebar';
import './globals.css';
import styles from './layout.module.css';
const notoSans = Noto_Sans({ subsets: ['latin'] });

// export const metadata: Metadata = {
// 	title: 'Layout site',
// 	description: 'Invatam next14',
// };

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const firstCategory = TopLevelCategory.Courses;
	const menu = await getMenu(firstCategory);

	return (
		<html lang="ru">
			<AppContextProvider menu={menu} firstCategory={firstCategory}>
				<body className={(notoSans.className, styles.wrapper)}>
					<Header className={styles.header}></Header>
					<Sidebar className={styles.sidebar}></Sidebar>
					<main className={styles.main}>{children}</main>

					<Footer className={styles.footer}></Footer>
				</body>
			</AppContextProvider>
		</html>
	);
}
