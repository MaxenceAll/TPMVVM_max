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
        
      <div id="Dashboard">


      <link rel="stylesheet" href="../css/DashboardView.css">
  
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
                      <form id="ProductForm">
                          <div class="mb-5"> <u>Ajout/Modification/Suppression de produit :</u>


                              <div class="input-group mb-3 mt-3">
                                  <label class="input-group-text w-25" for="input-products-select">Produits disponibles :</label>
                                  <select class="form-select" id="input-products-select">
                                    <option selected>Voir...</option>
                                    ${productList}
                                  </select>
                              </div>
                  
                              <label class="form-label">Données du produit :</label>

                              <div class="mb-3">
                                  <div class="input-group">
                                    <span class="input-group-text w-25">Nom du produit :</span>
                                    <textarea class="form-control" aria-label="With textarea" placeholder="Saisir le nom du produit."></textarea>
                                  </div>
                              </div>

                              <div class="mb-3">
                                  <div class="input-group">
                                    <span class="input-group-text w-25">Description :</span>
                                    <textarea class="form-control" aria-label="With textarea" placeholder="Saisir la description produit."></textarea>
                                  </div>
                              </div>

                              <div class="mb-3">
                                  <div class="input-group">
                                    <span class="input-group-text w-25">Image :</span>
                                    <textarea class="form-control" aria-label="With textarea" placeholder="Saisir l'URL de l'image'."></textarea>
                                  </div>
                              </div>

                              <div class="input-group mb-3 mt-3">
                                  <label class="input-group-text w-25" for="inputGroupSelect01">Categories disponibles :</label>
                                    <select class="form-select" id="inputGroupSelect01">
                                      <option selected>Voir...</option>
                                      ${categoryList}
                                    </select>
                              </div>                                    
                              
                              <div class="mb-3">
                                  <div class="input-group">
                                    <span class="input-group-text w-25">Image :</span>
                                    <textarea class="form-control" aria-label="With textarea" placeholder="Saisir l'URL de l'image'."></textarea>
                                  </div>
                              </div>

                              <div class="mb-3">
                                <div class="input-group">
                                  <span class="input-group-text w-25">Id(readonly) :</span>
                                  <textarea class="form-control" readonly aria-label="With textarea" placeholder="id here"></textarea>
                                </div>
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