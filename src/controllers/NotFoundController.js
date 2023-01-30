export class NotFoundController{

    async execute(){
        const resp = await fetch('http://tpmvvm.loc/src/views/NotFoundView.html');
        const view = await resp.text();
        return view;
    }
}