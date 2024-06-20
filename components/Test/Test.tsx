'use client';

import cn from 'classnames';
import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './Test.module.css';
import { TestProps } from './Test.props';

export const Test = ({ children }: TestProps): JSX.Element => {
	const [myState, setMyState] = useState<number>(0);
	return (
		<div className={cn(styles)}>
			<Button apperance="primary" onClick={() => setMyState(myState + 1)}>
				{children}
			</Button>
			{myState}
		</div>
	);
};
