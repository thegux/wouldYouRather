import React, {Component} from 'react'
import {Nav, NavItem} from 'react-bootstrap'

export default function NavComponent () {
    return (
        <Nav activeKey="/home" className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="/in/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/in/newQuestion">New Question</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/in/leaderBoard">Leader Board</Nav.Link>
        </Nav.Item>
        <NavItem>
            <p style={{marginLeft: '20px', marginTop: '8px'}}>

                    <img style={{width:'30px', height:'30px', borderRadius: '15px', marginRight: '10px'}}
                    src="https://miro.medium.com/max/1200/1*XLPUfIkmIA01h1D0ti-wJw.png" 
                    alt="React + Redux Logo"/>

                    Hi, Tyler McGynnis</p>
        </NavItem>
        <Nav.Item>
          <Nav.Link href="/">
            Logout
          </Nav.Link>
        </Nav.Item>
      </Nav>
    )
}