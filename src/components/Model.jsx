import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { FlakesTexture } from 'three-stdlib'
import { useControls } from 'leva'

export function Model() {

    const { scene } = useGLTF('/Base2.glb')
    const { nodes: rexNodes } = useGLTF('/Rex.glb')
    const { nodes: curveNodes } = useGLTF('/Curve.glb')
    const { nodes: ringNodes } = useGLTF('/Ring.glb')
  
    const { baseColor } = useControls({ baseColor: '#242424' })
    const { rexSkullColor } = useControls({ rexSkullColor: 'orange' })
    const { rexCurvesColor } = useControls({ rexCurvesColor: 'orange' })
    const { ringsColor } = useControls({ ringsColor: 'orange' })
  
    return (
      <group position={[0, 0, 0]}>
        <mesh geometry={scene.children[0].geometry} scale={0.4} castShadow receiveShadow >
          <meshStandardMaterial color={baseColor} roughness={0.0} normalMap= {new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)} normalMap-repeat={[120, 120]} normalScale={[0.05, 0.05]} />
        </mesh>
        <mesh geometry={rexNodes.RexSkull.geometry} scale={0.2} >
          <meshStandardMaterial color={rexSkullColor} roughness={0.0} metalness={0.1} normalMap= {new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)} normalMap-repeat={[40, 40]} normalScale={[0.04, 0.04]} side= {THREE.DoubleSide} />
        </mesh>
        <mesh geometry={curveNodes.Curve.geometry} scale={0.2} >
          <meshStandardMaterial color={rexCurvesColor} roughness={0.0} metalness={0.1} normalMap= {new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)} normalMap-repeat={[40, 40]} normalScale={[0.04, 0.04]} />
        </mesh>
        <mesh geometry={ringNodes.Ring.geometry} scale={0.5} position={[0,0.42,0]}>
          <meshStandardMaterial color={ringsColor} roughness={0.0} metalness={0.1} normalMap= {new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)} normalMap-repeat={[40, 40]} normalScale={[0.04, 0.04]} />
        </mesh>
      </group>
    )
}

useGLTF.preload('/Base2.glb')
useGLTF.preload('/Rex.glb')
useGLTF.preload('/Curve.glb')
useGLTF.preload('/Ring.glb')