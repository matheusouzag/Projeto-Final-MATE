import React, { useState, useEffect } from "react";

interface Props {
    img: string
    title: string
    description: string
}

const SecaoJogadas = (props: Props) => {
    return (
        <section style={{ fontFamily: "Spectral" }}>
        <div className="h-[61rem] w-auto text-3.1 bg-cover rounded-md m-4 flex justify-between flex-col" style={{
            backgroundImage: `url('img/Bobby.jpeg')`
        }}>
            <div className="text-white  text-3xl font-bold py-20 px-36">
            <p>Grandes Mestres</p>
            </div>

            <div className="text-black text-3xl font-bold bg-slate-100  rounded-md w-fit p-4 my-8 mx-8">
            <p>Magnus Carlsen</p>
            </div>
        </div>
    </section>
    );
};

export default SecaoJogadas;
