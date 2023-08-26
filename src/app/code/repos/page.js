import Link from 'next/link';
import React from 'react'

const fetchRepos = async () =>{
    const response =await fetch('https://api.github.com/users/akash130013/repos',{
      next:{
        revalidate:60
    }
    });

    // await new Promise((resolve) => setTimeout(resolve, 500));

      //waited for 1 sec
    
    return await response?.json();
}

const ReposPage = async () => {
   const repos = await fetchRepos();
  return (
    <div className='repo-container'>
          {repos?.length>0 && repos?.map((repo, index) => {
            return <div className='card repo-item' key={index}>
                 <Link href={`/code/repos/${repo.name}`}>
                     <h3>{repo.name}</h3>
                     <p>{repo.description}</p>
                 </Link> 
            </div>
          })}
       </div>
  )
}

export default ReposPage