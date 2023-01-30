export class HomeController{

    async execute(){
        const resp = await fetch('http://tpmvvm.loc/src/views/HomeView.html');
        const view = await resp.text();
        return view;
    }
}