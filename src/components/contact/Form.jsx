"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const templateParams = {
            to_name: "Elayyan",
            from_name: data.name,
            reply_to: data.email,
            message: data.message
        }
        sendEmail(templateParams);
    }

    const sendEmail = (params) => {
        // e.preventDefault();

        emailjs
            .send(process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                params, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                limitRate: {
                    throttle: 5000, // you cannot send more than 1 email per 5 seconds
                }
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>
            <input type="text" placeholder="name" {...register("name", { required: true })}
                className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 custom-bg' />
            <input type="email" placeholder="email" {...register("email", { required: true })}
                className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 custom-bg' />
            <textarea type="text" placeholder="message" {...register("message", { required: true, max: 256, min: 10 })} rows={"4"}
                className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 custom-bg' />

            <input type="submit" className='py-4 px-10 rounded-md shadow-lg bg-background/80 border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focu:ring-1 focus:ring-accent/50 cursor-pointer capitalize' value={"send your message"} />
        </form>
    );
}
export default Form