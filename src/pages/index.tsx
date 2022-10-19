import type { NextPage } from "next";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SecaoJogadas from "../components/SecaoJogadas";

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

            {/* sessãojogadas */}
            <div
                className="flex flex-row p-4 justify-between w-full border-b-2 border-black"
                style={{ fontFamily: "Spectral" }}
            >
                <h1 className="text-black text-2xl font-bold">Jogadas</h1>
                <img
                    className="object-contain"
                    src="img/logo-jogadas.png"
                    alt="Simbulos xadrez"
                />
            </div>
            <Swiper
                spaceBetween={150}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <SecaoJogadas
                        img="img/grafos.jpeg"
                        title=""
                        description="O Garfo ocorre quando uma peça ataca duas ou mais peças
                    adversárias ao mesmo tempo. Quando isso acontece,
                    normalmente uma das peças será capturada após seu oponente
                    mover a peça de maior valor para salvá-la."
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <SecaoJogadas
                        img="img/espeto.jpeg"
                        title=""
                        description="O conceito do espeto é semelhante ao Garfo, no
                        qual a intenção é atacar uma peça e quando ela
                        se mover, capturar outra que estava atrás dela.
                        A diferença do Garfo é que as duas peças não são
                        atacadas ao mesmo tempo."
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <SecaoJogadas
                        img="img/cravar.jpeg"
                        title=""
                        description=" Em algumas situações as peças podem ficar
                        cravadas, quando não podem se mover devido à
                        posição do rei. Se um Bispo tem uma linha direta
                        na direção do Rei e houver apenas um Cavalo
                        entre eles, o Cavalo não pode se mover até que o
                        Rei saia dessa linha de ameaça."
                    />
                </SwiperSlide>
            </Swiper>

            {/*planos mensais*/}
            <section>
                <div
                    className="text-white flex flex-col  bg-black m-4  p-4 justify-center items-center rounded-md"
                    style={{ fontFamily: "Spectral" }}
                >
                    <div className="p-4 text-3xl">
                        <h1 text-3xl>Tenha aulas com membros (Mensal)</h1>
                    </div>

                    <div
                        className="flex flex-row justify-between w-full m-4 p-8"
                        style={{ fontFamily: "Spectral" }}
                    >
                        <div className="flex flex-col aling-center justify-center py-6 px-16 bg-white rounded-md hover:py-8 hover:px-18 duration-200 cursor-pointer text-black">
                            <img className="w-14" src="img/cavalo-branco.png" />
                            <p>Planos</p>
                            <p>Iniciante</p>
                            <p>R$ 30</p>
                        </div>

                        <div className="flex flex-col aling-center justify-center py-6 px-16 bg-white rounded-md hover:py-8 hover:px-18 duration-200 cursor-pointer text-black">
                            <img className="w-14" src="img/rainha-branca.png" />
                            <p>Planos </p>
                            <p>Intermediários</p>
                            <p>R$ 45</p>
                        </div>

                        <div className="flex flex-col aling-center justify-center py-6 px-16 bg-white rounded-md hover:py-8 hover:px-18 duration-200 cursor-pointer text-black">
                            <img className="w-14" src="img/peao-branco.png" />
                            <p>Planos</p>
                            <p>Avançados</p>
                            <p>R$ 60</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Grandes Mestres*/}

            <Swiper
                spaceBetween={150}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <section style={{ fontFamily: "Spectral" }}>
                        <div
                            className="h-[61rem] w-auto text-3.1 bg-cover rounded-md m-4 flex justify-between flex-col"
                            style={{
                                backgroundImage: `url('img/Bobby.jpeg')`,
                            }}
                        >
                            <div className="text-white  text-3xl font-bold py-20 px-36">
                                <p>Grandes Mestres</p>
                            </div>

                            <div className="text-black text-3xl font-bold bg-slate-100  rounded-md w-fit p-4 my-8 mx-8">
                                <p>Bobby Fisher</p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section style={{ fontFamily: "Spectral" }}>
                        <div
                            className="h-[61rem] w-auto text-3.1 bg-cover rounded-md m-4 flex justify-between flex-col"
                            style={{
                                backgroundImage: `url('img/Magnus.jpeg')`,
                            }}
                        >
                            <div className="text-white  text-3xl font-bold py-20 px-36"></div>
                            <div className="text-black text-3xl font-bold bg-slate-100  rounded-md w-fit p-4 my-8 mx-8">
                                <p>Magnus Carlsen</p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section style={{ fontFamily: "Spectral" }}>
                        <div
                            className="h-[61rem] w-auto text-3.1 bg-cover rounded-md m-4 flex justify-between flex-col"
                            style={{
                                backgroundImage: `url('img/Garry.jpeg')`,
                            }}
                        >
                            <div className="text-white  text-3xl font-bold py-20 px-36"></div>
                            <div className="text-black text-3xl font-bold bg-slate-100  rounded-md w-fit p-4 my-8 mx-8">
                                <p>Garry Kasparov</p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
export default Home;
