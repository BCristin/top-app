import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface NewsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}
