export class HomeView {

    formSubmit(event){
        event.preventDefault();
        console.log(event);
    }


    render = () =>
    {
        return `
        
        <div id="HomeView">

        <div class="noise"></div>
        <div class="overlay"></div>

        <link rel="stylesheet" href="../css/HomeView.css">
    
        <h1 class="p-5 text-center">Bienvenue !</h1>
     
            <div class="row px-5 justify-content-center">
    
                <div class="col">
                    <div class="card" style="width: 10rem;">
                        <img src="../img/Europe.svg.png" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Europe</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet.</p>
                        <a href="/category/EuroPe" class="btn btn-success">Voir cette catégorie</a>
                        </div>
                    </div>
                </div>
    
                <div class="col">
                    <div class="card" style="width: 10rem;">
                        <img src="../img/Asia.svg.png" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Asie</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet.</p>
                        <a href="/category/Asie" class="btn btn-success">Voir cette catégorie</a>
                        </div>
                    </div>
                </div>
    
                <div class="col">
                    <div class="card" style="width: 10rem;">
                        <img src="../img/Africa.svg.png" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Afrique</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet.</p>
                        <a href="/category/Afrique" class="btn btn-success">Voir cette catégorie</a>
                        </div>
                    </div>
                </div>
    
                <div class="col">
                    <div class="card" style="width: 10rem;">
                        <img src="../img/Americas.svg.png" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Amérique</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet.</p>
                        <a href="/category/Amerique" class="btn btn-success">Voir cette catégorie</a>
                        </div>
                    </div>
                </div>
    
                <div class="col">
                    <div class="card" style="width: 10rem;">
                        <img src="../img/Oceania.svg.png" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Océanie</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet.</p>
                        <a href="/category/Oceanie" class="btn btn-success">Voir cette catégorie</a>
                        </div>
                    </div>
                </div>
    
            </div>
    
        </div>
        
    `
    }
}