import React, { useState } from 'react';
import Link from 'next/link';
import styled from "styled-components";

const Titulo = styled.h2`
    padding-top: 10px;
    //height: 50px;
    font-weight: bolder;
    font-size: 65px;
    justify-content: center;
    color:  #000000;
    text-align: center;
`;

function MisDatos() {

    return (
        <>
            <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
                <nav class="max-w-[115rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                    <div class="flex items-center justify-between">
                        <Titulo>TechBank</Titulo>
                    </div>
                    <div className='ml-8 flex gap-2 justify-end '>
                        <Link className='col-span-6 hover:font-bold' href="/">
                            Volver al inicio
                        </Link>
                    </div>
                </nav>
            </header>

            





        </>
    )
}

export default MisDatos