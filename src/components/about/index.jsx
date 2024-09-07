"use client"
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import ItemLayout from './ItemLayout';

const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 w-full">
                <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
                    <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                        info
                    </h2>
                    <p className='font-light text-left w-full text-xs sm:text-sm md:text-base'>
                        Hello there
                    </p>
                </ItemLayout>

                <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        +100 <sub className='font-semibold text-base'>projects</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">

                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        +4 <sub className='font-semibold text-base'>
                            years of experience
                        </sub>
                    </p>

                </ItemLayout>
                <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs?username=mohammad-elayyan&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="github stats"
                        loading='lazy' />
                </ItemLayout>
                <ItemLayout className="col-span-full md:col-span-8 !p-0">
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=mohammad-elayyan&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="github stats"
                        loading='lazy' />
                </ItemLayout>
                <ItemLayout className="col-span-full p-5">
                    <img className='w-full h-auto ' src="https://skillicons.dev/icons?i=html,css,bootstrap,sass,js,jquery,react,nextjs,redux,nodejs,mongodb,tailwind,threejs,npm,vite,git,github,vercel,netlify,aws,php,laravel,mysql,postman,docker,sqlite,vscode,ps,ai,ae" alt="github stats" loading='lazy' />
                </ItemLayout>
                <ItemLayout className="col-span-full md:col-span-6 !p-0">
                    <img className='w-full h-auto' src="https://streak-stats.demolab.com?user=mohammad-elayyan&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="github streak stats" loading='lazy' />
                </ItemLayout>
                <ItemLayout className="col-span-full md:col-span-6 !p-0">
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/pin/?username=mohammad-elayyan&repo=portfolio_next_js&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_line_count=2" alt="github streak stats" loading='lazy' />
                </ItemLayout>
            </div>
        </section>
    )
}

export default AboutDetails