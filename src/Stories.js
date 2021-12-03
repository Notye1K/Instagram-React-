export default function Stories(){
    return(
        <div class="stories">
            {Story}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

const array = [{img: '9gag.svg', titulo: '9gag'},{img: 'meowed.svg', titulo: 'meowed'},{img:'barked.svg', titulo: 'barked'},{img: 'nathanwpylestrangeplanet.svg', titulo: 'nathanwpylestrangeplanet'}, {img:'wawawicomics.svg', titulo: 'wawawicomics'},{img: 'respondeai.svg', titulo: 'respondeai'},{img: 'filomoderna.svg', titulo: 'filomoderna'},{img: 'memeriagourmet.svg', titulo: 'memeriagourmet'}]
const Story = array.map(i => {
    return (
    <div class="story">
        <div class="imagem">
            <img src={`assets/img/${i.img}`} />
        </div>
        <div class="usuario">
            {i.titulo}
        </div>
    </div>)
})