/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'

function Card({username ="GT" , post="Not Assigned yet"}) {
     //console.log(props);
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img className="w-24 h-24 rounded-full mx-au" src="https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg" width="384" height="512" />
      <div className="pt-6 space-y-4">
         <blockquote>
            <p className="text-lg">
               “Tailwind CSS is the only framework that i have seen scale
                on large teams. Its easy to customize, adapts to any design,
                and the build size is tiny.”
             </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
         <div className="text-slate-700 dark:text-slate-500">
           {post}
         </div>
        </figcaption>
       </div>
       </figure>
       
    </div>
  )
}

export default Card