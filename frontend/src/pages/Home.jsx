import React, { useState, useEffect } from 'react';
import { Zap, Clock, Award, Instagram, MessageCircle, ShoppingCart, Star, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { trainerInfo, metodoBeneficios, resultados, mockTestimonials } from '../mock';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Carregar depoimentos mockados
    setTestimonials(mockTestimonials);
  }, []);

  const handleSubmitTestimonial = async (e) => {
    e.preventDefault();
    if (!newTestimonial.name.trim() || !newTestimonial.comment.trim()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulação de envio (será substituído por chamada real ao backend)
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

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="fixed top-8 left-0 right-0 z-50 px-3">
        <div className="max-w-7xl mx-auto">
          <nav className="bg-[#1a1a2e] rounded-[25px] px-6 py-4 shadow-2xl backdrop-blur-sm bg-opacity-95">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold tracking-tight">
                <span className="text-[#D3FF62]">ALEX</span> LIPREVI
              </div>
              
              <div className="hidden md:flex items-center gap-8">
                <a href="#sobre" className="text-sm font-medium hover:text-[#D3FF62] transition-colors">Sobre</a>
                <a href="#metodo" className="text-sm font-medium hover:text-[#D3FF62] transition-colors">Método</a>
                <a href="#resultados" className="text-sm font-medium hover:text-[#D3FF62] transition-colors">Resultados</a>
                <a href="#depoimentos" className="text-sm font-medium hover:text-[#D3FF62] transition-colors">Depoimentos</a>
                <Button 
                  onClick={scrollToCheckout}
                  className="bg-[#D3FF62] text-[#0a0a0f] hover:bg-[#b8e055] rounded-[25px] px-6 font-semibold"
                >
                  Começar Agora
                </Button>
              </div>
              
              <Button 
                onClick={scrollToCheckout}
                className="md:hidden bg-[#D3FF62] text-[#0a0a0f] hover:bg-[#b8e055] rounded-[25px] px-4 text-sm font-semibold"
              >
                Começar
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#D3FF62]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/30 mb-4">
              <span className="text-sm font-medium text-purple-300">Método Low Volume</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {trainerInfo.headline}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {trainerInfo.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button 
                onClick={scrollToCheckout}
                className="bg-[#D3FF62] text-[#0a0a0f] hover:bg-[#b8e055] rounded-[25px] px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Conheça o Método
              </Button>
              
              <a href={trainerInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 rounded-[25px] px-8 py-6 text-lg font-semibold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D3FF62] mb-2">{trainerInfo.experience}</div>
                <div className="text-sm text-gray-400">De experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D3FF62] mb-2">{trainerInfo.clients}</div>
                <div className="text-sm text-gray-400">Alunos transformados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#D3FF62] mb-2">{trainerInfo.results}</div>
                <div className="text-sm text-gray-400">Taxa de sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4 bg-[#12121a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Quem é <span className="text-[#D3FF62]">Alex Liprevi</span></h2>
            <div className="w-20 h-1 bg-[#D3FF62] mx-auto"></div>
          </div>
          
          <Card className="bg-[#1a1a2e] border-purple-500/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="w-full h-80 bg-gradient-to-br from-purple-600/20 to-[#D3FF62]/10 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-[#D3FF62] mb-2">AL</div>
                      <div className="text-sm text-gray-400">[Foto do treinador aqui]</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">Autoridade em Alta Performance</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {trainerInfo.about}
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    [Adicione aqui mais informações sobre formação, certificações e diferenciais do Alex]
                  </p>
                  
                  <div className="flex gap-4 pt-4">
                    <a href={trainerInfo.instagram} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-purple-600 hover:bg-purple-700 rounded-[25px] px-6">
                        <Instagram className="mr-2 h-5 w-5" />
                        Seguir no Instagram
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Método Low Volume Section */}
      <section id="metodo" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">O Método <span className="text-[#D3FF62]">Low Volume</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              [Adicione aqui a explicação completa do método Low Volume - princípios, base científica e diferenciais]
            </p>
            <div className="w-20 h-1 bg-[#D3FF62] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {metodoBeneficios.map((beneficio, index) => {
              const IconComponent = beneficio.icon === 'Zap' ? Zap : beneficio.icon === 'Clock' ? Clock : Award;
              
              return (
                <Card key={index} className="bg-[#1a1a2e] border-purple-500/20 rounded-3xl hover:border-[#D3FF62]/50 transition-all hover:-translate-y-2 hover:shadow-2xl">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#D3FF62]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-[#D3FF62]" />
                    </div>
                    <h3 className="text-2xl font-bold">{beneficio.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{beneficio.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToCheckout}
              className="bg-[#D3FF62] text-[#0a0a0f] hover:bg-[#b8e055] rounded-[25px] px-10 py-6 text-lg font-bold shadow-xl hover:scale-105 transition-all"
            >
              Quero Treinar com o Método
            </Button>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section id="resultados" className="py-20 px-4 bg-[#12121a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Resultados <span className="text-[#D3FF62]">Comprovados</span></h2>
            <div className="w-20 h-1 bg-[#D3FF62] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {resultados.map((resultado, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-600/10 to-[#D3FF62]/5 border-purple-500/20 rounded-3xl hover:shadow-2xl transition-all hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-[#D3FF62] mb-3">{resultado.metric}</div>
                  <div className="text-sm text-gray-300">{resultado.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Card className="bg-[#1a1a2e] border-[#D3FF62]/30 rounded-3xl">
              <CardContent className="p-12">
                <Star className="h-16 w-16 text-[#D3FF62] mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Transformação Garantida</h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  95% dos alunos alcançam seus objetivos em até 12 semanas. Método validado por ciência e resultados reais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">O Que Dizem <span className="text-[#D3FF62]">os Alunos</span></h2>
            <div className="w-20 h-1 bg-[#D3FF62] mx-auto"></div>
          </div>
          
          {/* Formulário para adicionar depoimento */}
          <Card className="bg-[#1a1a2e] border-purple-500/20 rounded-3xl mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Deixe seu Depoimento</h3>
              
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-2xl flex items-center justify-center gap-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span>Depoimento enviado com sucesso!</span>
                </div>
              )}
              
              <form onSubmit={handleSubmitTestimonial} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    value={newTestimonial.name}
                    onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                    className="bg-[#0a0a0f] border-purple-500/30 rounded-xl text-white placeholder:text-gray-500 h-12"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Compartilhe sua experiência com o método Low Volume..."
                    value={newTestimonial.comment}
                    onChange={(e) => setNewTestimonial({...newTestimonial, comment: e.target.value})}
                    className="bg-[#0a0a0f] border-purple-500/30 rounded-xl text-white placeholder:text-gray-500 min-h-32"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#D3FF62] text-[#0a0a0f] hover:bg-[#b8e055] rounded-[25px] py-6 text-lg font-bold"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Depoimento
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Lista de depoimentos */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-[#1a1a2e] border-purple-500/20 rounded-3xl hover:border-[#D3FF62]/50 transition-all hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#D3FF62] fill-[#D3FF62]" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.comment}"</p>
                  <div className="border-t border-purple-500/20 pt-4">
                    <div className="font-bold text-[#D3FF62]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{new Date(testimonial.date).toLocaleDateString('pt-BR')}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout CTA Section */}
      <section id="checkout-section" className="py-20 px-4 bg-gradient-to-br from-purple-900/30 via-[#12121a] to-[#0a0a0f]">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-[#1a1a2e] border-[#D3FF62]/30 rounded-3xl overflow-hidden shadow-2xl">
            <CardContent className="p-12 md:p-16">
              <ShoppingCart className="h-20 w-20 text-[#D3FF62] mx-auto mb-8" />
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto para <span className="text-[#D3FF62]">Transformar</span> seu Corpo?
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Acesse agora o método Low Volume e comece sua jornada para resultados extraordinários.
              </p>
              
              <a href={trainerInfo.checkoutLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#D3FF62] text-[#0a0a0f] hover:bg-[#b8e055] rounded-[33px] px-12 py-8 text-xl font-bold shadow-2xl hover:scale-105 transition-all">
                  <ShoppingCart className="mr-3 h-6 w-6" />
                  Comprar Agora
                </Button>
              </a>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>[Link para checkout - Atualizar com link real da Kiwify]</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0f] border-t border-purple-500/20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-[#D3FF62]">ALEX</span> LIPREVI
              </div>
              <p className="text-gray-400 leading-relaxed">
                Personal trainer profissional especializado em alta performance e método Low Volume.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>[email@exemplo.com]</p>
                <p>[Whatsapp: +55 11 99999-9999]</p>
                <p>[Localização: São Paulo, SP]</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Redes Sociais</h4>
              <div className="flex gap-4">
                <a 
                  href={trainerInfo.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center hover:bg-[#D3FF62]/20 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href={trainerInfo.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center hover:bg-[#D3FF62]/20 transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Alex Liprevi. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
