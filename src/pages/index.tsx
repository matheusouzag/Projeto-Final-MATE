import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <div className="mt-2">
                <picture>
                    <source //Source = Usado apra mudar as imagens entre mobile e desktop
                        media="(max-width: 640px)"
                        srcSet="/img/paginamobile-inicial.png"
                    ></source>
                    <source //Source = Usado apra mudar as imagens entre mobile e desktop
                        media="(min-width: 640px)"
                        srcSet="/img/pagina-inicial.png"
                    ></source>
                    <img
                        className="w-full"
                        src="/img/pagina-inicial.png"
                        alt="Um tabuleiro de xadrez, com a logo da comunidade MATE"
                    />
                </picture>
            </div>

            <section>
                <div>
                    <div className="px-20 md:pr-0">
                        <h1 className="flex justify-center sm:justify-start sm:mt-4 mt-2 font-extrabold mb-2">
                            História do Xadrez
                        </h1>
                        <div className="sm:container sm:flex sm:flex-row-reverse sm:space-y-4">
                            <div className="grid grid-cols-2 grid-rows-2 gap-4 md:w-72">
                                <div className="col-span-2">
                                    <img
                                        src="img/historia-1.png"
                                        alt="xadrez"
                                        className="w-"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="img/historia-2.png"
                                        alt="xadrez"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="img/historia-3.png"
                                        width="auto"
                                        height="auto"
                                        alt="xadrez"
                                    />
                                </div>
                            </div>
                            <div className="mx-auto font-medium sm:space-y-8">
                                <p className="mt-4">
                                    Há um consenso entre os historiadores de que
                                    a Índia é o mais provável berço do esporte.
                                    A principal diferença entre o jogo atual e
                                    seu antecessor ficava por conta da limitação
                                    de movimento das peças. O atual bispo era
                                    conhecido como elefante, enquanto a dama,
                                    peça mais poderosa do xadrez moderno, era
                                    conhecida como vizir.
                                </p>
                                <p className="mt-4">
                                    Mas foi na França, no século XVIII, que
                                    eventos de xadrez — já no formato que
                                    conhecemos atualmente — passaram a ganhar
                                    repercussão. Os mestres da época se
                                    enfrentavam em partidas épicas, cujo palco
                                    eram as coffee houses, casas de café e chá
                                    distribuídas pelas maiores cidades
                                    europeias. No século seguinte, os clubes de
                                    xadrez tiveram um rápido desenvolvimento e
                                    partidas por correspondência entre cidades
                                    tornaram-se comuns. Jornais passaram a
                                    destacar o jogo e publicações foram feitas
                                    contendo ideias avançadas dos mais célebres
                                    enxadristas da época.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

/*<div className="flex absolute items-center w-16 h-14 top-36 left-24">
                            <img
                                src="/img/logo-mate.png"
                                alt="Um tabuleiro de xadrez, com a logo da comunidade MATE"
                            />
                            <p>Junte-se a maior comunida de xadrez do brasil</p>
                            <button>Juntar-se</button>
                        </div>*/

/*<section className="mt-2">
                <div>
                    <picture>
                        <source //Source = Usado apra mudar as imagens entre mobile e desktop
                            media="(max-width: 640px)"
                            srcSet="/img/paginamobile-inicial.png"
                        ></source>
                        <source //Source = Usado apra mudar as imagens entre mobile e desktop
                            media="(min-width: 640px)"
                            srcSet="/img/pagina-inicial.png"
                        ></source>
                        <img
                            src="/img/pagina-inicial.png"
                            alt="Um tabuleiro de xadrez, com a logo da comunidade MATE"
                        />
                    </picture>
                </div>
            </section>*/
