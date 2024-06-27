import { getPage } from '@/api/page';
import cn from 'classnames';
import { notFound } from 'next/navigation';
import styles from './PageCourses.module.css';

export default async function PageCourses({ params }: { params: { alias: string } }) {
	const page = await getPage(params.alias);
	if (!page) {
		notFound();
	}

	return <div className={cn(styles)}>PageProduct {params.alias}</div>;
}
