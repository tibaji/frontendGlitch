// src/app/pages/institucional/Contato.tsx
import { useState, useCallback } from 'react';
import { Send, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { validarFormularioContato } from '../../../utils/validators';

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  mensagem?: string;
}

// Validação de email mais robusta
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim().toLowerCase());
};

// Configuração EmailJS
const EMAILJS_CONFIG = {
  serviceId: 'service_erx67jj',
  templateId: 'template_a39fsqg',
  publicKey: 'x7trFDcwlysM2YK3R'
};

export function Contato() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    mensagem: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [emailWarningShown, setEmailWarningShown] = useState(false);

  // Validação específica para email com mensagem mais clara
  const validateEmailField = useCallback((email: string): string | null => {
    if (!email.trim()) {
      return 'O email é obrigatório';
    }
    
    if (!isValidEmail(email)) {
      return 'Email inválido. Use o formato: seu@email.com';
    }
    
    return null;
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar formulário
    const validationErrors = validarFormularioContato(
      formData.nome,
      formData.email,
      formData.mensagem
    );

    if (validationErrors.length > 0) {
      const errorsObj: FormErrors = {};
      validationErrors.forEach(error => {
        errorsObj[error.campo as keyof FormErrors] = error.mensagem;
      });
      setErrors(errorsObj);
      toast.error(validationErrors[0].mensagem);
      return;
    }

    // Validação adicional específica do email
    const emailError = validateEmailField(formData.email);
    if (emailError) {
      setErrors(prev => ({ ...prev, email: emailError }));
      toast.error(emailError);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          user_name: formData.nome,
          user_email: formData.email,
          message: formData.mensagem
        },
        EMAILJS_CONFIG.publicKey
      );

      toast.success('Mensagem enviada com sucesso! Logo entraremos em contato.');
      setFormData({ nome: '', email: '', mensagem: '' });
      setEmailWarningShown(false);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      toast.error('Erro ao enviar mensagem. Verifique sua conexão e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpar erro específico do campo
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    // Para email, mostrar aviso de verificação após digitar um email válido
    if (name === 'email' && isValidEmail(value) && !emailWarningShown) {
      setEmailWarningShown(true);
      toast.info(
        '⚠️ Verifique se o email está correto. Não temos como confirmar se ele existe.',
        {
          duration: 5000,
          icon: <AlertCircle className="w-5 h-5 text-yellow-400" />
        }
      );
    }
  };

  const handleBlur = (campo: keyof FormData) => {
    const validationErrors = validarFormularioContato(
      formData.nome,
      formData.email,
      formData.mensagem
    );

    const erro = validationErrors.find(e => e.campo === campo);
    if (erro) {
      setErrors(prev => ({
        ...prev,
        [campo]: erro.mensagem
      }));
    }

    // Validação específica do email no blur
    if (campo === 'email') {
      const emailError = validateEmailField(formData.email);
      if (emailError) {
        setErrors(prev => ({
          ...prev,
          email: emailError
        }));
      }
    }
  };

  return (
    <div className="min-h-screen bg-cyber-gradient text-white py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl text-neon-blue glitch-text mb-4">
            contato
          </h1>
          <p className="text-neon-pink text-xl">
            mande uma mensagem para nós
          </p>
        </header>

        {/* Formulário */}
        <section className="bg-cyber-dark/50 border-2 border-neon-pink rounded-lg p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-neon-orange mb-2">
                nome *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                onBlur={() => handleBlur('nome')}
                disabled={isLoading}
                className={`w-full bg-cyber-dark border-2 ${
                  errors.nome ? 'border-red-500' : 'border-neon-purple'
                } text-neon-blue px-4 py-3 rounded-lg focus:border-neon-pink focus:outline-none transition-colors disabled:opacity-50`}
                placeholder="seu nome"
              />
              {errors.nome && (
                <p className="text-red-400 text-sm mt-1">{errors.nome}</p>
              )}
            </div>

            {/* Email - VERSÃO FINAL SEM ERROS */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-neon-orange font-medium">e-mail *</span>
                <AlertCircle className="w-4 h-4 text-yellow-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                disabled={isLoading}
                className={`w-full bg-cyber-dark border-2 ${
                  errors.email 
                    ? 'border-red-500 ring-2 ring-red-500/30' 
                    : 'border-neon-purple hover:border-yellow-400 focus:border-yellow-400'
                } text-neon-blue px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all disabled:opacity-50`}
                placeholder="seu@email.com"
                aria-describedby={errors.email ? "email-error" : formData.email && isValidEmail(formData.email) ? "email-warning" : undefined}
              />
              
              {/* Erro */}
              {errors.email && (
                <p id="email-error" className="text-red-400 text-sm mt-1 flex items-center gap-1 animate-pulse">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {errors.email}
                </p>
              )}
              
              {/* Aviso de verificação */}
              {formData.email && isValidEmail(formData.email) && !errors.email && (
                <p id="email-warning" className="text-yellow-400 text-xs mt-1 flex items-center gap-1 bg-cyber-dark/70 px-3 py-1.5 rounded-lg border border-yellow-400/30 backdrop-blur-sm">
                  <AlertCircle className="w-3 h-3 flex-shrink-0" />
                  <span>Formato válido ✓ Mas confirme se este é o seu email correto</span>
                </p>
              )}
            </div>

            {/* Mensagem */}
            <div>
              <label htmlFor="mensagem" className="block text-neon-orange mb-2">
                mensagem *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                onBlur={() => handleBlur('mensagem')}
                disabled={isLoading}
                rows={6}
                className={`w-full bg-cyber-dark border-2 ${
                  errors.mensagem ? 'border-red-500' : 'border-neon-purple'
                } text-neon-blue px-4 py-3 rounded-lg focus:border-neon-pink focus:outline-none transition-colors resize-none disabled:opacity-50`}
                placeholder="escreva sua mensagem aqui... (mínimo 10 caracteres)"
              />
              {errors.mensagem && (
                <p className="text-red-400 text-sm mt-1">{errors.mensagem}</p>
              )}
              <p className="text-neon-purple/60 text-xs mt-1">
                {formData.mensagem.length} caracteres
              </p>
            </div>

            {/* Botão */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-transparent border-2 border-neon-pink text-neon-pink px-8 py-4 rounded-lg hover:bg-neon-pink/20 hover:scale-105 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span>{isLoading ? 'enviando...' : 'enviar mensagem'}</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </section>

        {/* Informações adicionais */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-cyber-dark/30 border-2 border-neon-blue rounded-lg p-6">
            <h3 className="text-neon-orange mb-4 text-xl flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              redes sociais
            </h3>
            <div className="space-y-3 text-neon-purple">
              <a 
                href="https://www.instagram.com/galeria_glitch/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-neon-pink transition-colors"
              >
                <span>instagram:</span>
                <span className="text-neon-blue hover:underline">@galeria_glitch</span>
              </a>
              <a 
                href="https://x.com/galeria_glitch" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-neon-pink transition-colors"
              >
                <span>twitter:</span>
                <span className="text-neon-blue hover:underline">@galeria_glitch</span>
              </a>
              <a 
                href="https://t.me/galeria_glitch" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-neon-pink transition-colors"
              >
                <span>telegram:</span>
                <span className="text-neon-blue hover:underline">t.me/galeria_glitch</span>
              </a>
            </div>
          </div>

          <div className="bg-cyber-dark/30 border-2 border-neon-purple rounded-lg p-6">
            <h3 className="text-neon-orange mb-4 text-xl flex items-center gap-2">
              <Mail className="w-5 h-5" />
              colabore
            </h3>
            <p className="text-neon-blue leading-relaxed">
              aceitamos colaborações de artistas, designers e desenvolvedoras. 
              entre em contato para saber mais sobre oportunidades de parceria!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
