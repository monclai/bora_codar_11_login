import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import EyeOff from "../../public/assets/eye-off.svg";
import Eye from "../../public/assets/eye.svg";

const StyledForm = styled.div`

headline{
    max-width: 35rem;
}

h1{
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 5.5rem;
    color: #1E293B;
}

p{
    color: #475569;
    margin-top: 1.6rem;
}

label{
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;

    color: #1E293B;
}

input::placeholder{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;

    color: #94A3B8;
}

form{
    margin-top: 4rem;
}

input{
    width: 100%;
    background: #FFF;

    border: .1rem solid #E2E8F0;
    border-radius: .4rem;

    padding: 1.6rem 1.2rem;

    margin-top: .8rem;

    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;

    /* Gray-800 */

    color: #1E293B;
}

.input-wrapper{
    position: relative;
}

.input-wrapper + .input-wrapper{
    margin-top: 1.6rem;
}

.label-wrapper{
    display: flex;
    justify-content: space-between;
}

button{
    all: unset;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 2.4rem;
    background: #7C3AED;
    border-radius: .4rem;
    width: 100%;

    font-weight: bold;
    color: #fff;

    margin-block: 3.2rem;

}

button:focus{
    outline: .2rem solid black;
}

button:hover{
    background: #9F67FF;
}

.eye{
    width: 2rem;
    height: 2rem;

    position: absolute;
    top: 55%;
    right: 5%;
}

.hide{
    display: none;
}

a{
    text-decoration: none;
    color: #7C3AED;
}

a:hover{
    text-decoration: underline;
}

label+a{
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
}

.create-account{
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;

    /* Gray-600 */

    color: #475569;
}

input:focus,
input:hover{
    border: 1px solid #7C3AED;
    outline: 0;
}


input:disabled{
    opacity: .35;
}

/* input:invalid{
    border: 1px solid #ED3A5A;
} */

`;

export default function Form() {

    const togglePassword = () => {
        document.querySelectorAll(".eye").forEach((eye) => {
            eye.classList.toggle("hide");
        });

        const type = senha.getAttribute("type") == 'password' ? "text" : "password";

        senha.setAttribute("type", type);
    }

    return (
        <StyledForm>
            <div className="headline">
                <h1>Acesse a plataforma</h1>
                <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
            </div>
            <form> 
                <div className="input-wrapper">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" required placeholder="Digite seu e-mail" />
                </div>

                <div className="input-wrapper">
                    <div className="label-wrapper">
                        <label htmlFor="senha">Senha</label>
                        <Link href="/#">Esqueceu a senha?</Link>
                    </div>
                    <input type="password" name="senha" id="senha" placeholder="Digite sua senha" />
                    <Image className="eye" src={EyeOff} width="auto" height="auto" alt="icone ocultar" onClick={togglePassword} />
                    <Image className="eye hide" src={Eye} alt="icone mostrar" onClick={togglePassword} />
                </div>

                <button type="submit">Entrar</button>

                <div className="create-account">
                    Ainda não tem uma conta?
                    <Link href="/#">Inscreva-se</Link>
                </div>
            </form>
        </StyledForm>
    );
}
