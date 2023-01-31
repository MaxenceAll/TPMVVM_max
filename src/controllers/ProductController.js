export class ProductController{

    constructor(params){
        this.id = params.pop();
    }

    async execute(){
        //Models
        let resp = await fetch("../src/data/product.json");
        const products = await resp.json();
        const product = products.find(p => p.id == this.id);

        resp = await fetch("../src/data/theme.json");
        const themes = await resp.json();
        const theme = themes.find(t => t.id == product.theme_id);

        //View
        const {ProductView} = await import('../views/ProductView.js');
        const view = new ProductView(product, theme);
        const content = view.render();       


        return content;
    }
}