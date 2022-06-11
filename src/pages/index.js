import React from 'react';
import Header from '../components/Header';
import { Link } from "gatsby";


import 'index.scss';

const IndexPage = () => {
  return (
    <>
    <title>Home Page</title>
    <Header />
    <main className="indexPage">

      <h3>This is the personal website for Richard "College Hill" Adjogah.</h3>
      <h4>I love <Link to="/music">making music</Link>, <Link to="/dev">writing code</Link>, and <Link to="/mods">video games</Link></h4>
    </main>
    </>
  )
}

export default IndexPage
