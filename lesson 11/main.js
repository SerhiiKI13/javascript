// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        let {carts} = res;
        for (let cart of carts){
            let div = document.createElement("div");
            div.classList.add('table');
            let h1 = document.createElement('h1');
            h1.innerText = `
            id: ${cart.id} 
            total: ${cart.total}
            discountedTotal: ${cart.discountedTotal}
            userId: ${cart.userId}
            totalProducts: ${cart.totalProducts}
            totalQuantity: ${cart.totalQuantity}`;
            div.append(h1);
            let ol = document.createElement("ol");
            for (const products of cart.products){
                let li =document.createElement('li');
                li.innerText = `
                id-product: ${products.id}
                title: ${products.title}
                price: ${products.price}
                quantity: ${products.quantity}
                total: ${products.total}
                discountPercentage: ${products.discountPercentage}
                discountedTotal: ${products.discountedTotal}
                `;
                let imgContainer = document.createElement('div');
                imgContainer.classList.add('image-container');

                let img = document.createElement('img');
                img.classList.add('image');
                img.src = products.thumbnail;

                imgContainer.appendChild(img);
                li.appendChild(imgContainer);
                ol.append(li);
                div.append(ol);
            }
            let divText = document.getElementById('text');
            divText.append(div);
        }
    });

//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.