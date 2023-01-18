import { EffectComposer, Bloom } from '@react-three/postprocessing'

export function Effects() {

  return (
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0} intensity={0.1} />
      </EffectComposer>
  )
}