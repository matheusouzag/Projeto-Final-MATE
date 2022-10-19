import React, { useState, useEffect } from "react";

interface Props {
    img: string
    title: string
    description: string
}

const SecaoJogadas = (props: Props) => {
    return (
        <section>
            <div
                className="sm:text-2xl sm:px-48 flex flex-col sm:flex sm:flex-row p-4 bg-black m-4 justify-center items-center rounded-md"
                style={{ fontFamily: "Spectral" }}
            >
                <img
                    className="w-96"
                    src={props.img}
                />

                <h2 className="text-white w-full text-lg text-3xl">{props.title}</h2>
                <p className="text-white background-color: rgb(0 0 0);">
                    {props.description}
                </p>
            </div>
        </section>
    );
};

export default SecaoJogadas;
