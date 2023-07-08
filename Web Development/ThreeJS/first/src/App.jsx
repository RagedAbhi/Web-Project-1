import "./App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei"
import Coffee from './Coffee'

function App() {

  return (
    <>
      <div className="Wrapper">
        <Canvas className="container3D" color="blue">
          <PerspectiveCamera makeDefault position={[5, 0, 5]} />
          <Stars />
          <OrbitControls enableZoom={true} />
          {/* <ambientLight intensity={0.1} color="blue" /> */}
          <rectAreaLight intensity={5} position={[-6, 6, 8]} />
          <spotLight position={[-3, -3, 5]} intensity={2.5} color='orange' />
          <spotLight position={[-20, -2, -25]} intensity={0.5} color='lightgreen' />
          <directionalLight position={[0, 10, -25]} intensity={0.5} color='blue' />
          <directionalLight position={[5, 10, -2]} intensity={0.2} color='white' />
          {/* <directionalLight position={[-2, 5, 2]} intensity={1} /> */}
          <Suspense fallback={null}>
            <Coffee />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default App
