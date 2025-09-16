import React from "react";
import { Button } from "../components/ui/Button";
import { Card, CardHeader, CardContent, CardTitle } from "../components/ui/Card";
import { WEDDING, THEME } from "../config";

export const Gifts: React.FC = () => (
  <section id="presentes" className="max-w-6xl mx-auto px-4 py-12">
    <div className="text-center mb-8">
      <h2 className="font-serif text-3xl md:text-4xl text-slate-800">Lista de Presentes</h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-rose-200" />
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {WEDDING.presentes.map((p, i) => (
        <Card key={i} className={`rounded-2xl ${THEME.cardBorder}`}>
          <CardHeader><CardTitle>{p.nome}</CardTitle></CardHeader>
          <CardContent>
            <a className="inline-block" href={p.url} target="_blank" rel="noreferrer">
              <Button className="rounded-2xl">Abrir</Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);
