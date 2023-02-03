export class DashboardController{

    // constructor(params){
    //     this.categoryName = params?.pop()?.replace('-', ' ');
    // }

    async execute(){

        //Models
        let resp = await fetch("http://localhost:5000/theme");
        const categories = await resp.json();           
        
        resp = await fetch ("http://localhost:5000/product")
        const products = await resp.json();
      
        
        var titles_theme = {};
        for (var i = 0; i < categories.length; i++) {
            titles_theme[categories[i].id] = categories[i].title;
        }        
        console.log(titles_theme);

        var titles_product = {};
        for (var i = 0; i < products.length; i++) {
            titles_product[products[i].id] = products[i].title;
        }        
        console.log(titles_product);


        //View            
        const {DashboardView} = await import('../views/DashboardView.js');
        const view = new DashboardView({categories, titles_theme, products, titles_product});
        const content = view.render();
        return content;

    }
}



