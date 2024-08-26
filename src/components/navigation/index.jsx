"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import Button from './NavBtn';

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;
    return (
        <div className='fixed h-screen w-full flex items-center justify-center'>
            <div className='group flex items-center justify-between relative animate-spin-slow hover:pause'>
                {BtnList.map((btn, indx) => {
                    const angleRad = (indx * angleIncrement * Math.PI) / 180;
                    const radius = 'calc(20vw - 1rem)';
                    const x = `calc(${radius}*${Math.cos(angleRad)})`;
                    const y = `calc(${radius}*${Math.sin(angleRad)})`;
                    return <Button key={indx} cords={[x, y]} {...btn} />
                })}
            </div>
        </div>
    )
}

export default Navigation