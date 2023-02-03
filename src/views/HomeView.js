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
    
        </div>
        
    `
    }
}