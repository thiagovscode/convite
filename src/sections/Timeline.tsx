import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Quote } from "lucide-react";
import { WEDDING, THEME } from "../config";

export const Timeline: React.FC = () => (
  <section id="historia" className="max-w-6xl mx-auto px-4 py-12">
    <div className="text-center mb-8">
      <h2 className="font-serif text-3xl md:text-4xl text-slate-800">Nossa História de Amor</h2>
      <p className="text-slate-500 mt-2">Cada momento nos trouxe até aqui</p>
      <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-rose-200" />
    </div>
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      <div className="space-y-4">
        {WEDDING.historia.map((h, i) => (
          <Card key={i} className={`rounded-2xl ${THEME.cardBorder}`}>
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-full bg-stone-200 flex items-center justify-center">
                  <h.icon className="h-4 w-4 text-stone-700" />
                </div>
                <span className="text-rose-500 font-bold text-lg">{h.ano}</span>
              </div>
              <div className="font-serif text-xl mb-1">{h.titulo}</div>
              <p className="text-slate-600 text-sm">{h.texto}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <div className="overflow-hidden rounded-3xl shadow">
          <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1400" alt="casal" className="w-full h-[420px] object-cover"/>
        </div>
        <Card className={`rounded-2xl ${THEME.cardBorder}`}>
          <CardContent className="p-6">
            <div className="flex items-start gap-3 text-stone-700">
              <Quote className="h-5 w-5 mt-1"/>
              <p className="italic">Marcos 10:9 — “Portanto, o que Deus uniu, ninguém o separe.”</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
