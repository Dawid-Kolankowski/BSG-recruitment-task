import { useMemo, useState } from 'react';
import PlayerModal from '../PlayerModal/PlayerModal';

interface ICard {
  title: string;
  imageUrl: string;
  id: number;
}

const Card = ({ title, imageUrl, id }: ICard) => {
  const [showModal, setShowModal] = useState(false);
  const renderImage = useMemo(() => {
    if (imageUrl) {
      return (
        <img className="card__img" src={imageUrl} alt={`${title} cover`} />
      );
    }

    return (
      <img
        className="card__img"
        src="https://via.placeholder.com/280x170"
        alt={'{laceholder'}
      />
    );
  }, [title, imageUrl]);

  const switchModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div aria-hidden="true" className="card" onClick={() => switchModal()}>
        {renderImage}
        <h2 className="card__title">{title}</h2>
      </div>
      {showModal ? (
        <PlayerModal switchModal={switchModal} title={title} id={id} />
      ) : null}
    </>
  );
};

export default Card;
