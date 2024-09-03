"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

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

        const toastId = toast.loading("Sending message")

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
                    console.log('Success callback triggered');
                    toast.success("Your message has been sent successfully, I will get back to you as sooon as possible.", {
                        id: toastId
                    })
                }).catch(
                    (error) => {
                        console.log('error callback triggered. ' + error);
                        toast.error("There was a problem while sending your message, please try again later.", {
                            id: toastId
                        })
                    });
    };


    return (
        <><Toaster richColors={true} />
            <form onSubmit={handleSubmit(onSubmit)}
                className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>
                <input type="text" placeholder="name" {...register("name", {
                    required: 'This field is required', minLength: {
                        value: 3,
                        message: 'Name must be at least 3 characters long',
                    }
                })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 custom-bg' />
                {errors.name && <span className='inline-block self-start text-red-400'>{errors.name.message}</span>}
                <input type="email" placeholder="email" {...register("email", {
                    required: 'This field is required',
                })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 custom-bg' />
                {errors.email && <span className='inline-block self-start text-red-400'>{errors.email.message}</span>}
                <textarea type="text" placeholder="message" {...register("message", {
                    required: 'This field is required', maxLength: {
                        value: 500,
                        message: 'Message must be less than 500 characters',
                    }, minLength: {
                        value: 25,
                        message: 'Message must be more than 25 characters',
                    }
                })} rows={"4"}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 custom-bg' />
                {errors.message && <span className='inline-block self-start text-red-400'>{errors.message.message}</span>}

                <input type="submit" className='py-4 px-10 rounded-md shadow-lg bg-background/80 border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focu:ring-1 focus:ring-accent/50 cursor-pointer capitalize' value={"send your message"} />
            </form></>
    );
}
export default Form