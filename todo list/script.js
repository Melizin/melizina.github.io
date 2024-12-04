const button = document.querySelector('.butao')
const input = document.querySelector('.zion')
function listaCompleta = document.querySelector('.task')


let minhaListDeItes = []

function adicionarNovaTarefa() {
    minhaListDeItes.push(input.value)

    mostrarTarefas()

}
function mostrarTarefas() {

    let novaLi = ''

    // ['comprar café', 'estudar']
    adicionarNovaTarefa.forEach(tarefa => {

        novaLi = novaLi + `
 <li class="lista">
   <img src="img/checked.png" alt="checked">
  <p>${tarefa}</p>
  <img src="img/trash.png" alt="lixo">
 </li>
`


    })


    listaCompleta.innerhtml = novaLi
}

button.addEventListener('click', adicionarNovaTarefa)