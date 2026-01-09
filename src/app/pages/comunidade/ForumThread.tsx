import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Send, MessageSquare, Clock } from 'lucide-react';

interface Post {
  id: number;
  alias: string;
  mensagem: string;
  data_criacao: string;
  respostas?: Post[];
}

export function ForumThread() {
  const { forumId } = useParams<{ forumId: string }>();
  const [alias, setAlias] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Dados mockados dos fóruns
  const forunsData = {
    '1': { 
      titulo: 'Manifesto Ciborgue: Discussões e Reflexões', 
      cor: '#ff006e',
      posts: [
        {
          id: 1,
          alias: '@CyberFem',
          mensagem: 'O Manifesto Ciborgue de Donna Haraway revolucionou minha forma de pensar sobre tecnologia e identidade. Como vocês interpretam a ideia de que "preferiríamos ser ciborgues a deusas"?',
          data_criacao: new Date(Date.now() - 7200000).toISOString(), // 2h atrás
        },
        {
          id: 2,
          alias: '@TechPhilosopher',
          mensagem: 'Para mim, essa frase representa a libertação das categorias essencialistas. O ciborgue é uma figura híbrida que desafia as dicotomias natureza/cultura, humano/máquina. É sobre abraçar a fluidez!',
          data_criacao: new Date(Date.now() - 5400000).toISOString(), // 1.5h atrás
        },
        {
          id: 3,
          alias: '@GlitchPoet',
          mensagem: 'Exatamente! E isso se conecta diretamente com questões de gênero. Se podemos ser ciborgues, por que precisamos de categorias rígidas? A tecnologia pode ser uma ferramenta de emancipação.',
          data_criacao: new Date(Date.now() - 3600000).toISOString(), // 1h atrás
        }
      ]
    },
    '2': { 
      titulo: 'Arte Digital e Resistência', 
      cor: '#00f5ff',
      posts: [
        {
          id: 4,
          alias: '@GlitchArtist',
          mensagem: 'Estou trabalhando em uma série de obras que usam glitch art para questionar padrões de beleza impostos pela sociedade. O erro digital como manifesto político!',
          data_criacao: new Date(Date.now() - 18000000).toISOString(), // 5h atrás
        },
        {
          id: 5,
          alias: '@PixelRebel',
          mensagem: 'Adorei o conceito! Você já viu o trabalho da Rosa Menkman? Ela tem uma teoria incrível sobre o glitch como ruptura do esperado. Arte que questiona a perfeição imposta.',
          data_criacao: new Date(Date.now() - 14400000).toISOString(), // 4h atrás
        }
      ]
    },
    '3': { 
      titulo: 'Tecnologia e Gênero: Novos Horizontes', 
      cor: '#b967ff',
      posts: [
        {
          id: 6,
          alias: '@TechActivist',
          mensagem: 'Como podemos tornar os espaços tech mais inclusivos? Trabalho com desenvolvimento e vejo diariamente o quanto esses ambientes ainda são hostis para mulheres e pessoas não-binárias.',
          data_criacao: new Date(Date.now() - 86400000).toISOString(), // 1 dia atrás
        },
        {
          id: 7,
          alias: '@CodeWarrior',
          mensagem: 'Educação é fundamental! Precisamos de mais iniciativas que incentivem meninas e pessoas LGBTQIA+ a entrarem na área desde cedo. E também desconstruir a cultura bro que domina o setor.',
          data_criacao: new Date(Date.now() - 82800000).toISOString(), // 23h atrás
        },
        {
          id: 8,
          alias: '@DataFeminist',
          mensagem: 'Concordo! E também precisamos questionar os algoritmos e IAs que perpetuam vieses de gênero. A tecnologia não é neutra, ela reflete (e amplifica) as desigualdades da sociedade.',
          data_criacao: new Date(Date.now() - 79200000).toISOString(), // 22h atrás
        }
      ]
    },
    '4': { 
      titulo: 'Criando Espaços Seguros no Ciberespaço', 
      cor: '#ff8800',
      posts: [
        {
          id: 9,
          alias: '@SafeSpace',
          mensagem: 'Quais estratégias vocês usam para criar comunidades online mais acolhedoras? Estou pensando em moderar um servidor e quero fazer isso da melhor forma possível.',
          data_criacao: new Date(Date.now() - 10800000).toISOString(), // 3h atrás
        },
        {
          id: 10,
          alias: '@ModeratorPro',
          mensagem: 'Diretrizes claras são essenciais! Deixe explícito o que é aceitável e o que não é. E tenha uma equipe de moderação diversa que entenda as diferentes perspectivas da comunidade.',
          data_criacao: new Date(Date.now() - 9000000).toISOString(), // 2.5h atrás
        }
      ]
    }
  };

  const forum = forunsData[forumId as keyof typeof forunsData];
  const [posts, setPosts] = useState<Post[]>(forum?.posts || []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!alias.startsWith('@')) {
      alert('O alias deve começar com @');
      return;
    }
    
    if (mensagem.length < 10) {
      alert('A mensagem deve ter pelo menos 10 caracteres');
      return;
    }

    const novoPost: Post = {
      id: Date.now(),
      alias,
      mensagem,
      data_criacao: new Date().toISOString(),
      respostas: []
    };

    setPosts([novoPost, ...posts]);
    setMensagem('');
    
    alert('Post criado! (por enquanto só no frontend)');
  };

  const formatarData = (data: string) => {
    const agora = new Date();
    const postData = new Date(data);
    const diffMs = agora.getTime() - postData.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'agora mesmo';
    if (diffMins < 60) return `${diffMins}min atrás`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h atrás`;
    return `${Math.floor(diffMins / 1440)}d atrás`;
  };

  if (!forum) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-neon-pink glitch-text mb-4">fórum não encontrado</h1>
          <Link to="/forums" className="text-neon-blue hover:text-neon-orange transition-colors">
            <ArrowLeft className="w-5 h-5 inline mr-2" />
            voltar para fóruns
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <Link 
          to="/forums" 
          className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          voltar para fóruns
        </Link>

        <div className="mb-12">
          <h1 
            className="text-4xl md:text-5xl glitch-text mb-4"
            style={{ color: forum.cor }}
          >
            {forum.titulo}
          </h1>
          <div className="flex items-center gap-2 text-neon-purple/60 text-sm">
            <MessageSquare className="w-4 h-4" />
            <span>{posts.length} posts</span>
          </div>
        </div>

        {/* Formulário de novo post */}
        <div className="bg-cyber-dark/50 border-2 border-neon-pink rounded-xl p-6 backdrop-blur-sm mb-8">
          <h2 className="text-2xl text-neon-pink mb-4">criar post</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-neon-blue text-sm mb-2">
                seu alias
              </label>
              <input
                type="text"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                placeholder="@seu_alias"
                className="w-full bg-cyber-dark/80 border-2 border-neon-blue rounded-lg px-4 py-3 text-white placeholder-neon-purple/40 focus:border-neon-pink focus:outline-none transition-colors"
                required
              />
              <p className="text-neon-purple/60 text-xs mt-1">
                escolha qualquer @ que quiser, sem precisar de cadastro
              </p>
            </div>

            <div>
              <label className="block text-neon-blue text-sm mb-2">
                sua mensagem
              </label>
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="compartilhe seus pensamentos..."
                rows={5}
                className="w-full bg-cyber-dark/80 border-2 border-neon-blue rounded-lg px-4 py-3 text-white placeholder-neon-purple/40 focus:border-neon-pink focus:outline-none transition-colors resize-none"
                required
                minLength={10}
                maxLength={1000}
              />
              <div className="flex justify-between items-center mt-1">
                <p className="text-neon-purple/60 text-xs">
                  mínimo 10 caracteres
                </p>
                <p className="text-neon-purple/60 text-xs">
                  {mensagem.length}/1000
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-neon-pink hover:bg-neon-orange border-2 border-neon-pink hover:border-neon-orange text-cyber-dark font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              postar
            </button>
          </form>
        </div>

        {/* Lista de posts */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="text-center py-12 bg-cyber-dark/30 border-2 border-neon-purple/30 rounded-xl backdrop-blur-sm">
              <MessageSquare className="w-12 h-12 text-neon-purple/40 mx-auto mb-4" />
              <p className="text-neon-purple/60">
                nenhum post ainda. seja o primeiro a postar!
              </p>
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-cyber-dark/50 border-2 border-neon-blue/30 rounded-xl p-6 backdrop-blur-sm hover:border-neon-pink transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2"
                      style={{ 
                        backgroundColor: `${forum.cor}20`, 
                        color: forum.cor,
                        borderColor: forum.cor
                      }}
                    >
                      {post.alias.charAt(1).toUpperCase()}
                    </div>
                    <div>
                      <p 
                        className="font-bold"
                        style={{ color: forum.cor }}
                      >
                        {post.alias}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-neon-purple/60">
                        <Clock className="w-3 h-3" />
                        <span>{formatarData(post.data_criacao)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-neon-blue/90 leading-relaxed whitespace-pre-wrap">
                  {post.mensagem}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
