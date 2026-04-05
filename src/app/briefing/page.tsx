"use client";

import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import Script from "next/script";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxI6BUgFReyKA1tNdApd981fUDGKIs3xFqPp0j8-PR0bwPcT5DUkqNi7pxKhzhaDZ28Zg/exec";

const SECTIONS = [
  { id: "welcome", label: "Inicio", icon: "🚀" },
  { id: "A", label: "Tu Negocio", icon: "🏢" },
  { id: "B", label: "Tu Proyecto", icon: "💻" },
  { id: "C", label: "Diseño", icon: "🎨" },
  { id: "D", label: "Contenido", icon: "📝" },
  { id: "E", label: "Logística", icon: "⚡" },
  { id: "review", label: "Resumen", icon: "✅" },
];

const SECTOR_OPTIONS = [
  "Hostelería (restaurante, cafetería, bar)",
  "Salud y bienestar (clínica, fisio, dentista, spa)",
  "Fitness y deporte (gimnasio, entrenador, club)",
  "Comercio / Tienda",
  "Servicios profesionales (abogado, asesoría, consultoría)",
  "Educación / Formación",
  "Tecnología",
  "Moda y belleza (peluquería, estética, ropa)",
  "Inmobiliaria",
  "Construcción y reformas",
  "Fotografía / Diseño / Creativo",
  "Alimentación / Delivery",
  "Turismo y ocio",
  "ONG / Asociación",
  "Otro",
];

const WEB_TYPES = [
  { value: "landing", label: "Landing Page", desc: "Una página única y potente para presentar tu negocio", icon: "🏠" },
  { value: "corporativa", label: "Web Corporativa", desc: "Varias páginas: inicio, servicios, equipo, contacto...", icon: "🏢" },
  { value: "ecommerce", label: "Tienda Online", desc: "Vender productos con carrito y pago online", icon: "🛒" },
  { value: "portfolio", label: "Portfolio", desc: "Mostrar trabajos, proyectos o galería", icon: "📸" },
  { value: "restaurante", label: "Web Restaurante/Bar", desc: "Con carta, reservas y ubicación", icon: "🍽️" },
  { value: "otro", label: "Otro tipo", desc: "Especificar en el siguiente paso", icon: "📋" },
];

const OBJECTIVES = [
  { value: "contacto", label: "Que me contacten", desc: "Captar leads, llamadas, WhatsApp", icon: "📞" },
  { value: "vender", label: "Vender productos online", icon: "🛍️" },
  { value: "reservas", label: "Que reserven citas o servicios", icon: "📅" },
  { value: "visibilidad", label: "Dar visibilidad a mi negocio local", icon: "🏪" },
  { value: "portfolio", label: "Mostrar mi trabajo / portfolio", icon: "💼" },
  { value: "blog", label: "Informar y compartir contenido", icon: "📰" },
  { value: "otro", label: "Otro objetivo", icon: "🎯" },
];

const PAGE_OPTIONS = [
  "Inicio / Home", "Sobre nosotros", "Servicios", "Productos / Catálogo",
  "Carta o Menú", "Galería de fotos", "Testimonios", "Blog / Noticias",
  "Precios / Tarifas", "Equipo", "FAQ", "Contacto",
  "Ubicación / Cómo llegar", "Reservas / Citas", "Tienda online",
];

const FEATURE_OPTIONS = [
  "Formulario de contacto", "Botón de WhatsApp", "Chat en vivo",
  "Reservas / Citas online", "Google Maps integrado", "Pasarela de pago",
  "Blog o noticias", "Newsletter / Suscripción email",
  "Integración redes sociales", "Multiidioma", "Zona privada / Login",
];

const STYLE_OPTIONS = [
  { value: "minimalista", label: "Minimalista", desc: "Limpio, espacio en blanco, elegante", icon: "✨" },
  { value: "corporativo", label: "Corporativo", desc: "Profesional, serio, confianza", icon: "🏢" },
  { value: "creativo", label: "Creativo / Colorido", desc: "Atrevido, dinámico, llama la atención", icon: "🎨" },
  { value: "oscuro", label: "Oscuro / Moderno", desc: "Fondos oscuros, look tech o premium", icon: "🌑" },
  { value: "natural", label: "Orgánico / Natural", desc: "Tonos tierra, sensación cálida", icon: "🌿" },
  { value: "lujoso", label: "Lujoso / Premium", desc: "Dorados, tipografías serif, exclusividad", icon: "💎" },
  { value: "noseguro", label: "No estoy seguro/a", desc: "Que M&C me proponga algo", icon: "🤔" },
];

const BUDGET_OPTIONS = [
  { value: "<300", label: "Menos de 300€", icon: "💰" },
  { value: "300-500", label: "300€ - 500€", icon: "💰💰" },
  { value: "500-800", label: "500€ - 800€", icon: "💰💰💰" },
  { value: "800-1500", label: "800€ - 1.500€", icon: "💰💰💰💰" },
  { value: ">1500", label: "Más de 1.500€", icon: "💎" },
  { value: "noseguro", label: "No tengo claro, asesoradme", icon: "🤷" },
];

const URGENCY_OPTIONS = [
  { value: "asap", label: "Lo antes posible (48h-72h)", icon: "🔥" },
  { value: "semana", label: "Esta / próxima semana", icon: "📅" },
  { value: "mes", label: "Este mes, sin prisa", icon: "🗓️" },
  { value: "sinprisa", label: "No tengo fecha límite", icon: "🤷" },
];

