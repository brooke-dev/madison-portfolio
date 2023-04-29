import React, {useEffect} from "react";
import { useRouter } from 'next/router';



export default function Success(){
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')}, 5000);
        })

    return(
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2>Success! You will be redirected to the main page in five seconds.</h2>
        </div>
    )

}