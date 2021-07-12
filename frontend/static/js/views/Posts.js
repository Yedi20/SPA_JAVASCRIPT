import AbstractView from "./AbstractView.js";

export default class  extends AbstractView{

    constructor(params){
        super(params);

        this.setTitle("Posts");

    }

    async getHtml(){
        return `
        
        <h1>Posts </h1>
      
        <p>
  Single page aplication without framework, just html,css and javascript.
</p>

<br>

<p>
<a href="https://github.com/Yedi20/leonel"> Mi portafolio en React js</a>

</p>
<p>
   Por el momento no hay muchos post, pero pendientes.
</p>

<p>
    <a href="/" data-link> Volver al panel principal</a>
</p>
        `;
    }
}