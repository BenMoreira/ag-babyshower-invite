import { useState } from 'react'
import { useSpring, a } from '@react-spring/web';
import { motion } from 'framer-motion';
import cupcakes from './assets/cupcakes.png'
import pinkcupcake from './assets/pinkcupcake.png'
import bluecupcake from './assets/bluecupcake.png'
import ribbon from './assets/ribbon.png'
import './App.css'

function App() {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const [popup, setPopup] = useState(true);
  const [spanish, setSpanish] = useState(false);

  return (
    <>
    { popup ? 
    <div className='w-full min-h-screen bg-black'>
      <div className='w-full h-screen flex flex-col justify-center items-center font-bold gap-8'>
        <button onClick={() => setPopup(false)} 
        className='bg-gradient-to-tl from-pink-300 via-white to-blue-500 rounded-lg px-[3.25rem] py-4 text-xl'>
          English
        </button>

        <button onClick={() => {setPopup(false); setSpanish(true)}} 
        className='bg-gradient-to-tl from-pink-300 via-white to-blue-500 rounded-lg px-12 py-4 text-xl'>
          Español
        </button>
      </div>
    </div> :
    <div className='w-full min-h-screen bg-gradient-to-tl from-pink-300 via-white to-blue-500' onClick={() => setFlipped(!flipped)}>
      <a.div className='absolute cursor-pointer will-change-transform w-full flex flex-col items-center gap-5 pt-6' style={{ opacity: opacity.to(o => 1 - o), transform }}>
        {spanish ? 
          <div className='font-bold text-3xl'>Hay un bebé en Camino...</div> :
          <div className='font-bold text-3xl'>A Bun Is In The Oven...</div>
        }

        {spanish ?
          <div className='font-bold text-3xl pb-2'>Que crees que es?</div> :
          <div className='font-bold text-3xl pb-2'>Is It A</div>
        }

        <div className='flex flex-row justify-center items-center'>
          <img src={pinkcupcake} className='w-[120px]' />

          <div className='flex flex-col justify-center items-center text-3xl font-bold gap-4'>
            {spanish ? 
              <div className=''>Niño</div> :
              <div className='text-center'>Stud Muffin</div>
            }

            {spanish ?
              <div>O</div> :
              <div>OR</div>
            }

            {spanish ?
              <div>Niña?</div> :
              <div>Cupcake?</div>
            }
          </div>

          <img src={bluecupcake} className='w-[120px]' />
        </div>

        <img src={ribbon} />
        
        {spanish ?
          <div className='text-xl pt-8'>Ven y descubrelo en la</div> :
          <div className='text-xl pt-8'>Come find out & see @ the</div>
        }

        {spanish ? 
          <div className='text-xl'>Revelación de Sexo Baby Shower de</div> :
          <div className='text-xl'>Gender Reveal Baby Shower for</div>
        }

        {spanish ?
          <div className='font-bold text-5xl text-gold pb-4'>Gloria y Alex</div> :
          <div className='font-bold text-5xl text-gold pb-4'>Alex & Gloria</div>
        }

        {spanish ?
          <div className='text-xl pt-6'>Tap</div> :
          <div className='text-xl pt-6'>Tap for more information</div>
        }
      </a.div>

      <a.div className='absolute cursor-pointer will-change-transform w-full flex flex-col items-center gap-5 pt-6' style={{opacity, transform, rotateX: '180deg'}}>
        {spanish ?
          <div className='text-2xl'>Lista de regalos está en <a 
            href='https://www.amazon.com/baby-reg/11YXKJS2LQ3YS?ref=br_search_v2_desktop_res_2' className='font-bold underline'>Amazon</a>
          </div> :
          <div className='text-2xl'>Registry is at <a 
            href='https://www.amazon.com/baby-reg/11YXKJS2LQ3YS?ref=br_search_v2_desktop_res_2' className='font-bold underline'>Amazon</a>
          </div>
        }

        {spanish ?
          <div className='font-bold text-3xl text-gold'>Lugar:</div> :
          <div className='font-bold text-3xl text-gold'>Location:</div>
        }

        {spanish ?
          <div className='text-xl'>Viernes - 4th de Agosto @ 6:00 PM</div> :
          <div className='text-xl'>Friday - 4th of August @ 6:00 PM</div>
        }

        <div className='text-xl'>B & B Event Hall</div>

        <a 
          className='text-xl font-bold underline'
          href='https://www.google.com/maps/place/B%26B+Event+Hall/@33.9313507,-84.153876,15z/data=!4m16!1m9!3m8!1s0x88f5a382236f2833:0x2fc38dcba407df15!2s1480+Beaver+Ruin+Rd,+Norcross,+GA+30093!3b1!8m2!3d33.9313507!4d-84.1451213!10e5!16s%2Fg%2F11b8v5493z!3m5!1s0x88f5a38224c243b3:0x899e2f5a96e94df4!8m2!3d33.9313507!4d-84.1451213!16s%2Fg%2F11t2874bwx?entry=ttu'
        >
          1480 Beaver Ruin Rd. Norcross, GA, 30093
        </a>
        
        {spanish ?
          <div className='font-bold text-3xl text-gold'>Rifa!</div> :
          <div className='font-bold text-3xl text-gold'>Diaper Raffle!</div>
        }

        {spanish ?
          <div className='text-xl'>Por cada paquete de daipers que traigas,</div> :
          <div className='text-xl'>For each pack of diapers you bring, you'll</div>
        }

        {spanish ?
          <div className='text-xl'>reciviras un ticket para las rifas.</div> :
          <div className='text-xl'>receive one entry in our prize drawing.</div>
        }
        
        {spanish ?
          <div className='text-xl'>Primer premio Nombraremos al bebé como</div> :
          <div className='text-xl'>First prize is getting the baby named after you!!!</div>
        }

        {spanish ?
          <div className='text-xl'>el ganador o ganadora!!!</div> :
          <div className='hidden'></div>
        }

        {spanish ?
          <div className='text-xl'>Solo es broma - son canastas con sorpresas!</div> :
          <div className='text-xl'>Just kidding - it's a basket with goodies!</div>
        }
      </a.div>
    </div>
    }
    </>
  )
}

export default App
