// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import Video from '../components/Video';
// // import About from './about'
// import ArtCard from '../components/ArtCard'


// // const inter = Inter({ subsets: ['latin'] })

// const artData= [

// ]

// export default function Home() {
//   return (

//     <main className="mt-20">
//       <div className="text-center">
//         <h1 className="text-4xl">Hi, I'm Madison and I love art </h1>
//         <h3>Check out some of my favorite artwork below!</h3>
//         <p>this is the portfolio sample -- pulls up featured art</p>
//         <ArtCard 
//           title="Example Art"
//           description="This is an example of an ArtCard. Lots of words here about how this art was made and why. Probably talk about what it means"
//           image="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80"
//           additionalInfo="Additional Info about here. Made with oil 2021"
//          />
//         <Video />
//       </div>
//     </main>
//   )
// }

import React from 'react';
import ArtCard from '../components/ArtCard';
import Video from '../components/Video'

const artData = [
  {
    title: 'Example Art 1',
    description: 'This is an example of ArtCard 1',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 1',
    date: "January 2020",
    yearMonth: "2020-01",
    inStock: true,
    quantity: 15,
  },
  {
    title: 'Example Art 2',
    description: 'This is an example of ArtCard 2',
    image:"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 2',
    date: "July 2020",
    yearMonth: "2020-07",
    inStock: true,
    quantity: 8,
  },
  {
    title: 'Example Art 3',
    description: 'This is an example of ArtCard 3',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 3',
    date: "April 2021",
    yearMonth: "2021-04",
    inStock: true,
    quantity: 1,
  },
  {
    title: 'Example Art 4',
    description: 'This is an example of ArtCard 4',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 4',
    date: "August 2021",
    yearMonth: "2021-08",
    inStock: false,
    quantity: 0,
  }
]

export default function Home() {
  return (
    <main className="mt-20">
      <div className="text-center">
        <h1 className="text-4xl">Hi, I'm Madison and I love art </h1>
        <h3>Check out some of my favorite artwork below!</h3>
        <p>this is the portfolio sample -- pulls up featured art</p>
        <div className="flex flex-wrap justify-center">
          {artData.map((art) => (
            <ArtCard
              key={art.title}
              title={art.title}
              description={art.description}
              image={art.image}
              additionalInfo={art.additionalInfo}
              date={art.date}
              inStock={art.inStock}
              quantity={art.quantity}
            />
          ))}
        </div>
        <Video />
      </div>
    </main>
  );
}
