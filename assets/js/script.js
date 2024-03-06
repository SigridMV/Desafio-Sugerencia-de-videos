let iifeGlobal = (() => {
  let inyectarTodo = (url, id) => {
    id.setAttribute("src", url);
    id.style.display = "block";
  };

  return {
    mostrarTodo: (url, id) => inyectarTodo(url, id),
  };
})();

// Patrón Módulo mediante IIFE
const Reproductor = (() => {
  // Función privada para insertar los elementos recibidos
  const insertarVideo = (url, id) => {
    iifeGlobal.mostrarTodo(url, id);
  };

  // Clase padre Multimedia
  class Multimedia {
    constructor(url) {
      let _url = url; 
      this.getURL = () => _url;
    }

    setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
    }
  }

  // Clase hija Reproductor
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this.id = id;
    }

    playMultimedia() {
      insertarVideo(this.getURL(), this.id);
    }

    setInicio(tiempo) {
        const url = `${this.getURL()}&start=${tiempo}`;
      insertarVideo(url, this.id);
    }
  }

  return {
    Reproductor,
  };
})();


// Instanciar y mostrar los videos en el documento HTML
const musicaReproductor = new Reproductor.Reproductor(
  "https://www.youtube.com/embed/6hzrDeceEKc?si=bIB-7_xzlYGTb1j3",
  document.getElementById("musica")
);
const peliculasReproductor = new Reproductor.Reproductor(
  "https://www.youtube.com/embed/q2cSseNsKDs?si=3R2nl4kX-LKYJp08",
  document.getElementById("peliculas")
);
const seriesReproductor = new Reproductor.Reproductor(
  "https://www.youtube.com/embed/sIZ91tq8Lr0?si=d9LBSRuGXoQgNbUx",
  document.getElementById("series")
);

musicaReproductor.playMultimedia();
peliculasReproductor.playMultimedia();
seriesReproductor.playMultimedia();

// Modificar el tiempo de inicio en alguna de las instancias creadas
peliculasReproductor.setInicio(200);


