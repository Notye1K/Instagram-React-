export default function Posts(){
    return (
        <div class="posts">
            {Post}
        </div>
    )
}

const array = [{img:'meowed.svg', titulo:'meowed',video:false,
conteudo:'gato-telefone.svg',curtidoPorImg:'respondeai.svg', curtidoPor:'respondeai', numCurtidas:101.523,
comentarios: [{comentador:'Nome',comentario:'Lorem ipsum dolor sit'}], tempo:'2 dias'},
{img:'meowed.svg', titulo:'meowed',video:true, conteudo:'video',
curtidoPorImg:'respondeai.svg', curtidoPor:'respondeai', numCurtidas:200.523,
comentarios: [{comentador:'Nome',comentario:'Lorem ipsum dolor sit'},
{comentador:'Nome2',comentario:'Lorem 2 ipsum dolor sit'}], tempo:'2 horas'}, 
{img:'barked.svg', titulo:'barked',video:false, conteudo:'dog.svg', 
curtidoPorImg:'adorable_animals.svg', curtidoPor:'adorable_animals',
numCurtidas: 99.159, comentarios:[{comentador:'Nome',comentario:'Lorem ipsum dolor sit'},
{comentador:'Nome',comentario:'Lorem ipsum dolor sit'}, {comentador:'Nome3',comentario:'Lorem 3 ipsum dolor sit'}],
tempo:'2 minutos'}]

let imgVid

const Post = array.map(i => {
    const Comentarios = i.comentarios.map(i => {
        return (
            <div class="comentario">
                <p><strong>{i.comentador}</strong> {i.comentario} </p>
                <ion-icon name="heart-outline"></ion-icon>
            </div>
        )
    })
    if(i.video){
        imgVid =   <video controls autoplay muted>
                        <source src={`assets/video/${i.conteudo}.mp4`} type="video/mp4"/>
                        <source src={`assets/video/${i.conteudo}.ogv`} type="video/ogv"/>
                        Your browser does not support the video tag.
                    </video>
        
    }
    else{
        imgVid =  <img src={`assets/img/${i.conteudo}`} />
    }

        return (
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={`assets/img/${i.img}`} />
                        {i.titulo}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    {imgVid}
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={`assets/img/${i.curtidoPorImg}`} />
                        <div class="texto">
                            Curtido por <strong>{i.curtidoPor}</strong> e <strong>outras {i.numCurtidas} pessoas</strong>
                        </div>
                    </div>

                    <div class="comentarios">
                            {Comentarios}
                            <span>Há {i.tempo}</span>
                        </div>
                        <div class="comentar">
                            <ion-icon name="happy-outline"></ion-icon>
                            <input type="text" placeholder="Adicione um comentário..."/>
                            <a href="#" class="publi">Publicar</a>
                        </div>
                </div>
            </div>
    )
})