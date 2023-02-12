import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
    return (
        <SuccessContainer>
            <h1>Compra efetuada!</h1>

            <ImageContainer>

            </ImageContainer>

            <p>Uhuul <strong>Daniel Major</strong>, sua <strong>Camiseta teste</strong> Já está a caminho de sua casa</p>

            <Link href="/">
                Voltar ao cátalogo
            </Link>
        </SuccessContainer>
    )
}