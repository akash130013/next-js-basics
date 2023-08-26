import React from 'react'

const fetchRepoDir =async (name) =>{
     const response = await fetch(`https://api.github.com/repos/akash130013/${name}/contents`,{
        next:{
            revalidate:60
        }
     });
     return await response.json();
}
const RepoDir = async ({name}) => {

    const repoDir = await fetchRepoDir(name);
   
  return (
    <div className='card'>
        {repoDir.length>0 && repoDir?.map((dir) =>{
            return <li key={dir.path}>{dir.name}</li>
        })}
    </div>
  )
}

export default RepoDir