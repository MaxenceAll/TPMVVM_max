export class CategoryView {
  constructor(models) {
    this.models = models;
  }

  render = () => {
    const { category, products } = this.models;



    const productsCards = products
      .map((product) => {
        return `


        <div class="card p-0 m-2" onclick="location.href='/product/${product.id}'">

            <img src="${product.img_src}" class="w-100" alt=${product.title}">

            <div class="card-body">
              <h5 class="card-title fw-bold text-decoration-underline">${product.title}</h5>
              <h6 class="card-text">${product.content.substring(0,50)}...</h6>

            </div>
            <div class="card-footer justify-content-between">
              <button type="button" class="btn btn-warning">Voir +</button>          
            </div>
        </div>

        
        `;
      })
      .join("");

    return `
        <div id="CategoryDetailView">
        <link rel="stylesheet" href="../css/CategoryView.css">

          <h1><u>Vous êtes sur la catégorie : ${category.title} </u></h1>
            <div class="container-fluid">
              <div class="row row-cols-4 justify-content-center">
                  ${productsCards}
              </div>
            </div>
        </div>

        `;
  };

  //   return `
  //   <div id="CategoryDetailView">

  //   <link rel="stylesheet" href="../css/CategoryView.css">

  //   <h1>Vous êtes sur la catégorie : ${this.category.title}</h1>

  //   <p>
  //     ${this.products}
  //   </p>

  //   </div>
  //   `;
  // };
}
