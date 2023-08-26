import React, { Suspense } from 'react'
import Repo from '@/app/components/Repo'
import RepoDir from '@/app/components/RepoDir'

const RepoName = ({params:{name}}) => {
  return (
    <div>
      <Suspense fallback={<div>Repo Loading...</div>} >
        <h2>Repository</h2>
        <Repo name= {name} />
      </Suspense>
      <Suspense fallback={<div>Repo dir Loading...</div>} >
         <h2>Direcotories</h2>
         <RepoDir name={name} />
      </Suspense>
    </div>
  )
}

export default RepoName