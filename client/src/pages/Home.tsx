import CardSlider from "../components/sections/CardSlider"
import Slider from "../components/sections/Slider"
import CreateCharacter from "../components/sections/createCharacter"

function Home() {
  return (
    <main className="bg-gradient-to-bl from-blue-400 to-blue-600">
      <section>
        <Slider />
      </section>
      <section>
        <CardSlider />
      </section>
      <section>
        <CreateCharacter />
      </section>
    </main>
  )
}

export default Home
