const filmes = [
    {
        titulo: "Vingadores",
        imagem: "https://static.wikia.nocookie.net/universocinematograficomarvel/images/d/d0/Theavengersnewposter.jpg/revision/latest?cb=20150705230227&path-prefix=pt",
        descricao: "Os maiores heróis da terra"
    },
    {
        titulo: "Batman",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/6vbxUh6LWHGhfuPI7GrimQaXNsQ.jpg",
        descricao: "As aventuras de Batman e Robin"
    },

    {
        titulo:"Homem-Aranha",
        imagem: "https://www.jwave.com.br//HLIC/8ab61b09bfe9e090d47eb26dcc802555.jpg",
        descricao: "O homem-aranha japônes"
    },
    {
        titulo:"The Boys",
        imagem:"https://image.tmdb.org/t/p/w600_and_h900_face/in1R2dDc421JxsoRWaIIAqVI2KE.jpg",
        descricao: "Série de super-hérois "
    },
    {
        titulo:"Os Simpsons",
        imagem:"https://www.themoviedb.org/t/p/w600_and_h900_face/1jGPgDDcmg3Xgs3WO8sfYfbnFoA.jpg",
        descricao: "Série de comédia"
    },
    {
        titulo:"Top gun",
        imagem:"https://media.themoviedb.org/t/p/original/dDrMtnVgtDeecIgNchb9F8JcO5w.jpg",
        descricao:"Filme de ação com Tom Cruise"
    }
]

const listaFilmes = document.getElementById("listaFilmes");



function verDetalhes(titulo) {
    Swal.fire ({
        title:titulo,
        text:"Mais informações do filme.",
        icon:"info"
    }) 
}

const campoBusca = document.getElementById("campoBusca");

campoBusca.addEventListener("input", () =>{
    const texto= campoBusca.value.toLowerCase()

    const filmesFiltrados = filmes.filter(filme =>
        filme.titulo.toLocaleLowerCase().includes(texto)
        )
        mostrarFilmes(filmesFiltrados)
})