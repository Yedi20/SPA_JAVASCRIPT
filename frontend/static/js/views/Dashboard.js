import AbstractView from "./AbstractView.js";

export default class  extends AbstractView{

    constructor(params){
        super(params);

        this.setTitle("Dashboard");

    }

    async getHtml(){
        return `
        
        <h1>Welcome back, Yedi</h1>

        
        <img style="imagen:hover filter blur(5px)"" src="https://avatars.githubusercontent.com/u/71942723?s=60&v=4"
        
        width="400"
     height="341"
     title="Leonel Yedi, Itla (foto de github).">
<p>
    
Soy Leonel Yedi, estudiante de desarrollo de software en el Instituto Tecnológico de Las Américas. </br>
Estoy de termino, actualmente manejo varias tecnología, como: <br>
Sprint Boot <br>
Java <br>
Html <br>
Css <br>
Android Studio <br>
Sql server <br>
Mysql <br>


</p>

<p>
    <a href="/posts" data-link> Ver las publicaciones recientes!</a>
</p>
        `;
    }
}