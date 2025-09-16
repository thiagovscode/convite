import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import { WEDDING } from "../config";

export const Schedule: React.FC = () => (
  <section id="cronograma" className="max-w-6xl mx-auto px-4 py-12">
    <div className="text-center mb-8">
      <h2 className="font-serif text-3xl md:text-4xl text-slate-800">Cronograma do Dia</h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-rose-200" />
    </div>
    <Card className="rounded-3xl">
      <CardContent className="p-6 md:p-8">
        <ul className="divide-y">
          {WEDDING.cronograma.map((etapa, idx) => (
            <li key={idx} className="flex items-center justify-between gap-4 py-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-stone-200 flex items-center justify-center">
                  <etapa.icon className="h-5 w-5 text-stone-700" />
                </div>
                <span className="font-medium">{etapa.nome}</span>
              </div>
              <span className="text-rose-500 font-semibold">{etapa.horario}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </section>
);
