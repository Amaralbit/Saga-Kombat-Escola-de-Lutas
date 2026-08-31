'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight, AtSign, Check, ChevronDown, Clock3, MapPin, Menu, ShieldCheck, X } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5562981507475?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20as%20aulas%20na%20Saga%20Kombat!';

const modalities = [
  ['01', 'Kickboxing', 'Ritmo, potência e técnica para você evoluir golpe a golpe.', 'STRIKING'],
  ['02', 'Muay Thai', 'A arte das oito armas, com treino intenso e comunidade forte.', 'TRADIÇÃO'],
  ['03', 'Karatê', 'Disciplina, respeito e precisão em cada movimento.', 'FOCO'],
  ['04', 'Boxe', 'Base, esquiva, velocidade e condicionamento de verdade.', 'TÉCNICA'],
  ['05', 'Jiu-Jitsu', 'Controle, estratégia e confiança também no chão.', 'GRAPPLING'],
];

const schedule: [string, [string, string, string][]][] = [
  ['Kickboxing', [
    ['12:15', 'SEG. QUA. SEX.', 'Prof. Dhalsim'],
    ['19:15', 'TER. QUI.', 'Prof. Dhalsim'],
  ]],
  ['Muaythai', [
    ['07:10', 'SEG. QUA. SEX.', 'Prof. Lucas'],
    ['17:00', 'SEG. QUA. SEX.', 'Prof. Lucas'],
    ['18:20', 'TER. QUI.', 'Prof. Lucas'],
    ['19:10', 'SEG. QUA. SEX.', 'Prof. Dhalsim'],
    ['20:10', 'TER. QUI.', 'Prof. Lucas'],
  ]],
  ['Muaythai Kids', [
    ['09:30', 'TER. QUI.', 'Prof. Dhalsim'],
    ['16:45', 'TER. QUI.', 'Prof. Lucas'],
    ['17:30', 'SEG. QUA. SEX.', 'Prof. Hortência'],
    ['19:10', 'SEG. QUA.', 'Prof. Lucas'],
  ]],
  ['Boxe', [
    ['18:20', 'SEG. QUA. SEX.', 'Prof. Dhalsim'],
    ['19:10', 'TER. QUI.', 'Prof. Zangão'],
    ['20:10', 'SEG. QUA.', 'Prof. Zangão'],
  ]],
  ['Crossfighting', [
    ['09:30', 'TER. QUI.', 'Prof. Dhalsim'],
    ['16:15', 'TER. QUI.', 'Prof. Dhalsim'],
  ]],
  ['Karatê Kids', [
    ['17:30', 'TER. QUI.', 'Sensei Welber'],
    ['18:20', 'TER. QUI.', 'Sensei Welber'],
  ]],
  ['Jiu Jitsu', [
    ['20:15', 'SEG. QUA. SEX.', 'Prof. Márcio'],
  ]],
  ['Jiu Jitsu Kids', [
    ['18:20', 'SEG. QUA.', 'Prof. Edyvan'],
    ['17:30', 'TER. QUI.', 'Prof. Eduardo'],
  ]],
  ['Jiu Jitsu No Gi', [
    ['11:00', 'TER. QUI.', 'Prof. Márcio'],
  ]],
];

