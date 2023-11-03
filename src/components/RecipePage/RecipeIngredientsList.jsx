import { useGetIngredientsListQuery } from '../../redux/filtersSlice/filtersSlice';

export const RecipeIngredientList = ({ ingredients }) => {
  const { data } = useGetIngredientsListQuery();

  if (!data) return;
  if (!ingredients) return;

  if (data.length < 1 && ingredients.length < 1) return;

  const filteredIngr = data.filter(dataObj => {
    return ingredients.some(
      ingredientsObj => dataObj._id === ingredientsObj.ingredientId
    );
  });

  const newArr = Object.values(
    ingredients.reduce((acc, { ingredientId: id, ...n }) => {
      Object.entries(n).forEach(
        ([k, v]) => (acc[id][k] = (acc[id][k] || 0) + v)
      );
      return acc;
    }, Object.fromEntries(filteredIngr.map(n => [n._id, { ...n }])))
  );

  return (
    <>
      {newArr.length > 0 && (
        <ul>
          {newArr.map(item => {
            return (
              <li key={item._id}>
                <img src={item.ingredientThumb} alt="" />
                <p>{item.title}</p>
                <p>{item.measure}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
