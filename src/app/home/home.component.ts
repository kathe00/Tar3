import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Noticia } from '../formato';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit{

  //definimos el id
  idNoticia = 0;
  //tomamos los botones de cada tarjeta
  @ViewChild('btn1') btn1!: ElementRef;
  @ViewChild('btn2') btn2!: ElementRef;
  @ViewChild('btn3') btn3!: ElementRef;
  @ViewChild('btn4') btn4!: ElementRef;
  @ViewChild('btn5') btn5!: ElementRef;
  @ViewChild('btn6') btn6!: ElementRef;
  @ViewChild('btn7') btn7!: ElementRef;

  //tomamos también los títulos
  @ViewChild('titulo1') titulo1!: ElementRef;
  @ViewChild('titulo2') titulo2!: ElementRef;
  @ViewChild('titulo3') titulo3!: ElementRef;
  @ViewChild('titulo4') titulo4!: ElementRef;
  @ViewChild('titulo5') titulo5!: ElementRef;
  @ViewChild('titulo6') titulo6!: ElementRef;
  @ViewChild('titulo7') titulo7!: ElementRef;

  //y todos los caption
  @ViewChild('caption1') caption1!: ElementRef;
  @ViewChild('caption2') caption2!: ElementRef;
  @ViewChild('caption3') caption3!: ElementRef;
  @ViewChild('caption4') caption4!: ElementRef;
  @ViewChild('caption5') caption5!: ElementRef;
  @ViewChild('caption6') caption6!: ElementRef;
  @ViewChild('caption7') caption7!: ElementRef;

  //además, tomamos el contenedor principal de home y el de if, y el botón
  @ViewChild('inicio') contenedor!: ElementRef;
  @ViewChild('noticia') noticia!: ElementRef;
  @ViewChild('btnCerrar') cerrar!: ElementRef;

  noticias = this.crearNoticias();


  constructor(private renderer:Renderer2) {
  }


  ngOnInit(): void {
    //volver al inicio al cargar
    window.scroll(0,0);
  }

  ngAfterViewInit(){
    //primero rellenamos las cards
    this.rellenar(this.noticias);

    //luego les agregamos un listener a los botones de "leer más" que cambie el id de la noticia
    //esto para definir cuál noticia fue seleccionada
    this.renderer.listen(this.btn1.nativeElement,"click", () => {
      this.idNoticia = this.noticias[0].id;
      console.log("id: " + this.idNoticia);
      //además, activamos el botón que cerrará luego el contenido desplegado.
      //se utiliza timeout para retrasar un poco la ejecución y que no haya incongruencias
      //en la lectura del idNoticias
      setTimeout(() => {
        //también, desplazamos el scroll hasta la noticia
        this.noticia.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        this.activarBotonCerrar();
      }, 200);
      
    })
    this.renderer.listen(this.btn2.nativeElement,"click", () => {
      this.idNoticia = this.noticias[1].id;
      console.log("id: " + this.idNoticia);
      setTimeout(() => {
        this.noticia.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        this.activarBotonCerrar();
      }, 200);
    })
    this.renderer.listen(this.btn3.nativeElement,"click", () => {
      this.idNoticia = this.noticias[2].id;
      console.log("id: " + this.idNoticia);
      setTimeout(() => {
        this.noticia.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        this.activarBotonCerrar();
      }, 200);
    })
    this.renderer.listen(this.btn4.nativeElement,"click", () => {
      this.idNoticia = this.noticias[3].id;
      console.log("id: " + this.idNoticia);
      setTimeout(() => {
        this.noticia.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        this.activarBotonCerrar();
      }, 200);
    })
    this.renderer.listen(this.btn5.nativeElement,"click", () => {
      this.idNoticia = this.noticias[4].id;
      console.log("id: " + this.idNoticia);
      setTimeout(() => {
        this.noticia.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        this.activarBotonCerrar();
      }, 200);
    })
    this.renderer.listen(this.btn6.nativeElement,"click", () => {
      this.idNoticia = this.noticias[5].id;
      console.log("id: " + this.idNoticia);
      setTimeout(() => {
        this.noticia.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        this.activarBotonCerrar();
      }, 200);
    })
    this.renderer.listen(this.btn7.nativeElement,"click", () => {
      this.idNoticia = this.noticias[6].id;
      console.log("id: " + this.idNoticia);
      setTimeout(() => {
      this.noticia.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        this.activarBotonCerrar();
      }, 200);
    })

  }

  crearNoticias(){
    //arreglo con todas las noticias de la página
    let noticias:Noticia[] = [
    //las primeras 3 noticias son las destacadas
    {id:1, idTipo:0, img1:"1.jpeg", img2: "1b.jpeg", autor:"Katherine", fecha: "26 Oct. 2021", 
    titulo:"El juego del Calamar se convierte en la serie más visitada de Netflix", 
    caption:"La serie surcoreana llegó a 111 millones de cuentas en el mundo, superando los 82 millones de Bridgerton, según informó la misma plataforma esta tarde.", 
    texto:"Quienes hayan visto El Juego del Calamar en Netflix durante las últimas semanas probablemente notaron que, además de su trama -en apariencia- simple, adictiva y algo morbosa, la serie es un fenómeno absoluto y tema de conversación en todo el mundo. También, que tal como en Chile, la serie surcoreana ocupa el primer lugar del top 10 de los títulos más vistos en otros 93 países del planeta. Ahora, el revuelo se traslada a números y a un récord: a menos de un mes de su estreno en la plataforma, Netflix oficializó esta tarde que El Juego del Calamar es la serie más vista de toda la historia de la plataforma. “El Juego del Calamar llegó a 11 millones de fans, convirtiéndose en la serie más grande de Netflix de todos los tiempos”, indica la cuenta en español de la compañía."},

    {id:2, idTipo:1, img1:"2.jpg", img2: "2b.jpg", autor:"Katherine", fecha: "26 Oct. 2021", 
    titulo:"Murió el rinoceronte más viejo", 
    caption:"Ha muerto en Italia el rinoceronte blanco más viejo del mundo. Toby, así se llamaba el animal, falleció a los 54 años el pasado 6 de octubre.", 
    texto:"Ha muerto en Italia el rinoceronte blanco más viejo del mundo. Toby, así se llamaba el animal, falleció a los 54 años el pasado 6 de octubre, según Elisa Livia Pennacchioni del Parco Natura Viva, un zoológico de Verona. “Se derrumbó en el camino de regreso a su refugio nocturno y, después de aproximadamente media hora, su corazón se detuvo”, explicó Livia Pennacchioni. “Nonno Toby”, que significa abuelo Toby, se exhibirá en el museo de ciencias MuSe de Trento después de ser embalsamado."},

    {id:3, idTipo:2, img1:"3.jpg", img2: "3b.jpg", autor:"Katherine", fecha: "26 Oct. 2021", 
    titulo:"Ciclismo - El regreso de Chris Froome", 
    caption:"Después de tres años de ausencia de la Tour de Francia, el regreso de Chris Froome tal vez haya terminado después de apenas una etapa.", 
    texto:"El cuatro veces campeón estuvo en un choque masivo a alta velocidad a unos 10 kilómetros de la meta de la primera etapa el sábado en Landerneau. Froome, quien se perdió las dos últimas tours después de un choque en 2019 que casi puso fin a su carrera, siguió tendido unos minutos y se puso de pie con alguna dificultad. Finalmente montó su bicicleta y terminó la etapa a más de 14 minutos del ganador Julian Alaphilippe. No estaba claro si seguiría corriendo. “No era mi plan para hoy, pero logré terminar”, dijo antes de someterse a exámenes."},

    //las siguientes 4 s1on las otras que se muestran en el inicio
    {id:4, idTipo:4, img1:"4.jpg", img2: "4b.jpg", autor:"Katherine", fecha: "26 Oct. 2021", 
    titulo:"Lorem Ipsum", 
    caption:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", 
    texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a eros aliquet, aliquet quam sed, faucibus dui. Vivamus placerat turpis ultrices neque cursus, quis ultrices lectus pharetra. Maecenas porta, lorem non imperdiet condimentum, elit augue cursus tortor, nec dignissim felis orci in metus. Fusce viverra metus ac magna sodales maximus. Nullam nec felis sit amet dolor blandit ullamcorper a eget sapien. Etiam a volutpat massa. In orci magna, maximus ac laoreet eget, tincidunt ac nisl. Nunc consequat, quam in lacinia imperdiet, sapien leo molestie sem, et blandit felis leo ultrices ante. Mauris mollis, sem ac porta consequat, nulla arcu efficitur metus, vel fringilla magna justo vitae odio. Integer elit ipsum, ornare eget scelerisque vel, sollicitudin et risus. Aliquam dictum odio ac magna malesuada lobortis. Morbi felis lectus, gravida sit amet est ac, dignissim placerat elit. Phasellus eros odio, tincidunt vel dictum ac, ultricies eu tellus. Nunc id sapien quis nisi maximus varius nec vel lectus. Duis quis justo dolor. Mauris sagittis arcu sit amet sapien pulvinar, a vestibulum ante lacinia."},

    {id:5, idTipo:1, img1:"5.jpg", img2: "5b.jpg", autor:"Katherine", fecha: "26 Oct. 2021", 
    titulo:"Lorem Ipsum", 
    caption:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", 
    texto:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},

    {id:6, idTipo:3, img1:"6.jpg", img2: "6b.jpg", autor:"Katherine", fecha: "26 Oct. 2021", 
    titulo:"Lorem Ipsum", 
    caption:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", 
    texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a eros aliquet, aliquet quam sed, faucibus dui. Vivamus placerat turpis ultrices neque cursus, quis ultrices lectus pharetra. Maecenas porta, lorem non imperdiet condimentum, elit augue cursus tortor, nec dignissim felis orci in metus. Fusce viverra metus ac magna sodales maximus. Nullam nec felis sit amet dolor blandit ullamcorper a eget sapien. Etiam a volutpat massa. In orci magna, maximus ac laoreet eget, tincidunt ac nisl. Nunc consequat, quam in lacinia imperdiet, sapien leo molestie sem, et blandit felis leo ultrices ante. Mauris mollis, sem ac porta consequat, nulla arcu efficitur metus, vel fringilla magna justo vitae odio. Integer elit ipsum, ornare eget scelerisque vel, sollicitudin et risus. Aliquam dictum odio ac magna malesuada lobortis. Morbi felis lectus, gravida sit amet est ac, dignissim placerat elit. Phasellus eros odio, tincidunt vel dictum ac, ultricies eu tellus. Nunc id sapien quis nisi maximus varius nec vel lectus. Duis quis justo dolor. Mauris sagittis arcu sit amet sapien pulvinar, a vestibulum ante lacinia."},

    {id:7, idTipo:5, img1:"7.jpg", img2: "7b.jpg", autor:"Katherine", fecha: "26 Oct. 2021", 
    titulo:"Lorem Ipsum", 
    caption:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", 
    texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a eros aliquet, aliquet quam sed, faucibus dui. Vivamus placerat turpis ultrices neque cursus, quis ultrices lectus pharetra. Maecenas porta, lorem non imperdiet condimentum, elit augue cursus tortor, nec dignissim felis orci in metus. Fusce viverra metus ac magna sodales maximus. Nullam nec felis sit amet dolor blandit ullamcorper a eget sapien. Etiam a volutpat massa. In orci magna, maximus ac laoreet eget, tincidunt ac nisl. Nunc consequat, quam in lacinia imperdiet, sapien leo molestie sem, et blandit felis leo ultrices ante. Mauris mollis, sem ac porta consequat, nulla arcu efficitur metus, vel fringilla magna justo vitae odio. Integer elit ipsum, ornare eget scelerisque vel, sollicitudin et risus. Aliquam dictum odio ac magna malesuada lobortis. Morbi felis lectus, gravida sit amet est ac, dignissim placerat elit. Phasellus eros odio, tincidunt vel dictum ac, ultricies eu tellus. Nunc id sapien quis nisi maximus varius nec vel lectus. Duis quis justo dolor. Mauris sagittis arcu sit amet sapien pulvinar, a vestibulum ante lacinia."}
    ];

    return noticias;
  }

  rellenar(noticias:any){
    let titulo:any;
    let caption:any;
    let formato:string;

    /* 1 */
    titulo = this.renderer.createText(noticias[0].titulo);
    caption = this.renderer.createText(noticias[0].caption);
    this.renderer.appendChild(this.titulo1.nativeElement,titulo);
    this.renderer.appendChild(this.caption1.nativeElement,caption);
    //agregar formato
    formato = definirFormato(noticias[0].idTipo);
    this.renderer.addClass(this.btn1.nativeElement, "btn"+formato);
    this.renderer.addClass(this.titulo1.nativeElement, "tit"+formato);

    /* 2 */
    titulo = this.renderer.createText(noticias[1].titulo);
    caption = this.renderer.createText(noticias[1].caption);
    this.renderer.appendChild(this.titulo2.nativeElement,titulo);
    this.renderer.appendChild(this.caption2.nativeElement,caption);
    //agregar formato
    formato = definirFormato(noticias[1].idTipo);
    this.renderer.addClass(this.btn2.nativeElement, "btn"+formato);
    this.renderer.addClass(this.titulo2.nativeElement, "tit"+formato);

    /* 3 */
    titulo = this.renderer.createText(noticias[2].titulo);
    caption = this.renderer.createText(noticias[2].caption);
    this.renderer.appendChild(this.titulo3.nativeElement,titulo);
    this.renderer.appendChild(this.caption3.nativeElement,caption);
    //agregar formato
    formato = definirFormato(noticias[2].idTipo);
    this.renderer.addClass(this.btn3.nativeElement, "btn"+formato);
    this.renderer.addClass(this.titulo3.nativeElement, "tit"+formato);

    /* 4 */
    titulo = this.renderer.createText(noticias[3].titulo);
    caption = this.renderer.createText(noticias[3].caption);
    this.renderer.appendChild(this.titulo4.nativeElement,titulo);
    this.renderer.appendChild(this.caption4.nativeElement,caption);
    //agregar formato
    formato = definirFormato(6);
    this.renderer.addClass(this.btn4.nativeElement, "btn"+formato);
    this.renderer.addClass(this.titulo4.nativeElement, "tit"+formato);

    /* 5 */
    titulo = this.renderer.createText(noticias[4].titulo);
    caption = this.renderer.createText(noticias[4].caption);
    this.renderer.appendChild(this.titulo5.nativeElement,titulo);
    this.renderer.appendChild(this.caption5.nativeElement,caption);
    //agregar formato
    formato = definirFormato(6);
    this.renderer.addClass(this.btn5.nativeElement, "btn"+formato);
    this.renderer.addClass(this.titulo5.nativeElement, "tit"+formato);

    /* 6 */
    titulo = this.renderer.createText(noticias[5].titulo);
    caption = this.renderer.createText(noticias[5].caption);
    this.renderer.appendChild(this.titulo6.nativeElement,titulo);
    this.renderer.appendChild(this.caption6.nativeElement,caption);
    //agregar formato
    formato = definirFormato(6);
    this.renderer.addClass(this.btn6.nativeElement, "btn"+formato);
    this.renderer.addClass(this.titulo6.nativeElement, "tit"+formato);

    /* 7 */
    titulo = this.renderer.createText(noticias[6].titulo);
    caption = this.renderer.createText(noticias[6].caption);
    this.renderer.appendChild(this.titulo7.nativeElement,titulo);
    this.renderer.appendChild(this.caption7.nativeElement,caption);
    //agregar formato
    formato = definirFormato(6);
    this.renderer.addClass(this.btn7.nativeElement, "btn"+formato);
    this.renderer.addClass(this.titulo7.nativeElement, "tit"+formato);
  }

  activarBotonCerrar(){
    console.log("activando el botón de cerrar")
      this.renderer.listen(this.cerrar.nativeElement,"click", () => {
      this.idNoticia = 0;
      console.log("id: " + this.idNoticia);
    })
  }
  

}

function definirFormato(id:number){
  switch (id){
    case 0: return "-entretenimiento";
    case 1: return "-mundo";
    case 2: return "-deporte";
    case 3: return "-economia";
    case 4: return "-salud";
    case 5: return "-tecnologia";
    case 6: return "-otro";
    default: return "none";
  }
}

