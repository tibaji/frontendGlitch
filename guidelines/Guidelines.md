## 📝 guidelines.md - Versão completa

```markdown
# galeria_glitch - System Guidelines

Diretrizes para desenvolvimento e geração de código da galeria_glitch,
um espaço ciberfeminista de arte digital.

---

## General Guidelines

### Arquitetura do Projeto
* **Separação de responsabilidades**: 
  * Dados em `src/data/` (interfaces + arrays exportados)
  * Componentes reutilizáveis em `src/app/components/`
  * Páginas em `src/app/pages/` (organizadas por categoria)
  * Hooks customizados em `src/hooks/`
  * Utilitários em `src/utils/`
* **Componentização**: Criar componentes reutilizáveis quando código é usado 2+ vezes
* **TypeScript obrigatório**: Sempre usar tipagem explícita com interfaces exportadas
* **Hooks customizados**: Extrair lógica complexa (ex: `useTarotShuffle`)
* **Validação**: Todas as funções de validação em `src/utils/validators.ts`

### Estrutura de Arquivos
```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── CardHome.tsx
│   │   ├── CartaTarot.tsx
│   │   ├── CirculosTexto.tsx
│   │   └── ...
│   └── pages/               # Páginas da aplicação
│       ├── Home.tsx
│       ├── institucional/   # Páginas institucionais
│       ├── exposicoes/      # Páginas de exposições
│       └── interacoes/      # Páginas interativas
├── data/                    # Dados estáticos com interfaces
│   ├── exposicoes.ts
│   ├── artistas.ts
│   ├── tarot.ts
│   └── ...
├── hooks/                   # Custom React hooks
│   └── useTarotShuffle.ts
├── utils/                   # Funções utilitárias
│   └── validators.ts
└── styles/                  # Estilos globais
    ├── index.css
    └── glitch.css
```

### Regras de Código
* **Imports**: Usar caminhos relativos corretos
  * De página para data: `../../../data/nome`
  * De página para component: `../../components/Nome`
* **Nomenclatura**: 
  * camelCase: variáveis, funções (`handleSubmit`, `isLoading`)
  * PascalCase: componentes, interfaces (`CardHome`, `ExposicaoAtiva`)
  * kebab-case: arquivos de dados e utils (`exposicoes.ts`, `validators.ts`)
* **Idioma**: Português para variáveis/comentários (exceto convenções React)
* **Tailwind CSS v4**: 
  * ❌ NUNCA usar classes dinâmicas: `border-${cor}` não funciona
  * ✅ SEMPRE usar classes completas: `border-neon-pink`
* **Animações**: Usar Tailwind utilities ou `@keyframes` inline (não tem tailwind.config.js no v4)
* **Componentes**: Máximo 200 linhas. Se passar, refatorar em sub-componentes

---

## Design System

### Paleta de Cores (Neon Cyberpunk)
* **Primary**: `neon-pink` (#ff006e) - Ações principais, destaques
* **Secondary**: `neon-blue` (#00f5ff) - Informações, textos secundários
* **Tertiary**: `neon-purple` (#a855f7) - Elementos terciários, bordas
* **Accent**: `neon-orange` (#ff8c00) - CTAs, alertas importantes
* **Success**: `neon-green` (#00ff41) - Confirmações, estados positivos
* **Background**: `cyber-dark` (#0a0014) - Fundo principal
* **Gradient**: `bg-cyber-gradient` - Gradiente de fundo padrão

### Tipografia
* **Base font-size**: 16px
* **Scale**:
  * Títulos hero: `text-6xl` a `text-9xl` com classe `glitch-text`
  * Títulos seção: `text-3xl` a `text-5xl`
  * Corpo de texto: `text-base` a `text-xl`
  * Texto pequeno: `text-sm` a `text-xs`
* **Line height**: Sempre usar `leading-relaxed` para parágrafos
* **Estilo**: Preferir lowercase por padrão (estética cyber), exceto nomes próprios
* **Font families**: 
  * Sans-serif moderna para UI
  * Monospace para código/tech

### Espaçamento
* **Padding de seções**: `py-20 px-8 md:px-16 lg:px-24`
* **Container**: `max-w-6xl` ou `max-w-7xl mx-auto`
* **Gap em grids**: 
  * Pequeno: `gap-4` ou `gap-6`
  * Médio: `gap-8` ou `gap-12`
  * Grande: `gap-16`
* **Margens**: Usar `mb-` para espaçamento vertical entre seções (12, 16, 20)

### Bordas e Cantos
* **Border width**: Sempre `border-2` (mais visível, aesthetic neon)
* **Border radius**: 
  * Cards pequenos: `rounded-lg`
  * Cards grandes: `rounded-xl`
  * Cards especiais: `rounded-2xl`
* **Hover borders**: Sempre transicionar cores em hover

---

## Componentes

### Buttons
**Estrutura base**:
```tsx
className="px-6 py-3 border-2 rounded-lg transition-all 
           disabled:opacity-50 disabled:cursor-not-allowed"
