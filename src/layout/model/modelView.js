import React, { Suspense } from 'react'
import "./model.css"
import { PerspectiveCamera, View } from '@react-three/drei'
import { AmbientLight } from 'three'
import Lights from './Lights'
import { Iphone } from './iPhone'

function ModelView({index, groupRef, gsapType, controlRef, setRotationState, item, size}) {
  return (
    <View 
    index={index}
    id={gsapType}
    className='view-box'
    >
      <AmbientLight intensity={0.3}/>
      <PerspectiveCamera makeDefault position={[0,0,4]}/>
      <Lights/>
      <Suspense fallback={<div>Loading...</div>}>
        <Iphone/>
      </Suspense>
    </View>
  )
}

export default ModelView