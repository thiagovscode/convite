import React from "react";
import { Button, ButtonOutline } from "../components/ui/Button";
import { WEDDING } from "../config";

export const Location: React.FC = () => (
  <section id="local" className="bg-white/70 border-y">
    <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="font-serif text-3xl mb-4">Como chegar</h2>
        <p className="text-slate-600 mb-2"><strong>{WEDDING.local.nome}</strong></p>
        <p className="text-slate-600 mb-4">{WEDDING.local.endereco}</p>
        <div className="flex gap-3">
          <a href={WEDDING.local.mapsUrl} target="_blank" rel="noreferrer">
            <Button className="rounded-2xl">Abrir no Maps</Button>
          </a>
          <a href={`mailto:?subject=Como chegar ao casamento&body=${encodeURIComponent(WEDDING.local.endereco + " - " + WEDDING.local.mapsUrl)}`}>
            <ButtonOutline className="rounded-2xl">Enviar endereço</ButtonOutline>
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl shadow">
        <iframe title="Mapa do local" className="w-full h-72 md:h-96" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(WEDDING.local.endereco)}&output=embed`} />
      </div>
    </div>
  </section>
);
