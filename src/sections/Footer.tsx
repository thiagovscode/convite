import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";
import { WEDDING } from "../config";

export const Footer: React.FC = () => (
  <footer className="bg-stone-900 text-white">
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <div className="mx-auto w-12 h-[2px] bg-white/60 mb-3" />
        <h2 className="font-serif text-3xl md:text-4xl">Obrigado por fazer parte da nossa história!</h2>
        <p className="text-white/80 mt-2">Cada sorriso, abraço e momento compartilhado torna nosso dia ainda mais especial ♥</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="uppercase tracking-wide text-white/80 text-sm mb-3">Contato da Noiva</h3>
          <ul className="space-y-2 text-white">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> {WEDDING.contatos.noiva.telefone}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> {WEDDING.contatos.noiva.email}</li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4"/> {WEDDING.contatos.noiva.instagram}</li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase tracking-wide text-white/80 text-sm mb-3">Contato do Noivo</h3>
          <ul className="space-y-2 text-white">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> {WEDDING.contatos.noivo.telefone}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> {WEDDING.contatos.noivo.email}</li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4"/> {WEDDING.contatos.noivo.instagram}</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-white/90">Compartilhe nossos momentos nas redes sociais:</p>
        <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mt-2">
          <span className="font-semibold">{WEDDING.contatos.hashtag}</span>
        </div>
      </div>
      <div className="border-t border-white/30 mt-10 pt-6 text-center text-white/80 text-sm">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <span>{WEDDING.contatos.rodapeData}</span>
          <span>•</span>
          <span>{WEDDING.contatos.cidade}</span>
        </div>
        <p className="mt-2 italic">“{WEDDING.contatos.frase}”</p>
      </div>
    </div>
  </footer>
);
