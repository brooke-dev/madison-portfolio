import React, {useState} from 'react'
import ArtCard from '../components/ArtCard'

const portfolioData = [
  {
    title: 'Example Art 1',
    description: 'This is an example of ArtCard 1',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 1',
    date: "January 2020",
  },
  {
    title: 'Example Art 2',
    description: 'This is an example of ArtCard 2',
    image:"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 2',
    date: "July 2020",
  },
  {
    title: 'Example Art 3',
    description: 'This is an example of ArtCard 3',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 3',
    date: "April 2021",
  },
  {
    title: 'Example Art 4',
    description: 'This is an example of ArtCard 4',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 4',
    date: "August 2021"
  },
  { 
    title: 'Example Art 5',
    description: 'This is an example of ArtCard 5',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 5',
    date: "September 2021"
  },
  { 
    title: 'Example Art 6',
    description: 'This is an example of ArtCard 6',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 6',
    date: "October 2021"
  },
  { 
    title: 'Example Art 7',
    description: 'This is an example of ArtCard 7',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 7',
    date: "July 2022"
  },
  { 
    title: 'Example Art 8',
    description: 'This is an example of ArtCard 8',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 8',
    date: "March 2023"
  },
]

function Portfolio() {
  const [activeDate, setActiveDate] = useState("");

  const dates = [...new Set(portfolioData.map((item) => item.date))]
  

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-11">
    <h1 className="text-4xl">Portfolio</h1>
    <h3 className="mt-4">This is my art journey</h3>
    <div className="flex flex-wrap justify-center mt-4">
      {dates.map((date) => (
        <button
          key={date}
          className={`timeline-header-item ${
            activeDate === date ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveDate(date)}
        >
          {date}
        </button>
      ))}
    </div>
    <div className="mt-8">
      {dates.map((date) => (
        <div
          key={date}
          className={`timeline-content-item ${
            activeDate === date ? "block" : "hidden"
          }`}
        >
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {portfolioData
              .filter((item) => item.date === date)
              .map((item) => (
                <ArtCard key={item.title} {...item} />
              ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Portfolio;

  