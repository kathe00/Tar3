import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})

export class ContenidoComponent implements OnInit {

  //definimos los valores traidos del componente externo
  @Input() idTipo?:number;
  @Input() img1?:string;
  @Input() autor?:string;
  @Input() fecha?:string;
  @Input() titulo?:string;
  @Input() texto?:string;

  //tomamos el div donde se mostrará la noticia
  @ViewChild('contenido') div!: ElementRef;

  constructor(private renderer:Renderer2) { 
  }

  ngOnInit(): void { 
    /*
    console.log("idTipo: " + this.idTipo);
    console.log("img: " + this.img1);
    console.log("autor: " + this.autor);
    console.log("fecha: " + this.fecha);
    console.log("titulo: " + this.titulo);
    console.log("texto: " + this.texto);*/
    
    setTimeout(() => {
      this.construir();
    }, 200);
    
  }

  construir(){
    let formato;
    //primero creamos el elemento img
    let img = this.renderer.createElement('img');
    //agregamos sus propiedades
    this.renderer.setAttribute(img,'src','../../assets/' + this.img1);
    this.renderer.setAttribute(img,'alt','...');
    this.renderer.setAttribute(img,'id','img');
    //lo añadimos al div
    this.renderer.appendChild(this.div.nativeElement, img);
    console.log(this.div)

    //ahora lo mismo con los otros componentes
    let titulo = this.renderer.createText(this.titulo + "");
    let h3 = this.renderer.createElement('h3');
    formato =  definirFormato(this.idTipo + "");
    this.renderer.setAttribute(h3,'id','titulo');
    this.renderer.addClass(h3, "tit-"+formato);
    this.renderer.appendChild(h3, titulo);
    this.renderer.appendChild(this.div.nativeElement, h3);

    let autor = this.renderer.createText(this.autor + "");
    let p1 = this.renderer.createElement('p');
    this.renderer.setAttribute(p1,'id','autor');
    this.renderer.appendChild(p1, autor);
    this.renderer.appendChild(this.div.nativeElement, p1);

    let fecha = this.renderer.createText(this.fecha + "");
    let p2 = this.renderer.createElement('p');
    this.renderer.setAttribute(p2,'id','fecha');
    this.renderer.appendChild(p2, fecha);
    this.renderer.appendChild(this.div.nativeElement, p2);

    let categoria = this.renderer.createText("Categoría: " + formato + ".");
    let p4 = this.renderer.createElement('p');
    this.renderer.addClass(p4, "tit-"+formato);
    this.renderer.setAttribute(p4,'id','categoria');
    this.renderer.appendChild(p4, categoria);
    this.renderer.appendChild(this.div.nativeElement, p4);

    let hr = this.renderer.createElement('hr');
    this.renderer.appendChild(this.div.nativeElement, hr);

    let texto = this.renderer.createText(this.texto + "");
    let p3 = this.renderer.createElement('p');
    this.renderer.setAttribute(p3,'id','texto');
    this.renderer.appendChild(p3, texto);
    this.renderer.appendChild(this.div.nativeElement, p3);

  }

}

function definirFormato(id:string){
  switch (id){
    case "0": return "entretenimiento";
    case "1": return "mundo";
    case "2": return "deporte";
    case "3": return "economia";
    case "4": return "salud";
    case "5": return "tecnologia";
    case "6": return "otro";
    default: return "none";
  }
}