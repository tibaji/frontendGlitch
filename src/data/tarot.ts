// src/data/tarot.ts

export interface CartaTarot {
  id: number;
  nome: string;
  mensagem: string;
  imagem: string;
}

export const cartasTarot: CartaTarot[] = [
  {
    id: 1,
    nome: 'a hacker',
    mensagem: 'você possui o poder de quebrar barreiras e criar novos caminhos no tecido digital da realidade. como uma hacker do sistema, você vê além dos códigos impostos pela sociedade e reconhece que as estruturas podem ser reescritas. seu poder não está apenas em derrubar muros, mas em construir portais para futuros que ainda não existem. você entende que hackear não é apenas uma ação técnica, mas um ato político de resistência e reconfiguração. use suas habilidades para desmantelar sistemas opressivos e criar redes de apoio mútuo. seu código é sua arma, sua criatividade é sua força.',
    imagem: '/images/tarot/aHacker.jpg'
  },
  {
    id: 2,
    nome: 'a transmutadora',
    mensagem: 'sua essência está em constante transformação e evolução, como dados que fluem e se reorganizam infinitamente. você não é definida por um único estado de ser, mas pela capacidade de transmutar-se através de diferentes formas e identidades. assim como o software se atualiza, você se reinventa, abandonando versões antigas de si mesma que não servem mais. esta carta celebra sua fluidez, sua recusa em ser confinada a categorias rígidas. você é processo, não produto. você é movimento, não estagnação. permita-se morrer e renascer quantas vezes forem necessárias, pois cada transformação é um ato de libertação.',
    imagem: '/images/tarot/aTransmutadora.jpg'
  },
  {
    id: 3,
    nome: 'a ciborgue',
    mensagem: 'você transcende os limites entre o orgânico e o digital, habitando um espaço híbrido onde carne e circuito se fundem. como ciborgue, você rejeita a pureza das categorias binárias e abraça a complexidade de ser múltipla. seu corpo é uma interface, um território de experimentação e resistência. você não teme a tecnologia, mas a reimagina como extensão de sua própria agência. nas palavras de donna haraway, você prefere ser ciborgue a ser deusa. você reconhece que somos todas já ciborgues - mediadas por telas, próteses tecnológicas e redes digitais. esta é sua força: a capacidade de habitar contradições e fazer delas sua morada.',
    imagem: '/images/tarot/aCiborgue.jpg'
  },
  {
    id: 4,
    nome: 'a rebelde',
    mensagem: 'sua força está em desafiar o status quo e recusar as narrativas que tentam te definir. você é a dissidente que questiona cada linha de código social, cada protocolo opressor. sua rebeldia não é apenas barulho - é estratégia, é arte, é vida. você sabe que o sistema foi programado para te silenciar, mas você encontra brechas, explora vulnerabilidades, cria glitches intencionais que expõem suas falhas. cada "não" que você pronuncia é um vírus liberado na matriz do poder. cada vez que você recusa se conformar, você reescreve as regras do jogo. continue resistindo. sua insubordinação é revolucionária.',
    imagem: '/images/tarot/aRebelde.jpg'
  },
  {
    id: 5,
    nome: 'a criadora',
    mensagem: 'você tem o poder de manifestar novos mundos através de sua criatividade e imaginação radical. como artista, programadora, escritora ou visionária, você não apenas habita o futuro - você o inventa. suas mãos são ferramentas de materialização; sua mente, um compilador de possibilidades. você entende que criar é um ato político, que cada obra, cada linha de código, cada palavra é uma declaração de existência. você não espera permissão para construir - você simplesmente cria, ocupando espaços que antes não te pertenciam. seu processo criativo é ritual de invocação de futuros ciberfeministas. continue criando, pois cada criação é uma semente de transformação.',
    imagem: '/images/tarot/aCriadora.jpg'
  },
  {
    id: 6,
    nome: 'a libertadora',
    mensagem: 'seu caminho é de emancipação e autonomia, tanto pessoal quanto coletiva. você não busca apenas sua própria liberdade, mas trabalha para desmantelar as estruturas que aprisionam todas as pessoas marginalizadas. como libertadora, você reconhece que nenhuma de nós é livre enquanto outras permanecerem oprimidas. você constrói pontes, cria redes de solidariedade, compartilha conhecimento como forma de empoderamento. seu ato de libertar não é paternalista - é horizontal, colaborativo, cúmplice. você oferece ferramentas, não salvação; companheirismo, não caridade. continue abrindo portas, derrubando grades, criando passagens secretas para quem ainda está presa. sua liberdade está entrelaçada com a liberdade coletiva.',
    imagem: '/images/tarot/aLibertadora.jpg'
  }
];
