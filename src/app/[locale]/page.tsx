'use client'
import { useEffect, useState } from 'react';
import Contact from "../views/contact";
import Presentation from "../views/presentation";
import ProjectsView from "../views/projectview";
import About from '../views/about';
import Header from '../Components/header';

export default function Home() {


  return (
    <main>
      <Header/>
      <Presentation/>
      <About/>
      <ProjectsView/>
      <Contact/>
      
    </main>
  );
}