import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main/Main'
import Carroussel from '@/components/Main/Carroussel'
import Destacados from '@/components/Main/Destacados'
import Otros from '@/components/Main/Otros'
import Peligro from '@/components/Main/Peligro'
import Descarga from '@/components/Main/Descarga'
import Contacto from '@/components/Main/Contacto'

function index() {
    return (
        <>
            <Header />
            <Carroussel/>
            <Destacados/>            
            <Main/>
            <Otros/>
            <Descarga/>
            <Peligro/>            
            <Footer/>
        </>
    )
}

export default index