import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, Stage, Loader } from '@react-three/drei' //Grid
import { useControls } from 'leva'
import { Model } from './components/Model'
import * as THREE from 'three'
import { FlakesTexture } from 'three-stdlib'
import { Overlay } from './components/Overlay'
// import { Effects } from './components/Effects'

// #7e8a8c #909090
export default function App() {
  const { backgroundColor } = useControls({ backgroundColor: '#242424' })
  const { outerRingsColor } = useControls({ outerRingsColor: 'orange' })
  const { autorotate } = useControls({ autorotate: true });
  return (
    <div className="container" style={{ background: backgroundColor }}>
      <Canvas shadows camera={{ position: [6, 2, 2], fov: 25 }}>
      <Suspense fallback={null}>
        <Stage intensity={0.2} adjustCamera={0.0} >
          <group position={[0, -0.5, 0]}>
            <Center top >
              <Model />
            </Center>
            <mesh scale={4} position={[0, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.98, 1, 6, 1]} />
              <meshStandardMaterial color="white" roughness={0.75} />
              <meshStandardMaterial color={ outerRingsColor } roughness={0.0} metalness={0.1} normalMap= {new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)} normalMap-repeat={[40, 40]} normalScale={[0.04, 0.04]} />
            </mesh>
            <mesh scale={2.4} position={[0, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.98, 1, 4, 1]} />
              <meshStandardMaterial color="white" roughness={0.75} />
              <meshStandardMaterial color={ outerRingsColor } roughness={0.0} metalness={0.1} normalMap= {new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)} normalMap-repeat={[40, 40]} normalScale={[0.04, 0.04]} />
            </mesh>
            <AccumulativeShadows temporal frames={100} color={backgroundColor} colorBlend={2} toneMapped={true} alphaTest={0.9} opacity={1} scale={12}>
              <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
            </AccumulativeShadows>
          </group>
        </Stage>
        </Suspense>
        
        <OrbitControls enableDamping autoRotate={autorotate} autoRotateSpeed={0.4}/>
        <Environment preset="city" />
        {/* <Effects /> */}
      </Canvas>
      <Overlay />
      <Loader />
    </div>
  )
}