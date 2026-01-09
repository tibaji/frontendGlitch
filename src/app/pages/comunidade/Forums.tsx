import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface ForumTopic {
  id: number;
  title: string;
  author: string;
  replies: number;
  views: number;
  lastActivity: string;
  category: string;
}

export function Forums() {
  const [forums] = useState<ForumTopic[]>([
    {
      id: 1,
      title: "manifesto ciborgue: discussões e reflexões",
      author: "CyberFem",
      replies: 42,
      views: 1337,
      lastActivity: "2h atrás",
      category: "Teoria"
    },
    {
      id: 2,
      title: "arte digital e resistência",
      author: "GlitchArtist",
      replies: 28,
      views: 892,
      lastActivity: "5h atrás",
      category: "Arte"
    },
    {
      id: 3,
      title: "tecnologia e gênero: novos horizontes",
      author: "TechActivist",
      replies: 67,
      views: 2041,
      lastActivity: "1 dia atrás",
      category: "Discussão"
    },
    {
      id: 4,
      title: "criando espaços seguros no ciberespaço",
      author: "SafeSpace",
      replies: 15,
      views: 456,
      lastActivity: "3h atrás",
      category: "Comunidade"
    }
  ]);

  const categories = ["Todos", "Teoria", "Arte", "Discussão", "Comunidade"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // NOVO: Estado para o formulário
  const [mostrarForm, setMostrarForm] = useState(false);
  const [novoTopico, setNovoTopico] = useState({
    titulo: '',
    conteudo: '',
    categoria: 'teoria'
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock de sucesso - simula backend
    const topicoMock = {
      id: Date.now(),
      title: novoTopico.titulo,
      author: 'SeuNome', 
      replies: 0,
      views: 0,
      lastActivity: 'agora',
      category: novoTopico.categoria
    };
    
    // Redireciona para o tópico criado
    navigate(`/forums/${topicoMock.id}`);
    
    // Reset form
    setNovoTopico({ titulo: '', conteudo: '', categoria: 'teoria' });
    setMostrarForm(false);
  };

  const filteredForums = selectedCategory === "Todos" 
    ? forums 
    : forums.filter(f => f.category === selectedCategory);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl text-neon-pink glitch-text mb-4">
            fóruns glitch
          </h1>
          <p className="text-neon-blue text-xl neon-glow">
            espaço de discussão, arte e resistência cibernética
          </p>
        </div>

        {/* NOVO: Botão toggle do formulário */}
        <div className="text-center mb-12">
          <button
            onClick={() => setMostrarForm(!mostrarForm)}
            className="px-8 py-3 bg-neon-pink/20 border-2 border-neon-pink text-neon-pink font-bold rounded-lg hover:bg-neon-pink hover:text-cyber-dark hover:shadow-xl hover:shadow-neon-pink/50 transition-all transform hover:scale-105"
          >
            {mostrarForm ? 'cancelar' : '+ criar novo tópico'}
          </button>
        </div>

        {/* NOVO: Formulário novo tópico */}
        {mostrarForm && (
          <div className="bg-black/50 backdrop-blur-md border border-neon-blue/30 rounded-2xl p-8 mb-12 mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  título do tópico
                </label>
                <input
                  type="text"
                  value={novoTopico.titulo}
                  onChange={(e) => setNovoTopico({...novoTopico, titulo: e.target.value})}
                  className="w-full p-4 bg-gray-900 border border-neon-blue/50 rounded-xl text-white placeholder-gray-500 focus:border-neon-pink focus:outline-none"
                  placeholder="ex: ciborgues podem amar?"
                  required
                  maxLength={120}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  categoria
                </label>
                <select
                  value={novoTopico.categoria}
                  onChange={(e) => setNovoTopico({...novoTopico, categoria: e.target.value})}
                  className="w-full p-4 bg-gray-900 border border-neon-blue/50 rounded-xl text-white focus:border-neon-pink focus:outline-none"
                >
                  <option value="Teoria">teoria</option>
                  <option value="Arte">arte</option>
                  <option value="Discussão">discussão</option>
                  <option value="Comunidade">comunidade</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  seu tópico
                </label>
                <textarea
                  rows={4}
                  value={novoTopico.conteudo}
                  onChange={(e) => setNovoTopico({...novoTopico, conteudo: e.target.value})}
                  className="w-full p-4 bg-gray-900 border border-neon-blue/50 rounded-xl text-white placeholder-gray-500 focus:border-neon-pink focus:outline-none resize-vertical"
                  placeholder="escreva aqui sua provocação cibernética..."
                  required
                  maxLength={1000}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-neon-pink hover:bg-neon-pink/90 text-black font-bold rounded-xl transition-all shadow-lg hover:shadow-neon-pink/50"
              >
                criar tópico
              </button>
            </form>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex gap-3 mb-8 flex-wrap justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-neon-pink/20 text-neon-pink border-2 border-neon-pink shadow-lg shadow-neon-pink/50'
                  : 'bg-cyber-dark/50 text-neon-blue border-2 border-neon-purple/30 hover:border-neon-blue hover:bg-neon-blue/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Forum List */}
        <div className="space-y-4">
          {filteredForums.map(forum => (
            <Link
              key={forum.id}
              to={`/forums/${forum.id}`}
              className="block bg-cyber-dark/50 backdrop-blur-sm border-2 border-neon-purple/30 rounded-lg p-6 hover:border-neon-pink hover:shadow-xl hover:shadow-neon-pink/20 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-neon-purple/30 text-neon-purple text-xs font-bold rounded-full border border-neon-purple/50">
                      {forum.category}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-neon-blue group-hover:text-neon-pink transition-colors glitch-text">
                      {forum.title}
                    </h2>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-neon-purple/60">
                    <span className="flex items-center gap-1">
                      <span className="text-neon-pink">👤</span>
                      <span className="text-neon-blue">{forum.author}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-neon-blue">💬</span> {forum.replies} respostas
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-neon-purple">👁️</span> {forum.views} visualizações
                    </span>
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-xs text-neon-purple/60">última atividade</p>
                  <p className="text-sm text-neon-blue font-semibold">{forum.lastActivity}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
