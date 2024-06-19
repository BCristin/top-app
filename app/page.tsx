import type { Metadata } from 'next';
import styles from './page.module.css';

import { Noto_Sans } from 'next/font/google';
const notoSans900 = Noto_Sans({ subsets: ['latin'], weight: '900' });
const notoSans800 = Noto_Sans({ subsets: ['latin'], weight: '800' });
const notoSans700 = Noto_Sans({ subsets: ['latin'], weight: '700' });
const notoSans600 = Noto_Sans({ subsets: ['latin'], weight: '600' });
const notoSans500 = Noto_Sans({ subsets: ['latin'], weight: '500' });
const notoSans400 = Noto_Sans({ subsets: ['latin'], weight: '400' });
const notoSans300 = Noto_Sans({ subsets: ['latin'], weight: '300' });
const notoSans200 = Noto_Sans({ subsets: ['latin'], weight: '200' });
const notoSans100 = Noto_Sans({ subsets: ['latin'], weight: '100' });

export const metadata: Metadata = {
	title: 'page',
	description: 'Invatam next14',
};
export default function Home() {
	return (
		<main className={styles.main}>
			<div className={notoSans900.className}>salut</div>
			<div className={notoSans800.className}>salut</div>
			<div className={notoSans700.className}>salut</div>
			<div className={notoSans600.className}>salut</div>
			<div className={notoSans500.className}>salut</div>
			<div className={notoSans400.className}>salut</div>
			<div className={notoSans300.className}>salut</div>
			<div className={notoSans200.className}>salut</div>
			<div className={notoSans100.className}>salut</div>
		</main>
	);
}
