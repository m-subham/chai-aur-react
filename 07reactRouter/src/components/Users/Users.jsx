
import { useParams } from 'react-router-dom'

function Users() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 text-center'>User :{userid} </div>
  )
}

export default Users