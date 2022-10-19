import React from "react";

const Footer = () => {
    return (
        <div
            className="flex flex-col justify-center items-center font-black mt-3 gap-2 bg-black text-white"
            style={{ fontFamily: "Spectral" }}
        >
            <p className="text-lg ">
                “O xadrez, como o amor, como a música, tem o dom de fazer as
                pessoas felizes.” -Siegbert Tarrasch
            </p>
            <p className="text-sm">
                © Desenvolvido por Matheus Souza e Chaquel Alcino
            </p>
        </div>
    );
};

export default Footer;