const scheduleRules = [
  ['SEJA PONTUAL', 'Não permitimos atrasos além de cinco minutos.'],
  ['NÃO ESQUEÇA', 'Sua garrafa de água.'],
  ['OBRIGATÓRIO', 'O uso do material individual de treino em cada modalidade.'],
  ['MANTENHA', 'Seu material em bom estado.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const header = document.querySelector('.site-header');
    const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const revealTargets = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );
    revealTargets.forEach((el) => io.observe(el));

    const onButtonMove = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', `${e.clientX - r.left}px`);
      btn.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    const buttons = document.querySelectorAll<HTMLElement>('.button');
    buttons.forEach((btn) => btn.addEventListener('mousemove', onButtonMove));

    const heroVisual = document.querySelector<HTMLElement>('.hero-visual');
    const rings = document.querySelector<HTMLElement>('.hero-rings');
    const stamp = document.querySelector<HTMLElement>('.hero-stamp');
    const onHeroMove = (e: MouseEvent) => {
      if (!heroVisual || !rings || !stamp) return;
      const r = heroVisual.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      rings.style.transform = `translate(calc(-50% + ${px * 22}px), calc(-50% + ${py * 22}px))`;
      stamp.style.transform = `rotate(14deg) translate(${px * -14}px, ${py * -14}px)`;
    };
    const onHeroLeave = () => {
      if (!rings || !stamp) return;
      rings.style.transform = 'translate(-50%, -50%)';
      stamp.style.transform = 'rotate(14deg)';
    };
    if (heroVisual && window.matchMedia('(min-width: 861px)').matches) {
      heroVisual.addEventListener('mousemove', onHeroMove);
      heroVisual.addEventListener('mouseleave', onHeroLeave);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
      buttons.forEach((btn) => btn.removeEventListener('mousemove', onButtonMove));
      heroVisual?.removeEventListener('mousemove', onHeroMove);
      heroVisual?.removeEventListener('mouseleave', onHeroLeave);
    };
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Saga Kombat - Início"><span className="brand-mark"><span>SK</span></span><span className="brand-copy"><b>SAGA</b><em>KOMBAT</em></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        <nav className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'}>
          <a href="#modalidades" onClick={closeMenu}>Modalidades</a><a href="#horarios" onClick={closeMenu}>Horários</a><a href="#escola" onClick={closeMenu}>A escola</a><a href="#localizacao" onClick={closeMenu}>Localização</a>
          <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Fale com a gente <ArrowDownRight size={16} /></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> ESCOLA DE LUTAS · DESDE 2009</p>
          <h1>FORJE A SUA<br /><i>MELHOR VERSÃO.</i></h1>
          <p className="hero-text">Aqui você não vem só treinar. Vem descobrir força, disciplina e uma equipe que luta junto com você.</p>
          <div className="hero-actions"><a className="button button-gold" href="https://www.instagram.com/sagakombat/" target="_blank" rel="noreferrer">QUERO FAZER UMA AULA <ArrowDownRight size={19} /></a><a className="text-link" href="#modalidades">CONHEÇA AS LUTAS <ArrowDownRight size={17} /></a></div>
        </div>
        <div className="hero-visual" aria-label="Treino de luta na Saga Kombat"><div className="hero-photo" /><div className="hero-photo-overlay" /><div className="hero-rings" aria-hidden="true"><span /><span /><span /></div><div className="hero-stamp"><span>2009</span><b>SAGA<br />KOMBAT</b><span>TEAM</span></div><div className="punch-label"><span className="pulse-dot" /> TREINO. FOCO. EVOLUÇÃO.</div></div>
        <a className="scroll-cue" href="#modalidades"><span>ROLE PARA LUTAR</span><ChevronDown size={20} /></a>
      </section>

      <section className="marquee" aria-label="Modalidades disponíveis"><div>MUAY THAI <i>✦</i> BOXE <i>✦</i> JIU-JITSU <i>✦</i> KARATÊ <i>✦</i> KICKBOXING <i>✦</i> MUAY THAI <i>✦</i> BOXE <i>✦</i> JIU-JITSU <i>✦</i></div></section>

      <section className="section modalities" id="modalidades">
        <div className="section-heading" data-reveal><p className="eyebrow gold"><span /> ENCONTRE O SEU ESTILO</p><h2>CADA LUTA<br />UMA <i>JORNADA.</i></h2><p>Do primeiro treino ao próximo desafio, temos uma modalidade e uma turma prontas para receber você.</p></div>
        <div className="modality-list">{modalities.map(([number, name, description, tag], i) => <article className="modality" data-reveal style={{ '--d': i } as React.CSSProperties} key={name}><span className="modality-number">{number}</span><div><h3>{name}</h3><p>{description}</p></div><span className="modality-tag">{tag}</span><ArrowDownRight className="modality-arrow" size={25} /></article>)}</div>
      </section>

      <section className="schedule section" id="horarios">
        <div className="schedule-heading" data-reveal><p className="eyebrow"><span /> ORGANIZE SEU TREINO</p><h2>HORÁRIO<br />DE <i>AULAS.</i></h2><p>Turmas de segunda a sexta, de manhã à noite. Encontre o horário que encaixa na sua rotina.</p></div>
        <div className="schedule-table-wrap" data-reveal style={{ '--d': 1 } as React.CSSProperties}>
          <div className="schedule-table">
            {schedule.map(([name, slots]) => (
              <div className="schedule-col" key={name}>
                <h3>{name}</h3>
                {slots.map(([time, days, teacher]) => (
                  <div className="schedule-slot" key={time + days}>
                    <span className="slot-time">{time}</span>
                    <span className="slot-days">{days}</span>
                    <span className="slot-teacher">{teacher}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="schedule-scroll-hint">◄ ARRASTE PARA O LADO PARA VER TODAS AS TURMAS ►</p>
        <ul className="schedule-rules" data-reveal style={{ '--d': 2 } as React.CSSProperties}>
          {scheduleRules.map(([title, text]) => <li key={title}><b>{title}</b><span>{text}</span></li>)}
        </ul>
      </section>

      <section className="school" id="escola">
        <div className="school-image school-image-a" data-reveal><div className="photo-caption">UMA EQUIPE,<br />UM PROPÓSITO.</div></div>
        <div className="school-copy" data-reveal style={{ '--d': 1 } as React.CSSProperties}><p className="eyebrow gold"><span /> MAIS QUE UMA ACADEMIA</p><h2>NOSSA ARENA É<br />O SEU <i>LUGAR.</i></h2><p>Na Saga Kombat, cada aula é construída para respeitar seu ritmo e levar você além. Aqui, crianças, iniciantes e atletas encontram um espaço de pertencimento.</p><ul><li><Check size={17} /> Turmas para crianças, jovens e adultos</li><li><Check size={17} /> Professores preparados para sua evolução</li><li><Check size={17} /> Ambiente seguro, acolhedor e desafiador</li></ul><a className="button button-outline" href="https://www.instagram.com/sagakombat/" target="_blank" rel="noreferrer">VER NOSSA COMUNIDADE <AtSign size={18} /></a></div>
        <div className="school-image school-image-b" data-reveal style={{ '--d': 2 } as React.CSSProperties} />
      </section>

      <section className="training-band" data-reveal><div className="training-text"><p className="eyebrow"><span /> PRONTO PARA COMEÇAR?</p><h2>SEU PRIMEIRO<br /><i>ROUND</i> COMEÇA AQUI.</h2></div><div className="training-card"><ShieldCheck size={30} /><p>Não importa o seu nível.<br /><strong>Importa dar o primeiro passo.</strong></p><a href="https://www.instagram.com/sagakombat/" target="_blank" rel="noreferrer">AGENDAR AULA <ArrowDownRight size={20} /></a></div></section>

      <section className="section location" id="localizacao">
        <div className="location-intro" data-reveal><p className="eyebrow gold"><span /> VENHA CONHECER</p><h2>O SEU NOVO<br /><i>DOJÔ.</i></h2><p>Estamos em Goiânia, prontos para receber você no tatame, no ringue e na nossa comunidade.</p><div className="location-info"><MapPin size={21} /><span><b>Saga Kombat Escola de Lutas</b><br />Goiânia · Goiás</span></div><div className="location-info"><Clock3 size={21} /><span><b>Fale com a equipe</b><br />para conferir os horários das turmas.</span></div><a className="text-link dark-link" href="https://www.google.com/maps/place/Saga+Kombat+Escola+de+Lutas/@-16.7363462,-49.2726967,794m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935ef1677b607aeb:0xd920d795a397253e!8m2!3d-16.7363462!4d-49.2726967!16s%2Fg%2F11fd_x6jdd?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">ABRIR NO GOOGLE MAPS <ArrowDownRight size={17} /></a></div>
        <div className="map-wrap" data-reveal style={{ '--d': 1 } as React.CSSProperties}><iframe title="Mapa da Saga Kombat Escola de Lutas" src="https://www.google.com/maps?q=Saga+Kombat+Escola+de+Lutas,+Av.+Feira+de+Santana,+1635,+Goi%C3%A2nia+-+GO&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-corner">SAGA<br /><b>KOMBAT</b></div></div>
      </section>

      <footer><div className="footer-brand"><span className="brand-mark"><span>SK</span></span><span className="brand-copy"><b>SAGA</b><em>KOMBAT</em></span></div><p>DISCIPLINA · RESPEITO · EVOLUÇÃO</p><a href="https://www.instagram.com/sagakombat/" target="_blank" rel="noreferrer" aria-label="Instagram Saga Kombat"><AtSign size={20} /></a></footer>

      <a className="whatsapp-fab" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp com a Saga Kombat">
        <span className="wa-label">Fale no WhatsApp</span>
        <span className="wa-circle"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.29 4.93L2 22l5.29-1.38a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.19 8.19 0 0 1-1.26-4.34c0-4.53 3.69-8.22 8.23-8.22 2.2 0 4.26.86 5.82 2.41a8.16 8.16 0 0 1 2.41 5.82c0 4.53-3.69 8.21-8.2 8.21Zm4.51-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.25-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.24-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.19 3.7.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.11-.22-.17-.47-.29Z" /></svg></span>
      </a>
    </main>
  );
}
