import { Sticker } from "../components/sticker";
import { InformationCard } from "../components/informationCard";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAlbum } from "../hooks/useAlbum";

export function Album() {
    const { album } = useAlbum();
    const navigate = useNavigate()
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        const alreadySeen = localStorage.getItem("seenInformationCard");

        if (!alreadySeen) {
            setShowInfo(true);
        }
    }, []);

    function handleCloseInfo(): void {
        localStorage.setItem("seenInformationCard", "true");
        setShowInfo(false);
    }
    return (
        <main className="min-h-screen text-text relative bg-paper flex flex-col items-center py-5 px-5 lg:px-10 xl:px-20">
            {showInfo && <InformationCard onClose={handleCloseInfo} />}
            <h1 className="text-2xl">Álbum de memórias</h1>

            <div className="w-[80%] max-w-250 h-px rounded-2xl bg-border  my-5"></div>

            <div className="flex justify-center items-center gap-3 bg-love-soft py-1 px-1 rounded-3xl">
                <div className="bg-love py-2 px-4 rounded-3xl">Álbum</div>
                <div className="py-2 px-4 cursor-pointer" onClick={() => navigate('/figurinha')}>Figurinhas</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-10 gap-3 justify-center items-center w-full my-7 mx-5">
                {album.map(card => (
                    <Sticker key={card.id} {...card} />
                ))}
            </div>
        </main>
    )
}