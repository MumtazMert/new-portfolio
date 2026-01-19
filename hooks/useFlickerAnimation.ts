import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const useFlickerAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let isActive = true;

 
    const randomDelay = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1) + min);

    const flickerSequence = async () => {
      if (!isActive) return;


      await controls.start("on");

 
      const waitTime = randomDelay(2000, 8000);
      await new Promise((resolve) => {
        timeoutId = setTimeout(resolve, waitTime);
      });

      if (!isActive) return;

   
      const flickerCount = randomDelay(3, 8);

      for (let i = 0; i < flickerCount; i++) {
  
        if (!isActive) break; 
        
        const isDim = Math.random() > 0.5;
        await controls.start(isDim ? "dim" : "off", {
          duration: Math.random() * 0.1,
          ease: "easeInOut",
        });
        await controls.start("on", {
          duration: Math.random() * 0.1,
          ease: "easeOut",
        });
      }

    
      flickerSequence();
    };

    flickerSequence();

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
    };
  }, [controls]);

  return controls;
};
