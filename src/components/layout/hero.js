import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
    <section className="hero mt-6">
        <div className="py-12">
            <h1 className="text-4xl font-semibold">
                Life <br />is Better with a Bowl of&nbsp;<span className="text-primary">
                    Ramen
                </span>
            </h1>
            <p className="my-6 text-gray-500 text-sm">Ramen is the missing piece that makes every day complete, a simple yet delicious joy in life
            </p>
            {/* add button */}
            <div className="flex gap-4 text-sm">
                <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
                    Order now
                    <Right />
                </button>
                <button className="flex gap-2 py-2 text-gray-500 font-semi-bold">
                    Learn more
                    <Right />
                </button>
            </div>

        </div>
        <div className="relative">
            <Image src={'/ramen.png'} layout={'fill'} objectFit={'contain'} alt ={'ramen'} />
        </div>
    </section>
 );
}