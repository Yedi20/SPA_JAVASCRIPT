
//import Dashboard from "./views/Dashboard.js";

import AbstractView from "./AbstractView.js";

export default class  extends AbstractView{

    constructor(params){
        super(params);

        this.setTitle("Settings");

    }

    async getHtml(){
        return `
        
        <h1>Settings </h1>
<p>
    Te gustaria arreglar algo en el setting de ahora mismo.?
</p>

<p>
    <a href="/posts" data-link> Ver las publicaciones recientes</a>
</p>
        `;
    }
}