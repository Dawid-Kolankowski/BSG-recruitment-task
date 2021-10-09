import { useEffect } from 'react';
import ReactModal from 'react-modal';
import Button from '../Button/Button';
import ReactPlayer from 'react-player';
import withAuth from '../../HOC/withAuth';
import { IAuthProvider } from '../../context/types';
import { getMediaPlayInfo } from '../../axios/data/data';

interface IPlayerModal extends IAuthProvider {
  showModal: boolean;
  switchModal: () => void;
  title: string;
  id: number;
}

const CLOSE_MODAL_LABEL = 'Close';

const PlayerModal = ({
  showModal,
  switchModal,
  title,
  token,
  id,
}: IPlayerModal) => {
  useEffect(() => {
    getMediaPlayInfo(token, id);
  }, [id]);

  return (
    <ReactModal isOpen={showModal} contentLabel={title}>
      <Button label={CLOSE_MODAL_LABEL} onClick={switchModal} />
    </ReactModal>
  );
};

export default withAuth(PlayerModal);
