export class HomeView {

    constructor(models) {
        this.models = models;
      }

    render = () =>
    {

        const { categories } = this.models;

        const categoriesCard = categories
        .map((cat) => {
          return `
  
  
            <div class="col">
                <div class="card" style="width: 10rem;">
                    <img src="../img/${cat.img_src}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${cat.title.toUpperCase()}</h5>
                        <p class="card-text">${cat.description}</p>
                        <a href="/category/${cat.title}" class="btn btn-success">Voir cette catégorie</a>
                    </div>
                </div>
            </div>
  
          
          `;
        })
        .join("");



        return `
        
        <div id="HomeView">

        <div class="noise"></div>
        <div class="overlay"></div>

        <link rel="stylesheet" href="../css/HomeView.css">
    
        <h1 class="p-5 text-center">Bienvenue !</h1>
     
            <div class="row px-5 justify-content-center">
    
                ${categoriesCard}
    
            </div>

        <div class="container m-5">
            <div> <u>Ajout de catégorie :</u>
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
      
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
    
        </div>
        
    `
    }
}