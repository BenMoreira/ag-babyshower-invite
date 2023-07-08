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
      <a.div className='absolute cursor-pointer will-change-transform w-full flex flex-col items-center gap-5 pt-6' style={{ opacity: opacity.to(o => 1 - o), transform }}>
        <div className='font-bold text-3xl'>
          A Bun Is In The Oven...
        </div>

        <div className='font-bold text-3xl pb-2'>
          Is It A
        </div>

        <div className='flex flex-row justify-center items-center'>
          <img src={pinkcupcake} className='w-[120px]' />

          <div className='flex flex-col justify-center items-center text-3xl font-bold gap-4'>
            <div className='text-center'>
              Stud Muffin
            </div>

            <div>
              OR
            </div>

            <div>
              Cupcake?
            </div>
          </div>

          <img src={bluecupcake} className='w-[120px]' />
        </div>
        
        <div className='text-xl pt-2'>
          Come find out & see @ the
        </div>

        <div className='text-xl'>
          Gender Reveal Baby Shower for
        </div>

        <div className='font-bold text-5xl text-yellow-400 pb-4'>
          Alex & Gloria
        </div>

        <div className='text-xl pt-12'>
          Tap for more information
        </div>
      </a.div>

      <a.div className='absolute cursor-pointer will-change-transform w-full flex flex-col items-center gap-5 pt-6' style={{opacity, transform, rotateX: '180deg'}}>
        <div className='text-2xl'>
          Registry is at <a>Amazon</a>
        </div>

        <div className='font-bold text-3xl text-yellow-400'>
          Location:
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
        
        <div className='font-bold text-3xl text-yellow-400'>
          Diaper Raffle!
        </div>

        <div className='text-2xl'>
          For each pack of diapers you bring, you'll
        </div>

        <div className='text-2xl'>
          receive one entry in our prize drawing.
        </div>
        
        <div className='text-2xl'>
          First prize is getting the baby named after you!!!
        </div>

        <div className='text-2xl'>
          Just kidding - it's a basket with goodies! 
        </div>
      </a.div>
    </div>
  )
}

export default App
