export interface Card {
    id: string
    image: string
    date: string
    place: string
    isVisible: boolean
}

export function Sticker({ id, image, date, place, isVisible }: Card) {
    return (
        <>
            {
                isVisible ? (
                    <div key={id} className='flex flex-col justify-center items-start gap-5 py-5 px-5 bg-card rounded-xs shadow-polaroid cursor-pointer lg:hover:scale-103 transition-all duration-400'>

                        <div className='w-full h-100 sm:h-120 lg:h-130 xl:h-150 bg-origin-border bg-cover bg-center bg-no-repeat rounded-xs' style={{ backgroundImage: `url(${image})` }}></div>

                        <div className='flex flex-col gap-5'>
                            <p className='text-text-muted'>#{id}</p>
                            <div className='flex flex-col gap-1'>
                                <p><i className="bi bi-geo-alt text-love"></i> {place}</p>
                                <p className='text-[14px] text-text-muted'>{date}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div key={id} className='flex flex-col justify-center items-start gap-5 py-5 px-5 bg-card rounded-xs shadow-polaroid'>

                        <div className='w-full h-100 sm:h-120 lg:h-130 xl:h-150 bg-border rounded-xs'></div>

                        <div className='flex flex-col gap-5'>
                            <p className='h-5 w-6 bg-border'></p>
                            <div className='flex flex-col gap-1'>
                                <p className='h-5 w-50 bg-border'></p>
                                <p className='h-5 w-20 bg-border'></p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}