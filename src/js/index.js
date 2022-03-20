/*
quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem 

para isto vamos precisar trabalha com dois elemenos
1 - listagem
2 - cartão do pokémon

precisamos criar duas variaves no js para trabalhar com dois elementos da tela
*/



// variaveis
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    // evento de clique na listagem de pokemon

    pokemon.addEventListener('click', () => {
    // remover a classe aberto só do cartao q esta aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    // pegar o id do pokemon da listagem com um clicar para saber qual cartão mostrar
    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir) 
    cartaoPokemonParaAbrir.classList.add('aberto')

    // remover a classe ativo que marca o pokemon selecionado
    const PokemonAtivoNaListagem = document.querySelector('.ativo')
    PokemonAtivoNaListagem.classList.remove('ativo')

    // adicionar a classe ativo no item da lista selecionado
    const pokemonSelecionadoDaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoDaListagem.classList.add('ativo') 


    })
})