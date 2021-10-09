import Button from '../Button/Button';

interface IPageSelector {
  onPrevPageClick: () => void;
  onNextPageClick: () => void;
}

const NEXT_PAGE_LABEL = 'Next page';
const PREV_PAGE_LABEL = 'Prev page';

const PageSelector = ({ onPrevPageClick, onNextPageClick }: IPageSelector) => {
  return (
    <div className="page-selector">
      <Button label={PREV_PAGE_LABEL} onClick={onPrevPageClick} />
      <Button label={NEXT_PAGE_LABEL} onClick={onNextPageClick} />
    </div>
  );
};

export default PageSelector;
