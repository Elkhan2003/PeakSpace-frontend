import { useGetRatingQuery } from '../../../redux/api/rating';
import scss from './RatingUsers.module.scss';

const RatingUsers = () => {
	const { data } = useGetRatingQuery();
	console.log(data);

	return (
		<>
			<section className={scss.RatingUsers}>
				<div className="container">
					<div className={scss.content}>RatingUsers</div>
				</div>
			</section>
		</>
	);
};
export default RatingUsers;
