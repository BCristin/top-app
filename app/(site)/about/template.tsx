import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export default function AboutTemplate({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={notoSans.className}>
			<p>About Template</p>
			{children}
		</div>
	);
}
