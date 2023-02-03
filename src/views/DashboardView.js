export class DashboardView {
    constructor(models) {
      this.models = models;
    }


    
  
    render = () => {
      const { categories, titles_theme, products, titles_product } = this.models;


      const categoryList = categories
      .map((cat) => {
        return `
        <option value =${cat.id}>${cat.title}</option>
        `;
      })
      .join("");


      const productList = products
      .map((prod) => {
        return `
        <option value =${prod.id}>${prod.title}</option>
        `;
      })
      .join("");

      return `
        
      <div id="HomeView">

      <div class="noise"></div>
      <div class="overlay"></div>

      <link rel="stylesheet" href="../css/HomeView.css">
  
      <h1 class="p-5 text-center">Bienvenue sur la page de gestion !</h1>
   


      <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#products-tab" type="button" role="tab" aria-controls="products-tab" aria-selected="true">Gestion des produits.</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#theme-tab" type="button" role="tab" aria-controls="theme-tab" aria-selected="false">Gestion des thèmes.</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">

        <div class="tab-pane fade show active" id="products-tab" role="tabpanel" aria-labelledby="product-tab" tabindex="0">


              <div class="container m-5">
              <div> <u>Ajout/Modification/Suppression de produit :</u>
              <form id="ProductForm">
              <div class="mb-3">
              <label for="Product_title" class="form-label">Nom du produit :</label>
              <input name ="title" type="text" class="form-control" id="Product_title">
              </div>
              <div class="mb-3">
              <label for="addProduct_content" class="form-label">Description du produit :</label>
              <input name ="content" type="text-box" class="form-control" id="addProduct_content">
              </div>
              <div class="mb-3">
              <label for="addProduct_img_src" class="form-label">Image du produit :</label>
              <input name ="img_src" type="text" class="form-control" id="addProduct_img_src">
              </div>
              <div class="mb-3">
              <label for="addProduct_id_theme" class="form-label">Category ? :</label>
              <select class="form-select">
              <option selected>Choisir ici</option>
              ${categoryList}
              </select>
              </div>

              <div class="mb-3">
              <label for="listProduct-option" class="form-label">Liste des produits actuellement :</label>
              <select class="form-select">
              <option selected>Choisir ici</option>
              ${productList}
              </select>
              </div>   

              <button type="submit" class="btn btn-success" name="add-product-submit">Ajouter</button>
              <button type="submit" class="btn btn-success" name="modif-product-submit">Modifier</button>
              <button type="submit" class="btn btn-success" name="supp-product-submit">Supprimer</button>
              <button type="submit" class="btn btn-success" name="del-product-submit">Effacer pour toujours !</button>
              </form>
              </div>

        </div>

        </div>

        <div class="tab-pane fade" id="theme-tab" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">

              <div class="container m-5">
              <div> <u>Ajout de thème :</u>
              <form id="addCategoryForm">
              <div class="mb-3">
              <label for="addCategoryForm_title" class="form-label">Nom de la catégorie :</label>
              <input name ="title" type="text" class="form-control" id="addCategoryForm_title">
              </div>

              <div class="mb-3">
              <label for="addCategoryForm_description" class="form-label">Description de la catégorie :</label>
              <input name ="description" type="text" class="form-control" id="addCategoryForm_description">
              </div>

              <div class="mb-3">
              <label for="addCategoryForm_img_src" class="form-label">Image de la catégorie :</label>
              <input name ="img_src" type="text" class="form-control" id="addCategoryForm_img_src">
              </div>

              <button type="submit" class="btn btn-success">Do it !</button>
              </form>
        </div>

        </div>
      </div>






  
      </div>
      
     `;


      
    }
}