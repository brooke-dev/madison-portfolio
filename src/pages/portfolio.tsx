import React, {useState} from 'react'
import ArtCard from '../components/ArtCard'

const portfolioData = [
  {
    title: 'Example Art 1',
    description: 'This is an example of ArtCard 1',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 1',
    date: "January 2020",
    yearMonth: "2020-01",
  },
  {
    title: 'Example Art 2',
    description: 'This is an example of ArtCard 2',
    image:"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 2',
    date: "July 2020",
    yearMonth: "2020-07"
  },
  {
    title: 'Example Art 3',
    description: 'This is an example of ArtCard 3',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 3',
    date: "April 2021",
    yearMonth: "2021-04"
  },
  {
    title: 'Example Art 4',
    description: 'This is an example of ArtCard 4',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 4',
    date: "August 2021",
    yearMonth: "2021-08"
  },
  { 
    title: 'Example Art 5',
    description: 'This is an example of ArtCard 5',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 5',
    date: "September 2021",
    yearMonth: "2021-09"
  },
  { 
    title: 'Example Art 6',
    description: 'This is an example of ArtCard 6',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 6',
    date: "October 2021",
    yearMonth: "2021-10"
  },
  { 
    title: 'Example Art 7',
    description: 'This is an example of ArtCard 7',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 7',
    date: "July 2022",
    yearMonth: "2022-07"
  },
  { 
    title: 'Example Art 8',
    description: 'This is an example of ArtCard 8',
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
    additionalInfo: 'Additional Info about ArtCard 8',
    date: "March 2023",
    yearMonth: "2023-03",
  },
]
function Portfolio() {
  const [activeYear, setActiveYear] = useState("");

  const years = [...new Set(portfolioData.map((item) => item.date.split(" ")[1]))];

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-11">
      <h1 className="text-4xl">Portfolio</h1>
      <h3 className="mt-4">This is my art journey</h3>
      <div className="flex flex-wrap justify-center mt-4">
        {years.map((year) => (
          <button
            key={year}
            className={`timeline-header-item rounded-md px-4 py-2 ${
              activeYear === year ? "bg-gray-900 text-white" : "bg-gray-300 text-gray-700"
            } hover:bg-gray-300 hover:text-gray-900 transition-colors duration-300 ease-in-out mr-4`}
            onClick={() => setActiveYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="mt-8 overflow-auto" style={{ maxHeight: "70vh" }}>
        {years.map((year) => (
          <div
            key={year}
            className={`timeline-content-item ${
              activeYear === year ? "block" : "hidden"
            }`}
          >
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {portfolioData
                .filter((item) => item.date.split(" ")[1] === year)
                .sort((a, b) => new Date(b.yearMonth).valueOf() - new Date(a.yearMonth).valueOf())
                .map((item) => (
                  <ArtCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    additionalInfo={item.additionalInfo}
                    date={item.date}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
