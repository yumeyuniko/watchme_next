import axios from 'axios';
import Hero from '../components/Hero';
import PopularMovie from '../components/PopularMovie';
import { server } from '../config';

export default function Home({ movies }) {
  console.log(movies);
  return (
    <div className="bg-gray-700">
      <Hero />
      <PopularMovie movies={movies.results} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=ja-JP&page=1`
  );
  const movies = res.data;
  return {
    props: { movies },
  };
}

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=ja&page=1
