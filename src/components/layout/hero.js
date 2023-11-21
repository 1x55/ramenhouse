import Image from "next/image";
export default function Hero() {
    return (
    <section>
        <h1>Life if Better with a Bowl of Ramen</h1>
        <p>Ramen is the missing piece that makes every day complete, a simple yet delicious joy in liofe
        </p>
        <Image src={'/ramen.png'} layout={'fill'} objectFit={'contain'} alt ={'ramen'} />
    </section>
 );
}