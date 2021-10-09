import { useState, useEffect } from 'react';
import { IAuthProvider } from '../../context/types';
import withAuth from '../../HOC/withAuth';
import { getMovieList } from '../../axios/data/data';
import Spinner from '../Spinner/Spinner';
import Card from '../Card/Card';

interface IMovieList extends IAuthProvider {
  page: number;
}

const IMAGE_TYPE = 'FRAME';

const MovieList = ({ token, page }: IMovieList) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const data = await getMovieList(token, page);
    if (data) {
      setMovieList(data);
    }
    setIsLoading(false);
  };

  const getImage = (Images: [any]) => {
    const image = Images.filter((image) => image.ImageTypeCode === IMAGE_TYPE);
    console.log(image);
    return image[0]?.Url;
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [page]);

  const renderCards = () => {
    console.log(movieList);
    return movieList.map((movie) => {
      const { Title, Id, Images } = movie;

      const imageUrl = getImage(Images);
      return <Card key={Id} id={Id} imageUrl={imageUrl} title={Title} />;
    });
  };

  return (
    <div className="movie-list">{isLoading ? <Spinner /> : renderCards()}</div>
  );
};

export default withAuth(MovieList);
