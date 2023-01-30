export class CategoryView {
  
    constructor(categoryName) {
      this.categoryName = categoryName;
    }
  
    render = () => {


        switch (this.categoryName) {
            case "europe": this.categoryName = "européen."; break;
            case "asia": this.categoryName = "asiatique."; break;
            case "africa": this.categoryName = "africain."; break;
            case "americas": this.categoryName = "américain."; break;
            case "oceania": this.categoryName = "océanique."; break;
        
            default: break;
        }

      return `
        <div id="CategoryDetailView">
            <h1>Vous êtes sur la catégorie : ${this.categoryName}</h1>
        </div>
        `;
    };
  }