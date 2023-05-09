import React from 'react'
import ArtCard from '../components/ArtCard'
import { isTemplateExpression } from 'typescript'

function Shop() {
  const shopData = [
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
    },
    { 
      title: 'Example Art 5',
      description: 'This is an example of ArtCard 5',
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
      additionalInfo: 'Additional Info about ArtCard 5',
      date: "September 2021",
      yearMonth: "2021-09",
      inStock: true,
      quantity: 20,
    },
    { 
      title: 'Example Art 6',
      description: 'This is an example of ArtCard 6',
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
      additionalInfo: 'Additional Info about ArtCard 6',
      date: "October 2021",
      yearMonth: "2021-10",
      inStock: false,
      quantity: 0,
    },
    { 
      title: 'Example Art 7',
      description: 'This is an example of ArtCard 7',
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
      additionalInfo: 'Additional Info about ArtCard 7',
      date: "July 2022",
      yearMonth: "2022-07",
      inStock: true,
      quantity: 11,
    },
    { 
      title: 'Example Art 8',
      description: 'This is an example of ArtCard 8',
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
      additionalInfo: 'Additional Info about ArtCard 8',
      date: "March 2023",
      yearMonth: "2023-03",
      inStock: false,
      quantity: 0,
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-12">
  <h1 className="text-4xl mb-4">Shop Here insert shop</h1>
  <p className="mb-8">Render shop cards somewhere here</p>
  <div className="flex flex-wrap justify-center items-center">
    {shopData.map((item) => (
      <div key={item.title} className="mx-4 my-8">
        <ArtCard
          title={item.title}
          description={item.description}
          image={item.image}
          additionalInfo={item.additionalInfo}
          date={item.date}
          inStock={item.inStock}
          quantity={item.quantity}
        />
        <h2>{item.title}</h2>
        <p>$$$</p>
      </div>
    ))}
  </div>
</div>

  );
  
}

export default Shop

