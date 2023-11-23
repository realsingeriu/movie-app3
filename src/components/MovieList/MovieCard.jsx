import React from 'react';
import './MovieCard.css';
import Star from '../../assets/star.png';

export default function MovieCard({movie}) {
	return (
		<a href={`https://www.themoviedb.org/movie/${movie.id}?language=ko`} className='movie_card' target='_blank' rel='noopener noreferrer'>
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt='movie poster'
				className='movie_poster'
			/>

      <div className='movie_details'>
				<h3 className='movie_details_heading'>{movie.title}</h3>
				<div className='align_center movie_date_rate'>
					<p>{movie.release_date}</p>
					<p className='align_center'>
						{movie.vote_average}
						<img src={Star} alt='rating icon' className='card_emoji' />
					</p>
				</div>
				<p className='movie_description'>
          {movie.overview.slice(0, 200) + '...'}</p>
			</div>
		</a>
	);
};