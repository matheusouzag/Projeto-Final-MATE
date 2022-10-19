import "swiper/css";
import type { NextPage } from "next";
import Flipcard from "../components/Flip-card";
import { Swiper, SwiperSlide } from "swiper/react";
import SecaoJogadas from "../components/SecaoJogadas";

/* Observação: por algum motivo não estavamos conseguindo 
importar os arquivos css, logo a criação de classes está no global.css */

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
                    <button className="absolute top-1/2 right-1/2 text-center font-bold text-xs bg-white rounded-sm px-4 translate-x-2/3 -translate-y-2/3 lg:py-1 lg:px-8 lg:text-lg lg:rounded-2xl hover:bg-gray-200 hover:">
                        <a href="https://www.chess.com/home" target="_blank">
                            Juntar-se
                        </a>
                    </button>
                </div>
            </section>

            <section>
                <div>
                    <div className="md:px-24 lg:px-24 p-8">
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

                <div className="object-contain flex justify-end pr-4 mb-4">
                    <img
                        src="img/logo-jogadas.png"
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

            {/* sessãojogadas */}
            <section id="jogadas">
                <div
                    className="flex flex-row p-4 justify-between w-full border-b-2 border-black"
                    style={{ fontFamily: "Spectral" }}
                >
                    <h1 className="text-black text-2xl font-bold">Jogadas</h1>
                    <img
                        className="object-contain"
                        src="img/logo-jogadas.png"
                        alt="Simbolos xadrez"
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
                            img="img/garfo.jpeg"
                            title=""
                            description="O Garfo ocorre quando uma peça ataca duas ou mais peças
                        adversárias ao mesmo tempo. Quando isso acontece,
                        normalmente uma das peças será capturada após seu oponente
                        mover a peça de maior valor para salvá-la."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SecaoJogadas
                            img="img/espeto.png"
                            title=""
                            description="O espeto: conceito semelhante ao Garfo, no
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
                            description="Cravar: Em algumas situações as peças podem ficar
                            cravadas, quando não podem se mover devido à
                            posição do rei. Se um Bispo tem uma linha direta
                            na direção do Rei e houver apenas um Cavalo
                            entre eles, o Cavalo não pode se mover até que o
                            Rei saia dessa linha de ameaça."
                        />
                    </SwiperSlide>
                </Swiper>
            </section>

            <section>
                <div
                    className="text-white flex flex-col  bg-black  p-4 justify-center items-center rounded-md"
                    style={{ fontFamily: "Spectral" }}
                >
                    <div className="p-4 text-3xl">
                        <h1 text-3xl>Aula com membros (Mensal)</h1>
                    </div>

                    <div
                        className="flex flex-row justify-around w-full "
                        style={{ fontFamily: "Spectral" }}
                    >
                        <div className="flex flex-col justify-center  hover:py-8 hover:px-18 duration-200 cursor-pointer text-white">
                            <div className="flex justify-center">
                                <img
                                    className="w-fit flex justify-center"
                                    src="img/peao-branco.png"
                                />
                            </div>
                            <p className="flex justify-center">Plano</p>
                            <p className="flex justify-center">Iniciante</p>
                            <p className="flex justify-center">R$ 30</p>
                        </div>

                        <div className="flex flex-col  justify-center  rounded-md hover:py-8 hover:px-18 duration-200 cursor-pointer text-white">
                            <div className="flex justify-center">
                                <img
                                    className="w-fit"
                                    src="img/cavalo-branco.png"
                                />
                            </div>
                            <p className="flex justify-center">Planos</p>
                            <p className="flex justify-center">Intermediário</p>
                            <p className="flex justify-center">R$ 45</p>
                        </div>

                        <div className="flex flex-col justify-center  rounded-md hover:py-8 hover:px-18 duration-200 cursor-pointer text-white">
                            <div className="flex justify-center">
                                <img
                                    className="w-fit"
                                    src="img/rei-branco.png"
                                />
                            </div>
                            <p className="flex justify-center">Plano</p>
                            <p className="flex justify-center">Avançado</p>
                            <p className="flex justify-center">R$ 60</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="space-y-3 sm:flex sm:justify-center">
                    <div className="sm:flex sm:flex-wrap">
                        <div className="flex flex-row justify-between w-full border-b-2 border-black p-4">
                            <h1
                                className="font-extrabold text-2xl"
                                style={{ fontFamily: "Spectral" }}
                            >
                                Grandes mestres
                            </h1>
                            <img
                                className="object-contain"
                                src="img/logo-jogadas.png"
                                alt="Simbolos xadrez"
                            />
                        </div>
                        <div className="space-y-3 sm:space-y-0 sm:flex sm:flex-row sm:justify-center sm:px-40 mt-4">
                            <img
                                width={432}
                                height={298}
                                className="rounded-lg "
                                src="/img/mestres/magnus.jpg"
                                alt=""
                            />
                            <p
                                className="p-4 md:px-10 lg:px-40 text-white bg-black rounded-lg sm:items-center h-full font-light"
                                style={{ fontFamily: "Spectral" }}
                            >
                                Sven Magnus Øen Carlsen (Tønsberg, 30 de
                                novembro de 1990) é um grande mestre de xadrez
                                norueguês, campeão mundial de xadrez clássico
                                desde 2013, foi campeão mundial de xadrez rápido
                                em 2014, 2015 e 2019 e campeão mundial de xadrez
                                blitz nos anos de 2009, 2014, 2017, 2018 e 2019.
                                Em maio de 2014, alcançou o seu rating (método
                                estatístico utilizado para se calcular a força
                                relativa entre jogadores de xadrez) máximo de
                                2882, o maior da história até o momento. Em 1 de
                                janeiro de 2010, com 19 anos e 32 dias de idade,
                                Carlsen tornou-se a pessoa mais jovem a assumir
                                o topo do ranking mundial. Em novembro de 2021
                                começou a disputar novamente o título mundial,
                                com o pretendente Ian Nepomniachtchi.
                            </p>
                        </div>
                        <div className="space-y-3 sm:space-y-0 sm:flex sm:flex-row-reverse  sm:justify-center sm:px-40 mt-4">
                            <img
                                width={432}
                                height={298}
                                className="rounded-lg"
                                src="/img/mestres/bobby.jpg"
                                alt=""
                            />
                            <p
                                className="p-4 md:px-10 lg:px-40  text-white bg-black rounded-lg font-light"
                                style={{ fontFamily: "Spectral" }}
                            >
                                Fischer demonstrava uma habilidade natural para
                                o xadrez desde cedo. Aos 13 anos, venceu a
                                chamada "Partida do Século" contra Donald Byrne.
                                Começando em 1957, aos 14 anos, participou de
                                oito Campeonatos de Xadrez dos Estados Unidos,
                                vencendo todos com pelo menos 1 ponto de
                                vantagem sobre seus oponentes. Aos 15, Fischer
                                tornou-se o grande mestre de xadrez mais novo da
                                história até então e o candidato mais novo ao
                                campeonato mundial. Aos 20 anos de idade,
                                Fischer venceu o Campeonato dos Estados Unidos
                                de 1963–64 com uma pontuação de 11/11, a única
                                pontuação perfeita da história do torneio. Seu
                                livro My 60 Memorable Games, publicado em 1969,
                                tornou-se um ícone da literatura de xadrez.
                                Venceu o Torneio Interzonal de 1970 com uma
                                distância recorde de 3½ pontos sobre o segundo
                                colocado, vencendo 20 partidas consecutivas,
                                incluindo duas com o placar perfeito de 6–0 no
                                Torneio de Candidatos de 1971, algo inédito na
                                história da competição. Em julho de 1971,
                                tornou-se o primeiro número 1 oficial do ranking
                                FIDE.
                            </p>
                        </div>
                        <div className="space-y-3 sm:space-y-0 sm:flex sm:flex-row  sm:justify-center sm:px-40 mt-4 font-light">
                            <img
                                width={432}
                                height={298}
                                className="rounded-lg"
                                src="/img/mestres/kasparov.jpg"
                                alt=""
                            />
                            <p
                                className="p-4 md:px-10 lg:px-40  text-white bg-black rounded-lg "
                                style={{ fontFamily: "Spectral" }}
                            >
                                Garry Kímovich Kasparov é um Grande Mestre e
                                ex-campeão mundial de xadrez, escritor e
                                ativista político nascido na República
                                Socialista Soviética do Azerbaijão, União
                                Soviética (atual Azerbaijão). É considerado por
                                muitos o maior enxadrista de todos os tempos. As
                                conquistas de Kasparov incluem ser classificado
                                como o número um do mundo de acordo com o rating
                                ELO quase continuamente de 1986 até sua
                                aposentadoria em 2005. Ele mantém, também, o
                                recorde de Chess Oscars, tendo recebido o prêmio
                                onze vezes.Ele se iniciou no estudo do xadrez
                                após propor uma solução para um problema criado
                                por seus pais. Seu pai morreu de leucemia quando
                                ele tinha sete anos. Aos 12, ele adotou o
                                sobrenome armeniano de sua mãe, Kasparyan,
                                modificando-o para uma versão mais russa,
                                Kasparov.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
