export class CategoryView {
  
    constructor(theme,products) {
      this.theme = theme;
      this.products = products;
    }
  
    render = () => {

      

      return `
      <div id="CategoryDetailView">

      <link rel="stylesheet" href="../css/CategoryView.css">

      <h1>Vous êtes sur la catégorie : ${this.theme.title}</h1>

      <p>
        ${this.products}
      </p>

      </div>
      `;
    };
  }