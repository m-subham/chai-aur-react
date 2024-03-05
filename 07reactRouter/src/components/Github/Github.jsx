import { useEffect, useState } from "react"

function Github() {
    const [data , setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/m-subham')
        .then(Response => Response.json())
        .then (data => {
            console.log(data);
            setData(data)
        })
    }, [data])
    
  return (
    <div className="text-center m-4 bg-slate-800 text-white p-4 text-3xl">Github followers :{data.followers} <img src= {data.avatar_url} alt="Git Picture" width={200} /> </div>
  )
}

export default Github
