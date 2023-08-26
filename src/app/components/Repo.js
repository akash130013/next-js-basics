import React from 'react'

const fetchRepo =async (name) =>{
     const response = await fetch(`https://api.github.com/repos/akash130013/${name}`,{
        next:{
            revalidate:60
        }
     });
     return await response.json();
}
const Repo = async ({name}) => {
    const repo = await fetchRepo(name);
  return (
    <div className='card'>
        <h4>{repo?.name}</h4>
        <p>{repo?.description}</p>
        <div className='details'>
            <li>Watheres Count: {repo?.watchers_count}</li>
            <li>Forks Count: {repo?.forks_count}</li>
            <li>visibility: {repo?.visibility}</li>
        </div>
    </div>
  )
}

export default Repo