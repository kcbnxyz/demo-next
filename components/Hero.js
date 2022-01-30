import Image from "next/image";
import Link from "next/link";
import heroStyles from '../styles/Hero.module.css'


const Hero = ({ hero }) => {
  return (
      <>
        <Link href={`/heroes/${hero.id}`}>
            <a className={heroStyles.card}>
                <Image src={hero.img} width='150' height='84'/>
                <p>{hero.localized_name}</p>

            </a>
            
        </Link>
      </>
    
  );
};

export default Hero;
