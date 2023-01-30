export class CategoryController{

    constructor(params){
        this.categoryName = params.pop()?.replace('-', ' ');
    }

    async execute(){
        const {CategoryView} = await import('../views/CategoryView.js');
        const view = new CategoryView(this.categoryName);
        const content = view.render();
        return content;
    }
}