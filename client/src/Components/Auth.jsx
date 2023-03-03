import React from 'react'
import person from '../images/pro1.gif'
import { Link } from 'react-router-dom'
import './Auth.css'

const Auth = () => {
  return (
    <section>
        <h1>XELA Tech</h1>
        <div className="container">
            <article>
                <h2>Hi,there</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, doloribus aliquam dolores aliquid voluptatum facilis 
                    abore temporibus possimus maxime, cupiditate magnam esse harum minus tempore suscipit rem expedita error sunt.</p>
                <div className="btns">
                    <Link className='Link log' to='/login'>Login</Link>
                    <Link className='Link sig'  to='/signup'>SignUp</Link>
                </div>
            </article>
            <img src={person} alt="" />
        </div>
    </section>
  )
}

export default Auth