"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import Button from './NavBtn';
import useScreenSize from '../hooks/UseScreenSize';
import ResponsiveComponent from '../ResponsiveComponent';

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;
    const size = useScreenSize();
    const isLarge = size >= 1024;
    const isMedium = size >= 768;

    return (
        <div className='fixed h-screen w-full flex items-center justify-center'>
            <ResponsiveComponent>
                {({ size }) => {

                    return size && size >= 480 ?
                        (<div className='group flex items-center justify-between relative animate-spin-slow hover:pause'>
                            {BtnList.map((btn, indx) => {
                                const angleRad = (indx * angleIncrement * Math.PI) / 180;
                                const radius = isLarge ? 'calc(20vw - 1rem)' : isMedium ? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)';
                                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                                const y = `calc(${radius}*${Math.sin(angleRad)})`;
                                return <Button key={indx} cords={[x, y]} {...btn} />
                            })}
                        </div>)
                        :
                        (<>
                            <div className='group w-full px-2.5 xs:w-max space-y-4 xs:p-0 flex flex-col items-start xs:items-center justify-between relative'>
                                {BtnList.slice(0, BtnList.length / 2).map((btn, indx) => {

                                    return <Button key={indx} cords={[]} {...btn} />
                                })}
                            </div>
                            <div className='group w-full xs:w-max space-y-4 xs:p-0 px-2.5 flex flex-col items-end xs:items-center justify-between relative'>
                                {BtnList.slice(BtnList.length / 2, BtnList.length).map((btn, indx) => {

                                    return <Button key={indx} cords={[]} {...btn} labelDirection='left' />
                                })}
                            </div>
                        </>)
                }}
            </ResponsiveComponent>
        </div>
    )
}

export default Navigation