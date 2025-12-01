import Card from './Card'
import Container from '../Shared/Container'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import LoadingSpinner from '../Shared/LoadingSpinner'

const Plants = () => {
  const {data: plants = [], isLoading} = useQuery({
    queryKey: ['plants'],
    queryFn: async()=> {
      const result = await axios(`${import.meta.env.VITE_API_URL}/plants`)
      return result.data
    },
  })
  // console.log(data)

  if(isLoading) return <LoadingSpinner></LoadingSpinner>
  return (
    <Container>
      {
        plants && plants.length>0 ? (
          <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {
          plants.map(plant =>(
            <Card key={plant._id} plant={plant} />
          ))
        }
        
      </div>
        ): null
      }
    </Container>
  )
}

export default Plants

// import Card from './Card'
// import Container from '../Shared/Container'
// import { useQuery } from '@tanstack/react-query'
// import axios from 'axios'

// const Plants = () => {

//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ['plants'],
//     queryFn: async () => {
//       const res = await axios.get(`${import.meta.env.VITE_API_URL}/plants`)
//       return res.data
//     }
//   })

//   console.log("Plants data:", data)

//   if (isLoading) return <p>Loading...</p>
//   if (isError) return <p>Error: {error.message}</p>

//   return (
//     <Container>
//       <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
//         <Card />
//       </div>
//     </Container>
//   )
// }

// export default Plants
