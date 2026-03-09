/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Leaf, 
  Clock, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ArrowRight,
  MessageCircle,
  Construction,
  Home,
  Briefcase,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-hope-orange p-2 rounded-lg">
            <Box className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-hope-black' : 'text-white'}`}>
            HOPE <span className="font-light">CONTENEDORES</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:text-hope-orange transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-hope-orange hover:bg-hope-orange/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-hope-orange/20">
            Presupuesto
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-hope-orange"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-hope-black' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-hope-orange border-b border-gray-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-hope-orange text-white py-3 rounded-xl font-bold mt-2">
              Solicitar Presupuesto
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545153996-e01b50d6ec38?q=80&w=2070&auto=format&fit=crop" 
          alt="Container Architecture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-hope-orange/20 text-hope-orange border border-hope-orange/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            Espacios Sostenibles
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Transformamos <span className="text-hope-orange">Contenedores</span> en el Futuro.
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Soluciones innovadoras, ecológicas y rápidas para viviendas, oficinas y proyectos comerciales. Calidad garantizada en cada módulo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-hope-orange hover:bg-hope-orange/90 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group">
              Ver Proyectos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-xl font-bold transition-all">
              Nuestros Servicios
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-10 right-10 hidden lg:block bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl max-w-xs"
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="bg-hope-orange rounded-full p-2">
            <Leaf className="text-white w-5 h-5" />
          </div>
          <span className="text-white font-bold">100% Sostenible</span>
        </div>
        <p className="text-gray-300 text-sm">
          Reducimos la huella de carbono reutilizando contenedores marítimos de alta resistencia.
        </p>
      </motion.div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-hope-orange" />,
      title: "Construcción Rápida",
      desc: "Reducimos los tiempos de obra hasta en un 60% comparado con la construcción tradicional."
    },
    {
      icon: <Leaf className="w-8 h-8 text-hope-orange" />,
      title: "Ecológico",
      desc: "Reutilizamos estructuras existentes, minimizando el desperdicio y el impacto ambiental."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-hope-orange" />,
      title: "Calidad Premium",
      desc: "Aislación térmica y acústica de primer nivel para un confort total en cualquier clima."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-6 bg-hope-orange/5 w-16 h-16 flex items-center justify-center rounded-2xl">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-hope-black mb-4">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Venta de Contenedores",
      icon: <Box className="w-10 h-10" />,
      desc: "Contenedores marítimos de 20 y 40 pies en excelente estado, listos para ser transformados o utilizados como depósito.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Modificación de Contenedores",
      icon: <Construction className="w-10 h-10" />,
      desc: "Transformamos unidades estándar en oficinas, locales comerciales, showrooms o viviendas con terminaciones de alta calidad.",
      img: "https://images.unsplash.com/photo-1545153996-e01b50d6ec38?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Proyectos Especiales",
      icon: <Home className="w-10 h-10" />,
      desc: "Diseños a medida para necesidades específicas: obradores, piscinas, depósitos refrigerados y estructuras modulares complejas.",
      img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1928&auto=format&fit=crop"
    }
  ];

  return (
    <section id="servicios" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-hope-black mb-6">Nuestros Servicios</h2>
          <p className="text-gray-600 text-lg">
            Ofrecemos soluciones integrales llave en mano. Nos encargamos de todo el proceso, desde el diseño hasta la instalación final.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg"
            >
              <img 
                src={s.img} 
                alt={s.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hope-black/90 via-hope-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="bg-hope-orange w-16 h-16 flex items-center justify-center rounded-2xl mb-6 text-white shadow-lg">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                  {s.desc}
                </p>
                <a 
                  href="#contacto"
                  className="inline-flex items-center gap-2 bg-hope-orange text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-hope-orange/90 transition-all group/btn"
                >
                  Saber más <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Commitment = () => {
  const commitments = [
    {
      title: "Ambiental",
      desc: "Reciclamos contenedores marítimos, reduciendo la huella de carbono y el desperdicio de acero."
    },
    {
      title: "Social",
      desc: "Generamos empleo local en Esperanza y promovemos la formación técnica de nuestro equipo."
    },
    {
      title: "Económico",
      desc: "Ofrecemos soluciones eficientes que permiten a empresas y familias crecer de forma escalable."
    }
  ];

  return (
    <section className="py-24 bg-hope-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 text-hope-orange fill-hope-orange" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Nuestro Compromiso</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-hope-white/5 border border-hope-white/10 p-10 rounded-[2rem] hover:bg-hope-white/10 transition-all group"
            >
              <h3 className="text-2xl font-bold text-hope-orange mb-6 uppercase tracking-wider">{c.title}</h3>
              <p className="text-hope-white/70 leading-relaxed text-lg">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-hope-black text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-hope-orange/5 skew-x-12 translate-x-32" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-hope-orange font-bold tracking-widest uppercase text-sm mb-4 block">Contacto</span>
            <h2 className="text-5xl font-bold mb-8">¿Tienes un proyecto en mente?</h2>
            <p className="text-hope-white/70 text-lg mb-12 leading-relaxed">
              Estamos listos para ayudarte a materializar tu idea. Contáctanos hoy mismo para recibir asesoramiento personalizado y un presupuesto sin cargo.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-hope-orange/10 p-4 rounded-2xl">
                  <Phone className="text-hope-orange w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Llámanos</h4>
                  <p className="text-hope-white/60">+54 9 11 1234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-hope-orange/10 p-4 rounded-2xl">
                  <Mail className="text-hope-orange w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-hope-white/60">hola@hopecontenedores.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-hope-orange/10 p-4 rounded-2xl">
                  <MapPin className="text-hope-orange w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                  <p className="text-hope-white/60">Parque Industrial, Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-hope-black mb-8">Envíanos un mensaje</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-hope-black focus:ring-2 focus:ring-hope-orange outline-none transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-hope-black focus:ring-2 focus:ring-hope-orange outline-none transition-all" placeholder="tu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Asunto</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-hope-black focus:ring-2 focus:ring-hope-orange outline-none transition-all">
                  <option>Vivienda Modular</option>
                  <option>Oficina / Local</option>
                  <option>Proyecto Especial</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-hope-black focus:ring-2 focus:ring-hope-orange outline-none transition-all" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>
              <button className="w-full bg-hope-orange hover:bg-hope-orange/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-hope-orange/20 transition-all">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-hope-orange p-2 rounded-lg">
              <Box className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-hope-black">
              HOPE <span className="font-light">CONTENEDORES</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-hope-orange">Privacidad</a>
            <a href="#" className="hover:text-hope-orange">Términos</a>
            <a href="#" className="hover:text-hope-orange">Cookies</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-hope-orange/5 hover:text-hope-orange transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-hope-orange/5 hover:text-hope-orange transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-50 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Hope Contenedores. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5491112345678" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-hope-orange hover:bg-hope-orange/90 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-hope-black px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Hablamos por WhatsApp?
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-hope-orange selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      
      {/* Projects Gallery */}
      <section id="proyectos" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-hope-black mb-6">Proyectos Destacados</h2>
              <p className="text-gray-600 text-lg">
                Explora algunos de nuestros trabajos más recientes. Cada proyecto es único y adaptado a las necesidades específicas de nuestros clientes.
              </p>
            </div>
            <button className="text-hope-orange font-bold flex items-center gap-2 group">
              Ver Galería Completa <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1545153996-e01b50d6ec38",
              "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
              "https://images.unsplash.com/photo-1497366216548-37526070297c",
              "https://images.unsplash.com/photo-1590487988256-9ed24133863e",
              "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
              "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09"
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={`${img}?q=80&w=800&auto=format&fit=crop`} 
                  alt={`Project ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-hope-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-hope-black px-6 py-2 rounded-full font-bold shadow-xl">Ver Detalles</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1928&auto=format&fit=crop" 
                  alt="Our Workshop" 
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-hope-orange rounded-3xl -z-0 hidden md:block" />
              <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-hope-orange/20 rounded-full -z-0 hidden md:block" />
            </div>
            
            <div>
              <span className="text-hope-orange font-bold tracking-widest uppercase text-sm mb-4 block">Sobre Nosotros</span>
              <h2 className="text-4xl font-bold text-hope-black mb-8 leading-tight">
                Líderes en Arquitectura Modular y Sostenible
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                En Hope Contenedores, creemos que el futuro de la construcción es circular. Nos apasiona transformar estructuras industriales en espacios habitables de alta gama, combinando diseño de vanguardia con un compromiso inquebrantable con el medio ambiente.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-3xl font-bold text-hope-orange mb-2">+150</h4>
                  <p className="text-gray-500 font-medium">Proyectos Entregados</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-hope-orange mb-2">10+</h4>
                  <p className="text-gray-500 font-medium">Años de Experiencia</p>
                </div>
              </div>
              <button className="border-2 border-hope-orange text-hope-orange hover:bg-hope-orange hover:text-white px-8 py-4 rounded-xl font-bold transition-all">
                Nuestra Historia
              </button>
            </div>
          </div>
        </div>
      </section>

      <Commitment />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
