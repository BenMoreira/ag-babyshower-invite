import { useState } from 'react'
import { useSpring, a } from '@react-spring/web';
import { motion } from 'framer-motion';
import cupcakes from './assets/cupcakes.png'
import pinkcupcake from './assets/pinkcupcake.png'
import bluecupcake from './assets/bluecupcake.png'
import './App.css'

function App() {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className='w-full min-h-screen bg-gradient-to-tl from-pink-300 via-white to-blue-500' onClick={() => setFlipped(!flipped)}>
      <a.div className='absolute cursor-pointer will-change-transform w-full h-screen flex flex-col justify-center items-center gap-4' style={{ opacity: opacity.to(o => 1 - o), transform }}>
        <div className='font-bold text-3xl'>
          A Bun Is In The Oven... Is It A
        </div>

        <div className='flex flex-row justify-center items-center'>
          <img src={pinkcupcake} />

          <div className='flex flex-col justify-center items-center text-3xl font-bold gap-4'>
            <div>
              Stud Muffin
            </div>

            <div>
              OR
            </div>

            <div>
              Cupcake?
            </div>
          </div>

          <img src={bluecupcake} />
        </div>
        
        <div className='text-xl'>
          Come find out & see @ the
        </div>

        <div className='text-xl'>
          Gender Reveal Baby Shower for
        </div>

        <div className='font-bold text-3xl text-yellow-400'>
          Alex & Gloria
        </div>

        <div className='text-xl'>
          Registry is at <a>Amazon</a>
        </div>

        <div className='text-xl'>
          Friday - 4th of August @ 6:00 PM
        </div>

        <div className='text-xl'>
          B & B Event Hall
        </div>

        <div className='text-xl'>
          1480 Beaver Ruin Rd. Norcross, GA, 30093
        </div>
      </a.div>

      <a.div className='absolute cursor-pointer will-change-transform w-full' style={{opacity, transform, rotateX: '180deg'}}>
        <div>
          Bobina
        </div>
      </a.div>
    </div>
  )
}

export default App
