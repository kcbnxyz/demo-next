import Hero from "./Hero";
import heroStyles from '../styles/Hero.module.css'

const Heroes = ({ heroes }) => {
  return (
      <div className={heroStyles.grid}>
        {heroes.map(hero => <Hero key={hero.id} hero={hero}/>)}
      </div>
  );
};

export default Heroes;
