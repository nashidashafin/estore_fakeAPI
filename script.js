fetch('https://fakestoreapi.com/products')
.then(out=>out.json())
.then(result=>productsDisplay(result))

function productsDisplay(arrayOut){
    for(i of arrayOut){
        store.innerHTML+= `<div class="card shadow-lg col mb-4 mx-3 ms-5 bg-light" style="width: 18rem;">
        <img src=${i.image} class="card-img-top ms-5 mt-3" alt="..." style="width:180px;height:220px">
        <div class="card-body">
          <h5 class="card-title mb-2">${i.title} </h5>
          <p class="card-text">Category : ${i.category}</p>
          <p class="card-text">Price : ${i.price}</p>
          <p class="card-text"><small class="text-body-secondary mb-2">Rating: ${i.rating.rate}</small></p>
        </div>
      </div>`
    }
}