```

**Variantes**:
* **Primary**: 
  ```tsx
  border-neon-pink text-neon-pink 
  hover:bg-neon-pink/20 hover:scale-105
  ```
* **Secondary**: 
  ```tsx
  border-neon-blue text-neon-blue 
  hover:bg-neon-blue/20 hover:scale-105
  ```
* **Tertiary**: 
  ```tsx
  border-neon-purple text-neon-purple 
  hover:bg-neon-purple/20
  ```

**Estados obrigatórios**:
* Loading: Adicionar ícone com `animate-spin`, texto "carregando..."
* Disabled: `disabled:opacity-50 disabled:cursor-not-allowed`
* Hover: `hover:scale-105 transition-all`

### Cards
**Estrutura base**:
```tsx
className="border-2 border-neon-purple rounded-lg 
           bg-cyber-dark/50 backdrop-blur-sm
           hover:border-neon-pink hover:scale-105 
           transition-all duration-300"
```

**Variações**:
* **Com imagem**: Adicionar overlay com gradiente
  ```tsx
  <div className="absolute inset-0 bg-gradient-to-t 
                  from-cyber-dark via-cyber-dark/50 to-transparent" />
  ```
* **Glassmorphism**: Usar `bg-cyber-dark/30` ou `/50` com `backdrop-blur-sm`

### Links
**Interno** (React Router):
```tsx
<Link to="/pagina" className="text-neon-pink hover:text-neon-orange 
                              transition-colors">
  Texto do link
</Link>
```

**Externo**:
```tsx
<a href="https://..." 
   target="_blank" 
   rel="noopener noreferrer"
   className="text-neon-blue hover:underline">
  Link externo
</a>
```

**Com ícone** (Lucide):
```tsx
<a href="..." className="flex items-center gap-2">
  <IconName className="w-5 h-5" />
  <span>Texto</span>
</a>
```

### Forms
**Input padrão**:
```tsx
<input
  type="text"
  className="w-full bg-cyber-dark border-2 border-neon-purple 
             text-neon-blue px-4 py-3 rounded-lg 
             focus:border-neon-pink focus:outline-none 
             transition-colors disabled:opacity-50"
/>
```

**Estado de erro**:
```tsx
<input
  className="... border-red-500"  // Trocar border-neon-purple
  aria-invalid="true"
  aria-describedby="erro-campo"
/>
<p id="erro-campo" className="text-red-400 text-sm mt-1">
  Mensagem de erro
</p>
```

**Validação obrigatória**:
* Validar no cliente ANTES de submeter
* Usar funções de `src/utils/validators.ts`
* Feedback com toast (Sonner) para sucesso/erro
* Limpar erros ao digitar (`onChange`)
* Validar ao sair do campo (`onBlur`)

---

## Dados (src/data/)

### Estrutura de Arquivos de Dados
```typescript
// Sempre exportar interfaces primeiro
export interface NomeDaEntidade {
  id: string | number;
  titulo: string;
  // ... outros campos obrigatórios
  campoOpcional?: string;  // Campos opcionais com ?
}

