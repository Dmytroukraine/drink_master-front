import { Button } from 'components/Button';
import s from './AddYourCocktail.module.css';
import pictureTest from '../../images/blue_iced_tea_large@1x.png';

export const AddYourCocktail = () => {
  return (
    <section className={s.addYourCocktail}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.box}>
            <h1 className={s.heroTitle}>
              Craft Your Perfect Drink with Drink Master
            </h1>
            <p className={s.description}>
              Unlock your inner mixologist with Drink Master, your one-stop
              destination for exploring, crafting, and mastering the world's
              finest beverages.
            </p>
            <Button text="Add drink" buttonClass="addButton" />
          </div>

          <div className={s.thumb}>
            <img src={pictureTest} alt="blue iced tea large" />
          </div>
        </div>
      </div>
    </section>
  );
};
