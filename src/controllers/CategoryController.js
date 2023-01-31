export class CategoryController{

    constructor(params){
        this.title = params.pop();
    }

    async execute(){
        this.title = this.title.toLowerCase();
        //models
        let resp = await fetch("../src/data/theme.json");
        const themes = await resp.json();
        const theme = themes.find(t => t.title.toLowerCase() == this.title);

        resp = await fetch("../src/data/product.json");
        const products = await resp.json();

        // view
        const {CategoryView} = await import('../views/CategoryView.js');
        const view = new CategoryView(theme,products);
        const content = view.render();
        return content;
    }
}