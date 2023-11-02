import { useEffect, useState } from 'react';
import { getAllIgredients } from 'services/drinksAPI';

export const RecipeIngredientList = ({ data }) => {
  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <>
      <div></div>
    </>
  );
};

// {
//   data.length > 0 && (
//     <ul>
//       {data.map(item => {
//         return (
//           <li key={item.ingredientId}>
//             {/* <img src="" alt="" /> */}
//             {item.measure} / {item.title}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
