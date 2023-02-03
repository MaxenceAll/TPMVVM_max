import { CategoryController } from "./controllers/CategoryController";
import { HomeController } from "./controllers/HomeController";
import { NotFoundController } from "./controllers/NotFoundController";
import { ProductController } from "./controllers/ProductController";
import { DashboardController } from "./controllers/DashboardController";

export class App {
  static controllers = {
    home: HomeController,
    product: ProductController,
    category: CategoryController,
    dashboard: DashboardController
  };

  static start = () => {
    document.getElementById("root").innerHTML = `
        <div id="spinner" class="d-flex justify-content-center">
            <div class="spinner-border justify-content-center" style="width: 15rem; height: 15rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>  
        </div>      
        `;

    window.onload = async () => {
      // on prend le pathname complet (donc en fonction du lien sur lequel on clique cela change).
      const route = location.pathname;
      // on split les / avant et après pour avoir un tableau avec les "liens" entre / /
      const routeItems = route.replace(/^\//, "").replace(/\/$/, "").split("/");
      console.log(routeItems);
      // on prend que la premiere partie de la route (ex: /home/toto/2 on garde que [1] donc que "home"), sinon on retourne sur la route "home"
      const controllerName = routeItems?.shift() || "home";
      console.log(controllerName);
      // on compare avec les routes connues dans App
      let ControllerClass = App.controllers[controllerName];
      // si existe pas on donne la route NotFound
      if (!ControllerClass) {
        ControllerClass = NotFoundController;
      }

      const controller = new ControllerClass(routeItems);
      console.log(controller);
      const vm = await controller.execute();

      document.getElementById("root").innerHTML = vm;


      //si on est sur la vue dashboard
      if (controllerName == "dashboard") {
        // gestion du form de la dashboardview
        const form = document.getElementById("ProductForm");
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          const title = form.elements.title.value;
          const content = form.elements.content.value;
          const img_src = form.elements.img_src.value;
          const select = document.querySelector("select");
          const Id_theme = select.options[select.selectedIndex].value;
          const queFaire = "addProduct";

          let body = {
            title,
            content,
            img_src,
            Id_theme,  
            queFaire          
          };

          console.log("title:", title);
          console.log("content:", content);
          console.log("img_src:", img_src);
          console.log("Id_theme:", Id_theme);
          console.log("body:", body);

          const myJSON = JSON.stringify(body);
          console.log("json:", myJSON);

          fetch("http://localhost:5000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: myJSON,
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
        });
      }

      // //si on est sur la vue category
      // if (controllerName == "category") {
      //   // gestion du form de la categoryview
      //   const form = document.getElementById("addProductForm");
      //   form.addEventListener("submit", (event) => {
      //     event.preventDefault();
      //     const title = form.elements.title.value;
      //     const content = form.elements.content.value;
      //     const img_src = form.elements.img_src.value;
      //     const select = document.querySelector("select");
      //     const Id_theme = select.options[select.selectedIndex].value;
      //     const queFaire = "addProduct";

      //     let body = {
      //       title,
      //       content,
      //       img_src,
      //       Id_theme,  
      //       queFaire          
      //     };

      //     console.log("title:", title);
      //     console.log("content:", content);
      //     console.log("img_src:", img_src);
      //     console.log("Id_theme:", Id_theme);
      //     console.log("body:", body);

      //     const myJSON = JSON.stringify(body);
      //     console.log("json:", myJSON);

      //     fetch("http://localhost:5000", {
      //       method: "POST",
      //       headers: {
      //           "Content-Type": "application/json",
      //       },
      //       body: myJSON,
      //     })
      //       .then((response) => response.json())
      //       .then((data) => console.log(data))
      //       .catch((error) => console.error(error));
      //   });
      // }

      // //si on est sur la vue category
      // if (controllerName == "home") {
      //   // gestion du form de la homeview
      //   const form = document.getElementById("addCategoryForm");
      //   form.addEventListener("submit", (event) => {
      //     event.preventDefault();
      //     const title = form.elements.title.value;
      //     const description = form.elements.description.value;
      //     const img_src = form.elements.img_src.value;
      //     const queFaire = "addCategory";

      //     let body = {
      //       title,
      //       description,
      //       img_src,   
      //       queFaire         
      //     };

      //     console.log("title:", title);
      //     console.log("content:", description);
      //     console.log("img_src:", img_src);
      //     console.log("body:", body);

      //     const myJSON = JSON.stringify(body);
      //     console.log("json:", myJSON);

      //     fetch("http://localhost:5000", {
      //       method: "POST",
      //       headers: {
      //           "Content-Type": "application/json",
      //       },
      //       body: myJSON,
      //     })
      //       .then((response) => response.json())
      //       .then((data) => console.log(data))
      //       .catch((error) => console.error(error));
      //   });
      // }
    };
  };
}
