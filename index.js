function createProduto (arrayProduto){
    const ul=document.querySelector('.produtos')
    ul.innerHTML='';
    for(let i=0; i<arrayProduto.length; i++){
        const li= document.createElement('li');
        li.classList.add('produtos-box');

        const figure=document.createElement('figure');
        figure.classList.add('header-produto');
        
        const img= document.createElement('img');
        img.src=arrayProduto[i].img;

        figure.appendChild(img);

        const div=document.createElement('div');
        div.classList.add('body-produto');

        const span1=document.createElement('span');
        span1.setAttribute('id','tag-categoria');
        span1.innerText=arrayProduto[i].tag;

        const span2=document.createElement('span');
        span2.setAttribute('class','nome-produto');
        span2.innerText=arrayProduto[i].nome;

        const p=document.createElement('p');
        p.innerText=arrayProduto[i].descricao;

        const span3=document.createElement('span');
        span3.setAttribute('class','valor-produto');
        span3.innerText=arrayProduto[i].valor;

        const span4=document.createElement('span');
        span4.setAttribute('class','remove-botao');
        span4.innerText='Adicionar ao carrinho';
        span4.setAttribute('data-nome', arrayProduto[i].nome)

        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(p);
        div.appendChild(span3);
        div.appendChild(span4);

        li.appendChild(figure);
        li.appendChild(div);

        ul.appendChild(li);
    }
}
createProduto(itens);

/*------------Filtro-------------*/

function filtrar(event){
    const novoItem=[];
    const item= event.target.dataset.tag;
    const arrayItem=document.querySelectorAll('.item');
    
    
    if(item==='Todos'){
        createProduto(itens)
    } else{
        for(let i=0;i<itens.length;i++){
            if(itens[i].tag===item){
                novoItem.push(itens[i])
            }
        }
        createProduto(novoItem);
    }

    for(let i=0; i<arrayItem.length; i++){
        arrayItem[i].classList.remove('select');
    }
    event.target.classList.add('select');
}

const filtroCategoria = document.getElementById('categoria');
filtroCategoria.addEventListener('click', filtrar);

/*------------Pesquisa---------------- */

function pesquisaProduto(){
    const input=document.getElementById('pesquisa');
    const novoItem=[];

    for(let i=0; i<itens.length; i++){
        if(itens[i].nome.indexOf(input.value)!==-1){
            novoItem.push(itens[i]);
        }
    }
    createProduto(novoItem);
}
/* ele é sensitive case*/

const botao=document.getElementById('botaoPesquisa');
botao.addEventListener('click',pesquisaProduto)


/*--------------------Carrinho de Compras--------------------- */
function addCarrinho(event){
    console.log(event.target);
    const nome=event.target.dataset.nome;
    const ul= document.querySelector('.produto-carrinho');
   

    let index=undefined; /* o false, não deixava pegar o primeiro item, que dava 0*/
    for(let i=0; i<itens.length;i++){
        if(nome===itens[i].nome){
            index=i;
        }
    }
    
    if(index!== undefined){
    const li=document.createElement('li');
    li.setAttribute('class','produto-adicionado');
    li.setAttribute('data-index',index);

    const figure=document.createElement('figure');
    figure.setAttribute('class','img-carrinho');

    const img=document.createElement('img');
    img.src=itens[index].img;

    figure.appendChild(img);

    const div=document.createElement('div');
    div.setAttribute('class','descricao-carrinho');

    const span1=document.createElement('span');
    span1.setAttribute('class','nome-produto');
    span1.innerText=itens[index].nome;

    const span2=document.createElement('span');
    span2.setAttribute('class','valor-produto');
    span2.innerText=itens[index].valor;

    const span3=document.createElement('span');
    span3.setAttribute('class','remove-botao');
    span3.innerText='Remover produto';
    span3.setAttribute('data-index',index);

    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);

    li.appendChild(figure);
    li.appendChild(div);

    ul.appendChild(li);
    }
}

const botaoProduto=document.getElementById('produtos')
botaoProduto.addEventListener('click', addCarrinho)

/* function quantidadeProduto(){

}

function valorProdutoCarrinho(){

}

function removeCarrinho(event){

} */