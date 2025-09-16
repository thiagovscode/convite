import { Users, Calendar, Camera, Gift, Music4, Heart, Star, Clock } from "lucide-react";

export const THEME = {
  bgFrom: "from-stone-50",
  bgTo: "to-white",
  accentStrong: "bg-stone-900 hover:bg-stone-800 text-white",
  cardBorder: "border border-stone-200",
};

export const WEDDING = {
  noiva: "Tainara",
  noivo: "Thiago",
  data: {
    iso: "2025-09-31T16:30:00-03:00",
    texto: "a ser definida",
    horario: "16h30",
    diaSemana: "sábado",
  },
  local: {
    nome: "Espaço Balboa",
    endereco: "Av. Parque Petrópolis, 250 - Roseira, Mairiporã - SP, 07618-568",
    mapsUrl: "https://maps.app.goo.gl/Lg3BKSGiwFDxXBMJ9",
  },
  rsvpWhats: "+55 11 99999-9999",
  dresscode: "Traje: esporte fino (toque em tons claros).",
  presentes: [
    { nome: "Lista na Loja X", url: "https://example.com/lista-loja-x" },
    { nome: "Lista na Loja Y", url: "https://example.com/lista-loja-y" },
    { nome: "Pix", url: "https://example.com/pix-qr-code" },
  ],
  cronograma: [
    { nome: "Chegada dos convidados", horario: "14:30", icon: Users },
    { nome: "Cerimônia", horario: "15:00", icon: Calendar },
    { nome: "Sessão de fotos", horario: "16:00", icon: Camera },
    { nome: "Cocktail de boas-vindas", horario: "17:30", icon: Gift },
    { nome: "Jantar e festa", horario: "19:00", icon: Music4 },
  ],
  historia: [
    { ano: "2023", titulo: "Primeiro Encontro", texto: "Foi o início de uma amizade especial que Deus estava preparando.", icon: Heart },
    { ano: "2023", titulo: "Namoro Oficial", texto: "Com oração e fé, decidimos caminhar juntos segundo a vontade de Deus.", icon: Star },
    { ano: "2025", titulo: "Noivado", texto: "Diante do Senhor, demos mais um passo de compromisso em nossa história.", icon: Heart },
    { ano: "2025", titulo: "Planejamento", texto: "Buscando sabedoria em Deus, planejamos cada detalhe do nosso grande dia.", icon: Calendar },
    { ano: "2026", titulo: "Gratidão", texto: "Agradecemos a Deus por nos conduzir até aqui e por cada pessoa que faz parte dessa jornada.", icon: Clock },
  ],
  contatos: {
    noiva: { telefone: "(11) 99999-1111", email: "tainara@email.com", instagram: "@tainara_noiva" },
    noivo: { telefone: "(11) 99999-2222", email: "thiago@email.com", instagram: "@thiago_noivo" },
    hashtag: "#TainaraEThiago2026",
    cidade: "São Paulo, SP",
    rodapeData: "a ser definida",
    frase: "Quem me dera que se cumprisse o meu desejo, e que Deus me desse o que espero! (Jó 6:8)"
  },
};

export const onlyDigits = (s: string) => (s || "").replace(/\D/g, "");
export const waLink = (raw: string) => `https://wa.me/${onlyDigits(raw)}`;
