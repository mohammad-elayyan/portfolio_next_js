"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

const Modal = ({ onClose, toggle }) => {

    return createPortal(
        <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] rounded shadow-glass-inset py-8 px-6 xs:px-10 sm:px-16 text-center space-y-8">
                <p className='font-light'>Do you like to play the backgrond music?</p>
                <div className='flex items-center justify-center space-x-4'>

                    <button className='px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2' onClick={toggle}>Yes</button>
                    <button className='px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded' onClick={onClose}>No</button>
                </div>
            </div>
        </div>,
        document.getElementById("my-modal")
    )

}

const Sound = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleFirstUserInteraction = () => {
        const musicConsent = localStorage.getItem("musicConsent");
        if (musicConsent === "true" && !isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        }

        ["click", "keydown", "touchstart"].forEach((event) =>
            document.removeEventListener(event, handleFirstUserInteraction)
        );
    };

    useEffect(() => {
        const consent = localStorage.getItem("musicConsent");
        const consentTime = localStorage.getItem("consentTime");

        if (
            consent &&
            consentTime &&
            new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()
        ) {
            setIsPlaying(consent === "true");

            if (consent === "true") {
                ["click", "keydown", "touchstart"].forEach((event) =>
                    document.addEventListener(event, handleFirstUserInteraction)
                );
            }
        } else {
            setShowModal(true);
        }
    }, []);

    const toggle = () => {
        const newState = !isPlaying;
        setIsPlaying(!isPlaying);
        newState ? audioRef.current.play() : audioRef.current.pause();
        localStorage.setItem("musicConsent", String(newState));
        localStorage.setItem("consentTime", new Date().toISOString());
        setShowModal(false);
    };
    return (
        <div className='fixed top-4 right-2.5 xs:right-4 z-50 group'>
            {showModal && <Modal onClose={() => setShowModal(false)} toggle={toggle} />}
            <audio loop ref={audioRef}>
                <source src='/audio/birds39-forest-20772.mp3' type='audio/mpeg' />
            </audio>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.25, duration: 0.5 }}
                className="text-foreground rounded-full flex items-center justify-center custom-bg fixed top-4 right-4 w-fit self-start z-50" aria-label={"home"} name={"sound"}>

                <span onClick={toggle} className="relative w-14 h-14 p-4
            hover:text-accent">{isPlaying ? <Volume2 className='w-full h-auto' strokeWidth={1.5} /> : <VolumeX className='w-full h-auto' strokeWidth={1.5} />}
                    <span className="peer bg-transparent absolute top-0 rigit-0 w-full h-full" />
                    <span className="absolute hidden peer-hover:block px-2 py-1 right-full mx-2 top-1/2 -translate-y-1/2
            bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">{isPlaying ? "Mute" : "Unmute"}</span>
                </span>
            </motion.div>
        </div>
    )
}

export default Sound