import { Canvas, useFrame } from '@react-three/fiber';
import { useCallback, useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import { fragmentShader, vertexShader } from './shader';

const Particles = () => {
  const planePositions = useMemo(() => {
    const planeGeometry = new THREE.PlaneBufferGeometry(10, 10, 150, 150);
    const positions = planeGeometry.attributes.position.array;

    return positions;
  }, []);

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    }),
    []
  );

  // On scroll functions
  const [angleZ, setAngleZ] = useState(0);
  const isScrollToggle = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setAngleZ((prevState) => prevState + 0.005);
  }, []);

  useFrame(() => {
    shaderArgs.uniforms.uTime.value++;
    setAngleZ((prevState) => prevState + 0.001);
  });

  useEffect(() => {
    document.addEventListener('scroll', isScrollToggle, { passive: true });
    return () => {
      document.removeEventListener('scroll', isScrollToggle);
    };
  }, []);

  return (
    <>
      <points rotation={[-Math.PI / 2, 0, angleZ]}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={['attributes', 'position']}
            array={planePositions}
            itemSize={3}
            count={planePositions.length / 3}
          />
        </bufferGeometry>
        <shaderMaterial
          args={[shaderArgs]}
          transparent
          depthTest={false}
          depthWrite={false}
        />
      </points>
    </>
  );
};

export default function ParticleAnimation() {
  return (
    <Canvas dpr={2} className="rounded-3xl">
      <color attach="background" args={[0xffffff]} />
      <mesh position={[0, 0, 0]}>
        <Particles />
      </mesh>
    </Canvas>
  );
}
