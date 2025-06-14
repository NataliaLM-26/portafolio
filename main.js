let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2400)
  .typeString('Egresada de la Licenciatura en Ingeniería de Software')
  .pauseFor(100)
  .deleteChars(5)
  .start();
