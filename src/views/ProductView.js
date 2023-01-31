export class ProductView {
    
    constructor(product,theme){
        this.product = product;
        this.theme = theme;
    }
    
    render = () => {

    

    
    return this.product 
    ?
        `
        <div id="ProductDetailView">

            <link rel="stylesheet" href="../css/ProductView.css">

            <div class="container pt-5">
                <div class="card text-center" style="width: 100%%;">
                    <div class="card-body">
                        <h5 class="card-title">
                            <span class="badge bg-dark">Voici l'article numéro : ${this.product.id} (${this.theme.title}) </span>
                        </h5>
                        <p class="card-text justify-content-center">${this.product.title}</p>
                        <h3>description : ${this.product.content}</h3>
                    <div>
                    <img class="card-img-top" src="${this.product.img_src}" alt="${this.product.title}">
                    <div>
                        <a href="/category/${this.theme.title}" class="btn btn-dark">Retour Categorie.</a>
                    </div>
                </div>
            </div>
        </div>
        `
    :
        `
            <link rel="stylesheet" href="../css/ProductView.css">
            <div class="text-center">Ce produit n'existe pas ! </div>
        `;
    };
}