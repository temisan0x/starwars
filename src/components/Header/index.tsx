import React from 'react';
import { Container } from './style';
import { MdPersonSearch, MdMovie } from 'react-icons/md';
import { BiPlanet } from 'react-icons/bi'
import { SiStarship } from 'react-icons/si'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg'

export const Header = () => {
    return (
        <Container>
            <Link to="/">
                <img src={Logo} alt="Starwars logo" />
            </Link>

            <nav>
                <Link to="/">
                    <MdPersonSearch size={20} />
                    person
                </Link>
                <Link to="/films">
                    <MdMovie size={20} />
                    films
                </Link>
                <Link to="/starships">
                    <SiStarship size={20} />
                    starships
                </Link>
                <Link to="/Planet">
                    <BiPlanet size={20} />
                    planets
                </Link>
            </nav>
        </Container>
    )
}
