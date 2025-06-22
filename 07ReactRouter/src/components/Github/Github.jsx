import React, { useEffect , useState} from "react";
function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/asthashukla1')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setData(data)
        })
    }, [])
    return (
        <div className="bg-gray-700 text-white text-3xl p-4">Github followers:{data.followers}
        <img src ={data.avatar_url} alt="Git picture" width={300}></img>
        
         </div>
    )
}

export default Github