'use client';
import cn from 'classnames';
import { KeyboardEvent, useEffect, useState } from 'react';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';

export const Rating = ({
	isEditable = false,
	rating,
	setRating,
	...props
}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>)); //creaza un array cu 5 elemente tip <div></>

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((_, i) => {
			return (
				<StarIcon
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable,
					})}
					onClick={() => onClick(i + 1)}
					tabIndex={isEditable ? 0 : 1}
					onKeyDown={(e: KeyboardEvent<SVGElement>) => {
						isEditable && handleSpace(i + 1, e);
					}}
				/>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};
	return (
		<div {...props}>
			{ratingArray.map((r, i) => {
				return (
					<span
						key={i}
						onMouseEnter={() => changeDisplay(i + 1)}
						onMouseLeave={() => changeDisplay(rating)}>
						{r}
					</span>
				);
			})}
		</div>
	);
};
