import { useEffect } from 'react';
import {
  ArrowDown,
  Gift,
  LockKeyhole,
  MessageCircle,
  Snowflake,
  Sparkles,
  Star,
  WandSparkles,
} from 'lucide-react';

const copy = {
  headline: 'Uma linha secreta foi aberta entre o nosso Shopping e o Polo Norte.',
  subheadline: 'Experiência exclusiva para quem nos visitou. Comece a conversa com o Elfo e libere o áudio personalizado.',
  footer: 'Suas informações ficam seguras e servem apenas para entregar o seu presente sonoro e futuras novidades do Shopping.',
};

function App() {

  useEffect(() => {
    const scriptId = 'typebot-web-script';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'module';
    script.textContent = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'; Typebot.initStandard({ typebot: 'teste-fluxo-papai-noel-4dr9a55', apiHost: 'https://typeviewer.chavemestragestao.com.br' });`;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="page-shell">
      <div className="snow-layer" aria-hidden="true" />
      <header className="site-header">
        <div className="brand-lockup" aria-label="Gravatai Shopping">
          <img
            src="/images/logo-fb8b9a2f9025f456ed155851ca606692.webp"
            alt="Gravatai Shopping"
            style={{ width: '144px', height: 'auto', display: 'block' }}
          />
        </div>
        <div className="secret-badge"><Sparkles size={14} /> acesso especial</div>
      </header>

      <section className="hero-section" aria-labelledby="main-title">
        <div className="eyebrow"><Star size={13} fill="currentColor" /> mensagem exclusiva do Polo Norte</div>
        <h1 id="main-title">{copy.headline}</h1>
        <p className="hero-subheadline">{copy.subheadline}</p>
        <a className="start-link" href="#chatbot">
          <span>Começar a experiência</span><ArrowDown size={17} />
        </a>
      </section>

      <section className="chatbot-section" id="chatbot" aria-labelledby="chat-title">
        <div className="chatbot-card">
          <div className="card-topline">
            <div className="elf-icon"><WandSparkles size={20} /></div>
            <div>
              <p className="card-kicker">linha direta aberta</p>
              <h2 id="chat-title">Converse com o Elfo</h2>
            </div>
            <span className="online-dot" aria-label="Elfo online" />
          </div>
          <div className="chatbot-frame">
            {/** The Elementor HTML widget target: Typebot standard embed. */}
            {/** @ts-expect-error custom element provided by Typebot */}
            <typebot-standard style={{ width: '100%', height: '600px' }} />
          </div>
          <div className="card-footnote"><MessageCircle size={15} /> Leva menos de 2 minutos · feito para adultos e crianças</div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Garantias da experiência">
        <div><Gift size={19} /><span><strong>Mensagem única</strong><small>feita especialmente para você</small></span></div>
        <div><LockKeyhole size={19} /><span><strong>Dados protegidos</strong><small>guardados no cofre de gelo</small></span></div>
        <div><Snowflake size={19} /><span><strong>Experiência secreta</strong><small>exclusiva para visitantes</small></span></div>
      </section>

      <footer className="site-footer">
        <div className="footer-snowflake"><Snowflake size={22} /></div>
        <p><strong>A magia precisa de cuidado.</strong> {copy.footer}</p>
        <small>Gravataí Shopping · Natal dos Desejos</small>
      </footer>
    </main>
  );
}

export default App;
