import Button from '../Button/Button';

interface IPageSelector {
  onPrevPageClick: () => void;
  onNextPageClick: () => void;
  page: number;
}

const NEXT_PAGE_LABEL = 'Next page';
const PREV_PAGE_LABEL = 'Prev page';

const PageSelector = ({
  onPrevPageClick,
  onNextPageClick,
  page,
}: IPageSelector) => {
  return (
    <div className="page-selector">
      {page < 3 ? null : (
        <Button label={PREV_PAGE_LABEL} onClick={onPrevPageClick} />
      )}
      {page > 6 ? null : (
        <Button
          label={NEXT_PAGE_LABEL}
          onClick={onNextPageClick}
          className="page-selector--next"
        />
      )}
    </div>
  );
};

export default PageSelector;