const HOW_FOUND = [
  { value: "instagram", label: "Instagram", icon: "📱" },
  { value: "linkedin", label: "LinkedIn", icon: "💼" },
  { value: "google", label: "Google", icon: "🔍" },
  { value: "recomendacion", label: "Me lo recomendó alguien", icon: "👥" },
  { value: "uev", label: "Universidad / UEV", icon: "🎓" },
  { value: "otro", label: "Otro", icon: "🔗" },
];

interface FormData {
  nombre: string; negocio: string; sector: string; sectorOtro: string; ubicacion: string;
  telefono: string; email: string; redes: string; webActual: string;
  tipoWeb: string; tipoWebOtro: string; objetivo: string; publicoObjetivo: string;
  paginas: string[]; paginasExtra: string; funcionalidades: string[]; funcExtra: string;
  logo: string; colores: string; codigosColor: string; estilo: string;
  websReferencia: string; noQuiero: string;
  textos: string; descripcionNegocio: string; servicios: string;
  fotos: string; testimonios: string; horario: string;
  dominio: string; dominioExistente: string; urgencia: string; presupuesto: string;
  mantenimiento: string; comoNosConocio: string; comentarios: string;
}

const initialData: FormData = {
  nombre: "", negocio: "", sector: "", sectorOtro: "", ubicacion: "",
  telefono: "", email: "", redes: "", webActual: "",
  tipoWeb: "", tipoWebOtro: "", objetivo: "", publicoObjetivo: "",
  paginas: [], paginasExtra: "", funcionalidades: [], funcExtra: "",
  logo: "", colores: "", codigosColor: "", estilo: "",
  websReferencia: "", noQuiero: "",
  textos: "", descripcionNegocio: "", servicios: "",
  fotos: "", testimonios: "", horario: "",
  dominio: "", dominioExistente: "", urgencia: "", presupuesto: "",
  mantenimiento: "", comoNosConocio: "", comentarios: "",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div style={{ width: "100%", paddingBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 11, color: "#8a8f98", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: 1 }}>
        <span>PROGRESO</span><span>{pct}%</span>
      </div>
      <div style={{ width: "100%", height: 3, background: "#1e2028", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg, #00e5a0, #00c2ff)", borderRadius: 2, transition: "width 0.5s cubic-bezier(.4,0,.2,1)" }} />
      </div>
    </div>
  );
}

function CardShell({ children, title, subtitle, sectionIcon }: { children: ReactNode; title?: string; subtitle?: string; sectionIcon?: string }) {
  return (
    <div style={{ animation: "fadeSlide 0.4s ease forwards", display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
      {title && (
        <div style={{ marginBottom: 4 }}>
          {sectionIcon && <span style={{ fontSize: 32, display: "block", marginBottom: 12 }}>{sectionIcon}</span>}
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#f0f1f3", margin: 0, lineHeight: 1.2, fontFamily: "var(--font-space-grotesk)" }}>{title}</h2>
          {subtitle && <p style={{ fontSize: 16, color: "#8a8f98", margin: "10px 0 0", lineHeight: 1.5 }}>{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}

function TextInput({ label, value, onChange, placeholder, required, type = "text", helper }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
  required?: boolean; type?: string; helper?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{ fontSize: 14, fontWeight: 600, color: "#c5c8ce", fontFamily: "var(--font-space-grotesk)" }}>
        {label} {required && <span style={{ color: "#00e5a0" }}>*</span>}
      </label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ padding: "16px 18px", fontSize: 16, borderRadius: 12, border: `1.5px solid ${focused ? "#00e5a0" : "#2a2d37"}`, background: "#0D1E3A", color: "#f0f1f3", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s", fontFamily: "var(--font-space-grotesk)", boxShadow: focused ? "0 0 0 3px rgba(0,229,160,0.08)" : "none", width: "100%" }}
      />
      {helper && <span style={{ fontSize: 13, color: "#6b7080", lineHeight: 1.4 }}>{helper}</span>}
    </div>
  );
}

function TextArea({ label, value, onChange, placeholder, required, helper, rows = 3 }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
  required?: boolean; helper?: string; rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{ fontSize: 14, fontWeight: 600, color: "#c5c8ce", fontFamily: "var(--font-space-grotesk)" }}>
        {label} {required && <span style={{ color: "#00e5a0" }}>*</span>}
      </label>
      <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ padding: "16px 18px", fontSize: 16, borderRadius: 12, border: `1.5px solid ${focused ? "#00e5a0" : "#2a2d37"}`, background: "#0D1E3A", color: "#f0f1f3", outline: "none", resize: "vertical", fontFamily: "var(--font-space-grotesk)", transition: "border-color 0.2s, box-shadow 0.2s", lineHeight: 1.5, boxShadow: focused ? "0 0 0 3px rgba(0,229,160,0.08)" : "none", width: "100%" }}
      />
      {helper && <span style={{ fontSize: 13, color: "#6b7080", lineHeight: 1.4 }}>{helper}</span>}
    </div>
  );
}

interface SelectOption { value: string; label: string; desc?: string; icon?: string; }

function SingleSelect({ label, options, value, onChange, required, helper }: {
  label?: string; options: (string | SelectOption)[]; value: string;
  onChange: (v: string) => void; required?: boolean; helper?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {label && <label style={{ fontSize: 14, fontWeight: 600, color: "#c5c8ce", fontFamily: "var(--font-space-grotesk)" }}>{label} {required && <span style={{ color: "#00e5a0" }}>*</span>}</label>}
      {helper && <span style={{ fontSize: 13, color: "#6b7080", marginBottom: 2, lineHeight: 1.4 }}>{helper}</span>}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {options.map((opt) => {
          const val = typeof opt === "string" ? opt : opt.value;
          const lab = typeof opt === "string" ? opt : opt.label;
          const desc = typeof opt === "object" ? opt.desc : null;
          const icon = typeof opt === "object" ? opt.icon : null;
          const selected = value === val;
          return (
            <button key={val} onClick={() => onChange(val)} style={{ display: "flex", alignItems: "center", gap: 14, padding: desc ? "18px 20px" : "16px 20px", borderRadius: 12, cursor: "pointer", textAlign: "left", border: `1.5px solid ${selected ? "#00e5a0" : "#2a2d37"}`, background: selected ? "rgba(0,229,160,0.08)" : "#0D1E3A", color: "#f0f1f3", transition: "all 0.2s", boxShadow: selected ? "0 0 0 3px rgba(0,229,160,0.08)" : "none", width: "100%" }}>
              {icon && <span style={{ fontSize: 24, flexShrink: 0 }}>{icon}</span>}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 600, fontFamily: "var(--font-space-grotesk)" }}>{lab}</div>
                {desc && <div style={{ fontSize: 13, color: "#8a8f98", marginTop: 4 }}>{desc}</div>}
              </div>
              <div style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, border: `2px solid ${selected ? "#00e5a0" : "#3a3d47"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {selected && <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#00e5a0" }} />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MultiSelect({ label, options, values, onChange, helper }: {
  label?: string; options: (string | SelectOption)[]; values: string[];
  onChange: (v: string[]) => void; helper?: string;
}) {
  const toggle = (val: string) => {
    if (values.includes(val)) onChange(values.filter(v => v !== val));
    else onChange([...values, val]);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {label && <label style={{ fontSize: 14, fontWeight: 600, color: "#c5c8ce", fontFamily: "var(--font-space-grotesk)" }}>{label}</label>}
      {helper && <span style={{ fontSize: 13, color: "#6b7080", marginBottom: 2, lineHeight: 1.4 }}>{helper}</span>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {options.map((opt) => {
          const val = typeof opt === "string" ? opt : opt.value;
          const lab = typeof opt === "string" ? opt : opt.label;
          const selected = values.includes(val);
          return (
            <button key={val} onClick={() => toggle(val)} style={{ padding: "12px 20px", borderRadius: 25, cursor: "pointer", border: `1.5px solid ${selected ? "#00e5a0" : "#2a2d37"}`, background: selected ? "rgba(0,229,160,0.12)" : "#0D1E3A", color: selected ? "#00e5a0" : "#c5c8ce", fontSize: 14, fontWeight: 500, transition: "all 0.2s", fontFamily: "var(--font-space-grotesk)" }}>
              {selected ? "✓ " : ""}{lab}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Steps definition ─────────────────────────────────────────────────────────

const STEPS = [
  { section: "welcome", id: "welcome" },
  { section: "A", id: "a1" }, { section: "A", id: "a2" }, { section: "A", id: "a3" },
  { section: "A", id: "a5" }, { section: "A", id: "a6-a7" }, { section: "A", id: "a8-a9" },
  { section: "B", id: "trans-b" },
  { section: "B", id: "b1" }, { section: "B", id: "b3" }, { section: "B", id: "b4" },
  { section: "B", id: "b5" }, { section: "B", id: "b7" },
  { section: "C", id: "trans-c" },
  { section: "C", id: "c1" }, { section: "C", id: "c3" }, { section: "C", id: "c5" },
  { section: "C", id: "c6-c7" },
  { section: "D", id: "trans-d" },
  { section: "D", id: "d1" }, { section: "D", id: "d2" }, { section: "D", id: "d3" },
  { section: "D", id: "d4" }, { section: "D", id: "d6-d7" },
  { section: "E", id: "trans-e" },
  { section: "E", id: "e1" }, { section: "E", id: "e3" }, { section: "E", id: "e4" },
  { section: "E", id: "e5" }, { section: "E", id: "e6" }, { section: "E", id: "e7" },
  { section: "review", id: "review" },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function BriefingPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).particlesJS) {
      initParticles();
    }
  }, []);

  const initParticles = () => {
    if (typeof window !== 'undefined' && (window as any).particlesJS) {
      (window as any).particlesJS("particles-js", {
        "particles": {
          "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#64FFDA" },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.35, "random": false },
          "size": { "value": 3, "random": true },
          "line_linked": { "enable": true, "distance": 150, "color": "#64FFDA", "opacity": 0.2, "width": 1 },
          "move": { "enable": true, "speed": 1.2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false }, "resize": true },
          "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } } }
        },
        "retina_detect": true
      });
    }
  };

  const set = (field: keyof FormData) => (val: string | string[]) =>
    setData(prev => ({ ...prev, [field]: val }));

  const current = STEPS[step];
  const totalSteps = STEPS.length - 1;

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: "smooth" });

  const canNext = (): boolean => {
    const s = current.id;
    if (s === "a1") return data.nombre.trim() !== "";
    if (s === "a2") return data.negocio.trim() !== "";
    if (s === "a3") return data.sector !== "";
    if (s === "a5") return data.ubicacion.trim() !== "";
    if (s === "a6-a7") return data.telefono.trim() !== "" && data.email.trim() !== "";
    if (s === "b1") return data.tipoWeb !== "";
    if (s === "b3") return data.objetivo !== "";
    if (s === "b4") return data.publicoObjetivo.trim() !== "";
    if (s === "b5") return data.paginas.length > 0;
    if (s === "c1") return data.logo !== "";
    if (s === "c3") return data.colores !== "";
    if (s === "c5") return data.estilo !== "";
    if (s === "d1") return data.textos !== "";
    if (s === "d2") return data.descripcionNegocio.trim() !== "";
    if (s === "d3") return data.servicios.trim() !== "";
    if (s === "d4") return data.fotos !== "";
    if (s === "e1") return data.dominio !== "";
    if (s === "e3") return data.urgencia !== "";
    if (s === "e4") return data.presupuesto !== "";
    if (s === "e5") return data.mantenimiento !== "";
    if (s === "e6") return data.comoNosConocio !== "";
    return true;
  };

  const next = () => { if (step < STEPS.length - 1) { setStep(s => s + 1); scrollTop(); } };
  const prev = () => { if (step > 0) { setStep(s => s - 1); scrollTop(); } };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && canNext() && current.id !== "review") {
      e.preventDefault(); next();
    }
  };

  const generateSummary = () => {
    const lines = [
      `══════════════════════════════════`,
      `   BRIEFING — M&C WEB SOLUTIONS`,
      `   ${new Date().toLocaleDateString("es-ES")}`,
      `══════════════════════════════════`,
      ``, `▸ CLIENTE`,
      `  Nombre: ${data.nombre}`, `  Negocio: ${data.negocio}`,
      `  Sector: ${data.sector}${data.sectorOtro ? ` (${data.sectorOtro})` : ""}`,
      `  Ubicación: ${data.ubicacion}`, `  Teléfono: ${data.telefono}`,
      `  Email: ${data.email}`,
      data.redes ? `  Redes: ${data.redes}` : null,
      data.webActual ? `  Web actual: ${data.webActual}` : null,
      ``, `▸ PROYECTO`,
      `  Tipo: ${WEB_TYPES.find(w => w.value === data.tipoWeb)?.label || data.tipoWeb}`,
      `  Objetivo: ${OBJECTIVES.find(o => o.value === data.objetivo)?.label || data.objetivo}`,
      `  Público: ${data.publicoObjetivo}`,
      `  Páginas: ${data.paginas.join(", ")}`,
      data.funcionalidades.length > 0 ? `  Funcionalidades: ${data.funcionalidades.join(", ")}` : null,
      ``, `▸ DISEÑO`,
      `  Logo: ${data.logo}`, `  Colores: ${data.colores}${data.codigosColor ? ` — ${data.codigosColor}` : ""}`,
      `  Estilo: ${STYLE_OPTIONS.find(s => s.value === data.estilo)?.label || data.estilo}`,
      ``, `▸ LOGÍSTICA`,
      `  Urgencia: ${URGENCY_OPTIONS.find(u => u.value === data.urgencia)?.label || data.urgencia}`,
      `  Presupuesto: ${BUDGET_OPTIONS.find(b => b.value === data.presupuesto)?.label || data.presupuesto}`,
      `  Mantenimiento: ${data.mantenimiento}`,
      `══════════════════════════════════`,
    ];
    return lines.filter(Boolean).join("\n");
  };

  const copyBriefing = () => {
    navigator.clipboard.writeText(generateSummary());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async () => {
    setSending(true);
    setSendError(null);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSendError("Error de conexión. Tu briefing se ha copiado al portapapeles como respaldo.");
      copyBriefing();
    } finally {
      setSending(false);
    }
  };

  const renderStep = () => {
    const s = current.id;

    if (s === "welcome") return (
      <CardShell>
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>🚀</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#f0f1f3", margin: "0 0 16px", fontFamily: "var(--font-space-grotesk)", lineHeight: 1.1 }}>¡Vamos a crear tu web!</h1>
          <p style={{ fontSize: 17, color: "#8a8f98", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
            Este briefing nos ayudará a entender exactamente qué necesitas. Son solo <strong style={{ color: "#00e5a0" }}>5 minutos</strong> y con esta información te preparamos una propuesta personalizada en menos de 24h.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 36 }}>
            {["🏢 Tu negocio", "💻 Tu proyecto", "🎨 Diseño", "📝 Contenido", "⚡ Logística"].map(t => (
              <span key={t} style={{ fontSize: 12, padding: "8px 16px", borderRadius: 20, background: "rgba(255,255,255,0.05)", color: "#8a8f98", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "var(--font-jetbrains-mono)" }}>{t}</span>
            ))}
          </div>
        </div>
      </CardShell>
    );

    if (s === "a1") return <CardShell title="¿Cómo te llamas?" sectionIcon="👤"><TextInput label="Nombre completo" value={data.nombre} onChange={v => set("nombre")(v)} placeholder="Ej: María García López" required /></CardShell>;
    if (s === "a2") return <CardShell title="¿Cuál es el nombre de tu negocio?" sectionIcon="🏢"><TextInput label="Nombre del negocio o marca" value={data.negocio} onChange={v => set("negocio")(v)} placeholder="Ej: Café del Turia, Studio Pilates VLC..." required /></CardShell>;
    if (s === "a3") return (
      <CardShell title="¿En qué sector trabajas?" sectionIcon="📊">
        <SingleSelect options={SECTOR_OPTIONS} value={data.sector} onChange={v => set("sector")(v)} required />
        {data.sector === "Otro" && <TextInput label="Especifica tu sector" value={data.sectorOtro} onChange={v => set("sectorOtro")(v)} placeholder="Ej: Veterinaria, coaching, eventos..." />}
      </CardShell>
    );
    if (s === "a5") return <CardShell title="¿Dónde está tu negocio?" sectionIcon="📍"><TextInput label="Ubicación" value={data.ubicacion} onChange={v => set("ubicacion")(v)} placeholder="Ej: Valencia centro, Paterna, online..." required helper='Si operas solo online, escribe "Online"' /></CardShell>;
    if (s === "a6-a7") return (
      <CardShell title="¿Cómo te contactamos?" sectionIcon="📱">
        <TextInput label="Teléfono (preferiblemente WhatsApp)" value={data.telefono} onChange={v => set("telefono")(v)} placeholder="Ej: 612 345 678" required type="tel" />
        <TextInput label="Email de contacto" value={data.email} onChange={v => set("email")(v)} placeholder="tu@email.com" required type="email" />
      </CardShell>
    );
    if (s === "a8-a9") return (
      <CardShell title="Presencia digital actual" sectionIcon="🌐">
        <TextArea label="Redes sociales" value={data.redes} onChange={v => set("redes")(v)} placeholder={"Instagram: @minegocio\nFacebook: facebook.com/minegocio"} helper="Pega los enlaces que tengas" />
        <TextInput label="¿Tienes web actualmente?" value={data.webActual} onChange={v => set("webActual")(v)} placeholder="https://miweb.com" helper="Si no tienes, deja en blanco" />
      </CardShell>
    );

    if (s === "trans-b") return <CardShell><div style={{ textAlign: "center", padding: "40px 0" }}><div style={{ fontSize: 64, marginBottom: 16 }}>👏</div><h2 style={{ fontSize: 26, fontWeight: 700, color: "#f0f1f3", margin: "0 0 12px", fontFamily: "var(--font-space-grotesk)" }}>Perfecto, ya te conocemos mejor</h2><p style={{ fontSize: 17, color: "#8a8f98" }}>Ahora cuéntanos qué necesitas exactamente.</p></div></CardShell>;

    if (s === "b1") return (
      <CardShell title="¿Qué tipo de web necesitas?" sectionIcon="💻" subtitle="Si no estás seguro/a, elige la que más se parezca.">
        <SingleSelect options={WEB_TYPES} value={data.tipoWeb} onChange={v => set("tipoWeb")(v)} required />
        {data.tipoWeb === "otro" && <TextInput label="Descríbenos qué tipo de web" value={data.tipoWebOtro} onChange={v => set("tipoWebOtro")(v)} placeholder="Ej: Web de eventos, plataforma de cursos..." />}
      </CardShell>
    );
    if (s === "b3") return <CardShell title="¿Cuál es el objetivo PRINCIPAL de tu web?" sectionIcon="🎯" subtitle="Elige solo uno."><SingleSelect options={OBJECTIVES} value={data.objetivo} onChange={v => set("objetivo")(v)} required /></CardShell>;
    if (s === "b4") return <CardShell title="¿Quién es tu cliente ideal?" sectionIcon="👥"><TextArea label="Describe a tu público objetivo" value={data.publicoObjetivo} onChange={v => set("publicoObjetivo")(v)} placeholder="Ej: Mujeres de 25-45 años de Valencia interesadas en pilates y bienestar" required helper="Cuanto más concreto, mejor resultado." rows={3} /></CardShell>;
    if (s === "b5") return (
      <CardShell title="¿Qué secciones necesita tu web?" sectionIcon="📄" subtitle="Selecciona todas las que quieras.">
        <MultiSelect options={PAGE_OPTIONS} values={data.paginas} onChange={v => set("paginas")(v)} />
        <TextInput label="¿Alguna sección adicional?" value={data.paginasExtra} onChange={v => set("paginasExtra")(v)} placeholder="Ej: Zona de becas, área de socios..." />
      </CardShell>
    );
    if (s === "b7") return (
      <CardShell title="Funcionalidades especiales" sectionIcon="⚙️" subtitle="Marca las que te interesen.">
        <MultiSelect options={FEATURE_OPTIONS} values={data.funcionalidades} onChange={v => set("funcionalidades")(v)} />
        <TextInput label="¿Alguna otra funcionalidad?" value={data.funcExtra} onChange={v => set("funcExtra")(v)} placeholder="Ej: Calculadora de precios..." />
      </CardShell>
    );

    if (s === "trans-c") return <CardShell><div style={{ textAlign: "center", padding: "40px 0" }}><div style={{ fontSize: 64, marginBottom: 16 }}>🔥</div><h2 style={{ fontSize: 26, fontWeight: 700, color: "#f0f1f3", margin: "0 0 12px", fontFamily: "var(--font-space-grotesk)" }}>Genial, estructura clara</h2><p style={{ fontSize: 17, color: "#8a8f98" }}>Ahora la parte visual — aquí tu web cobra personalidad.</p></div></CardShell>;

    if (s === "c1") return (
      <CardShell title="¿Tienes logo?" sectionIcon="🎨">
        <SingleSelect options={[
          { value: "si_listo", label: "Sí, lo tengo listo", icon: "✅" },
          { value: "si_mejorar", label: "Sí, pero necesita mejoras", icon: "🎨" },
          { value: "no_necesito", label: "No tengo, necesito uno", icon: "❌" },
          { value: "no_ahora", label: "No tengo y no lo necesito ahora", icon: "⏳" },
        ]} value={data.logo} onChange={v => set("logo")(v)} required />
        {(data.logo === "si_listo" || data.logo === "si_mejorar") && (
          <p style={{ fontSize: 14, color: "#00e5a0", background: "rgba(0,229,160,0.06)", padding: "14px 18px", borderRadius: 12, border: "1px solid rgba(0,229,160,0.15)", margin: 0 }}>📎 Podrás enviarnos el logo por email o WhatsApp después.</p>
        )}
      </CardShell>
    );
    if (s === "c3") return (
      <CardShell title="¿Tienes colores de marca?" sectionIcon="🎨">
        <SingleSelect options={[
          { value: "si_codigos", label: "Sí, tengo colores específicos", icon: "✅" },
          { value: "preferencias", label: "Tengo preferencias pero no exactos", icon: "🎨" },
          { value: "no", label: "No tengo, me fío de vosotros", icon: "🤷" },
        ]} value={data.colores} onChange={v => set("colores")(v)} required />
        {(data.colores === "si_codigos" || data.colores === "preferencias") && (
          <TextInput label="Indícanos tus colores" value={data.codigosColor} onChange={v => set("codigosColor")(v)} placeholder='Ej: Azul oscuro (#1a365d), dorado, blanco' />
        )}
      </CardShell>
    );
    if (s === "c5") return <CardShell title="¿Qué estilo visual te atrae más?" sectionIcon="✨"><SingleSelect options={STYLE_OPTIONS} value={data.estilo} onChange={v => set("estilo")(v)} required /></CardShell>;
    if (s === "c6-c7") return (
      <CardShell title="Inspiración y preferencias" sectionIcon="💡">
        <TextArea label="Webs que te gusten (de cualquier sector)" value={data.websReferencia} onChange={v => set("websReferencia")(v)} placeholder="Pega 2-3 enlaces y dinos qué te gusta de cada una" rows={3} />
        <TextArea label="¿Algo que NO quieras en tu web?" value={data.noQuiero} onChange={v => set("noQuiero")(v)} placeholder="Ej: No quiero colores oscuros, no me gustan muchas animaciones..." rows={2} />
      </CardShell>
    );

    if (s === "trans-d") return <CardShell><div style={{ textAlign: "center", padding: "40px 0" }}><div style={{ fontSize: 64, marginBottom: 16 }}>💪</div><h2 style={{ fontSize: 26, fontWeight: 700, color: "#f0f1f3", margin: "0 0 12px", fontFamily: "var(--font-space-grotesk)" }}>¡Ya casi estamos!</h2><p style={{ fontSize: 17, color: "#8a8f98" }}>Última parte: el contenido.</p></div></CardShell>;

    if (s === "d1") return (
      <CardShell title="¿Quién escribirá los textos?" sectionIcon="✍️">
        <SingleSelect options={[
          { value: "yo", label: "Yo los proporciono", desc: "Tengo los textos listos o casi", icon: "✍️" },
          { value: "mc", label: "Que M&C los redacte", desc: "Con IA + revisión profesional", icon: "🤖" },
          { value: "mixto", label: "Un poco de cada", desc: "Yo doy la base, vosotros la mejoráis", icon: "🤝" },
        ]} value={data.textos} onChange={v => set("textos")(v)} required />
      </CardShell>
    );
    if (s === "d2") return <CardShell title="Cuéntanos sobre tu negocio" sectionIcon="💬" subtitle="Escribe como si se lo explicaras a un amigo."><TextArea label="¿Qué haces? ¿Qué te hace diferente?" value={data.descripcionNegocio} onChange={v => set("descripcionNegocio")(v)} placeholder="¿Por qué un cliente te elegiría a ti?" required rows={4} /></CardShell>;
    if (s === "d3") return <CardShell title="Tus servicios o productos" sectionIcon="📋"><TextArea label="Lista tus servicios o productos principales" value={data.servicios} onChange={v => set("servicios")(v)} placeholder={"Ej:\n1. Corte de pelo — 15€\n2. Tinte — desde 35€"} required helper="Incluye precios si quieres que aparezcan." rows={5} /></CardShell>;
    if (s === "d4") return (
      <CardShell title="Material visual" sectionIcon="📸">
        <SingleSelect label="¿Tienes fotos?" options={[
          { value: "buenas", label: "Sí, tengo fotos buenas", icon: "📸" },
          { value: "movil", label: "Tengo fotos de móvil", icon: "📱" },
          { value: "stock", label: "No tengo fotos", icon: "🖼️" },
          { value: "videos", label: "Tengo fotos + vídeos", icon: "🎥" },
        ]} value={data.fotos} onChange={v => set("fotos")(v)} required />
        {data.fotos && data.fotos !== "stock" && (
          <p style={{ fontSize: 14, color: "#00e5a0", background: "rgba(0,229,160,0.06)", padding: "14px 18px", borderRadius: 12, border: "1px solid rgba(0,229,160,0.15)", margin: 0 }}>📎 Podrás enviarnos las fotos después.</p>
        )}
      </CardShell>
    );
    if (s === "d6-d7") return (
      <CardShell title="Testimonios y datos de contacto" sectionIcon="⭐">
        <TextArea label="Testimonios de clientes (si tienes)" value={data.testimonios} onChange={v => set("testimonios")(v)} placeholder={'"100% recomendable." — Laura M.'} rows={3} />
        <TextArea label="Horario y datos para la web" value={data.horario} onChange={v => set("horario")(v)} placeholder={"L-V: 9:00-20:00 / S: 10:00-14:00\nDirección: Calle Mayor 15, Valencia"} rows={3} />
      </CardShell>
    );

    if (s === "trans-e") return <CardShell><div style={{ textAlign: "center", padding: "40px 0" }}><div style={{ fontSize: 64, marginBottom: 16 }}>⚡</div><h2 style={{ fontSize: 26, fontWeight: 700, color: "#f0f1f3", margin: "0 0 12px", fontFamily: "var(--font-space-grotesk)" }}>¡Última sección!</h2><p style={{ fontSize: 17, color: "#8a8f98" }}>Solo unos detalles logísticos.</p></div></CardShell>;

    if (s === "e1") return (
      <CardShell title="¿Tienes dominio?" sectionIcon="🌐" subtitle="El dominio es tu dirección web (ej: tunegocio.com)">
        <SingleSelect options={[
          { value: "si", label: "Sí, ya tengo mi dominio", icon: "✅" },
          { value: "noseguro", label: "No estoy seguro/a", icon: "🤔" },
          { value: "no", label: "No, necesito uno", icon: "❌" },
        ]} value={data.dominio} onChange={v => set("dominio")(v)} required />
        {data.dominio === "si" && <TextInput label="¿Cuál es tu dominio?" value={data.dominioExistente} onChange={v => set("dominioExistente")(v)} placeholder="tunegocio.com" />}
      </CardShell>
    );
    if (s === "e3") return <CardShell title="¿Para cuándo necesitas la web?" sectionIcon="⏰"><SingleSelect options={URGENCY_OPTIONS} value={data.urgencia} onChange={v => set("urgencia")(v)} required /></CardShell>;
    if (s === "e4") return <CardShell title="¿Qué presupuesto manejas?" sectionIcon="💰" subtitle="Sin compromiso."><SingleSelect options={BUDGET_OPTIONS} value={data.presupuesto} onChange={v => set("presupuesto")(v)} required /></CardShell>;
    if (s === "e5") return <CardShell title="Mantenimiento mensual" sectionIcon="🛡️" subtitle="Hosting, actualizaciones, soporte y backups — 39€/mes."><SingleSelect options={[{ value: "si", label: "Sí, me interesa", icon: "✅" }, { value: "info", label: "Quiero más información", icon: "🤔" }, { value: "no", label: "No, de momento no", icon: "❌" }]} value={data.mantenimiento} onChange={v => set("mantenimiento")(v)} required /></CardShell>;
    if (s === "e6") return <CardShell title="¿Cómo nos conociste?" sectionIcon="📡"><SingleSelect options={HOW_FOUND} value={data.comoNosConocio} onChange={v => set("comoNosConocio")(v)} required /></CardShell>;
    if (s === "e7") return <CardShell title="¿Algo más?" sectionIcon="💬"><TextArea label="Cualquier detalle adicional" value={data.comentarios} onChange={v => set("comentarios")(v)} placeholder="Cualquier cosa que no hayamos cubierto..." rows={4} /></CardShell>;

    if (s === "review") return (
      <CardShell title="Resumen de tu briefing" sectionIcon="✅" subtitle="Revisa que todo esté correcto antes de enviar.">
        <div style={{ background: "#0D1E3A", borderRadius: 16, padding: 24, border: "1.5px solid #2a2d37", fontSize: 14, color: "#c5c8ce", lineHeight: 1.8, fontFamily: "var(--font-jetbrains-mono)", maxHeight: 450, overflowY: "auto" }}>
          <div style={{ marginBottom: 20 }}>
            <span style={{ color: "#00e5a0", fontWeight: 700 }}>▸ CLIENTE</span><br />
            {data.nombre} — {data.negocio}<br />{data.sector} · {data.ubicacion}<br />{data.telefono} · {data.email}
          </div>
          <div style={{ marginBottom: 20 }}>
            <span style={{ color: "#00c2ff", fontWeight: 700 }}>▸ PROYECTO</span><br />
            {WEB_TYPES.find(w => w.value === data.tipoWeb)?.label} · {OBJECTIVES.find(o => o.value === data.objetivo)?.label}<br />
            Páginas: {data.paginas.join(", ")}<br />
            {data.funcionalidades.length > 0 && <>Funciones: {data.funcionalidades.join(", ")}<br /></>}
          </div>
          <div style={{ marginBottom: 20 }}>
            <span style={{ color: "#e5a000", fontWeight: 700 }}>▸ DISEÑO</span><br />
            {STYLE_OPTIONS.find(s => s.value === data.estilo)?.label} · Logo: {data.logo} · Colores: {data.colores}
          </div>
          <div>
            <span style={{ color: "#e55a9b", fontWeight: 700 }}>▸ LOGÍSTICA</span><br />
            {URGENCY_OPTIONS.find(u => u.value === data.urgencia)?.label} · {BUDGET_OPTIONS.find(b => b.value === data.presupuesto)?.label} · Mant: {data.mantenimiento}
          </div>
        </div>
        {sendError && (
          <div style={{ padding: "14px 18px", borderRadius: 12, background: "rgba(229,90,90,0.1)", border: "1px solid rgba(229,90,90,0.3)", color: "#e55a5a", fontSize: 14 }}>
            ⚠️ {sendError}
          </div>
        )}
      </CardShell>
    );

    return null;
  };

  // ─── Success screen ────────────────────────────────────────────────────────

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-space-grotesk)", padding: 24 }}>
        <Script 
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" 
          onLoad={initParticles}
        />
        <div id="particles-js" suppressHydrationWarning style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>
        <div style={{ textAlign: "center", maxWidth: 480 }}>
          <div style={{ fontSize: 80, marginBottom: 20 }}>🎉</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#f0f1f3", margin: "0 0 16px" }}>¡Briefing enviado!</h1>
          <p style={{ fontSize: 17, color: "#8a8f98", lineHeight: 1.6, marginBottom: 36 }}>
            Gracias por confiar en M&C Web Solutions. Te enviaremos una propuesta personalizada en menos de <strong style={{ color: "#00e5a0" }}>24 horas</strong>.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button onClick={copyBriefing} style={{ padding: "16px 28px", borderRadius: 12, border: "1.5px solid #00e5a0", background: "rgba(0,229,160,0.08)", color: "#00e5a0", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-space-grotesk)" }}>
              {copied ? "✓ Copiado" : "📋 Copiar resumen"}
            </button>
            <a href="mailto:mandcwebsolutions@gmail.com" style={{ padding: "16px 28px", borderRadius: 12, border: "1.5px solid #2a2d37", background: "#0D1E3A", color: "#c5c8ce", fontSize: 16, fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-space-grotesk)", display: "block" }}>
              📧 mandcwebsolutions@gmail.com
            </a>
            <a href="/" style={{ padding: "16px 28px", borderRadius: 12, border: "1.5px solid #2a2d37", background: "transparent", color: "#6b7080", fontSize: 15, textDecoration: "none", fontFamily: "var(--font-space-grotesk)", display: "block" }}>
              ← Volver a la web
            </a>
          </div>
          <p style={{ fontSize: 14, color: "#6b7080", marginTop: 32 }}>— Marc & Juan, M&C Web Solutions</p>
        </div>
      </div>
    );
  }

  // ─── Main form ────────────────────────────────────────────────────────────

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }} onKeyDown={handleKeyDown}>
      <Script 
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" 
        onLoad={initParticles}
      />
      <div id="particles-js" suppressHydrationWarning style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>
      <style>{`
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 5px; }
        ::selection { background: rgba(0,229,160,0.25); }
      `}</style>

      {/* Sticky full-width header with high-fidelity centering */}
      <div className="w-full px-8 md:px-16 lg:px-24 py-8 flex items-center justify-between relative z-20" style={{ position: "sticky", top: 0, background: "rgba(10,25,47,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        {/* Left: Logo */}
        <div className="relative z-20 flex-shrink-0">
          <a href="/" style={{ fontSize: 16, fontWeight: 700, color: "#f0f1f3", letterSpacing: 0.5, textDecoration: "none", fontFamily: "var(--font-space-grotesk)" }}>
            M&C<span style={{ color: "#00e5a0" }}>.</span> <span style={{ color: "#8a8f98", fontWeight: 500 }}>Briefing</span>
          </a>
        </div>

        {/* Center: Progress & Category Pills */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-full max-w-sm md:max-w-md lg:max-w-lg">
          <div className="w-full mb-2">
            <ProgressBar current={step} total={totalSteps} />
          </div>
          <div className="hidden md:flex gap-3 overflow-x-auto no-scrollbar scroll-smooth" style={{ scrollbarWidth: "none" }}>
            {SECTIONS.map((sec) => {
              const secSteps = STEPS.filter(st => st.section === sec.id);
              const firstIdx = STEPS.indexOf(secSteps[0]);
              const lastIdx = STEPS.indexOf(secSteps[secSteps.length - 1]);
              const isActive = step >= firstIdx && step <= lastIdx;
              const isDone = step > lastIdx;
              return (
                <span key={sec.id} style={{ fontSize: 10, padding: "5px 10px", borderRadius: 15, whiteSpace: "nowrap", background: isActive ? "rgba(0,229,160,0.15)" : isDone ? "rgba(0,229,160,0.08)" : "rgba(255,255,255,0.03)", color: isActive ? "#00e5a0" : isDone ? "#4a6a5a" : "#4a4d57", border: `1px solid ${isActive ? "rgba(0,229,160,0.3)" : "rgba(255,255,255,0.05)"}`, fontFamily: "var(--font-jetbrains-mono)", fontWeight: 600, transition: "all 0.3s" }}>
                  {sec.icon} {sec.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Right: Step Counter */}
        <div className="relative z-20 flex-shrink-0">
          <span style={{ fontSize: 12, color: "#6b7080", fontFamily: "var(--font-jetbrains-mono)", background: "rgba(255,255,255,0.05)", padding: "6px 12px", borderRadius: 8 }}>
            Paso {step + 1} de {STEPS.length}
          </span>
        </div>
      </div>

      {/* Scroll anchor */}
      <div ref={topRef} />

      {/* Content wrapper with vertical centering */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "40px 20px 160px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", width: "100%" }}>
          {renderStep()}
        </div>
      </div>

      {/* Fixed bottom nav */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 10, background: "rgba(10,25,47,0.95)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", gap: 16, alignItems: "center" }}>
          {step > 0 && (
            <button onClick={prev} style={{ padding: "16px 20px", borderRadius: 12, border: "1.5px solid #2a2d37", background: "#0D1E3A", color: "#c5c8ce", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-space-grotesk)", flexShrink: 0, transition: "all 0.2s" }}>←</button>
          )}
          {current.id === "review" ? (
            <button onClick={handleSubmit} disabled={sending} style={{ flex: 1, padding: "18px 24px", borderRadius: 12, border: "none", background: sending ? "#2a2d37" : "linear-gradient(135deg, #00e5a0, #00c2ff)", color: sending ? "#8a8f98" : "#0A192F", fontSize: 17, fontWeight: 700, cursor: sending ? "wait" : "pointer", fontFamily: "var(--font-space-grotesk)", boxShadow: "0 10px 20px rgba(0,229,160,0.2)" }}>
              {sending ? "⏳ Enviando..." : "Enviar Briefing 🚀"}
            </button>
          ) : (
            <button onClick={next} disabled={!canNext()} style={{ flex: 1, padding: "18px 24px", borderRadius: 12, border: "none", background: canNext() ? "linear-gradient(135deg, #00e5a0, #00c2ff)" : "rgba(255,255,255,0.05)", color: canNext() ? "#0A192F" : "rgba(255,255,255,0.2)", fontSize: 17, fontWeight: 700, cursor: canNext() ? "pointer" : "not-allowed", fontFamily: "var(--font-space-grotesk)", transition: "all 0.3s" }}>
              {step === 0 ? "Empezar →" : "Siguiente →"}
            </button>
          )}
        </div>
        {step > 0 && current.id !== "review" && canNext() && (
          <p style={{ textAlign: "center", fontSize: 12, color: "#4a4d57", marginTop: 12, fontFamily: "var(--font-jetbrains-mono)" }}>Pulsa Enter ↵ para continuar</p>
        )}
      </div>
    </div>
  );
}
