import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
    <section className="grid grid-cols-2">
        <div>
            <h1 className="text-4xl font-semibold">
                Life if Better with a Bowl of Ramen
            </h1>
            <p className="my-4 text-gray-500">Ramen is the missing piece that makes every day complete, a simple yet delicious joy in liofe
            </p>
            {/* add button */}
            <div className="flex gap-4">
                <button className="bg-primary text-white px-8 py-2 rounded-full">
                    Order now
                    <Right />
                </button>
                <button>
                    Learn more
                </button>
            </div>

        </div>
        <div className="relative">
            <Image src={'/ramen.png'} layout={'fill'} objectFit={'contain'} alt ={'ramen'} />
        </div>
    </section>
 );
}