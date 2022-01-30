import { useState } from 'react'
import { useQuery } from 'react-query'
import Heroes from '../components/Heroes'
import Meta from '../components/Meta'
import Search from '../components/Search'


const getHeroes = async (q) => {
  const res = await fetch(`/api/search?q=${q}`)
  const data = await res.json()
  return data
}

export default function Home() {
  const [query, setQuery] = useState('')
  
  const {data} = useQuery(['q', query], () => getHeroes(query))
 
  return (
    <div>
      <Meta title='Dota 2 Heroes' />
      <Search setQuery={setQuery} query={query}/>
      {data && <Heroes heroes={data}/>}
      
    </div>
  )
}
