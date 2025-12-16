import React, { useState, useEffect } from 'react';
import { Zap, TrendingUp, Activity, Target, ListChecks, Focus, Instagram, MessageCircle, ShoppingCart, Star, Send, CheckCircle, ChevronDown, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { clubInfo, metodoPrincipios, focoTecnico, resultados, mockTestimonials } from '../mock';
import './animations.css';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setTestimonials(mockTestimonials);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmitTestimonial = async (e) => {
    e.preventDefault();
    if (!newTestimonial.name.trim() || !newTestimonial.comment.trim()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      const newTest = {
        id: Date.now().toString(),
        name: newTestimonial.name,
        comment: newTestimonial.comment,
        date: new Date().toISOString().split('T')[0]
      };
      
      setTestimonials([newTest, ...testimonials]);
      setNewTestimonial({ name: '', comment: '' });
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const scrollToCheckout = () => {
    document.getElementById('checkout-section').scrollIntoView({ behavior: 'smooth' });
  };

  const iconMap = {
    Zap: Zap,
    TrendingUp: TrendingUp,
    Activity: Activity,
    Target: Target,
    ListChecks: ListChecks,
    Focus: Focus
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="text-2xl font-black tracking-tighter text-yellow-400">
                LOW VOLUME CLUB
              </div>
              <div className="text-xs text-white/60 tracking-wider">BY ALEX LIPRERI</div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#metodo" className="text-sm font-semibold text-white/80 hover:text-yellow-400 transition-colors">Método</a>
              <a href="#principios" className="text-sm font-semibold text-white/80 hover:text-yellow-400 transition-colors">Princípios</a>
              <a href="#resultados" className="text-sm font-semibold text-white/80 hover:text-yellow-400 transition-colors">Resultados</a>
              <a href="#depoimentos" className="text-sm font-semibold text-white/80 hover:text-yellow-400 transition-colors">Depoimentos</a>
              <Button 
                onClick={scrollToCheckout}
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-black px-6 rounded-none shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all"
              >
                COMEÇAR AGORA
              </Button>
            </div>
            
            <Button 
              onClick={scrollToCheckout}
              className="md:hidden bg-yellow-400 text-black hover:bg-yellow-300 font-black px-4 text-sm rounded-none"
            >
              COMEÇAR
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hex-pattern"></div>
          <div 
            className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse-slow"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse-slower"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-block px-6 py-2 border border-yellow-400/30 mb-6">
              <span className="text-sm font-bold text-yellow-400 tracking-widest">METODOLOGIA REVOLUCIONÁRIA</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tighter">
              <span className="text-white">TREINE</span>{' '}
              <span className="text-yellow-400 glow-text">MENOS</span>
              <br />
              <span className="text-white">EVOLUA</span>{' '}
              <span className="text-yellow-400 glow-text">MAIS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in-up animation-delay-200">
              {clubInfo.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-400">
              <Button 
                onClick={scrollToCheckout}
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-black px-10 py-7 text-lg rounded-none shadow-2xl shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:scale-105 transition-all group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                CONHECER O MÉTODO
              </Button>
              
              <a href={clubInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-7 text-lg rounded-none transition-all"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  FALAR NO WHATSAPP
                </Button>
              </a>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
            <ChevronDown className="h-8 w-8 text-yellow-400" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-yellow-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {resultados.map((resultado, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-black text-black mb-2">{resultado.metric}</div>
                <div className="text-sm font-semibold text-black/70 uppercase tracking-wide">{resultado.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Método */}
      <section id="metodo" className="py-32 px-4 bg-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="text-yellow-400 font-bold text-sm tracking-widest mb-4">O MÉTODO</div>
                <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                  LOW VOLUME<br />
                  <span className="text-yellow-400">É DIFERENTE</span>
                </h2>
                <div className="w-20 h-1 bg-yellow-400"></div>
              </div>
              
              <p className="text-lg text-white/70 leading-relaxed">
                {clubInfo.description}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Abordagem Principal:</h3>
                <div className="border-l-4 border-yellow-400 pl-6">
                  <p className="text-white/80 text-lg font-semibold">Alta intensidade + Progressão de carga + Boa recuperação</p>
                </div>
              </div>
              
              <Button 
                onClick={scrollToCheckout}
                className="bg-white text-black hover:bg-yellow-400 hover:text-black font-black px-8 py-6 text-lg rounded-none transition-all"
              >
                QUERO FAZER PARTE
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-9xl font-black text-yellow-400/20">LV</div>
                  <div className="text-sm text-white/40 mt-4">[Espaço para imagem/vídeo do método]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section id="principios" className="py-32 px-4 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-yellow-400 font-bold text-sm tracking-widest mb-4">FUNDAMENTOS</div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              OS <span className="text-yellow-400">PRINCÍPIOS</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          {/* Prioridades */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-yellow-400 mb-8 uppercase tracking-wider">→ Prioridades</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {metodoPrincipios.filter(p => p.category === 'Prioridade').map((principio, index) => {
                const IconComponent = iconMap[principio.icon];
                return (
                  <Card key={index} className="bg-black border-yellow-400/20 hover:border-yellow-400 transition-all group hover:-translate-y-2 rounded-none">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-yellow-400" />
                      </div>
                      <h3 className="text-2xl font-black mb-4 text-white">{principio.title}</h3>
                      <p className="text-white/60 leading-relaxed">{principio.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* Organização */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-8 uppercase tracking-wider">→ Organização</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {metodoPrincipios.filter(p => p.category === 'Organização').map((principio, index) => {
                const IconComponent = iconMap[principio.icon];
                return (
                  <Card key={index} className="bg-black border-yellow-400/20 hover:border-yellow-400 transition-all group hover:-translate-y-2 rounded-none">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-yellow-400" />
                      </div>
                      <h3 className="text-2xl font-black mb-4 text-white">{principio.title}</h3>
                      <p className="text-white/60 leading-relaxed">{principio.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Foco Técnico */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-yellow-400 font-bold text-sm tracking-widest mb-4">EXECUÇÃO</div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              FOCO EM <span className="text-yellow-400">QUALIDADE</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {focoTecnico.map((foco, index) => (
              <Card key={index} className="bg-zinc-950 border-yellow-400/20 hover:border-yellow-400 transition-all rounded-none">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-yellow-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-black mb-3 text-white">{foco.label}</h3>
                      <p className="text-white/60 leading-relaxed">{foco.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section id="resultados" className="py-32 px-4 bg-yellow-400">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-black">
            RESULTADOS <span className="italic">COMPROVADOS</span>
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto mb-16 font-semibold">
            95% dos alunos alcançam seus objetivos em até 12 semanas com o método Low Volume Club.
          </p>
          
          <div className="bg-black p-12 border-4 border-black">
            <div className="text-8xl font-black text-yellow-400 mb-4">95%</div>
            <div className="text-2xl font-bold text-white">TAXA DE SUCESSO</div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-yellow-400 font-bold text-sm tracking-widest mb-4">TRANSFORMAÇÕES</div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              O QUE DIZEM OS <span className="text-yellow-400">ALUNOS</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          {/* Formulário */}
          <Card className="bg-zinc-950 border-yellow-400/20 mb-16 rounded-none">
            <CardContent className="p-10">
              <h3 className="text-2xl font-black mb-8 text-center text-yellow-400">DEIXE SEU DEPOIMENTO</h3>
              
              {showSuccess && (
                <div className="mb-6 p-4 bg-yellow-400/10 border border-yellow-400 flex items-center justify-center gap-2 text-yellow-400 font-semibold">
                  <CheckCircle className="h-5 w-5" />
                  <span>Depoimento enviado com sucesso!</span>
                </div>
              )}
              
              <form onSubmit={handleSubmitTestimonial} className="space-y-6">
                <Input
                  type="text"
                  placeholder="SEU NOME"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                  className="bg-black border-yellow-400/30 text-white placeholder:text-white/40 h-14 rounded-none font-semibold"
                  required
                />
                <Textarea
                  placeholder="COMPARTILHE SUA EXPERIÊNCIA COM O LOW VOLUME CLUB..."
                  value={newTestimonial.comment}
                  onChange={(e) => setNewTestimonial({...newTestimonial, comment: e.target.value})}
                  className="bg-black border-yellow-400/30 text-white placeholder:text-white/40 min-h-32 rounded-none font-semibold"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-black py-6 text-lg rounded-none"
                >
                  {isSubmitting ? 'ENVIANDO...' : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      ENVIAR DEPOIMENTO
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Lista de depoimentos */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-zinc-950 border-yellow-400/20 hover:border-yellow-400 transition-all rounded-none group hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/70 leading-relaxed mb-6 italic">"{testimonial.comment}"</p>
                  <div className="border-t border-yellow-400/20 pt-4">
                    <div className="font-bold text-yellow-400 uppercase tracking-wide">{testimonial.name}</div>
                    <div className="text-xs text-white/40 mt-1">{new Date(testimonial.date).toLocaleDateString('pt-BR')}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout CTA */}
      <section id="checkout-section" className="py-32 px-4 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <ShoppingCart className="h-20 w-20 text-black mx-auto mb-8" />
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-black">
            PRONTO PARA A<br />
            <span className="italic">TRANSFORMAÇÃO</span>?
          </h2>
          
          <p className="text-xl text-black/70 mb-12 font-semibold max-w-2xl mx-auto">
            Entre para o Low Volume Club e comece sua jornada para resultados extraordinários.
          </p>
          
          <a href={clubInfo.checkoutLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-black text-yellow-400 hover:bg-zinc-900 font-black px-12 py-8 text-xl rounded-none shadow-2xl hover:scale-105 transition-all">
              <ShoppingCart className="mr-3 h-6 w-6" />
              COMPRAR AGORA
            </Button>
          </a>
          
          <div className="mt-8 text-sm text-black/50 font-semibold">
            <p>[Atualizar com link do checkout Kiwify]</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-400/20 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-2xl font-black text-yellow-400 mb-4">LOW VOLUME CLUB</div>
              <div className="text-xs text-white/40 tracking-wider mb-4">BY ALEX LIPRERI</div>
              <p className="text-white/60 leading-relaxed">
                Metodologia revolucionária de treinamento focada em resultados reais.
              </p>
            </div>
            
            <div>
              <h4 className="font-black mb-6 text-lg text-yellow-400">CONTATO</h4>
              <div className="space-y-2 text-white/60 font-semibold">
                <p>[email@exemplo.com]</p>
                <p>[WhatsApp: +55 11 99999-9999]</p>
                <p>[Localização: São Paulo, SP]</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-black mb-6 text-lg text-yellow-400">REDES SOCIAIS</h4>
              <div className="flex gap-4">
                <a 
                  href={clubInfo.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all group"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href={clubInfo.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all group"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-yellow-400/20 pt-8 text-center text-white/40 text-sm font-semibold">
            <p>&copy; 2024 Low Volume Club by Alex Lipreri. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