// Arrays sempre exportados como const e tipados
export const entidades: NomeDaEntidade[] = [
  {
    id: '1',
    titulo: 'Exemplo',
    // ...
  }
];
```

### Nomenclatura de Arquivos
* **Singular**: Se representa entidade única (`zine.ts`, `equipe.ts`)
* **Plural**: Se é coleção/lista (`exposicoes.ts`, `artistas.ts`)

### Campos Obrigatórios
* **id**: Sempre incluir (string ou number)
* **Cores**: Se usar cores dinâmicas, campo deve ter classes Tailwind completas
  ```typescript
  corClasse: 'border-neon-pink text-neon-pink'  // ✅ Classes completas
  cor: 'pink'  // ❌ Não funciona com Tailwind dinâmico
  ```

### Imagens
* **Campo**: Sempre `imagem: string` (URL ou path)
* **Localização**: 
  * Imagens locais → `public/images/nome.jpg`
  * Path no código → `/images/nome.jpg` (sem "public")
* **Placeholder**: Usar Picsum com seed: `https://picsum.photos/seed/nome/800/600`

---

## Acessibilidade (WCAG 2.1 AA)

### Obrigatório em Todos os Componentes
* **Imagens**: Alt text descritivo sempre
  ```tsx
  <img src="..." alt="Descrição clara do conteúdo" />
  ```
* **Botões com ícone**: Usar aria-label
  ```tsx
  <button aria-label="Embaralhar cartas">
    <RefreshCw className="w-5 h-5" aria-hidden="true" />
  </button>
  ```
* **Forms**: 
  * Labels associados: `<label htmlFor="campo">`
  * Mensagens de erro: `aria-describedby="erro-campo"`
  * Estado inválido: `aria-invalid="true"`
* **Tags semânticas**: `<header>`, `<section>`, `<article>`, `<nav>`, `<footer>`, `<aside>`

### Estados Interativos
* **Loading**: 
  * Desabilitar botões: `disabled={isLoading}`
  * Indicador visual: spinner + texto "carregando..."
  * ARIA: `aria-busy="true"` quando aplicável
* **Erro**: 
  * Feedback visual: border vermelho + mensagem
  * Feedback sonoro: toast com erro
  * Foco no primeiro campo com erro

### Navegação por Teclado
* Todos os elementos interativos acessíveis via Tab
* Links externos: `target="_blank"` sempre com `rel="noopener noreferrer"`
* Botões: usar `<button>` (não `<div onClick>`)

---

## Performance

### Imagens
* **Lazy loading**: 
  * `loading="lazy"` → Imagens fora da viewport inicial
  * `loading="eager"` → Hero images, above the fold
* **Fallback**: Sempre ter fallback em `onError`
  ```tsx
  <img 
    src={url}
    alt="..."
    onError={(e) => {
      e.currentTarget.src = 'https://via.placeholder.com/800x600';
    }}
  />
  ```
* **Dimensões**: Especificar width/height quando possível (previne layout shift)

### Componentes React
* **useMemo**: Para cálculos pesados ou listas filtradas
* **useCallback**: Para funções passadas como props
* **Evitar re-renders**: Não criar objetos/arrays inline em props
  ```tsx
  // ❌ Cria novo objeto a cada render
  <Component style={{ color: 'red' }} />
  
  // ✅ Objeto criado uma vez
  const style = { color: 'red' };
  <Component style={style} />
  ```

### Carregamento de Dados
* Dados estáticos → importar de `src/data/`
* Dados dinâmicos → fetch com loading state
* Evitar fetch desnecessário (cache quando possível)

---

## Bibliotecas Específicas

### Swiper (Carrosséis)
```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  grabCursor={true}
  slidesPerView="auto"
  spaceBetween={20}
  navigation
  pagination={{ clickable: true }}
>
  {items.map(item => (
    <SwiperSlide key={item.id}>
      {/* conteúdo */}
    </SwiperSlide>
  ))}
</Swiper>
```

### React Router
* **Links internos**: `<Link to="/path">` (react-router-dom)
* **Links externos**: `<a href="..." target="_blank" rel="noopener noreferrer">`
* **Navegação programática**: `const navigate = useNavigate(); navigate('/path')`

