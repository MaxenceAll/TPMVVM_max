export class CategoryController{

    constructor(params){
        this.categoryName = params?.pop()?.replace('-', ' ');
    }

    async execute(){

        this.categoryName = this.categoryName.toLowerCase();
        //Models
        let resp = await fetch("../src/data/theme.json");
        const categories = await resp.json();                
        const category = categories.find(c => c.title.toLowerCase() == this.categoryName);

        if (category==undefined){
            const resp = await fetch('http://tpmvvm.loc/src/views/NotFoundView.html');
            const view = await resp.text();
            return view;
        }
        else{            
            resp = await fetch("../src/data/product.json");
            let products = await resp.json();
            
            products = products.filter(p => p.theme_id == category.id);
            
            //View
            
            const {CategoryView} = await import('../views/CategoryView.js');
            const view = new CategoryView({category, products});
            const content = view.render();
            return content;
        }
    }
}



