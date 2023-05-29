import styled from "styled-components"
import Image from "next/image";
import Form from "../src/components/Formulario";
import Logo from "../public/assets/logo.svg";

const StyledMain = styled.section`

    .flex{
        display: flex;
    }

    #page{
        height: 100vh;
    }

    #page > * {
        width: 50%;
    }

    #page > div {
        padding: 4rem 11.2rem;
    }

    img{
        width: 100%;
        object-fit: cover;
    }

    header img{
        width: 16rem;
        height: 5.4rem;
    }

    main{
        margin-top: 11.4rem;
        max-width: 38.4rem;
    }

    @media (max-width: 900px){
        #page > *{
            width: 100%;            
        }


        #page > img{
            display: none;
        }

        #page > div{
            padding: 11rem;
        }

        main{
            max-width: 100%
        }
    }


    @media (max-width: 600px){
        #page > div{
            padding: 4rem;
        }
    }


`;

export default function HomeScreen() {
    return (
        <StyledMain>

            <div className="flex" id="page">
                <div>
                    <header>
                        <Image src={Logo}/>
                    </header>
                    <main>
                        <Form />
                    </main>
                </div>
                <img src="../assets/bg.jpg" alt="Imagem" />
            </div>


        </StyledMain>
    )
}
