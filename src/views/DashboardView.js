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

      const content= `
        
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
                                  <select class="form-select" id="input-products-select" name="productFormSelect">
                                    <option selected>Ajouter...</option>
                                    ${productList}
                                  </select>
                              </div>
                  
                              <br>  
                              <div class="mb-3">
                              <label class="form-label">Données du produit :</label>
                                  <div class="input-group">
                                    <span class="input-group-text w-25">Nom du produit :</span>
                                    <textarea id="nomProduit" class="form-control" placeholder="Saisir le nom du produit."></textarea>
                                  </div>
                              </div>

                              <div class="mb-3">
                                  <div class="input-group">
                                    <span class="input-group-text w-25">Description :</span>
                                    <textarea id="descProduit" class="form-control"  placeholder="Saisir la description produit."></textarea>
                                  </div>
                              </div>

                              <div class="mb-3">
                                  <div class="input-group">
                                    <span class="input-group-text w-25">Image :</span>
                                    <textarea id="imgProduit" class="form-control" placeholder="Saisir l'URL de l'image'."></textarea>
                                  </div>
                              </div>

                              <div class="input-group mb-3 mt-3">
                                  <label class="input-group-text w-25" for="selectCategory">Categories disponibles :</label>
                                    <select class="form-select" id="selectCategory">
                                      <option selected>Voir...</option>
                                      ${categoryList}
                                    </select>
                              </div>
                          
                              <div class="mb-3">
                                <div class="input-group">
                                  <span class="input-group-text w-25">Id(readonly) :</span>
                                  <textarea id="idProduit" class="form-control text-bg-dark" readonly placeholder="id here"></textarea>
                                </div>
                              </div>

                              <div id="myModal_add" class="modal">
                                <div class="modal-content">
                                  <span class="close">&times;</span>
                                  <p>Vous avez ajouté avec success :</p>
                                  <hr>
                                  <p id="modal_title_produit"><u>Nom du produit ajouté :  </u></p>
                                  <p id="modal_content_produit"><u>Description du produit ajouté :  </u></p>
                                  <p id="modal_Id_theme_produit"><u>Il est dans la catégorie  :  </u></p>
                                  <p id="modal_img_src_produit"><u>URL image du produit ajouté :  </u></p> 
                                </div>
                              </div>
                  
                              <button type="submit" class="btn btn-success" name="btn_ajouter" id="add_product_submit">Ajouter</button>
                              <button type="submit" class="btn btn-success" name="btn_modifier" id="modif_product_submit">Modifier</button>
                              <button type="submit" class="btn btn-success" name="btn_supprimer" id="supp_product_submit">Supprimer</button>
                              <button type="submit" class="btn btn-success" name="btn_delete" id="del_product_submit">Effacer pour toujours !</button>
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

     const view = document.createElement('div');
     view.innerHTML = content;     


    const add_product_submit = view.querySelector("#add_product_submit");
    const modif_product_submit = view.querySelector("#modif_product_submit");
    const supp_product_submit = view.querySelector("#supp_product_submit");
    const del_product_submit = view.querySelector("#del_product_submit");

    const toastLiveExample = document.getElementById('liveToast')
    

    modif_product_submit.disabled = true;
    supp_product_submit.disabled =true;
    del_product_submit.disabled =true;

     const form = view.querySelector("#ProductForm");   
     let productSelector = view.querySelector("#input-products-select");     
     let nomProduit = view.querySelector("#nomProduit");
     let descProduit = view.querySelector("#descProduit");
     let imgProduit = view.querySelector("#imgProduit");
     let idProduit = view.querySelector("#idProduit");

     let categorySelector = view.querySelector("#selectCategory");
    //  let catProduit = view.querySelector("");     

     productSelector.addEventListener('change', function (e)
     {
      if (productSelector.selectedIndex >= 0) {
        const selectedOption = productSelector.options[productSelector.selectedIndex].value;
        const product = products.find(p => p.id == productSelector.options[productSelector.selectedIndex].value);
        const options = categorySelector.querySelectorAll("option");
        if (selectedOption!="Ajouter..."){
          nomProduit.value = product.title;
          descProduit.value = product.content;
          imgProduit.value = product.img_src;
          idProduit.value = product.id;

          add_product_submit.disabled = true;
          modif_product_submit.disabled = false;
          supp_product_submit.disabled = false;
          del_product_submit.disabled = false;
                    
          for (const option of options)
          {
            if (option.value == product.Id_theme){
              option.selected = true;
            }
          }
        }else{
          add_product_submit.disabled = false;
          modif_product_submit.disabled = true;
          supp_product_submit.disabled = true;
          del_product_submit.disabled = true;
          nomProduit.value = "Saisir le nom ici";
          descProduit.value = "Saisir la description ici";
          imgProduit.value = "Saisir l'url de l'image ici";
          idProduit.value = "L'id sera saisie automatiquement !";
        }
          
      }
     });

        form.addEventListener("submit", (event) => {
          event.preventDefault();
        
          let clickedButton = event.target.querySelector("[type=submit][clicked=true]");
          if (!clickedButton) {
            return;
          }
          if (clickedButton.name === "btn_ajouter") {

                console.log("Add btn clicked !");                           
                const title = form.elements.nomProduit.value;
                const content = form.elements.descProduit.value;
                const img_src = form.elements.imgProduit.value;
                const select = view.querySelector("#selectCategory");
                const Id_theme = select.options[select.selectedIndex].value;
                let body = {
                  title,
                  content,
                  img_src,
                  Id_theme,  
                };
                const myJSON = JSON.stringify(body);
                console.log("json:", myJSON);
                fetch("http://localhost:5000/product", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: myJSON,
                })
                  .then((response) => response.json())
                  .then((data) => console.log(data))
                  .catch((error) => console.error(error));                  

                const modal = document.querySelector('#myModal_add');
                const span = document.querySelector('.close');                
                modal.style.display = 'block';                
                span.addEventListener('click', function() {
                  modal.style.display = 'none';
                });                
                window.addEventListener('click', function(event) {
                  if (event.target === modal) {
                    modal.style.display = 'none';
                  }
                });

                view.querySelector("#modal_title_produit").innerHTML += body.title;
                view.querySelector("#modal_content_produit").innerHTML += body.content;
                view.querySelector("#modal_Id_theme_produit").innerHTML += body.Id_theme;
                view.querySelector("#modal_img_src_produit").innerHTML += body.img_src;                

          } else if (clickedButton.name === "btn_modifier") {
            console.log("Modif btn clicked !")

            const id = form.elements.idProduit.value;
            const title = form.elements.nomProduit.value;
            const content = form.elements.descProduit.value;
            const img_src = form.elements.imgProduit.value;
            const select = view.querySelector("#selectCategory");
            const Id_theme = select.options[select.selectedIndex].value;
            let body = {
              id,
              title,
              content,
              img_src,
              Id_theme,  
            };
            const myJSON = JSON.stringify(body);
            console.log("json:", myJSON);
            let URL = "http://localhost:5000/product/" + id;
            fetch(URL, {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json",
              },
              body: myJSON,
            })
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => console.error(error));

          } else if (clickedButton.name === "btn_supprimer") {
                            console.log("Supp btn clicked !")

                            const id = form.elements.idProduit.value;

                            let body = {
                              id,
                            };
                            const myJSON = JSON.stringify(body);
                            console.log("json:", myJSON);
                            let URL = "http://localhost:5000/product/" + id;
                            fetch(URL, {
                              method: "PATCH",
                              headers: {
                                  "Content-Type": "application/json",
                              },
                              body: myJSON,
                            })
                              .then((response) => response.json())
                              .then((data) => console.log(data))
                              .catch((error) => console.error(error));

          } else if (clickedButton.name === "btn_delete") {
                                                console.log("Effa btn clicked !")

                                                const id = form.elements.idProduit.value;

                                                let body = {
                                                  id,
                                                };
                                                const myJSON = JSON.stringify(body);
                                                console.log("json:", myJSON);
                                                let URL = "http://localhost:5000/product/" + id;
                                                fetch(URL, {
                                                  method: "DELETE",
                                                  headers: {
                                                      "Content-Type": "application/json",
                                                  },
                                                  body: myJSON,
                                                })
                                                  .then((response) => response.json())
                                                  .then((data) => console.log(data))
                                                  .catch((error) => console.error(error));
          } 
        });
        
        // Add click event to all submit buttons
        let submitButtons = view.querySelectorAll("[type=submit]");
        submitButtons.forEach(function(submitButton) {
          submitButton.addEventListener("click", function() {
            submitButtons.forEach(function(sb) {
              sb.removeAttribute("clicked");
            });
            submitButton.setAttribute("clicked", "true");
          });
        });


     return view;      
    }
}