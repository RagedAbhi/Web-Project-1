import './App.css';
import { delay, motion } from 'framer-motion'

function App() {
  return (
    <div className="App">
      <motion.div
        className="square"
        initial={{scale: 0, opacity: 0, x: -1000}}
        animate={{scale: 1, opacity: 1, x: 0}}
        transition={{
          duration: 2, type: 'spring'
        }}
        // whileDrag={{scale: 1.2}}
        // dragConstraints={{
        //   right: 300,
        //   left: -300
        // }}
        // drag="x"
      ></motion.div>
    </div>
  );
}

export default App;
