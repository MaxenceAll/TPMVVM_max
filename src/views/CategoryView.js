export class CategoryView {
  constructor(models) {
    this.models = models;
  }

  render = () => {
    const { category, products, categories } = this.models;

    

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

    const categoryList = categories
      .map((cat) => {
        return `
        <option value =${cat.id}>${cat.title}</option>
        `;
      })
      .join("");

      

    return `
        <div id="CategoryDetailView">
        <link rel="stylesheet" href="../css/CategoryView.css">

          <h1><u>Vous êtes sur la vue Categorie: ${category.title} </u></h1>
            <div class="container-fluid">
              <div class="row row-cols-4 justify-content-center">
                  ${productsCards}
              </div>
            </div>
        </div>




    <div class="container m-5">
      <div> <u>Ajout de produit :</u>
      <form id="addProductForm">
        <div class="mb-3">
          <label for="addProduct_title" class="form-label">Nom du produit :</label>
          <input name ="title" type="text" class="form-control" id="addProduct_title">
        </div>

        <div class="mb-3">
          <label for="addProduct_content" class="form-label">Description du produit :</label>
          <input name ="content" type="text" class="form-control" id="addProduct_content">
        </div>

        <div class="mb-3">
          <label for="addProduct_img_src" class="form-label">Image du produit :</label>
          <input name ="img_src" type="text" class="form-control" id="addProduct_img_src">
        </div>

        <div class="mb-3">
          <label for="addProduct_id_theme" class="form-label">Category ? :</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choisir ici</option>
            ${categoryList}
          </select>
          
        </div>        

        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    </div>
        `;
  };

}
