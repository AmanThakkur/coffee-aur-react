import React, { useEffect } from 'react'

function Github() {
 
  useEffect (() => {
    fetch('https://api.github.com/users/AmanThakkur')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setData(data)
        
    })
  }, [])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers</div>
  )
}

export default Github