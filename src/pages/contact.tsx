import React, { useState } from "react";
import { useRouter } from "next/router";
// import { sendEmail } from "sendemail";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    if (!name || !email || !message) {
        return;
    }

    // Send the email
    // await sendEmail({
    //     to: process.env.CONTACT_EMAIL,
    //     from: email,
    //     subject: `Contact Form Submission from ${name}`,
    //     text: message,
    // });

    // Redirect to the success page
    router.push("/contact/success");
    };

    return (
    <div className="flex flex-col items-center justify-center h-screen mt-11">
    <h1 className="text-4xl">Contact Form</h1>
    <h3 className="mt-4">Sign up for email updates</h3>
    <div className="flex flex-wrap justify-center mt-4"></div>
    
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        /><br />
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
    </form>
    </div>
    );
};

export default ContactForm;