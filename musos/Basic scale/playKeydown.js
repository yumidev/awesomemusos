var playKeydown= function(event){
  if ( event.which === A_KEY ) {
    event.preventDefault();
    noteLowC();
  }
  if ( event.which === S_KEY ) {
    event.preventDefault();
    noteD();
  }
  if ( event.which === D_KEY ) {
    event.preventDefault();
    noteE();
  }
  if ( event.which === F_KEY ) {
    event.preventDefault();
    noteF();
  }
  if ( event.which === G_KEY ) {
    event.preventDefault();
    noteG();
  }
  if ( event.which === H_KEY ) {
    event.preventDefault();
    noteA();
  }
  if ( event.which === J_KEY ) {
    event.preventDefault();
    noteB();
  }
  if ( event.which === K_KEY ) {
    event.preventDefault();
    noteTopC();
  }
  if ( event.which === L_KEY ) {
    event.preventDefault();
    foo.start();
  }
}
