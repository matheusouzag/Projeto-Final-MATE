import type { NextPage } from "next";
import Flipcard from "../components/Flip-card";

/* Observação: por algum motivo não estavamos conseguindo 
importar os arquivos css, logo a criação de classes foi tudo no global.css */

const Home: NextPage = () => {
    return (
        <>
            <section>
                <div className="relative mt-2">
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
                    <button className="absolute top-1/2 right-1/2 text-center font-bold text-xs bg-white rounded-sm px-4 translate-x-2/3 -translate-y-2/3 lg:py-1 lg:px-8 lg:text-lg lg:rounded-2xl">
                        <a href="https://www.chess.com/home" target="_blank">
                            Juntar-se
                        </a>
                    </button>
                </div>
            </section>

            <section id="historia">
                <div>
                    <div className="md:px-24 lg:px-24 p-6">
                        <div className="sm:flex sm:flex-row-reverse sm:justify-center sm:space-y-4 sm:gap-4">
                            <div className=" grid grid-cols-2 grid-rows-2 gap-4 sm:w-1/2 lg:max-h-fit lg:max-w-sm">
                                <div className="col-span-2">
                                    <img
                                        src="img/historia-1.png"
                                        alt="16 peões envolta de um rei"
                                        className="h-full"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="img/historia-2.png"
                                        alt="Um rei preto solitário"
                                        className="h-full"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="img/historia-3.png"
                                        alt="Um rei preto e o rei branco derrubado"
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

                <div className="object-contain flex justify-end p-1">
                    <img
                        src="/img/icone-pecas.png"
                        alt="Todas as peças de xadrez alinhadas"
                    />
                </div>
            </section>

            <section id="regras">
                <div className="bg-black rounded-bl-xl rounded-tr-xl mx-auto px-6 text-white ">
                    <h1
                        className="flex justify-center  font-extrabold text-2xl p-4"
                        style={{ fontFamily: "Spectral" }}
                    >
                        Regras
                    </h1>
                    <div className="space-y-4 p-2 sm:flex sm:flex-row sm:p-0 sm:gap-14 sm:justify-center sm:pb-8 lg:pt-5 lg:px-24 2xl:px-72 2xl:gap-40">
                        <p
                            className="text-lg font-light sm:w-1/2 flex justify-center 2xl:items-center"
                            style={{ fontFamily: "Spectral" }}
                        >
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

                        <div className="grid grid-cols-3 grid-rows-2 gap-1 texto pb-4 sm:pb-0 lg:w-1/2 ">
                            <div>
                                <Flipcard
                                    imgPeca="/img/Pecas/peao.png"
                                    content="Peão: pode andar uma ou duas casas a frente, e captura na diagonal"
                                />
                            </div>
                            <div>
                                <Flipcard
                                    imgPeca="/img/Pecas/cavalo.png"
                                    content="O movimento corresponde ao “L”, sendo duas casas em linha reta e uma ao lado"
                                />
                            </div>
                            <div>
                                <Flipcard
                                    imgPeca="/img/Pecas/rainha.png"
                                    content="A rainha é capaz de movimentar em todas direções, quantas casas desejar"
                                />
                            </div>
                            <div>
                                <Flipcard
                                    imgPeca="/img/Pecas/bispo.png"
                                    content="O bispo consegue se mover diagonalmente"
                                />
                            </div>
                            <div>
                                <Flipcard
                                    imgPeca="/img/Pecas/torre.png"
                                    content="A torre pode se mover horizontalmente e verticalmente"
                                />
                            </div>
                            <div>
                                <Flipcard
                                    imgPeca="/img/Pecas/rei.png"
                                    content="O rei pode se mover em todas as direções, mas apenas uma casa"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="p-4 space-y-3 sm:px-40">
                    <h1>Grandes mestres</h1>
                    <div className="space-y-3 sm:flex sm:flex-row sm:justify-center">
                        <img
                            width={432}
                            height={298}
                            className="rounded-lg "
                            src="/img/mestres/magnus.jpg"
                            alt=""
                        />
                        <p className="p-4 sm:px-40 text-white bg-black rounded-lg ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Libero suscipit error inventore et voluptate
                            cumque iure porro voluptatum, necessitatibus amet
                            sint corporis optio assumenda maxime sapiente
                            debitis adipisci quasi, nam nostrum, minima
                            quibusdam natus totam incidunt sequi. Possimus illo
                            accusantium ipsum nihil inventore, quidem quibusdam
                            accusamus pariatur cum esse tempora necessitatibus
                            excepturi ducimus quod expedita, amet eligendi
                            itaque doloribus? Nesciunt voluptate incidunt cum
                            repellat atque magnam cupiditate sed repellendus
                            exercitationem aliquam? Debitis et cum aperiam culpa
                            quo odio rem placeat.
                        </p>
                    </div>
                    <div className="space-y-3 sm:flex sm:flex-row-reverse ">
                        <img
                            width={432}
                            height={298}
                            className="rounded-lg"
                            src="/img/mestres/bobby.jpg"
                            alt=""
                        />
                        <p className="p-4 sm:px-40  text-white bg-black rounded-lg ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tempora deleniti labore animi quam sapiente
                            officia repudiandae magni alias obcaecati odio!
                        </p>
                    </div>
                    <div className="space-y-3 sm:flex sm:flex-row">
                        <img
                            width={432}
                            height={298}
                            className="rounded-lg"
                            src="/img/mestres/kasparov.jpg"
                            alt=""
                        />
                        <p className="p-4 sm:px-40  text-white bg-black rounded-lg ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vero corrupti aut rem aspernatur dolor
                            ratione, velit praesentium? Officiis, nesciunt
                            deleniti!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
