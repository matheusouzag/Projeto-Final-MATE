import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import styles from "./Header.module.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(true);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(true);
            }
        });
    }, []);

    return (
        <header className="mx-4 md:flex md:items-center md:justify-center md:h-20 md:bg-white">
            <div className="md:flex md:items-center md:justify-between md:max-w-7xl md:mx-auto md:w-full">
                <div className="flex justify-between items-center ">
                    <picture>
                        <img
                            className="w-16 mt-3 md:mt-0"
                            src="/img/logo-mate.png"
                            alt="Logo da Mate"
                        />
                    </picture>
                    <FiMenu
                        size={20}
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}
                        className={styles.hamburgerIcon}
                    />
                </div>
                {menuOpen && (
                    <nav>
                        <ul className="md:flex md:flex-row md:items-center md:gap-12 font-extrabold flex flex-col items-end space-y-1">
                            <li>
                                <a
                                    className="hover:underline transition-all hover:text-gray-400 focus:text-gray-400 focus:outline-none"
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
