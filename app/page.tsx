import type { Metadata } from 'next';
import styles from './page.module.css';

import { Htag } from '@/components';
import { Button } from '@/components/Button/Button';
import { Noto_Sans } from 'next/font/google';
const notoSans900 = Noto_Sans({ subsets: ['latin'], weight: '900' });

export const metadata: Metadata = {
	title: 'page',
	description: 'Invatam next14',
};
export default function Home() {
	return (
		<main className={styles}>
			<Htag tag="h1">Курсы по Photoshop </Htag>
			<Button apperance="primary">Узнать подробнее</Button>
			<Button apperance="ghost" arrow="down">
				Узнать подробнее
			</Button>
			<Button apperance="ghost" arrow="right">
				Узнать подробнее
			</Button>
		</main>
	);
}
