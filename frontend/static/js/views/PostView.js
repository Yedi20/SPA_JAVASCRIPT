import AbstractView from "./AbstractView.js";

export default class  extends AbstractView{

    constructor(params){
        super(params);

        this.setTitle("Viewing post");

    }

    async getHtml(){
        //console.log(this.params.id);
         
        return `
        
        <h1>Posts </h1>
      
<br>
<p>
   Por el momento no hay post, pero pendientes.
</p>

<p>
    <a href="/" data-link> Volver al panel principal</a>
</p>
        `;
    }
}