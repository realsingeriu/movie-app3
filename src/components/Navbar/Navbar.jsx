import Fire from '../../assets/fire.png';
import Star from '../../assets/glowing-star.png';
import Party from '../../assets/partying-face.png';
import './Navbar.css';
import DarkMode from '../DarkMode/DarkMode';
import SearchBox from '../MovieList/SearchBox';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
	const [searchValue, setSearchValue] = useState('');
	const [movies, setMovies] = useState([]);

	const getMovieRequest = async (searchValue) => {

		const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_MOVIE_API}&query=${searchValue}&language=ko`;

		
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    
  };

	useEffect(() => {
    if (searchValue.length > 3) {
      getMovieRequest(searchValue);
    }
  }, [searchValue]);


	return (
		<nav className='navbar'>
			<h1>MovieApp</h1>

			<div className='navbar_links'>
				<DarkMode />
				<NavLink to='/'>
					인기작품
					<img className='navbar_emoji' src={Fire} alt='fire emoji' />
				</NavLink>
				<NavLink to='/top_rated'>
					최고평점
					<img className='navbar_emoji' src={Star} alt='star emoji' />
				</NavLink>
				<NavLink to='/upcoming'>
					예정작품
					<img className='navbar_emoji' src={Party} alt='party emoji' />
				</NavLink>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />		
			</div>
		</nav>
	);
}