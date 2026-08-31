'use client';

import { useState } from 'react';
import { ArrowDownRight, AtSign, Check, ChevronDown, Clock3, MapPin, Menu, ShieldCheck, X } from 'lucide-react';

const modalities = [
  ['01', 'Kickboxing', 'Ritmo, potência e técnica para você evoluir golpe a golpe.', 'STRIKING'],
  ['02', 'Muay Thai', 'A arte das oito armas, com treino intenso e comunidade forte.', 'TRADIÇÃO'],
  ['03', 'Karatê', 'Disciplina, respeito e precisão em cada movimento.', 'FOCO'],
  ['04', 'Boxe', 'Base, esquiva, velocidade e condicionamento de verdade.', 'TÉCNICA'],
  ['05', 'Jiu-Jitsu', 'Controle, estratégia e confiança também no chão.', 'GRAPPLING'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Saga Kombat - Início"><span className="brand-mark"><span>SK</span></span><span className="brand-copy"><b>SAGA</b><em>KOMBAT</em></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        <nav className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'}>
          <a href="#modalidades" onClick={closeMenu}>Modalidades</a><a href="#escola" onClick={closeMenu}>A escola</a><a href="#localizacao" onClick={closeMenu}>Localização</a>
          <a className="nav-cta" href="https://www.instagram.com/sagakombat/" target="_blank" rel="noreferrer" onClick={closeMenu}>Fale com a gente <ArrowDownRight size={16} /></a>
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
        <div className="section-heading"><p className="eyebrow gold"><span /> ENCONTRE O SEU ESTILO</p><h2>CADA LUTA<br />UMA <i>JORNADA.</i></h2><p>Do primeiro treino ao próximo desafio, temos uma modalidade e uma turma prontas para receber você.</p></div>
        <div className="modality-list">{modalities.map(([number, name, description, tag]) => <article className="modality" key={name}><span className="modality-number">{number}</span><div><h3>{name}</h3><p>{description}</p></div><span className="modality-tag">{tag}</span><ArrowDownRight className="modality-arrow" size={25} /></article>)}</div>
      </section>

      <section className="school" id="escola">
        <div className="school-image school-image-a"><div className="photo-caption">UMA EQUIPE,<br />UM PROPÓSITO.</div></div>
        <div className="school-copy"><p className="eyebrow gold"><span /> MAIS QUE UMA ACADEMIA</p><h2>NOSSA ARENA É<br />O SEU <i>LUGAR.</i></h2><p>Na Saga Kombat, cada aula é construída para respeitar seu ritmo e levar você além. Aqui, crianças, iniciantes e atletas encontram um espaço de pertencimento.</p><ul><li><Check size={17} /> Turmas para crianças, jovens e adultos</li><li><Check size={17} /> Professores preparados para sua evolução</li><li><Check size={17} /> Ambiente seguro, acolhedor e desafiador</li></ul><a className="button button-outline" href="https://www.instagram.com/sagakombat/" target="_blank" rel="noreferrer">VER NOSSA COMUNIDADE <AtSign size={18} /></a></div>
        <div className="school-image school-image-b" />
      </section>

      <section className="training-band"><div className="training-text"><p className="eyebrow"><span /> PRONTO PARA COMEÇAR?</p><h2>SEU PRIMEIRO<br /><i>ROUND</i> COMEÇA AQUI.</h2></div><div className="training-card"><ShieldCheck size={30} /><p>Não importa o seu nível.<br /><strong>Importa dar o primeiro passo.</strong></p><a href="https://www.instagram.com/sagakombat/" target="_blank" rel="noreferrer">AGENDAR AULA <ArrowDownRight size={20} /></a></div></section>

      <section className="section location" id="localizacao">
        <div className="location-intro"><p className="eyebrow gold"><span /> VENHA CONHECER</p><h2>O SEU NOVO<br /><i>DOJÔ.</i></h2><p>Estamos em Goiânia, prontos para receber você no tatame, no ringue e na nossa comunidade.</p><div className="location-info"><MapPin size={21} /><span><b>Saga Kombat Escola de Lutas</b><br />Goiânia · Goiás</span></div><div className="location-info"><Clock3 size={21} /><span><b>Fale com a equipe</b><br />para conferir os horários das turmas.</span></div><a className="text-link dark-link" href="https://www.google.com/maps/place/Saga+Kombat+Escola+de+Lutas/@-16.7363462,-49.2726967,840m" target="_blank" rel="noreferrer">ABRIR NO GOOGLE MAPS <ArrowDownRight size={17} /></a></div>
        <div className="map-wrap"><iframe title="Mapa da Saga Kombat Escola de Lutas" src="https://www.google.com/maps?q=-16.7363462,-49.2726967&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-corner">SAGA<br /><b>KOMBAT</b></div></div>
      </section>

      <footer><div className="footer-brand"><span className="brand-mark"><span>SK</span></span><span className="brand-copy"><b>SAGA</b><em>KOMBAT</em></span></div><p>DISCIPLINA · RESPEITO · EVOLUÇÃO</p><a href="https://www.instagram.com/sagakombat/" target="_blank" rel="noreferrer" aria-label="Instagram Saga Kombat"><AtSign size={20} /></a></footer>
    </main>
  );
}
