import { useState, useEffect } from 'react';
import data from '../data/stickers.json';
import { type Card } from '../components/sticker';

const STORAGE_KEY = 'album';

export function useAlbum() {
    const [album, setAlbum] = useState<Card[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            setAlbum(JSON.parse(saved));
        } else {
            setAlbum(data);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        }
    }, []);

    function unlockCard(id: string) {
        setAlbum(prev => {
            const updated = prev.map(card =>
                card.id === id ? { ...card, isVisible: true } : card
            );
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            return updated;
        });
    }

    function isAlbumComplete(): boolean {
        return album.length > 0 && album.every(card => card.isVisible);
    }

    function getRandomCard(): Card {
        return album[Math.floor(Math.random() * album.length)];
    }


    return { album, unlockCard, getRandomCard, isAlbumComplete };
}
