type HeroProps = {
    imageUrl: string;
    flavorName: string;
}

export default function Hero({ imageUrl, flavorName }: HeroProps) {
    return (
        <section className='container mx-auto flex flex-col lg:flex-row items-center lg:gap-12 p-8 lg:p-12'>
            <img
                src={imageUrl} 
                alt={flavorName}
                className="object-contain h-96"
            />
            <h1 className="text-5xl lg:text-[8rem] font-bold mb-16">
                {flavorName}
            </h1>      
        </section>
    )
}