import Header from "@/components/layout/header"
import Hero from "@/components/layout/hero"
import HomeMenu from "@/components/layout/HomeMenu"
import SectionHeaders from "@/components/layout/SectionHeaders"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
         subHeader={'Our story'}
         mainHeader={'About us'}
        />

        <div className="max-w-md mx-auto mt-4 text-gray-500 flex flex-col gap-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat suscipit tempore delectus explicabo sapiente aspernatur voluptatem, autem dignissimos velit molestiae, incidunt natus dolorum inventore alias quas aperiam atque expedita?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deserunt iure nostrum, voluptatum odio dicta delectus assumenda, molestias incidunt optio!</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, debitis. </p>
        </div>
      </section>

      {/* add contact section */}
      <section className="text-center my-8">
        <SectionHeaders 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'} 
        />
        <div className="mt-8">
          <a className="text-4xl" href="tel:+81123123123">
          +81 123 123 123 
          </a>
        </div>
      </section>
    </>
    )
}
