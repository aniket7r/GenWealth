'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'

const testimonials = [
    {
        img: "https://www.dci.com.br/wp-content/uploads/2020/08/warren-buffet-KEVIN-LAMARQUEREUTERS.jpg",
        quote: "The stock market is filled with individuals who know the price of everything, but the value of nothing. Understanding the true value of an investment is crucial for long-term success.",
        name: 'Warren Buffett',
        role: 'Berkshire Hathaway'
        },
        {
        img: "https://th.bing.com/th/id/R.7f758ffa383cd74f69108d7aecb634ae?rik=h%2bZ2E%2bFh4evRIA&riu=http%3a%2f%2fwww.thefamouspeople.com%2fprofiles%2fimages%2fbenjamin-graham-4.jpg&ehk=IKe%2butb8xkuKvAtMS9Jn443roEZ1UrQTncVnMTdusW4%3d&risl=&pid=ImgRaw&r=0",
        quote: "In the world of investing, the most important thing is to maintain a margin of safety. This principle helps protect your capital and ensures you can withstand market fluctuations.",
        name: 'Benjamin Graham',
        role: 'Father of Value Investing'
        },
        {
        img: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iXSaimjwDTOY/v0/-1x-1.jpg",
        quote: "Investing without research is like playing poker without looking at your cards. You need to understand what you own and why you own it to make informed decisions.",
        name: 'Peter Lynch',
        role: 'Fidelity Investments'
        }
]

const FancyTestimonialsSlider = () => {
  const testimonialsRef = useRef(null)
  const [active, setActive] = useState(0)
  const [autorotate, setAutorotate] = useState(true)
  const autorotateTiming = 7000

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === testimonials.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])  

  return (
    <div className="w-full bg-gray-50">
    <div className="max-w-3xl mx-auto text-center">
      <div className="relative h-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
        <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
  {testimonials.map((testimonial, index) => (
    <Transition
      as="div"
      key={index}
      show={active === index}
      className="absolute inset-0 h-full -z-10"
      enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
      enterFrom="opacity-0 -rotate-[60deg]"
      enterTo="opacity-100 rotate-0"
      leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
      leaveFrom="opacity-100 rotate-0"
      leaveTo="opacity-0 rotate-[60deg]"
      beforeEnter={() => heightFix()}
    >
      <div className="relative top-11 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full overflow-hidden">
        <img 
          className="w-full h-full object-cover object-center"
          src={testimonial.img}
          alt={testimonial.name}
        />
      </div>
    </Transition>
  ))}
</div>
        </div>
      </div>
      {}
      <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              as="div"
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className="text-2xl font-bold text-slate-900 before:content-['\201C'] after:content-['\201D']">{testimonial.quote}</div>
            </Transition>
          ))}
        </div>
      </div>
      {}
      <div className="flex flex-wrap justify-center -m-1.5">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${active === index ? 'bg-indigo-500 text-white shadow-indigo-950/10' : 'bg-white hover:bg-indigo-100 text-slate-900'}`}
            onClick={() => { setActive(index); setAutorotate(false); }}
          >
            <span>{testimonial.name}</span> <span className={`${active === index ? 'text-indigo-200' : 'text-slate-300'}`}> - </span> <span>{testimonial.role}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
  )
}

export default FancyTestimonialsSlider