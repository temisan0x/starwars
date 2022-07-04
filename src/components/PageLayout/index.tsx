import React from 'react';
import { Outlet } from 'react-router-dom'
import { Header } from '..'
import { Container } from './style';
import { Footer } from '../Footer/index';

export const PageLayout = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer/>
        </>
    )
}
