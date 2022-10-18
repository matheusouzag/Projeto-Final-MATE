import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import peste from "./Header.module.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(true);

    useEffect(() => {
        //Usado para que não suma a navbar no modo desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 640) {
                setMenuOpen(true);
            }
        });
    }, []);

    return (
        <header className="mx-4 sm:flex sm:items-center sm:justify-center sm:h-20 sm:bg-white">
            <div className="sm:flex sm:items-center sm:justify-between sm:max-w-7xl sm:mx-auto sm:w-full">
                <div className="flex justify-between items-center ">
                    <picture>
                        <img
                            className="w-16 mt-3 sm:mt-0"
                            src="/img/logo-mate.png"
                            alt="Logo da Mate"
                        />
                    </picture>
                    <FiMenu
                        size={20}
                        onClick={() => {
                            //onClick para quando clicar no icone de hamburger aparecer os itens
                            setMenuOpen(!menuOpen);
                        }}
                        className={peste.hamburgerIcon}
                    />
                </div>
                {menuOpen && (
                    <nav>
                        <ul
                            className="sm:flex sm:flex-row sm:items-center sm:gap-12 sm:space-y-0 font-black flex flex-col items-end space-y-1"
                            style={{ fontFamily: "Spectral" }}
                        >
                            <li>
                                <a
                                    className="mt- hover:underline transition-all hover:text-gray-400 focus:text-gray-400 focus:outline-none"
                                    href="#historia"
                                >
                                    História
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:underline transition-all hover:text-gray-400 focus:text-gray-400 focus:outline-none"
                                    href="#regras"
                                >
                                    Regras
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:underline transition-all hover:text-gray-400 focus:text-gray-400 focus:outline-none"
                                    href="#jogadas"
                                >
                                    Jogadas
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:underline transition-all hover:text-gray-400 focus:text-gray-400 focus:outline-none"
                                    href="#planos"
                                >
                                    Planos
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:underline transition-all hover:text-gray-400 focus:text-gray-400 focus:outline-none"
                                    href="#mestres"
                                >
                                    Mestres
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
