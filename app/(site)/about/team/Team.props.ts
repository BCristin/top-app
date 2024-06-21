import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TeamProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}
