export class HomeController{

    async execute(){


        let resp = await fetch("http://localhost:5000/theme");
        const categories = await resp.json(); 

        const {HomeView} = await import('../views/HomeView.js');
        const view = new HomeView({categories});
        const content = view.render();
        return content;


        // const {HomeView} = await import('../views/HomeView.js');
        // const view = new HomeView();
        // const content = view.render();
        // return content;
        
    }
}