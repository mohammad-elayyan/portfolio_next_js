import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const RenderModel = ({ children, className }) => {
    return (
        <Canvas className={clsx("w-screen h-screen relative")}>
            <Suspense fallback={null}>{children}</Suspense>
        </Canvas>
    )
}

export default RenderModel