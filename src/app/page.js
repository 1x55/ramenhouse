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
      </section>
    </>
    )
}
