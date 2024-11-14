import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
        img:  "/project_01.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
        img:  "/project_02.jpg" ,
        tags: ["Next.Js", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Weather Widget",
        desc: "A Next.Js and TypeScript based tool for fetching and displaying real-time weather data.",
        img:  "/project_03.jpg" ,
        tags: ["Next.Js", "Node", "CSS", "Typescript"],
    },
    {
        id: 3,
        title: "Currency Converter Project ",
        desc: "A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
        img:  "/project_04.jpg" ,
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 4,
        title: "Static Interactive Resume",
        desc: "A TypeScript-based interactive resume build with HTML and CSS, allowing users to showcase their skills dynamically.",
        img:  "/project_05.jpg" ,
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 5,
        title: "Tip Calculator Project ",
        desc: "A basic HTML CSS and TypeScript calculator for performing essential arithmetic operation.",
        img:  "/project_06.jpg" ,
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
];

const projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
         desc={el.desc} 
         img={el.img}
         tags={el.tags}
        
        
        />))}
      </div>
      </div>
  )
}

export default projects
