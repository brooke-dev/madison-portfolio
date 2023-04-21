import Image from 'next/image'
import { Inter } from 'next/font/google'
import Video from '../components/Video';
// import About from './about'
import ArtCard from '../components/ArtCard'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <main className="mt-20">
      <div className="text-center">
        <h1 className="text-4xl">Hi, I'm Madison and I love art </h1>
        <h3>Check out some of my favorite artwork below!</h3>
        <p>this is the portfolio sample -- pulls up featured art</p>
        <ArtCard 
          title="Example Art"
          description="This is an example of an ArtCard. Lots of words here about how this art was made and why. Probably talk about what it means"
          image="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80"
          additionalInfo="Additional Info about here. Made with oil 2021"
         />
        <Video />
      </div>
    </main>
  )
}
