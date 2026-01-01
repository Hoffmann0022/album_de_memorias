interface InformationCardProps {
  onClose: () => void;
}

export function InformationCard( {onClose} : InformationCardProps) {

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#3b2f1fb6] flex flex-col justify-center items-center" >
            <div className="w-[80vw] h-[70vh] sm:h-auto sm:overflow-y-auto max-w-150 overflow-y-scroll py-5 px-7 rounded-2xl flex flex-col justify-start items-center bg-paper">
                <h1>LEIA, POR FAVOR!!</h1>

                <div className="w-[95%] max-w-250 min-h-px h-px rounded-2xl bg-border my-5"></div>

                <p>
                    Amor, como eu sei que provavelmente tu vai ver esse site sem mim, então vou me prevenir e explicar aqui.
                    <br /><br />
                    Eu pensei bastante se tu iria gostar de um presente assim, porque normalmente as pessoas dão coisas manuais,
                    cadernos, quadros, fotos físicas, mas não sou assim. Então pensei que seria ideal usar minhas habilidades como programador.
                    <br /><br />
                    Este site simula um "álbum de figurinhas" onde cada figurinha representa um momento especial nosso, contendo uma foto, data e local de cada foto.
                    Como um álbum comum, tu precisa completar ele, para isso tu vai na página de "Figurinhas" onde tu ganha uma figurinha aleatória, e assim tu vai completando ele.
                    <br /><br />
                    Particularmente eu achei essa ideia genial, espero que tu goste tanto quanto eu gostei, pois idealizei, preparei e fiz cada linha de código com muito carinho e amor.
                </p>
                
                <div role="button" className="bg-love-soft py-2 px-6 rounded-3xl my-7 cursor-pointer lg:hover:bg-love transition duration-400 ease-in-out " onClick={onClose}>Começar</div>
            </div>
        </div>
    )
}