import React from 'react';
import {Outlet} from 'react-router-dom'
import { Header } from '..'

export const PageLayout = () => {
    return (
        <>
            <Header />
            <Outlet/>
        </>
    )
}
