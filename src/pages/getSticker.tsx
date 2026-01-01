import { useNavigate } from "react-router-dom"
import { useState } from "react";

import { Sticker} from "../components/sticker";
import { useAlbum, type AlbumCard } from "../hooks/useAlbum";

export function GetSticker() {
    const { unlockCard, getRandomCard, isAlbumComplete } = useAlbum();
    const [card, setCard] = useState<AlbumCard | null>(null);
    const [message, setMessage] = useState('');

    const navigate = useNavigate()

    function draw() {
        const random = getRandomCard();
        if (isAlbumComplete()) {
            setMessage(
                'Álbum completo! Cada figurinha aqui guarda um momento único contigo.'
            );
            return;
        }

        if (random && random.isVisible) {
            setMessage('Figurinha repetida! Mas cada lembrança contigo continua sendo especial.');
            setCard(random);
            return;
        }

        unlockCard(random && random.id);
        setCard({ ...random, isVisible: true });
        setMessage('Parabéns! Você ganhou uma nova figurinha.');
    }

    return (
        <main className="min-h-screen overflow-x-clip text-text bg-paper flex flex-col justify-between items-center py-5 px-5">
            
            <div className="w-screen flex flex-col justify-center items-center">
                <h1 className="text-2xl">Álbum de memórias</h1>

                <div className="w-[80%] max-w-250 h-px rounded-2xl bg-border my-5"></div>

                <div className="flex justify-center items-center gap-3 bg-love-soft py-1 px-1 rounded-3xl">
                    <div className="py-2 px-4 cursor-pointer" onClick={() => navigate('/')}>Álbum</div>
                    <div className="bg-love py-2 px-6 rounded-3xl" >Figurinhas</div>
                </div>
            </div>

            <div className="grid grid-cols-1 max-w-125 gap-3 justify-center items-center w-full my-7 mx-5">
                {
                    card && (
                        <Sticker id={card.id} date={card.date} image={card.image} place={card.place} isVisible={true} onClick={() => navigate(`/figurinha/${card.id}`)}/>
                    )
                }
                {
                    message && <p className="mt-3 text-center">{ message }</p>
                }

            </div>

            <div className="h-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center bg-love-soft px-6 py-3 mb-20 rounded-3xl shadow-polaroid cursor-pointer lg:hover:bg-love transition duration-400 ease-in-out" onClick={draw}>
                    <p>Clique para ganhar uma figurinha</p>
                </div>
            </div>
        </main>
    )
}