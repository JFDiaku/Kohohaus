import {motion, useMotionValue} from "framer-motion"
import { Dispatch, SetStateAction, useState } from "react";


const imgs = [
  "src/assets/Images/cup.jpg",
  "src/assets/Images/cup.jpg",
  "src/assets/Images/chair.avif",
  "src/assets/Images/cup.jpg",
  "src/assets/Images/cup.jpg",
  "src/assets/Images/chair.avif"
]



const Images = () =>{
  return(
    <>
      {imgs.map((imgsrc, indx)=>{
        return (
        <div 
        key={indx}
        style={{
          backgroundImage: `url(${imgsrc})`,
          backgroundSize:'cover',
          backgroundPosition:"center",

        }}
         className="apsect-video w-screen  shrink-0 object-cover  bg-neutral-800">

         </div>
        );
      })}
    </>
    );
};


// const dot = ({imgIndex, setImgIndex}
//   :
//   {imgIndex: number;
//     setImgIndex: Dispatch<SetStateAction<number>>
//   }) =>{
//   return (
    
//   )
// }

const DRAG_BUFFER = 50;

const SwipeCarousel = () => {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragStart = () =>{
    setDragging(true);
  }

  const onDragEnd = () =>{
    setDragging(false);

    const x = dragX.get();
  
    if(x <= -DRAG_BUFFER && imgIndex < imgs.length - 1){
      setImgIndex((pv)=> pv + 1)
    }else if(x >= DRAG_BUFFER&& imgIndex > 0){
      setImgIndex((pv)=> pv - 1)
    }
  }


  return (
    <div className='relative min-h-1/2 overflow-hidden py-8 bg-neutral-950'>
      <motion.div
      drag="x" 
      dragConstraints={{
        left:0,
        right:0,
      }}
      style={{
        x: dragX,
      }}
      animate={{
        translateX: `-${imgIndex * 100}%`,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className="flex items-center cursor-grab active:cursor-grabbing">
        <Images/>
      </motion.div>
    </div>
  )
}

export default SwipeCarousel  