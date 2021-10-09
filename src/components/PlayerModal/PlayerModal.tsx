import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import ReactPlayer from 'react-player';
import withAuth from '../../HOC/withAuth';
import { IAuthProvider } from '../../context/types';
import { getMediaPlayInfo } from '../../axios/data/data';
import { toast } from 'react-toastify';

interface IPlayerModal extends IAuthProvider {
  switchModal: () => void;
  title: string;
  id: number;
}

const CLOSE_MODAL_LABEL = 'Close';
const PLAYER_ERROR_MESSAGE = 'Something went wrong, try again later';

const PlayerModal = ({ switchModal, title, token, id }: IPlayerModal) => {
  const [url, setUrl] = useState('');

  const getData = async () => {
    const url = await getMediaPlayInfo(token, id);
    console.log(url);
    if (url) {
      setUrl(url);
    } else {
      toast(PLAYER_ERROR_MESSAGE);
      switchModal();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onPlayerError = () => {
    toast(PLAYER_ERROR_MESSAGE);
    switchModal();
  };

  const renderModal = (
    <div className="modal" id="modal">
      <h2>{title}</h2>
      <div className="modal__content">
        <ReactPlayer
          controls={true}
          width="100%"
          height="100%"
          url={url}
          onError={() => onPlayerError()}
        />
      </div>
      <div className="modal__actions">
        <Button label={CLOSE_MODAL_LABEL} onClick={switchModal} />
      </div>
    </div>
  );

  const renderSpinner = (
    <div className="modal__spinner">
      <Spinner />
    </div>
  );

  return (
    <>
      <div className="modal__overlay"></div>
      {url ? renderModal : renderSpinner}
    </>
  );
};

export default withAuth(PlayerModal);
