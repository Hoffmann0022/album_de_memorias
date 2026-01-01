import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import * as htmlToImage from "html-to-image";

import { useAlbum } from "../hooks/useAlbum";

export function PrintCard() {
    const { album } = useAlbum()
    const { id } = useParams()
    const navigate = useNavigate()
    const cardRef = useRef(null);

    const card = album.find(a => a.id === id)

    const downloadImage = async () => {
        if (!cardRef.current) return;

        try {
            const dataUrl = await htmlToImage.toPng(cardRef.current, {
                quality: 1,
                pixelRatio: 2,
            });

            const link = document.createElement("a");
            link.download = `card-${card && card.id}.png`;
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error("Erro ao gerar imagem", error);
        }
    };
    return (
        <>
            {
                card && (

                    <main className="min-h-screen h-auto overflow-x-clip text-text bg-paper flex flex-col items-center py-5 px-5">

                        <div className="w-full h-full flex flex-col items-center">
                            <h1 className="text-2xl">Álbum de memórias</h1>

                            <div className="w-[90%] max-w-250 min-h-px rounded-2xl bg-border my-5"></div>

                            <div className="w-[90%] max-w-300 mb-15 lg:hover:underline flex">
                                <a href='' onClick={() => navigate('/')}><i className="bi bi-chevron-left"></i>Voltar</a>
                            </div>

                            <div className="h-full w-full flex flex-col gap-10 justify-center items-center">

                                <div ref={cardRef} key={card.id} className='flex flex-col justify-center items-start w-[95%] max-w-120 gap-5 py-5 px-5 mb-20 bg-card rounded-xs shadow-polaroid'>

                                    <div className='w-full h-100 sm:h-120 lg:h-130 xl:h-150 bg-origin-border bg-cover bg-center bg-no-repeat rounded-xs mb-10' style={{ backgroundImage: `url(${card.image})` }}></div>
                                    
                                    <div className='flex flex-col gap-1'>
                                        <p className="text-love">{card.place}</p>
                                        <p className='text-[14px] text-text-muted'>{card.date}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-full flex flex-col justify-center items-center">
                                <div onClick={downloadImage} className="flex flex-col justify-center items-center bg-love-soft px-6 py-3 mb-20 rounded-3xl shadow-polaroid cursor-pointer lg:hover:bg-love transition duration-400 ease-in-out">
                                    <p className="flex gap-3"><i className="bi bi-download"></i> Baixar imagem</p>
                                </div>
                            </div>
                        </div>

                    </main>
                )
            }
        </>
    )
}