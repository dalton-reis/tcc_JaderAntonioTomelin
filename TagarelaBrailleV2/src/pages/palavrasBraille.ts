export class palavraBraille {
  static exemplosImagem = [
    { palavra: 'abelha', imagem: './assets/img/palavras-braille/abelha.png', texto: '' },
    { palavra: 'bau', imagem: './assets/img/palavras-braille/bau.png', texto: '' },
    { palavra: 'cachorro', imagem: './assets/img/palavras-braille/cachorro.png', texto: '' },
    { palavra: 'dado', imagem: './assets/img/palavras-braille/dado.png', texto: '' },
    { palavra: 'elefante', imagem: './assets/img/palavras-braille/elefante.png', texto: '' },
    { palavra: 'folha', imagem: './assets/img/palavras-braille/folha.png', texto: '' },
    { palavra: 'gato', imagem: './assets/img/palavras-braille/gato.png', texto: '' },
    ////////// 
    { palavra: 'helicóptero', imagem: './assets/img/palavras-braille/helicoptero.png', texto: '' },
    { palavra: 'ilha', imagem: './assets/img/palavras-braille/ilha.png', texto: '' },
    { palavra: 'joaninha', imagem: './assets/img/palavras-braille/joaninha.png', texto: '' },
    { palavra: 'kiwi', imagem: './assets/img/palavras-braille/kiwi.png', texto: '' },
    { palavra: 'livro', imagem: './assets/img/palavras-braille/livro.png', texto: '' },
    { palavra: 'morango', imagem: './assets/img/palavras-braille/morango.png', texto: '' },
    { palavra: 'ninho', imagem: './assets/img/palavras-braille/ninho.png', texto: '' },
    ///////////////
    { palavra: 'olho', imagem: './assets/img/palavras-braille/olho.png', texto: '' },
    { palavra: 'pato', imagem: './assets/img/palavras-braille/pato.png', texto: '' },
    { palavra: 'queijo', imagem: './assets/img/palavras-braille/queijo.png', texto: '' },
    { palavra: 'rato', imagem: './assets/img/palavras-braille/rato.png', texto: '' },
    { palavra: 'sapo', imagem: './assets/img/palavras-braille/sapo.png', texto: '' },
    { palavra: 'tigre', imagem: './assets/img/palavras-braille/tigre.png', texto: '' },
    { palavra: 'uva', imagem: './assets/img/palavras-braille/uva.png', texto: '' },
    ////////////////////
    { palavra: 'vassoura', imagem: './assets/img/palavras-braille/vassoura.png', texto: '' },
    { palavra: 'xícara', imagem: './assets/img/palavras-braille/xicara.png', texto: '' },
    { palavra: 'youtube', imagem: './assets/img/palavras-braille/youtube.png', texto: '' },
    { palavra: 'zebra', imagem: './assets/img/palavras-braille/zebra.png', texto: '' },
    { palavra: 'maça', imagem: './assets/img/palavras-braille/maca.png', texto: '' },
    { palavra: 'jacaré', imagem: './assets/img/palavras-braille/jacare.png', texto: '' },
    { palavra: 'máscara', imagem: './assets/img/palavras-braille/mascara.png', texto: '' },
    /////////////////////////////////////
    { palavra: '', imagem: ' ', texto: 'Símbolo não utilizado na grafia braille para a língua portuguesa' },
    { palavra: 'baú', imagem: './assets/img/palavras-braille/bau.png', texto: '' },
    { palavra: 'triângulo', imagem: './assets/img/palavras-braille/triangulo.png', texto: '' },
    { palavra: 'gênio', imagem: './assets/img/palavras-braille/genio.png', texto: '' },
    { palavra: '', imagem: ' ', texto: 'Símbolo não utilizado na grafia braille para a língua portuguesa' },
    { palavra: 'ônibus', imagem: './assets/img/palavras-braille/onibus.png', texto: '' },
    { palavra: 'furb@ furb.com', imagem: './assets/img/sinais-braille/arroba-braille.png', texto: '' },
    { palavra: 'amanhã  vamos  à  praia.', imagem: './assets/img/palavras-braille/letra.png', texto: '' },
    { palavra: '', imagem: ' ', texto: 'Símbolo não utilizado na grafia braille para a língua portuguesa' },
    { palavra: '', imagem: ' ', texto: 'Símbolo não utilizado na grafia braille para a língua portuguesa' },
    { palavra: 'caminhões', imagem: './assets/img/palavras-braille/caminhoes.png', texto: '' },
    { palavra: 'Wallace', imagem: ' ', texto: 'Letra utilizada geralmente em substantivos próprios.' },
    { palavra: 'escola, trabalho e casa.', imagem: './assets/img/palavras-braille/virgula.png', texto: '' },
    { palavra: 'livros; caderno; canetas; lápis.', imagem: './assets/img/palavras-braille/pontovirgula.png', texto: '' },
    { palavra: 'brincar de: amarelinha e pega-pega.', imagem: './assets/img/palavras-braille/dois-pontos.png', texto: '' },
    { palavra: '2 ÷ 1', imagem: './assets/img/palavras-braille/divisao.png', texto: '' },
    { palavra: 'qual seu nome?', imagem: './assets/img/palavras-braille/interrogacao.png', texto: '' },
    { palavra: 'eu amo você!', imagem: './assets/img/palavras-braille/exclamacao.png', texto: '' },
    { palavra: '34 + 56', imagem: './assets/img/palavras-braille/adicao.png', texto: '' },
    { palavra: '78 = 78', imagem: './assets/img/palavras-braille/igual.png', texto: '' },
    { palavra: '9 × 10', imagem: './assets/img/palavras-braille/multiplicacao.png', texto: '' },//usado pra representar o x 158
    { palavra: '"melhor do mundo"', imagem: './assets/img/palavras-braille/aspas.png', texto: '' },
    { palavra: '*exemplo', imagem: './assets/img/palavras-braille/asterisco.png', texto: '' },
    { palavra: 'hoje a máxima foi de 35º c.', imagem: './assets/img/palavras-braille/grau.png', texto: '' },
    { palavra: 'ímã', imagem: './assets/img/palavras-braille/ima.png', texto: '' },
    { palavra: 'avião', imagem: './assets/img/palavras-braille/aviao.png', texto: '' },
    { palavra: 'óculos', imagem: './assets/img/palavras-braille/oculos.png', texto: '' },
    { palavra: '1 2 3 4 5 6 7 8 9 10', imagem: './assets/img/palavras-braille/sinal-numerico.png', texto: '' },
    { palavra: 'hoje terminei de ler um livro.', imagem: './assets/img/palavras-braille/ponto-final.png', texto: '' },
    { palavra: 'minha verdura preferida é couve-flor.', imagem: './assets/img/palavras-braille/hifen.png', texto: '' },
    { palavra: ' ', imagem: ' ', texto: 'Este sinal só possui valor representativo na grafia braille para a língua portuguesa combinado com outro sinal. Ex: Pi' },
    { palavra: ' ', imagem: ' ', texto: 'Este sinal só possui valor representativo na grafia braille para a língua portuguesa combinado com outro sinal. Ex: Alfa' },
    { palavra: ' ', imagem: ' ', texto: 'Este sinal só possui valor representativo na grafia braille para a língua portuguesa combinado com outro sinal. Ex: 5%' },
    { palavra: 'google.com', imagem: ' ', texto: 'Este sinal não possui representação em tinta e é utilizado em questões específicas da grafia braille para a língua portuguesa. Deve ser escrito imediatamente antes e após endereços de sites e e-mails, sem espaços.' },
    { palavra: 'Braille', imagem: ' ', texto: '' },
    { palavra: 'R$ 10,00', imagem: './assets/img/palavras-braille/cifrao.png', texto: '' },
    { palavra: ' ', imagem: ' ', texto: 'Este sinal só possui valor representativo na grafia braille para a língua portuguesa combinado com outro sinal.' },
  ];
  static letrasSmall = [
    { letra: 'a', img: './assets/img/sinais-braille-small/a.png', imgMarcado: './assets/img/sinais-braille-small/a-d.png' },
    { letra: 'b', img: './assets/img/sinais-braille-small/b.png', imgMarcado: './assets/img/sinais-braille-small/b-d.png' },
    { letra: 'c', img: './assets/img/sinais-braille-small/c.png', imgMarcado: './assets/img/sinais-braille-small/c-d.png' },
    { letra: 'd', img: './assets/img/sinais-braille-small/d.png', imgMarcado: './assets/img/sinais-braille-small/d-d.png' },
    { letra: 'e', img: './assets/img/sinais-braille-small/e.png', imgMarcado: './assets/img/sinais-braille-small/e-d.png' },
    { letra: 'f', img: './assets/img/sinais-braille-small/f.png', imgMarcado: './assets/img/sinais-braille-small/f-d.png' },
    { letra: 'g', img: './assets/img/sinais-braille-small/g.png', imgMarcado: './assets/img/sinais-braille-small/g-d.png' },
    { letra: 'h', img: './assets/img/sinais-braille-small/h.png', imgMarcado: './assets/img/sinais-braille-small/h-d.png' },
    { letra: 'i', img: './assets/img/sinais-braille-small/i.png', imgMarcado: './assets/img/sinais-braille-small/i-d.png' },
    { letra: 'j', img: './assets/img/sinais-braille-small/j.png', imgMarcado: './assets/img/sinais-braille-small/j-d.png' },
    { letra: 'k', img: './assets/img/sinais-braille-small/k.png', imgMarcado: './assets/img/sinais-braille-small/k-d.png' },
    { letra: 'l', img: './assets/img/sinais-braille-small/l.png', imgMarcado: './assets/img/sinais-braille-small/l-d.png' },
    { letra: 'm', img: './assets/img/sinais-braille-small/m.png', imgMarcado: './assets/img/sinais-braille-small/m-d.png' },
    { letra: 'n', img: './assets/img/sinais-braille-small/n.png', imgMarcado: './assets/img/sinais-braille-small/n-d.png' },
    { letra: 'o', img: './assets/img/sinais-braille-small/o.png', imgMarcado: './assets/img/sinais-braille-small/o-d.png' },
    { letra: 'p', img: './assets/img/sinais-braille-small/p.png', imgMarcado: './assets/img/sinais-braille-small/p-d.png' },
    { letra: 'q', img: './assets/img/sinais-braille-small/q.png', imgMarcado: './assets/img/sinais-braille-small/q-d.png' },
    { letra: 'r', img: './assets/img/sinais-braille-small/r.png', imgMarcado: './assets/img/sinais-braille-small/r-d.png' },
    { letra: 's', img: './assets/img/sinais-braille-small/s.png', imgMarcado: './assets/img/sinais-braille-small/s-d.png' },
    { letra: 't', img: './assets/img/sinais-braille-small/t.png', imgMarcado: './assets/img/sinais-braille-small/t-d.png' },
    { letra: 'u', img: './assets/img/sinais-braille-small/u.png', imgMarcado: './assets/img/sinais-braille-small/u-d.png' },
    { letra: 'v', img: './assets/img/sinais-braille-small/v.png', imgMarcado: './assets/img/sinais-braille-small/v-d.png' },
    { letra: 'x', img: './assets/img/sinais-braille-small/x.png', imgMarcado: './assets/img/sinais-braille-small/x-d.png' },
    { letra: 'y', img: './assets/img/sinais-braille-small/y.png', imgMarcado: './assets/img/sinais-braille-small/y-d.png' },
    { letra: 'z', img: './assets/img/sinais-braille-small/z.png', imgMarcado: './assets/img/sinais-braille-small/z-d.png' },
    { letra: 'ç', img: './assets/img/sinais-braille-small/cedilha.png', imgMarcado: './assets/img/sinais-braille-small/cedilha-d.png' },
    { letra: 'é', img: './assets/img/sinais-braille-small/e-agudo.png', imgMarcado: './assets/img/sinais-braille-small/e-agudo-d.png' },
    { letra: 'á', img: './assets/img/sinais-braille-small/a-agudo.png', imgMarcado: './assets/img/sinais-braille-small/a-agudo-d.png' },
    { letra: 'è', img: ' ', imgMarcado: ' ' },
    { letra: 'ú', img: './assets/img/sinais-braille-small/u-agudo.png', imgMarcado: './assets/img/sinais-braille-small/u-agudo-d.png' },
    { letra: 'â', img: './assets/img/sinais-braille-small/a-circunflexo.png', imgMarcado: './assets/img/sinais-braille-small/a-circunflexo-d.png' },
    { letra: 'ê', img: './assets/img/sinais-braille-small/e-circunflexo.png', imgMarcado: './assets/img/sinais-braille-small/e-circunflexo-d.png' },
    { letra: ' ', img: './assets/img/sinais-braille-small/espaco.png', imgMarcado: '' },
    { letra: 'ô', img: './assets/img/sinais-braille-small/o-circunflexo.png', imgMarcado: './assets/img/sinais-braille-small/o-circunflexo-d.png' },
    { letra: '@', img: './assets/img/sinais-braille-small/arroba.png', imgMarcado: './assets/img/sinais-braille-small/arroba-d.png' },
    { letra: 'à', img: './assets/img/sinais-braille-small/a-crase.png', imgMarcado: './assets/img/sinais-braille-small/a-crase-d.png' },
    { letra: 'ï', img: './assets/img/sinais-braille-small/i-trema.png', imgMarcado: './assets/img/sinais-braille-small/i-trema-d.png' },
    { letra: 'ü', img: './assets/img/sinais-braille-small/u-trema.png', imgMarcado: './assets/img/sinais-braille-small/u-trema-d.png' },
    { letra: 'õ', img: './assets/img/sinais-braille-small/o-til.png', imgMarcado: './assets/img/sinais-braille-small/o-til-d.png' },
    { letra: 'w', img: './assets/img/sinais-braille-small/w.png', imgMarcado: './assets/img/sinais-braille-small/w-d.png' },
    { letra: ',', img: './assets/img/sinais-braille-small/virgula.png', imgMarcado: './assets/img/sinais-braille-small/virgula-d.png' },
    { letra: ';', img: './assets/img/sinais-braille-small/ponto-e-virgula.png', imgMarcado: './assets/img/sinais-braille-small/ponto-e-virgula-d.png' },
    { letra: ':', img: './assets/img/sinais-braille-small/doispontos.png', imgMarcado: './assets/img/sinais-braille-small/doispontos-d.png' },
    { letra: '÷', img: './assets/img/sinais-braille-small/divisao.png', imgMarcado: './assets/img/sinais-braille-small/divisao-d.png' },
    { letra: '?', img: './assets/img/sinais-braille-small/interrogacao.png', imgMarcado: './assets/img/sinais-braille-small/interrogacao-d.png' },
    { letra: '!', img: './assets/img/sinais-braille-small/exclamacao_adicao.png', imgMarcado: './assets/img/sinais-braille-small/exclamacao_adicao-d.png' },
    { letra: '+', img: './assets/img/sinais-braille-small/exclamacao_adicao.png', imgMarcado: './assets/img/sinais-braille-small/exclamacao_adicao-d.png' },
    { letra: '=', img: './assets/img/sinais-braille-small/igual.png', imgMarcado: './assets/img/sinais-braille-small/igual-d.png' },
    { letra: '×', img: './assets/img/sinais-braille-small/multiplicacao_aspa.png', imgMarcado: './assets/img/sinais-braille-small/multiplicacao_aspa-d.png' },
    { letra: '"', img: './assets/img/sinais-braille-small/multiplicacao_aspa.png', imgMarcado: './assets/img/sinais-braille-small/multiplicacao_aspa-d.png' },
    { letra: '*', img: './assets/img/sinais-braille-small/asterisco.png', imgMarcado: './assets/img/sinais-braille-small/asterisco-d.png' },
    { letra: 'º', img: './assets/img/sinais-braille-small/grau.png', imgMarcado: './assets/img/sinais-braille-small/grau-d.png' },
    { letra: 'í', img: './assets/img/sinais-braille-small/i-agudo.png', imgMarcado: './assets/img/sinais-braille-small/i-agudo-d.png' },
    { letra: 'ã', img: './assets/img/sinais-braille-small/a-til.png', imgMarcado: './assets/img/sinais-braille-small/a-til-d.png' },
    { letra: 'ó', img: './assets/img/sinais-braille-small/o-agudo.png', imgMarcado: './assets/img/sinais-braille-small/o-agudo-d.png' },
    /*55*/{ letra: 'nº', img: './assets/img/sinais-braille-small/shift-n.png', imgMarcado: './assets/img/sinais-braille-small/shift-n.png' },
    { letra: '.', img: './assets/img/sinais-braille-small/ponto.png', imgMarcado: './assets/img/sinais-braille-small/ponto-d.png' },
    { letra: '-', img: './assets/img/sinais-braille-small/hifen.png', imgMarcado: './assets/img/sinais-braille-small/hifen-d.png' },
    { letra: 'SE4', img: './assets/img/sinais-braille-small/SE4.png', imgMarcado: './assets/img/sinais-braille-small/SE4-d.png' },
    { letra: 'SE45', img: './assets/img/sinais-braille-small/SE45.png', imgMarcado: './assets/img/sinais-braille-small/SE45-d.png' },
    { letra: 'SE456', img: './assets/img/sinais-braille-small/SE456.png', imgMarcado: './assets/img/sinais-braille-small/SE456-d.png' },
    { letra: 'SE5', img: './assets/img/sinais-braille-small/SE5-d.png', imgMarcado: './assets/img/sinais-braille-small/SE5-d.png' },
    { letra: 'maiúscula', img: './assets/img/sinais-braille-small/shift.png', imgMarcado: './assets/img/sinais-braille-small/shift-d.png' },
    { letra: '$', img: './assets/img/sinais-braille-small/cifrao.png', imgMarcado: './assets/img/sinais-braille-small/cifrao-d.png' },
    { letra: 'SE6', img: ' ', imgMarcado: '' },
    { letra: ' ', img: './assets/img/sinais-braille-small/espaco.png', imgMarcado: './assets/img/sinais-braille-small/espaco.png' },//espaço
    { letra: '1', img: './assets/img/sinais-braille-small/a.png', imgMarcado: './assets/img/sinais-braille-small/a-d.png' },
    { letra: '2', img: './assets/img/sinais-braille-small/b.png', imgMarcado: './assets/img/sinais-braille-small/b-d.png' },
    { letra: '3', img: './assets/img/sinais-braille-small/c.png', imgMarcado: './assets/img/sinais-braille-small/c-d.png' },
    { letra: '4', img: './assets/img/sinais-braille-small/d.png', imgMarcado: './assets/img/sinais-braille-small/d-d.png' },
    { letra: '5', img: './assets/img/sinais-braille-small/e.png', imgMarcado: './assets/img/sinais-braille-small/e-d.png' },
    { letra: '6', img: './assets/img/sinais-braille-small/f.png', imgMarcado: './assets/img/sinais-braille-small/f-d.png' },
    { letra: '7', img: './assets/img/sinais-braille-small/g.png', imgMarcado: './assets/img/sinais-braille-small/g-d.png' },
    { letra: '8', img: './assets/img/sinais-braille-small/h.png', imgMarcado: './assets/img/sinais-braille-small/h-d.png' },
    { letra: '9', img: './assets/img/sinais-braille-small/i.png', imgMarcado: './assets/img/sinais-braille-small/i-d.png' },
    { letra: '0', img: './assets/img/sinais-braille-small/j.png', imgMarcado: './assets/img/sinais-braille-small/j-d.png' },
    { letra: '!+', img: './assets/img/sinais-braille-small/exclamacao_adicao.png', imgMarcado: './assets/img/sinais-braille-small/exclamacao_adicao-d.png' },
    { letra: '"x', img: './assets/img/sinais-braille-small/multiplicacao_aspa.png', imgMarcado: './assets/img/sinais-braille-small/multiplicacao_aspa-d.png' },
  ]



  static brailleSimples = ['100000', '110000', '100100', '100110', '100010', '110100', '110110', '110010', '010100', '010110',
    '101000', '111000', '101100', '101110', '101010', '111100', '111110', '111010', '011100', '011110',
    '101001', '111001', '101101', '101111', '101011', '111101', '111111', '111011', '011101', '011111',
    '100001', '110001', '100111', '100011', '110101', '110111', '110011', '010101', '010111',
    '010000', '011000', '010010', '010011', '010001', '011010', '011011', '011001', '001010', '001011',
    '001100', '001110', '001101', '001111', '001000', '001001',
    '000111', '000011'];

  static correspondenteS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'x', 'y', 'z', 'ç', 'é', 'á', 'è', 'ú',
    'â', 'ê', 'ô', '@', 'à', 'ï', 'ü', 'õ', 'w',
    ',', ';', ':', '÷', '?', '! (Exclamação) ou + (Adição)', '=', '" (aspas duplas) ou x (multiplicação)', '*', 'º',
    'í', 'ã', 'ó', 'número', '.', '-',
    '|', '$'];

    //usado apenas os sinais sem os textos
    static correspondenteSinais = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'x', 'y', 'z', 'ç', 'é', 'á', 'è', 'ú',
    'â', 'ê', 'ô', '@', 'à', 'ï', 'ü', 'õ', 'w',
    ',', ';', ':', '÷', '?', '!+', '=', '"x', '*', 'º',
    'í', 'ã', 'ó', 'número', '.', '-',
    '|', '$'];

  static brailleComposto = ['000101', '001111', '110001001000', '000001001110', '001001001001', '010101101010', '111011001000', '000001011111',
    '000010111000', '000111010000', '110101100011', '000010010011', '000111001011'];

  static correspontenteC = ['Maiúscula', 'Número', '(', ')', '_ (Travessão)', 'Círculo', '[', ']', '{', '}', 'Raiz quadrada', 'Traço de fração', '%'];

  static brailleNumero = ['100000', '110000', '100100', '100110', '100010', '110100', '110110', '110010', '010100', '010110'];

  static correspondenteN = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  

}