import { useMemo, useState, useEffect } from "react";

function parseDateSafe(iso: string): number {
  // 1) tenta usar o parser nativo
  const n = Date.parse(iso);
  if (!Number.isNaN(n)) return n;

  // 2) fallback: troca - por / e remove o T
  return new Date(iso.replace(/-/g, "/").replace("T", " ")).getTime();
}

export function useCountdown(targetIso: string) {
  const target = useMemo(() => parseDateSafe(targetIso), [targetIso]);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const sec = Math.floor(diff / 1000);

  return {
    days: Math.floor(sec / 86400),
    hours: Math.floor((sec % 86400) / 3600),
    minutes: Math.floor((sec % 3600) / 60),
    seconds: sec % 60,
  };
}
