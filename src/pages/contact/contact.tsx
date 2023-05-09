import React, { useState } from "react";
import { useRouter } from "next/router";
import sendgrid from "@sendgrid/mail";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    console.log(name)

    const handleNameChange = (e: any) => {
        setName(e.value)
    }
    // const handleValidation = () => {

    //     // let tempErrors = {};
    //     // let isValid = true;
    

    //     // if (name.length <= 0) {
    //     //     tempErrors["name"] = true;
    //     //     isValid = false;
    //     // }
    //     // if (email.length <= 0) {
    //     //     tempErrors["email"] = true;
    //     //     isValid = false;
    //     // }
    //     // if (message.length <= 0) {
    //     //     tempErrors["message"] = true;
    //     //     isValid = false;
    //     // }
    
    //     // setErrors({ ...tempErrors });
    //     // console.log("errors", errors);
    //     // return isValid;
    // };

    // Send the email
    const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        // let isValidForm = handleValidation();
    

        
            const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                email: email,
                name: name,
                message: message
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            });
    
            const { error } = await res.json();
            if (error) {
            console.log(error);
            return;
            }
        console.log(name, email, message);
        };

    

    // Redirect to the success page
    router.push("/contact/success");
    

    return (

    <section className="bg: black">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Let us know!</p>
            <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                    <input 
                    type="name" 
                    id="name" 
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                    placeholder="namey name name" 
                    value={name}
                    onChange={handleNameChange}
                    required/>
                </div>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input 
                    type="email" 
                    id="email" 
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                    placeholder="me@somewhere.com" 
                    value={email}
                    required/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" 
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    placeholder="Leave a message">
                    value={message}
                    </textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
    </div>
</section>
    );
};

export default ContactForm;