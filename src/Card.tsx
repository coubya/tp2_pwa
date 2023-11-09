function Card({name, description, imageUrl, children}: any) {
    return(
        <div className="w-[328px] h-[239px] relative">
            <div className="w-[328px] h-[239px] left-0 top-0 absolute bg-neutral-700 rounded-[20px]" />
            <div className="w-[296px] left-[19px] top-[73px] absolute text-white text-[32px] font-normal font-['Helvetica Neue']">{name}</div>
            <div className="w-[296px] h-28 left-[19px] top-[110px] absolute text-neutral-400 text-[32px] font-normal font-['Helvetica Neue']">{description}</div>
            <div className="w-[45px] h-[46px] left-[14px] top-[16px] absolute flex items-center justify-center">
                <img className="rounded-full object-cover" src={imageUrl} alt="Description de l'image" />
            </div>
        </div>
    )
}

export default Card