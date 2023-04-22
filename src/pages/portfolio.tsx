import React from 'react'
import ArtCard from '../components/ArtCard'

const portfolioData = [
  {
    title: 'Example Art 1',
    description: 'This is an example of ArtCard 1',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 1',
  },
  {
    title: 'Example Art 2',
    description: 'This is an example of ArtCard 2',
    image:"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 2',
  },
  {
    title: 'Example Art 3',
    description: 'This is an example of ArtCard 3',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 3',
  },
  {
    title: 'Example Art 4',
    description: 'This is an example of ArtCard 4',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 4',
  },
  { 
    title: 'Example Art 5',
    description: 'This is an example of ArtCard 5',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 5',
  },
  { 
    title: 'Example Art 6',
    description: 'This is an example of ArtCard 6',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 6',
  },
  { 
    title: 'Example Art 7',
    description: 'This is an example of ArtCard 7',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 7',
  },
  { 
    title: 'Example Art 8',
    description: 'This is an example of ArtCard 8',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 8',
  },
]

function Portfolio() {
  return (
    <div className="flex items-center justify-center h-screen flex-col mt-11">
      <h1 className="text-4xl">
        Portfolio Here insert shop 
      </h1>
      <h3>This is my art journey</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti sequi modi, id qui nesciunt, itaque labore eos sapiente similique esse quisquam explicabo nobis voluptas, iusto inventore perspiciatis eligendi soluta. Aperiam assumenda consequuntur ut molestiae sed laboriosam exercitationem incidunt labor...</p>
      <div className="flex flex-wrap justify-center mt-10" style={{ maxHeight: '80vh', overflow: 'auto' }}>
        {portfolioData.map((data) => (
          <ArtCard key={data.title} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

  