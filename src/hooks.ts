import { useMemo, useState, useEffect } from "react";

/** Converte strings como 2026-11-28T16:30:00-03:00 em timestamp com fuso correto. */
function toTimestampSafe(iso: string): number {
  if (!iso) return NaN;

  // YYYY-MM-DD[T ]HH:mm[:ss][±HH[:mm]]
  const m = iso.match(
    /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?(?:([+-])(\d{2}):?(\d{2}))?$/
  );
  if (m) {
    const [, y, mo, d, h, mi, s = "00", sign = "+", tzH = "00", tzM = "00"] = m;
    const year = parseInt(y, 10);
    const month = parseInt(mo, 10) - 1;
    const day = parseInt(d, 10);
    const hour = parseInt(h, 10);
    const minute = parseInt(mi, 10);
    const sec = parseInt(s, 10);

    // Se veio offset, converte para UTC manualmente
    const offMin =
      (parseInt(tzH, 10) * 60 + parseInt(tzM, 10)) * (sign === "-" ? -1 : 1);

    const utc = Date.UTC(year, month, day, hour, minute, sec);
    return utc - offMin * 60 * 1000;
  }

  // Fallbacks tolerantes a Safari antigos
  const n1 = Date.parse(iso);
  if (!Number.isNaN(n1)) return n1;

  const n2 = new Date(iso.replace(/-/g, "/").replace("T", " ")).getTime();
  return n2;
}

export function useCountdown(targetIso: string) {
  const target = useMemo(() => toTimestampSafe(targetIso), [targetIso]);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // Se ainda assim não parseou, evita NaN na UI
  if (!Number.isFinite(target)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const diff = Math.max(0, target - now);
  const sec = Math.floor(diff / 1000);

  return {
    days: Math.floor(sec / 86400),
    hours: Math.floor((sec % 86400) / 3600),
    minutes: Math.floor((sec % 3600) / 60),
    seconds: sec % 60,
  };
}
