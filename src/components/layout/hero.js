import Image from "next/image";
export default function Hero() {
    return (
    <section className="grid grid-cols-2">
        <div>
            <h1 className="text-4xl font-semibold">
                Life if Better with a Bowl of Ramen
            </h1>
            <p className="mt-4">Ramen is the missing piece that makes every day complete, a simple yet delicious joy in liofe
            </p>
        </div>
        <div className="relative">
            <Image src={'/ramen.png'} layout={'fill'} objectFit={'contain'} alt ={'ramen'} />
        </div>
    </section>
 );
}