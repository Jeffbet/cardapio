document.addEventListener("DOMContentLoaded", function() {
    var accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(function(accordion) {
        var header = accordion.querySelector('.accordion-header');
        var content = accordion.querySelector('.accordion-content');

        header.addEventListener('click', function() {
            accordion.classList.toggle('active');
            if (accordion.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
     nextImage();
}, 3000)


function nextImage(){
count++;
if(count>3){
    count = 1;
}

document.getElementById("radio"+count).checked = true;

}

/*--------------------------------------------------------------------------------------------*/


/*aqui ficara script do botão*/

// Função para adicionar item aos pedidos

// Função para incrementar a quantidade

function incrementQuantity(inputId) {
    const input = document.getElementById(inputId);
    input.value = parseInt(input.value) + 1;

    // Atualizar o pedido quando a quantidade é alterada
    const productTitle = input.parentElement.parentElement.querySelector('.product-title').textContent;
    const productPrice = parseFloat(input.parentElement.parentElement.querySelector('.product-price').textContent.slice(2).replace(',', '.'));

    adicionarItem(productTitle, productPrice, inputId);
}


    // Variável para armazenar os pedidos
    let pedidos = [];

    function adicionarItem(productTitle, productPrice, quantity) {
        const totalItemPrice = productPrice * quantity;
        const item = {
            title: productTitle,
            price: productPrice,
            quantity: quantity,
            total: totalItemPrice
        };
        pedidos.push(item);
        atualizarPedidos();
        console.log('Item: %{nome}, Quantidade: ${quantidade}, Total: R$ ${totalItem.toFixed(2)}');
    }
    
    function removerItem(index) {
        pedidos.splice(index, 1);
        atualizarPedidos();
    }
    
    function atualizarPedidos() {
        const orderList = document.querySelector('.order-list');
        const totalValue = document.getElementById('total-value');
    
        orderList.innerHTML = '';
    
        let total = 0;
    
        pedidos.forEach((item, index) => {
            const listItem = document.createElement('li');
    
            // Criar elemento para o título do produto
            const productTitle = document.createElement('span');
            productTitle.textContent = `${item.title} - R$${item.price.toFixed(2)}`;
    
            // Criar elemento para a quantidade
            const quantity = document.createElement('span');
            quantity.textContent = ` x${item.quantity}`;
    
            // Criar botão de remover
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => {
                removerItem(index);
            });
    
            // Adicionar elementos à listItem
            listItem.appendChild(productTitle);
            listItem.appendChild(quantity);
            listItem.appendChild(removeButton);
    
            // Adicionar listItem à lista de pedidos
            orderList.appendChild(listItem);
    
            total += item.total;
        });
    
        totalValue.textContent = `R$${total.toFixed(2)}`;
    }
    
    
    
    // Função para incrementar a quantidade

    function incrementQuantity(inputId) {
        const input = document.getElementById(inputId);
        input.value = parseInt(input.value) + 1;
    
        const productTitle = input.parentElement.parentElement.querySelector('.product-title').textContent;
        const productPrice = parseFloat(input.parentElement.parentElement.querySelector('.product-price').textContent.slice(2).replace(',', '.'));
    
        adicionarItem(productTitle, productPrice, parseInt(input.value));
    }
    
    // Função para decrementar a quantidade
    function decrementQuantity(inputId) {
        const input = document.getElementById(inputId);
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
    
            const productTitle = input.parentElement.parentElement.querySelector('.product-title').textContent;
            const productPrice = parseFloat(input.parentElement.parentElement.querySelector('.product-price').textContent.slice(2).replace(',', '.'));
    
            adicionarItem(productTitle, productPrice, parseInt(input.value));
        }
    }
 
    
    