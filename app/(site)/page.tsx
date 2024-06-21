'use client';

import { Button, Htag, P, Rating, Tag } from '@/components';
import { Test } from '@/components/Test/Test';
import { Noto_Sans } from 'next/font/google';
import { useState } from 'react';
import styles from './page.module.css';
const notoSans900 = Noto_Sans({ subsets: ['latin'], weight: '900' });

export default function Home() {
	const [rating, setRating] = useState<number>(4);
	return (
		<main className={styles.test}>
			<div className={styles.div}>
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
				</Tag>
				<Tag size="s" color="green">
					small
				</Tag>
				<Tag size="s" color="grey">
					small
				</Tag>
				<Tag size="m" color="primary">
					medium
				</Tag>
				<Tag size="s" color="primary">
					small
				</Tag>
				<Tag size="s" color="red">
					small
				</Tag>
				<Test>as</Test>
				<Rating rating={rating} isEditable setRating={setRating}></Rating>
			</div>
		</main>
	);
}
