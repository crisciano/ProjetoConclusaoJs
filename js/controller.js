const createController = jogo => {
  var d = document;
  let __jogo = jogo;
  let input = d.querySelector('.entrada'); 
  let lacunas = d.querySelector('.lacunas');

  const exibeLacunas = () => {
    for (let index = 0; index < __jogo.getLacunas().length; index++) {
      createElement()
    }
  };

  const createElement = () =>{
    var li = d.createElement('li');
    li.classList.add('lacuna');
    lacunas.appendChild(li);
  }

  const mudaPlaceHolder = texto => input.placeholder = texto;
  
  const clearInput  = () => input.value ='' 

  const guardaPalavraSecreta = () =>{
    try {
      __jogo.setPalavraSecreta(event.target.value)
      mudaPlaceHolder('Chute ...');
      clearInput();
      exibeLacunas();
    }catch(error){ alert(error.message) }
  };

  const leChute = () => {
    try {
      var valor = event.target.value;
      var resposta = __jogo.processaChute(valor);
      var ganhou = __jogo.ganhou();
      var resultado = __jogo.ganhouOuPerdeu();
      clearInput();
      resposta.map( (e, index) => {
        lacunas.querySelectorAll('li')[index].innerText = resposta[index];
      })
      if(resultado) {
        setTimeout( () => {
          ganhou  ? alert('Você ganhou.')
                  : alert('Você perdeu, tente novamente.') 
                },500)
          reinicia();
      }
    } catch (error) { alert(error.message) }
  }
          
  const reinicia = () => {
    setTimeout( () =>{ 
      __jogo.reinicia(); 
      lacunas.innerHTML = '';
      mudaPlaceHolder('Palavra secreta') 
      clearInput();
     }, 1000)
  }

  const inicia =  () => {
    input.addEventListener('keypress', (event) => {
      if (event.which == 13) {
        switch (__jogo.getEtapa()) {
          case 1:
            guardaPalavraSecreta();
            break;
          case 2:
            leChute();
            break;
        }
      }
    });
  };

  return { inicia };
}