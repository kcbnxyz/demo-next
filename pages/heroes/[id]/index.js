import Image from "next/image"
import Meta from "../../../components/Meta"
import heroes from '../../../heroes.json'

const getHeroes = async (id) => {
    const res = await fetch(`http://localhost:3000/api/heroes?id=${id}}`)
    const data = await res.json()
    return data
}

// export const getServerSideProps = async (context) => {
//     const data = await getHeroes(context.params.id)
//     return {
//         props: {
//             data
//         }
//     }
// }

export const getStaticProps = async (context) => {
    
    return {
        props: {
            data: heroes.filter(hero => hero.id === parseInt(context.params.id))[0]
        }
    }
}

export const getStaticPaths = async() => {
    return {
        paths: heroes.map(hero => ({params: {id: hero.id.toString()}})),
        fallback: false
    }
}




const index = ({data}) => {
  return (
      <>
        <Meta title={data.localized_name}/>
        {data && (
            <div>
                <Image src={data.img} width='150' height='84'/>
                <p>Name: {data.localized_name}</p>
                <p>Health: {data.base_health}</p>
                <p>Type: {data.attack_type}</p>
                <p>Roles: {data.roles.join(', ')}</p>

            </div>
        )}
        
      </>
  );
};

export default index;
