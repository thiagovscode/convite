import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { WEDDING, THEME, waLink } from "../config";
import { useCountdown } from "../hooks";

export const Hero: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING.data.iso);
  return (
    <section id="hero" className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-slate-500">Nosso grande dia</p>
        <h1 className="font-serif text-5xl md:text-7xl mt-2">
          {WEDDING.noiva} <span className="text-rose-400">&</span> {WEDDING.noivo}
        </h1>
        <p className="mt-3 text-slate-600">{WEDDING.data.diaSemana}, {WEDDING.data.texto} às {WEDDING.data.horario}</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
          {[{ l: "DIAS", v: days }, { l: "HORAS", v: hours }, { l: "MIN", v: minutes }, { l: "SEG", v: seconds }].map((i) => (
            <Card key={i.l} className={`rounded-2xl ${THEME.cardBorder}`}>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">{String(i.v).padStart(2, "0")}</div>
                <div className="text-[10px] tracking-widest text-slate-500">{i.l}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={waLink(WEDDING.rsvpWhats)} target="_blank" rel="noreferrer">
            <Button className={`${THEME.accentStrong} rounded-2xl`}>
              <MessageCircle className="mr-2 h-4 w-4" /> Confirmar pelo WhatsApp
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
