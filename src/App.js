import { CategoryController } from "./controllers/CategoryController";
import { HomeController } from "./controllers/HomeController";
import { NotFoundController } from "./controllers/NotFoundController";
import { ProductController } from "./controllers/ProductController";


export class App{

    static controllers = {
        "home" :  HomeController,
        "product" : ProductController,
        "category" : CategoryController
    }

    static start = () => {
        window.onload = async () => { 
            // on prend le pathname complet (donc en fonction du lien sur lequel on clique cela change).
            const route = location.pathname;
            // on split les / avant et après pour avoir un tableau avec les "liens" entre / /
            const routeItems = route.replace(/^\//, "").replace(/\/$/, "").split('/');
            console.log(routeItems);
            // on prend que la premiere partie de la route (ex: /home/toto/2 on garde que [1] donc que "home"), sinon on retourne sur la route "home"
            const controllerName = routeItems?.shift() || "home";
            console.log(controllerName);
            // on compare avec les routes connues dans App
            let ControllerClass = App.controllers[controllerName];
            // si existe pas on donne la route NotFound
            if(!ControllerClass){
                ControllerClass = NotFoundController;
            }

            const controller = new ControllerClass(routeItems);
            console.log(controller);
            const vm = await controller.execute();
            document.getElementById("root").innerHTML = vm;
        }
    }

}