export class CategoryController{

    async execute(){
        const resp = await fetch('http://tpmvvm.loc/src/views/CategoryView.html');
        const view = await resp.text();
        return view;
    }
}