### EmailJS (Formulários de Contato)
* **Validação**: Cliente-side ANTES de enviar
* **Loading state**: Desabilitar botão durante envio
* **Feedback**: Toast de sucesso/erro
* **Limpeza**: Limpar form após sucesso
* **Erro handling**: Try-catch com mensagem clara

### Lucide React (Ícones)
```tsx
import { IconName } from 'lucide-react';

<IconName className="w-5 h-5 text-neon-pink" />
```
* Tamanhos padrão: `w-4 h-4`, `w-5 h-5`, `w-6 h-6`
* Sempre adicionar `aria-hidden="true"` se decorativo

### Sonner (Toast Notifications)
```tsx
import { toast } from 'sonner';

toast.success('Mensagem de sucesso');
toast.error('Mensagem de erro');
toast.info('Informação');
```

---

## Estética Ciberfeminista

### Princípios Visuais
* **Glitch aesthetic**: Usar classe `glitch-text` em títulos principais
* **Neon colors**: Predominância de rosa, roxo, azul e verde neon
* **Lowercase**: Preferir texto em lowercase (exceto nomes próprios e títulos específicos)
* **Gradientes**: Usar `bg-cyber-gradient` ou criar gradientes de neon
* **Transparência**: Layers com `/30`, `/50`, `/80` para profundidade
* **Blur**: `backdrop-blur-sm` para efeito glassmorphism
* **Bordas brilhantes**: `border-2` com cores neon + hover effects
* **Sombras neon**: Usar `shadow-neon-pink/50` em hovers

### Linguagem e Tom
* **Tom**: Tecnológico, político, poético, irreverente
* **Pronomes**: Linguagem inclusiva e neutra de gênero
* **Termos favoritos**: ciborgue, glitch, hack, código, digital, pixels, circuito, rede, virtual
* **Evitar**: Linguagem corporativa, formal demais, binária

### Elementos Característicos
* Círculos de texto em SVG (componente `CirculosTexto`)
* Animações de flip 3D (cartas do tarot)
* Efeito coverflow (carrossel do zine)
* Textos com gradiente
* Bordas que mudam de cor no hover

---

## Padrões de Código

### Componentes Funcionais
```tsx
// src/app/components/NomeDoComponente.tsx
import { useState } from 'react';
import { IconName } from 'lucide-react';
import { InterfaceNecessaria } from '../../data/fonte';

interface NomeDoComponenteProps {
  prop1: string;
  prop2?: number;  // Props opcionais com ?
  onAction: () => void;
}

export function NomeDoComponente({ prop1, prop2, onAction }: NomeDoComponenteProps) {
  const [state, setState] = useState(false);

  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
}
```

### Hooks Customizados
```typescript
// src/hooks/useNomeDoHook.ts
import { useState, useEffect } from 'react';

export function useNomeDoHook(parametro: string) {
  const [state, setState] = useState();

  // Lógica do hook

  return {
    // Valores e funções retornadas
    state,
    handleAction: () => {}
  };
}
```

### Validadores
```typescript
// src/utils/validators.ts

export interface ValidationError {
  campo: string;
  mensagem: string;
}

export const validarCampo = (valor: string): boolean => {
  // Lógica de validação
  return true;
};

export const validarFormulario = (dados: FormData): ValidationError[] => {
  const erros: ValidationError[] = [];
  // Validações
  return erros;
};
```

---

## Não Fazer (Erros Comuns)

### Tailwind
* ❌ Classes dinâmicas: `border-${variavel}` ou `text-${cor}`
* ❌ Estilos inline quando Tailwind tem utility: `style={{ margin: '10px' }}`
* ❌ !important para sobrescrever: ajustar especificidade

### React
* ❌ Dados hardcoded em componentes (exceto casos muito simples)
* ❌ Componentes com mais de 200 linhas (refatorar)
* ❌ Lógica complexa no JSX (extrair para variável ou função)
* ❌ Criar funções dentro do JSX map: `{arr.map(item => funcao())}`

### TypeScript
* ❌ Usar `any` (sempre tipar corretamente)
* ❌ Interfaces não exportadas (sempre export)
* ❌ Não tipar props de componentes

