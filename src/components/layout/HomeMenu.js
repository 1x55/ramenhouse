import Image from "next/image";
import MenuItem from "../menu/MenuItem";

export default function HomeMenu() {
    return (
    <section className="">
        <div className="absolute h-full left-0 right-0 w-full justify-start">
            <div className="absolute left-0 -top-20 -z-10 text-left">
            <Image src={'/ramen.png'} width={109} height={189} alt ={'ramen'} />
            </div>

            <div className="absolute -top-[30px] right-0 -z-10">
            <Image src={'/ramen.png'} width={109} height={189} alt ={'ramen'} />
            </div>
        </div>
       <div className="text-center">    
        <h3 className="uppercase text-gray-500 font-semibold leading-4">
            Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
       </div>

        <div className='grid grid-cols-3 gap-4'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </section>
    );
}