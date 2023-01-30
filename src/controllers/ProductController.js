export class ProductController{

    async execute(){
        const resp = await fetch('http://tpmvvm.loc/src/views/ProductView.html');
        const view = await resp.text();
        return view;
    }
}