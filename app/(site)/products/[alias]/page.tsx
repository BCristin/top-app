// import cn from 'classnames';
// import styles from './page.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pagina',
};

export default function PageProduct({ params }: { params: { alias: string } }): JSX.Element {
	return <div>PageProduct {params.alias}</div>;
}
