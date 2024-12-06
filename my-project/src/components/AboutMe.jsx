
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const AboutMe = (params) => {
  return(
     <>
       <div className="flex lg:justify-between lg:px-24 ">
        <div className="w-4/12">
        <DotLottieReact
      src="https://lottie.host/6d88acd8-97de-49ba-bbfb-ffaaaa673ae5/FD7zzK8PXy.lottie"
      loop
      autoplay
    />
        </div>
         <div className="w-1/2 flex flex-col gap-5">
         <h1 className='text-6xl'>About Me </h1>
     
        <p className='text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda natus dolorem labore voluptas sunt atque ab nisi. Dolorem cumque iusto tenetur dolor id possimus voluptas blanditiis amet explicabo excepturi odit aliquid exercitationem eligendi maiores dolores fugiat expedita at, neque natus et libero. Facilis, nobis.</p>
         </div>
   

          
       </div>
     </>
  )
}
export default AboutMe;