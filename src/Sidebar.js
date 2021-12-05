export default function Sidebar(){
    return (
        <div class="sidebar">
           
            <Usuario img='catanacomics.svg' strong='catanacomics' nome="Catana" />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {Sugestao}

            </div>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Usuario({img, strong, nome}){
    return (
        <div class="usuario">
            <img src={`assets/img/${img}`} />
            <div class="texto">
                <strong>{strong}</strong>
                {nome}
            </div>
        </div>
    )
}

const array = [{img: 'bad.vibes.memes.svg', nome: 'bad.vibes.memes', razao: 'Segue você'},
{img: 'chibirdart.svg', nome: 'chibirdart', razao: 'Segue você'},
{img: 'razoesparaacreditar.svg', nome: 'razoesparaacreditar', razao: 'Novo no Instagram'},
{img: 'adorable_animals.svg', nome: 'adorable_animals', razao: 'Segue você'},
{img: 'smallcutecats.svg', nome: 'smallcutecats', razao: 'Segue você'}]
const Sugestao = array.map(i => {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${i.img}`} />
                <div class="texto">
                    <div class="nome">{i.nome}</div>
                    <div class="razao">{i.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
})