### Imports
* ❌ Imports absolutos sem configurar
* ❌ Importar componente do próprio componente (circular)
* ❌ Imports não utilizados

### Acessibilidade
* ❌ Imagens sem alt text
* ❌ Botões sem label (texto ou aria-label)
* ❌ Links externos sem `target="_blank"` e `rel`
* ❌ Forms sem validação
* ❌ Estados de loading sem indicador visual

### Performance
* ❌ Imagens pesadas sem otimização
* ❌ Todas as imagens com `loading="eager"`
* ❌ Fetch dentro de loops
* ❌ Re-renders desnecessários

---

## Estrutura de Página Padrão

```tsx
// src/app/pages/categoria/NomeDaPagina.tsx
import { useState } from 'react';
import { dados } from '../../../data/fonte';
import { Componente } from '../../components/Componente';

export function NomeDaPagina() {
  // Estados
  const [state, setState] = useState();

  // Funções handlers
  const handleAction = () => {
    // lógica
  };

  return (
    <div className="min-h-screen bg-cyber-gradient text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header da página */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl text-neon-pink glitch-text mb-4">
            título da página
          </h1>
          <p className="text-neon-blue text-xl">
            subtítulo ou descrição
          </p>
        </header>

        {/* Conteúdo principal */}
        <section className="mb-16" aria-label="Descrição da seção">
          {/* Grid, lista, ou outro layout */}
        </section>

        {/* Seção secundária (se houver) */}
        <aside className="bg-cyber-dark/50 border-2 border-neon-purple rounded-lg p-8">
          {/* Conteúdo adicional */}
        </aside>

      </div>
    </div>
  );
}
```

---

## Comandos e Scripts

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build
npm run build            # Build para produção
npm run preview          # Preview da build localmente

# Qualidade de código
npm run lint             # Executa ESLint
npm run type-check       # Checa tipos TypeScript (se configurado)

# Git
git add .
git commit -m "feat: descrição clara"
git push origin main
```

---

## Convenções de Commit (Semantic Commits)

```
feat: nova funcionalidade
fix: correção de bug
refactor: refatoração sem mudar funcionalidade
style: mudanças de estilo (formatação, etc)
docs: documentação
perf: melhorias de performance
test: adicionar ou corrigir testes
chore: tarefas de manutenção
```

Exemplos:
```
feat: adiciona página de tarot transexy
fix: corrige validação de email no formulário de contato
refactor: separa dados de exposições em arquivo dedicado
style: ajusta espaçamento dos cards de artistas
```

---

## Checklist de PR/Review

Antes de fazer commit ou deploy, verificar:

- [ ] Código TypeScript sem erros (`npm run build`)
- [ ] Sem warnings no console do navegador
- [ ] Dados separados em `src/data/` (se aplicável)
- [ ] Componentes < 200 linhas
- [ ] Todas as imagens têm alt text
- [ ] Links externos têm `target="_blank"` e `rel="noopener noreferrer"`
- [ ] Forms têm validação
- [ ] Botões têm estados de loading/disabled
- [ ] Classes Tailwind são completas (não dinâmicas)
- [ ] Imports corretos e sem circular dependencies
- [ ] Mobile responsive (testar em diferentes tamanhos)
- [ ] Acessibilidade básica (navegação por teclado funciona)

---

## Recursos e Referências

### Documentação
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/docs/)
* [Tailwind CSS v4](https://tailwindcss.com/)
* [React Router](https://reactrouter.com/)
* [Swiper](https://swiperjs.com/react)
* [Lucide Icons](https://lucide.dev/)

### Inspiração Estética
* Cyberfeminism Index: https://cyberfeminismindex.com
* Old Boys Network: https://obn.org/
* Glitch Art e Vaporwave aesthetics

### Teoria
* "A Cyborg Manifesto" - Donna Haraway
* "Glitch Feminism" - Legacy Russell
* "Xenofeminism" - Laboria Cuboniks

---

**Última atualização**: Janeiro 2026  
**Versão do projeto**: 1.0  
**Stack principal**: React + TypeScript + Tailwind CSS v4 + Vite
```

