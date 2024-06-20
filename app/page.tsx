import type { Metadata } from 'next';
import styles from './page.module.css';

import { Htag } from '@/components';
import { Button } from '@/components/Button/Button';
import { P } from '@/components/P/P';
import { Tag } from '@/components/Tag/Tag';
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
			<P size="s">lalalal small</P>
			<P>lalal</P>
			<P size="l">lalal large</P>
			<Tag size="s" color="ghost">
				small
			</Tag>
			<Tag size="m" color="ghost">
				medium
			</Tag>{' '}
			<Tag size="s" color="green">
				small
			</Tag>{' '}
			<Tag size="s" color="grey">
				small
			</Tag>{' '}
			<Tag size="m" color="primary">
				medium
			</Tag>{' '}
			<Tag size="s" color="primary">
				small
			</Tag>{' '}
			<Tag size="s" color="red">
				small
			</Tag>
		</main>
	);
}
