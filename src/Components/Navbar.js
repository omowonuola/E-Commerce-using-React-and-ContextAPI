import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src="https://res.cloudinary.com/omowonuola/image/upload/v1597107507/toppng.com-fire-logo-png-svg-free-download-fire-logo-301x432_bzoduq.png" alt='store' className='navbar-brand' style={{width:"10%", height:"10%"}} />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5" >
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                            <i className='fas fa-cart-plus' />
                        </span>    
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainDark);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;