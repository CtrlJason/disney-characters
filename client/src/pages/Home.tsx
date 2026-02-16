import CardSlider from "../components/sections/CardSlider"
import Slider from "../components/sections/Slider"
import CreateCharacter from "../components/sections/createCharacter"

function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
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
