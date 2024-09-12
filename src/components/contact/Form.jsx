"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import { delay, motion } from 'framer-motion';
import clsx from 'clsx';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        },
    }
}
const item = {
    hidden: { scale: 0 },
    show: { scale: 1, }
}

const Form = ({ className }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const templateParams = {
            to_name: "Elayyan",
            from_name: data.name,
            reply_to: data.email,
            phone: data.phone,
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
                    // console.log('Success');
                    toast.success("Your message has been sent successfully, I will get back to you as sooon as possible.", {
                        id: toastId
                    })
                }).catch(
                    (error) => {
                        console.log('error ' + error);
                        toast.error("There was a problem while sending your message, please try again later.", {
                            id: toastId
                        })
                    });
    };

    return (
        <><Toaster richColors={true} />
            <motion.form variants={container} initial="hidden" animate="show" onSubmit={handleSubmit(onSubmit)}
                className={clsx('max-w-md w-full flex flex-col items-center justify-center space-y-4', className)}>
                <motion.input variants={item} type="text" placeholder="name" {...register("name", {
                    required: 'This field is required', minLength: {
                        value: 3,
                        message: 'Name must be at least 3 characters long',
                    }
                })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 custom-bg' />
                {errors.name && <motion.span variants={item} className='inline-block self-start text-danger'>{errors.name.message}</motion.span>}
                <motion.input variants={item} type="email" placeholder="email" {...register("email", {
                    required: 'This field is required',
                })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 custom-bg' />
                {errors.email && <motion.span variants={item} className='inline-block self-start text-danger'>{errors.email.message}</motion.span>}
                <motion.input variants={item} type="tel" placeholder="phone" {...register("phone", {
                    required: 'This field is required',
                })}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 custom-bg' />
                {errors.email && <motion.span variants={item} className='inline-block self-start text-danger'>{errors.phone.message}</motion.span>}
                <motion.textarea variants={item} type="text" placeholder="message" {...register("message", {
                    required: 'This field is required', maxLength: {
                        value: 500,
                        message: 'Message must be less than 500 characters',
                    }, minLength: {
                        value: 25,
                        message: 'Message must be more than 25 characters',
                    }
                })} rows={"4"}
                    className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 custom-bg' />
                {errors.message && <motion.span variants={item} className='inline-block self-start text-danger'>{errors.message.message}</motion.span>}

                <motion.input variants={item} type="submit" className='py-4 px-10 rounded-md shadow-lg bg-background/80 border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focu:ring-1 focus:ring-accent/50 cursor-pointer capitalize' value={"send your message"} />
            </motion.form></>
    );
}
export default Form