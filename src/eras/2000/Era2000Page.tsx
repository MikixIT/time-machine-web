import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function GlitterBar({ text }: { text: string }) {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #ff00cc, #ff6600)',
        color: '#fff',
        padding: '6px 10px',
        fontSize: '13px',
        fontWeight: 'bold',
        textAlign: 'center',
        border: '2px solid #fff',
      }}
    >
      {text}
    </div>
  );
}

function FlashButton({ label }: { label: string }) {
  return (
    <button
      style={{
        background: 'linear-gradient(180deg, #ffcc00, #ff6600)',
        color: '#000',
        border: '2px outset #ff9900',
        padding: '6px 10px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: 'inset 0 0 0 1px #fff',
      }}
    >
      {label}
    </button>
  );
}

export default function Era2000Page() {
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0f2b4e 0%, #1a4c85 100%)',
        color: '#fff8dc',
        fontFamily: 'Verdana, Arial, sans-serif',
        fontSize: '13px',
        lineHeight: 1.4,
        padding: '24px 16px 48px',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          border: '3px groove #ffcc00',
          background: 'rgba(0,0,0,0.6)',
          boxShadow: '0 0 20px rgba(255,102,0,0.35)',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(90deg, #003366, #0066cc)',
            padding: '10px 16px',
            borderBottom: '2px solid #ffcc00',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '24px', color: '#fff' }}>
            Welcome to the New Millennium!
          </h1>
          <p style={{ margin: '4px 0 0', color: '#cfe8ff' }}>
            The year is 2000 and the web is going supernova.
          </p>
        </div>

        <div style={{ padding: '12px' }}>
          <GlitterBar text="★ FLASH ANIMATIONS • SPLASH PAGES • WELCOME BANNERS ★" />

          <div
            style={{
              display: 'grid',
              gap: '12px',
              marginTop: '12px',
              gridTemplateColumns: '1.2fr 0.8fr',
            }}
          >
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              style={{
                background: '#ffffff11',
                padding: '14px',
                border: '1px solid #ffcc00',
              }}
            >
              <h2
                style={{
                  margin: '0 0 8px',
                  color: '#ffcc00',
                  fontSize: '16px',
                }}
              >
                The Dot-Com Dream
              </h2>
              <p style={{ margin: '0 0 10px' }}>
                Every homepage wants to feel bigger, brighter, and more exciting
                than the last. Tables, bright gradients, and animated banners
                are everywhere.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <FlashButton label="Enter Site" />
                <FlashButton label="View Gallery" />
                <FlashButton label="Contact Me" />
              </div>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              style={{
                background: '#ffffff11',
                padding: '14px',
                border: '1px solid #8fd3ff',
              }}
            >
              <h3 style={{ margin: '0 0 8px', color: '#8fd3ff' }}>
                Cool links
              </h3>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                <li>
                  <a href="#" style={{ color: '#8fd3ff' }}>
                    My guestbook
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#8fd3ff' }}>
                    Best sites on the web
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#8fd3ff' }}>
                    Music downloads
                  </a>
                </li>
              </ul>
              <div
                style={{
                  marginTop: '10px',
                  border: '1px dashed #8fd3ff',
                  padding: '8px',
                  fontSize: '12px',
                }}
              >
                You are visitor #0004827
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            style={{
              marginTop: '12px',
              background: '#fff',
              color: '#000',
              padding: '12px',
              border: '2px inset #ccc',
            }}
          >
            <h3 style={{ margin: '0 0 8px', fontSize: '15px' }}>
              About this page
            </h3>
            <p style={{ margin: '0 0 8px' }}>
              This page uses bright colors, animated flair, and a cheerful
              layout that feels like a portal into the early web. It is loud on
              purpose.
            </p>
            <div
              style={{
                background: '#ffff00',
                border: '2px solid #ff0000',
                padding: '6px 8px',
                fontWeight: 'bold',
                display: 'inline-block',
              }}
            >
              UNDER CONSTRUCTION • PLEASE COME BACK LATER
            </div>
          </motion.div>

          <div style={{ marginTop: '12px', textAlign: 'center' }}>
            <button
              onClick={() => navigate('/')}
              style={{
                background: '#000',
                color: '#fff',
                border: '2px solid #fff',
                padding: '8px 12px',
                cursor: 'pointer',
              }}
              aria-label="Return to the time machine console"
            >
              ← Back to Time Machine
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
