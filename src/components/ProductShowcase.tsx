'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import appScreen from '../assets/images/app-screen.png';

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Interface Intuitiva
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
          Comemore suas conquistas com um app feito para acompanhar seu progresso, motivar seus esforços e celebrar suas vitórias, uma tarefa de cada vez.
          </p>
          <p className="text-center text-white/60 mt-3">
          Disponível em português (PT-BR) e inglês (EN)
          </p>
        </div>
        <motion.div
          style={{
            opacity,
            rotateX,
            transformPerspective: '800px',
          }}
        >
          <Image
            src={appScreen}
            alt="The product screenshot"
            className="mx-auto mt-14"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};