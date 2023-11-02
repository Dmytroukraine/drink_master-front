// import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
// import { useState } from 'react';

import css from './recipePage.module.css';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { Button } from 'components/Button';

export const RecipePageHero = ({ data }) => {
  return (
    <>
      <div>
        <PageTitle className={css.pageTitle} title={data.drink} />
        <p className={css.subTitle}>
          {data.glass} / {data.alcoholic}
        </p>
        <p>{data.description}</p>
        <Button className={css.btnAddToFav} text="Add to favorite drinks" />
      </div>
      <div>
        <img src={data.drinkThumb} alt={data.IBA} width="400" height="400" />
      </div>
    </>
  );
};
