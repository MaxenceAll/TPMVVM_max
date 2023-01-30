export class HomeController{

    async execute(){
        const {HomeView} = await import('../views/HomeView.js');
        const view = new HomeView();
        const content = view.render();
        return content;
        
    }
}