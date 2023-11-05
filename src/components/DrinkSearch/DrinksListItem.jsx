export const DrinksListItem = ({ pictureURL, title, _id }) => {
  return (
    <>
      <li key={_id}>
        <div>
          <img src={pictureURL} alt={`${title} cocktail`} />
        </div>
        <div>
          <span>{title}</span>
        </div>
      </li>
    </>
  );
};
