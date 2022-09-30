import Content from "../components/content/content"
import Image from "../components/image/image"

const { default: Card } = require("../components/card/card")

const Home = () => {
  return (
    <Card>
      <Image />
      <Content />
    </Card>
  )
}

export default Home