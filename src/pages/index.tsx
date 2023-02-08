import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from "../assets/1.jpg"
import camiseta2 from "../assets/2.jpg"
import camiseta3 from "../assets/3.jpg"

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
