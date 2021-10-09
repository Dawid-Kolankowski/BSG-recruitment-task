import { useState } from 'react';
import Header from '../../components/Header/Header';
import PageSelector from '../../components/PageSelector/PageSelector';
import { toast } from 'react-toastify';
import MovieList from '../../components/MovieList/MovieList';

const LAST_PAGE_MESSAGE = 'You are on last page';
const FIRST_PAGE_MESSAGE = 'You are on first page';

const MoviePage = () => {
  const [page, setPage] = useState(2);

  const onNextPageClick = () => {
    if (page > 6) {
      toast(LAST_PAGE_MESSAGE);
      return;
    }
    setPage(page + 1);
  };

  const onPrevPageClick = () => {
    if (page < 3) {
      toast(FIRST_PAGE_MESSAGE);
      return;
    }
    setPage(page - 1);
  };

  return (
    <div className="movie-page">
      <Header />
      <PageSelector
        onNextPageClick={onNextPageClick}
        onPrevPageClick={onPrevPageClick}
      />
      <MovieList page={page} />
    </div>
  );
};

export default MoviePage;
