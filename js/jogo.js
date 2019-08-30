const createGame = sprite => {
  let __sprite = sprite;
  let resposta = [];
  let lacunas = [];
  let etapa = 1;

  const ganhou = () => 
    (__sprite.returnTentativas() !== 9 && !lacunas.includes('') ) ? true : false

  const perdeu = () => 
    __sprite.returnTentativas() === 9 ? true : false

  const ganhouOuPerdeu = () => 
    (__sprite.returnTentativas() !== 9 && !lacunas.includes('') ) ||
    (__sprite.returnTentativas() === 9 && lacunas.includes('') ) ? true : false

  const reinicia = () => {
    resposta = [];
    lacunas = [];
    etapa = 1;
    __sprite.reset();
  }

  const processaChute = chute =>{ 
    if(!chute.length) throw Error('Chute Inválida!')
    var acertou;
    resposta.map((item, index) =>{ 
      if( item == chute){
        lacunas[index] = chute;
        acertou = true;
      }
    })
    !acertou ? __sprite.nextFrame() : null
    return lacunas;
  }

  const setPalavraSecreta = palavra => {
    if(!palavra.length) throw Error('Palavra secreta Inválida!')
    resposta = palavra.split('');
    lacunas = resposta.map(e => e = '')
    etapa = 2;
  } 

  const getLacunas = () =>{
    return lacunas
  }

  const getEtapa = () => { 
    return etapa;
  }

  return {
    setPalavraSecreta,
    getEtapa,
    getLacunas,
    processaChute,
    ganhou,
    perdeu,
    ganhouOuPerdeu,
    reinicia
  }
}