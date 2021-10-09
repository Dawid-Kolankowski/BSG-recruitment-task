import { useState } from 'react';
import Header from '../../components/Header/Header';
import PageSelector from '../../components/PageSelector/PageSelector';
import { toast } from 'react-toastify';
import MovieList from '../../components/MovieList/MovieList';

const LAST_PAGE_MESSAGE = 'You are on last page';
const FIRST_PAGE_MESSAGE = 'You are on first page';

const MoviePage = () => {
  const [page, setPage] = useState(2);

  const onPageButtonlick = (changeValue: number) => {
    setPage(page + changeValue);
  };

  return (
    <div className="movie-page">
      <Header />
      <PageSelector
        onNextPageClick={() => onPageButtonlick(1)}
        onPrevPageClick={() => onPageButtonlick(-1)}
        page={page}
      />
      <MovieList page={page} />
    </div>
  );
};

export default MoviePage;
