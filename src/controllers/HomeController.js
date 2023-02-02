export class HomeController{

    async execute(){


        // let resp = await fetch("http://localhost:5000/theme");
        // const categories = await resp.json(); 

        // const {CategoryView} = await import('../views/CategoryView.js');
        // const view = new CategoryView({categories});
        // const content = view.render();
        // return content;


        const {HomeView} = await import('../views/HomeView.js');
        const view = new HomeView();
        const content = view.render();
        return content;
        
    }
}