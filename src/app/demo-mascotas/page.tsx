"use client";

import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown, 
  Leaf, 
  Gift, 
  Camera, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Clock,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

// --- Types ---
type Category = {
  title: string;
  subtext: string;
  image: string;
  note?: string;
};

// --- Components ---

const Navbar = ({ onOpenCart }: { onOpenCart: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Obrador', href: '#filosofia' },
    { name: 'Boutique', href: '#categorias' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#F7F5F0]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="font-display text-2xl md:text-3xl font-bold text-[#5C4033] tracking-tight">
          Bocados Peludos
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-body text-sm font-medium hover:text-[#B88B5D] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#B88B5D] text-white px-6 py-2.5 rounded-full font-body text-sm font-semibold hover:bg-[#5C4033] transition-all transform hover:scale-105">
            Ver Catálogo
          </button>
          <button onClick={onOpenCart} className="relative p-2 text-[#2C2C2C] hover:text-[#B88B5D] transition-colors">
            <ShoppingBag size={24} />
            <span className="absolute top-0 right-0 bg-[#8F9E8B] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={onOpenCart} className="relative p-2">
            <ShoppingBag size={22} />
          </button>
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`fixed inset-0 bg-[#F7F5F0] z-[60] transform transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="font-display text-2xl font-bold text-[#5C4033]">Bocados Peludos</span>
            <button onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-3xl font-semibold"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#B88B5D] text-white py-4 rounded-xl font-body text-lg font-bold">
              Ver Catálogo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isGift, setIsGift] = useState(false);

  return (
    <>
      <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[70] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-[#F7F5F0] z-[80] shadow-2xl transform transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-display text-2xl font-bold">Tu Pedido</h2>
            <button onClick={onClose}><X size={24} /></button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6">
            {/* Sample Item 1 */}
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
              <img src="https://images.unsplash.com/photo-1582179080413-81525937edaa?auto=format&fit=crop&q=80&w=200" alt="Cake" className="w-20 h-20 object-cover rounded-lg" />
              <div>
                <h4 className="font-body font-bold text-sm">Tarta Cumpleaños Pollo y Manzana</h4>
                <p className="text-[#B88B5D] font-bold mt-1">24,90€</p>
                <p className="text-xs text-gray-500 mt-1">Personalizado: &quot;Cooper - 2 años&quot;</p>
              </div>
            </div>

            {/* Sample Item 2 */}
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
              <img src="https://images.unsplash.com/photo-1591160674255-fc339bba1877?auto=format&fit=crop&q=80&w=200" alt="Snacks" className="w-20 h-20 object-cover rounded-lg" />
              <div>
                <h4 className="font-body font-bold text-sm">Snacks de Calabaza (150g)</h4>
                <p className="text-[#B88B5D] font-bold mt-1">8,50€</p>
              </div>
            </div>

            {/* Eco Badge */}
            <div className="bg-[#8F9E8B]/10 p-4 rounded-xl flex gap-3 items-start">
              <Leaf className="text-[#8F9E8B] shrink-0" size={20} />
              <p className="text-xs text-[#2C2C2C] leading-relaxed">
                <span className="font-bold block mb-1 text-[#8F9E8B]">Envío Sostenible</span>
                Usamos packaging 100% libre de plásticos y compostable.
              </p>
            </div>

            {/* Gift Feature */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={isGift} 
                  onChange={(e) => setIsGift(e.target.checked)}
                  className="w-5 h-5 accent-[#B88B5D] rounded"
                />
                <span className="font-body text-sm font-medium flex items-center gap-2">
                  <Gift size={18} className="text-[#B88B5D]" /> 🎁 ¿Es para un regalo? Añade una nota personalizada gratis.
                </span>
              </label>
              {isGift && (
                <textarea 
                  placeholder="Escribe aquí tu mensaje especial..."
                  className="w-full p-4 bg-white border border-gray-200 rounded-xl text-sm font-body focus:ring-1 focus:ring-[#B88B5D] outline-none transition-all h-24"
                />
              )}
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 space-y-4">
            <div className="flex justify-between items-end">
              <span className="font-body text-gray-500">Subtotal</span>
              <span className="font-display text-xl font-bold">33,40€</span>
            </div>
            <button className="w-full bg-[#5C4033] text-white py-4 rounded-xl font-body font-bold hover:bg-[#2C2C2C] transition-colors flex items-center justify-center gap-2">
              Finalizar Compra <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default function BocadosPeludos() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* 2. Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=1920" 
            alt="Dog treats aesthetic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#F7F5F0]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl text-white font-bold leading-tight mb-6">
            Repostería de verdad para tu mejor amigo
          </h1>
          <p className="font-body text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tartas de cumpleaños, snacks orgánicos y accesorios sostenibles. Porque ellos también merecen celebrar bonito y comer sano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B88B5D] text-white px-10 py-5 rounded-full font-body font-bold text-lg hover:bg-[#5C4033] transition-all transform hover:scale-105 shadow-xl">
              Encargar Tarta
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-body font-bold text-lg hover:bg-white/20 transition-all">
              Descubrir Boutique
            </button>
          </div>
        </div>
      </section>

      {/* 3. Our Philosophy & Bruno */}
      <section id="filosofia" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800" 
                alt="Bruno the Golden Retriever" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#8F9E8B] text-white p-8 rounded-2xl shadow-xl max-w-[240px]">
              <p className="font-body text-sm italic leading-relaxed">
                &quot;🐾 Probado y aprobado por Bruno, Cofundador y Jefe de Calidad.&quot;
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#5C4033]">
              Horneado con amor. <br/>Aprobado por Bruno.
            </h2>
            <p className="font-body text-lg leading-relaxed text-[#2C2C2C]/80">
              En Bocados Peludos no usamos subproductos, colorantes ni ingredientes que no te comerías tú mismo. Si decimos que una galleta es de manzana y cacahuete, es porque pelamos las manzanas a mano cada mañana en nuestro obrador de Justicia.
            </p>
            <p className="font-body text-lg leading-relaxed text-[#2C2C2C]/80">
              Queremos que celebres los momentos especiales de tu peludo con tranquilidad, sabiendo que le estás dando algo sano, natural y, además, precioso.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#F7F5F0] overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="font-body text-sm font-semibold">+500 familias en Madrid confían en nosotros</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Shop Categories */}
      <section id="categorias" className="py-24 md:py-32 bg-[#EFEBE4]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Delicias y Cuidados</h2>
            <p className="font-body text-gray-600">Artesanía pura para narices inquietas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Tartas Personalizadas", 
                subtext: "De pollo, ternera o pescado fresco. Decoradas a mano.", 
                image: "https://images.unsplash.com/photo-1591160674255-fc339bba1877?auto=format&fit=crop&q=80&w=800",
                note: "⏱️ Requiere 48h de antelación"
              },
              { 
                title: "Snacks de Obrador", 
                subtext: "Galletas horneadas a diario con ingredientes orgánicos.", 
                image: "https://images.unsplash.com/photo-1544433480-e442df212f45?auto=format&fit=crop&q=80&w=800" 
              },
              { 
                title: "Boutique Sostenible", 
                subtext: "Juguetes de caucho natural y correas artesanales.", 
                image: "https://images.unsplash.com/photo-1541591419107-bb2485dd4742?auto=format&fit=crop&q=80&w=800" 
              },
              { 
                title: "Repostería Felina", 
                subtext: "Bocaditos de salmón y mini-tartas para paladares exigentes.", 
                image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800" 
              }
            ].map((cat, i) => (
              <div key={i} className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  {cat.note && (
                    <span className="inline-block bg-[#B88B5D] text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-3">
                      {cat.note}
                    </span>
                  )}
                  <h3 className="font-display text-3xl text-white font-bold mb-2">{cat.title}</h3>
                  <p className="font-body text-white/80 text-sm">{cat.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="font-display text-4xl font-bold text-center mb-16">Familias Felices</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "¡Increíble! Le encargamos una tarta de pollo y manzana para el 2º cumple de Cooper y no dejó ni las migas. Lo mejor es saber que los ingredientes son naturales.",
              author: "Lucía y Cooper (Beagle)"
            },
            {
              text: "Es difícil encontrar repostería para gatos que no sea industrial. A Mía le vuelven loca los bocaditos de salmón. Mateo es un encanto y se nota que sabe lo que hace.",
              author: "Carlos y Mía (Gata común)"
            },
            {
              text: "Mi perra tiene el estómago muy sensible y aquí siempre me aconsejan qué snacks le sientan mejor. La boutique es ideal para hacer regalos originales.",
              author: "Elena S."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-[#EFEBE4] relative">
              <div className="text-[#B88B5D] mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
              </div>
              <p className="font-body text-[#2C2C2C] mb-6 italic leading-relaxed">&quot;{item.text}&quot;</p>
              <p className="font-body font-bold text-sm text-[#5C4033]">— {item.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Location, Hours & FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-[#F7F5F0] px-6 md:px-12 border-t border-[#EFEBE4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Info and Map */}
            <div id="contacto" className="space-y-12">
              <h2 className="font-display text-4xl font-bold">Ven a oler a galletas recién hechas</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-[#B88B5D] shrink-0" />
                  <div>
                    <h4 className="font-body font-bold">Dirección</h4>
                    <p className="font-body text-[#2C2C2C]/70">Calle de Pelayo, 42, 28004 Madrid (Barrio de Justicia)</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone className="text-[#B88B5D] shrink-0" />
                  <div>
                    <h4 className="font-body font-bold">Teléfono / WhatsApp</h4>
                    <p className="font-body text-[#2C2C2C]/70">600 000 000</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Clock className="text-[#B88B5D] shrink-0" />
                  <div>
                    <h4 className="font-body font-bold">Horarios</h4>
                    <p className="font-body text-[#2C2C2C]/70">Lun - Vie: 10:30–14:30 | 17:00–20:30</p>
                    <p className="font-body text-[#2C2C2C]/70">Sábados: 11:00–20:00</p>
                    <p className="font-body text-[#B88B5D] font-medium mt-1">Domingos: ¡De paseo con nuestros peludos! (Cerrado)</p>
                  </div>
                </div>
              </div>
              <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-inner grayscale contrast-75">
                {/* Mock Map */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2831!2d-3.698!3d40.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288960!2sC.%20de%20Pelayo%2C%2042%2C%2028004%20Madrid!5e0!3m2!1ses!2ses!4v1" 
                  className="w-full h-full border-0" 
                  loading="lazy"
                  title="Mock Map"
                ></iframe>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold mb-8">Preguntas Frecuentes</h3>
              {[
                { 
                  q: "¿Enviáis a toda España?", 
                  a: "Enviamos nuestros snacks secos y accesorios a toda la península. Las tartas, al ser frescas, solo están disponibles para recogida en nuestra tienda en Madrid." 
                },
                { 
                  q: "¿Qué ingredientes usáis?", 
                  a: "Solo ingredientes de grado humano: pollo de corral, frutas frescas, avena, algarroba... Cero azúcares, cero conservantes raros." 
                },
                { 
                  q: "¿Cómo encargo una tarta de cumple?", 
                  a: "Puedes hacerlo por la web o WhatsApp con mínimo 48h de antelación. Indícanos el nombre de tu peludo y si tiene alguna alergia." 
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl p-6 border border-[#EFEBE4] cursor-pointer">
                  <summary className="font-body font-bold flex justify-between items-center list-none">
                    {faq.q}
                    <ChevronDown size={20} className="group-open:rotate-180 transition-transform text-[#B88B5D]" />
                  </summary>
                  <p className="mt-4 font-body text-[#2C2C2C]/70 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-[#5C4033] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <h2 className="font-display text-3xl font-bold mb-6">Bocados Peludos</h2>
              <p className="font-body text-white/60 max-w-sm leading-relaxed mb-8">
                Repostería artesanal y boutique sostenible. Creemos en una alimentación honesta y en celebrar la vida junto a quienes más nos quieren.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B88B5D] transition-colors">
                  <Camera size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B88B5D] transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-display text-xl font-bold mb-6">Explora</h4>
              <ul className="space-y-4 font-body text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Tienda Online</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nuestro Obrador</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl font-bold mb-6">Newsletter</h4>
              <p className="font-body text-sm text-white/60 mb-4">Únete a la manada. Recetas y un regalo por el cumple de tu peludo.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Tu email..." 
                  className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-6 text-sm font-body outline-none focus:border-[#B88B5D]"
                />
                <button className="absolute right-2 top-2 bg-[#B88B5D] p-1.5 rounded-full">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-xs text-white/40">
            <p>© 2026 Bocados Peludos. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#">Aviso Legal</a>
              <a href="#">Privacidad</a>
              <span>Hecho con ♥ por M&C Web Solutions</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/34600000000" 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-40 animate-pulse hover:animate-none transition-transform hover:scale-110"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
