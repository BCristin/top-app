import { Noto_Sans } from 'next/font/google';
import styles from './About.module.css';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={(notoSans.className, styles.green)}>
			<p>About layout</p>
			{children}
		</div>
	);
}
