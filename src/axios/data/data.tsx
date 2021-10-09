import axiosInstance from '../axiosInstance';
import { toast } from 'react-toastify';

const MOVIE_LIST_ENDPOINT = '/Media/GetMediaList';
const MEDIA_PLAY_ENDPOINT = '/Media/GetMediaPlayInfo';

const BEARER = 'Bearer ';

const ERROR_MESSAGE = 'Something went wrong, try again later';

const getAuthHeader = (token: string) => {
  return {
    headers: {
      Authorization: `${BEARER}${token}`,
    },
  };
};

export const getMovieList = (token: string, MediaListId: number) => {
  const body = {
    MediaListId,
    IncludeCategories: false,
    IncludeImages: true,
    IncludeMedia: false,
    PageNumber: 1,
    PageSize: 15,
  };

  return axiosInstance
    .post(MOVIE_LIST_ENDPOINT, body, getAuthHeader(token))
    .then((response: any) => response.data.Entities)
    .catch(() => {
      toast.error(ERROR_MESSAGE);
    });
};

export const getMediaPlayInfo = (token: string, MediaId: number) => {
  const body = {
    MediaId,
    StreamType: 'Trial',
  };
  return axiosInstance
    .post(MEDIA_PLAY_ENDPOINT, body, getAuthHeader(token))
    .then((response: any) => console.log(response.data));
};
