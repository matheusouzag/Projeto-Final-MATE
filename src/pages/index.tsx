import type { NextPage } from "next";

/* Observação: por algum motivo não estavamos conseguindo 
importar os arquivos css, logo a criação de classes foi tudo no global.css */

const Home: NextPage = () => {
    return (
        <>
            <div className="mt-2">
                <picture>
                    <source //Source = Usado apra mudar as imagens entre mobile e desktop
                        media="(max-width: 640px)"
                        srcSet="/img/paginamobile-inicial2.png"
                    ></source>
                    <source //Source = Usado apra mudar as imagens entre mobile e desktop
                        media="(min-width: 640px)"
                        srcSet="/img/pagina-inicial2.png"
                    ></source>
                    <img
                        className="w-full"
                        src="/img/pagina-inicial2.png"
                        alt="Um tabuleiro de xadrez, com a logo da comunidade MATE"
                    />
                </picture>
            </div>

            <section>
                <div>
                    <div className="md:px-24 lg:px-24 p-8">
                        <div className="sm:flex sm:flex-row-reverse sm:justify-center sm:space-y-4 sm:gap-4">
                            <div className=" grid grid-cols-2 grid-rows-2 gap-4 sm:w-1/2 lg:max-h-fit lg:max-w-sm">
                                <div className="col-span-2">
                                    <img
                                        src="img/historia-1.png"
                                        alt="xadrez"
                                        className="h-full"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="img/historia-2.png"
                                        alt="xadrez"
                                        className="h-full"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="img/historia-3.png"
                                        alt="xadrez"
                                        className="h-full"
                                    />
                                </div>
                            </div>
                            <div className="sm:flex sm:flex-col font-medium sm:w-1/2 md:text-base lg:text-lg ">
                                <h1
                                    className="flex justify-center sm:justify-start font-extrabold text-2xl mt-2 sm:mt-0"
                                    style={{ fontFamily: "Spectral" }}
                                >
                                    História do Xadrez
                                </h1>

                                <div
                                    className="font-light text-lg lg:text-xl mt-4"
                                    style={{ fontFamily: "Spectral" }}
                                >
                                    <p className="mt-4">
                                        Há um consenso entre os historiadores de
                                        que a Índia é o mais provável berço do
                                        esporte. A principal diferença entre o
                                        jogo atual e seu antecessor ficava por
                                        conta da limitação de movimento das
                                        peças. O atual bispo era conhecido como
                                        elefante, enquanto a dama, peça mais
                                        poderosa do xadrez moderno, era
                                        conhecida como vizir.
                                    </p>
                                    <p className="mt-4">
                                        Mas foi na França, no século XVIII, que
                                        eventos de xadrez — já no formato que
                                        conhecemos atualmente — passaram a
                                        ganhar repercussão. Os mestres da época
                                        se enfrentavam em partidas épicas, cujo
                                        palco eram as coffee houses, casas de
                                        café e chá distribuídas pelas maiores
                                        cidades europeias. No século seguinte,
                                        os clubes de xadrez tiveram um rápido
                                        desenvolvimento e partidas por
                                        correspondência entre cidades
                                        tornaram-se comuns. Jornais passaram a
                                        destacar o jogo e publicações foram
                                        feitas contendo ideias avançadas dos
                                        mais célebres enxadristas da época.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-black rounded-bl-xl rounded-tr-xl">
                    <h1 className="text-white flex justify-end p-4">Regras</h1>

                    <div>
                        <p className="text-white p-4">
                            O jogo de Xadrez é disputado por duas pessoas em um
                            tabuleiro 8x8, com 32 peças (16 para cada jogador)
                            de seis tipos diferentes. Cada tipo de peça move-se
                            de forma distinta. O objetivo do jogo é dar o
                            xeque-mate ao rei adversário, isto é, ameaçar o Rei
                            do oponente com a captura inevitável. Os jogos não
                            precisam terminar necessariamente com o xeque-mate
                            pois os jogadores podem desistir a qualquer momento
                            se acreditarem que perderão a partida. Além disso,
                            existem várias formas de um jogo terminar empatado.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
