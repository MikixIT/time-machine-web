import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function VisitorCounter() {
  return (
    <table
      cellPadding={4}
      cellSpacing={0}
      border={1}
      style={{ borderColor: '#000' }}
      role="presentation"
    >
      <tbody>
        <tr>
          <td
            align="center"
            style={{
              backgroundColor: '#000080',
              color: '#fff',
              fontSize: '11px',
              padding: '2px 8px',
            }}
          >
            You are visitor #
          </td>
        </tr>
        <tr>
          <td align="center" style={{ backgroundColor: '#000000' }}>
            <span
              style={{
                fontFamily: 'monospace',
                color: '#00FF00',
                fontSize: '16px',
                letterSpacing: '3px',
              }}
            >
              0 0 4 2 8 7
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function UnderConstruction() {
  return (
    <div
      style={{
        background: '#FFFF00',
        border: '3px solid #FF0000',
        padding: '4px 12px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '13px',
      }}
      role="img"
      aria-label="Under construction"
    >
      🚧 UNDER CONSTRUCTION 🚧
    </div>
  );
}

function GifPlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        width: '88px',
        height: '31px',
        background:
          'repeating-linear-gradient(45deg, #ccc, #ccc 4px, #999 4px, #999 8px)',
        border: '1px solid #000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '9px',
        color: '#333',
      }}
      aria-label={`${label} GIF placeholder`}
    >
      [{label}]
    </div>
  );
}

function MarqueeText({ text }: { text: string }) {
  return (
    <div
      style={{
        background: '#000080',
        color: '#fff',
        padding: '4px',
        fontSize: '12px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      aria-label={text}
    >
      <motion.div
        animate={{ x: ['100%', '-100%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'inline-block' }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default function Era1995Page() {
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();

  const marqueeText =
    '★ Welcome to my corner of the Information Superhighway! ★';

  return (
    <div
      style={{
        background: '#C0C0C0',
        color: '#000',
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: '14px',
        minHeight: '100vh',
        lineHeight: 1.2,
      }}
    >
      <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#000080', padding: '4px 8px' }}>
              <span style={{ color: '#FFFFFF', fontSize: '18px' }}>
                <b>★ Welcome to My Homepage ★</b>
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table width="760" align="center" cellPadding={4} cellSpacing={0}>
        <tbody>
          <tr>
            <td colSpan={2} align="center" style={{ padding: '8px 0' }}>
              <UnderConstruction />
            </td>
          </tr>

          <tr>
            <td width="200" valign="top">
              <table
                width="100%"
                cellPadding={4}
                cellSpacing={0}
                border={1}
                style={{ borderColor: '#000' }}
              >
                <tbody>
                  <tr>
                    <td style={{ backgroundColor: '#000080' }}>
                      <span style={{ color: '#FFFFFF', fontSize: '13px' }}>
                        <b>Navigation</b>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#home" style={{ color: '#0000EE' }}>
                        Home
                      </a>
                      <br />
                      <a href="#about" style={{ color: '#0000EE' }}>
                        About Me
                      </a>
                      <br />
                      <a href="#links" style={{ color: '#0000EE' }}>
                        Cool Links
                      </a>
                      <br />
                      <a href="#guestbook" style={{ color: '#0000EE' }}>
                        Guestbook
                      </a>
                      <br />
                      <button
                        onClick={() => navigate('/')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#0000EE',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          font: 'inherit',
                          padding: 0,
                        }}
                        aria-label="Return to time machine console"
                      >
                        ← Time Machine
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <br />

              <VisitorCounter />

              <br />
              <br />

              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
              >
                <GifPlaceholder label="NEW!" />
                <GifPlaceholder label="MAIL" />
                <GifPlaceholder label="WEB" />
              </div>
            </td>

            <td valign="top">
              <table
                width="100%"
                cellPadding={8}
                cellSpacing={0}
                border={1}
                style={{ borderColor: '#000' }}
              >
                <tbody>
                  <tr>
                    <td style={{ backgroundColor: '#FFFFFF' }}>
                      <h1 style={{ fontSize: '20px', margin: '0 0 8px' }}>
                        Welcome to the World Wide Web — 1995
                      </h1>

                      {reducedMotion ? (
                        <p
                          style={{
                            background: '#000080',
                            color: '#fff',
                            padding: '4px',
                            fontSize: '12px',
                          }}
                        >
                          {marqueeText}
                        </p>
                      ) : (
                        <MarqueeText text={marqueeText} />
                      )}

                      <hr style={{ border: '1px solid #000' }} />

                      <p>
                        <b>Last updated:</b> January 15, 1995
                      </p>

                      <p>
                        Hi! My name is <b>Webmaster</b> and this is my personal
                        homepage on the <i>Information Superhighway</i>. I made
                        this page using <b>HTML 2.0</b> and a text editor!
                      </p>

                      <p>
                        <img
                          src="data:image/gif;base64,R0lGODlhEAAQAPIAAAAAAP///wAAAMDAwICAgP///wAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAQALAAAAAAQABAAAAMjCLrc/jDKSatlQtScKde7WYDhG51g0mZqJz3q8+0B0eBtgADs="
                          width={16}
                          height={16}
                          alt=""
                          style={{ verticalAlign: 'middle' }}
                        />{' '}
                        This site is best viewed with{' '}
                        <a href="#netscape" style={{ color: '#0000EE' }}>
                          Netscape Navigator
                        </a>{' '}
                        at 800×600 resolution.
                      </p>

                      <hr style={{ border: '1px solid #000' }} />

                      <h2 style={{ fontSize: '16px' }}>About This Era</h2>
                      <p>
                        In 1995, the web was a wild frontier. Pages were built
                        with HTML tables for layout, animated GIFs decorated
                        every corner, and the blink tag was still a thing
                        (somewhere).
                      </p>

                      <table
                        cellPadding={4}
                        cellSpacing={0}
                        border={1}
                        width="100%"
                        style={{ borderColor: '#000' }}
                      >
                        <tbody>
                          <tr style={{ backgroundColor: '#000080' }}>
                            <td>
                              <span style={{ color: '#FFFFFF' }}>
                                <b>Web Stats</b>
                              </span>
                            </td>
                            <td>
                              <span style={{ color: '#FFFFFF' }}>
                                <b>Value</b>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>Websites online</td>
                            <td>~23,500</td>
                          </tr>
                          <tr style={{ backgroundColor: '#E0E0E0' }}>
                            <td>Browsers</td>
                            <td>Netscape, IE 1.0</td>
                          </tr>
                          <tr>
                            <td>HTML Version</td>
                            <td>HTML 2.0</td>
                          </tr>
                          <tr style={{ backgroundColor: '#E0E0E0' }}>
                            <td>CSS Support</td>
                            <td>None</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              <br />

              <table
                width="100%"
                cellPadding={8}
                cellSpacing={0}
                border={1}
                style={{ borderColor: '#000' }}
                id="guestbook"
              >
                <tbody>
                  <tr>
                    <td style={{ backgroundColor: '#000080' }}>
                      <span style={{ color: '#FFFFFF', fontSize: '16px' }}>
                        <b>📝 Sign My Guestbook!</b>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ backgroundColor: '#FFFFFF' }}>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <p>
                          <label>
                            Name:{' '}
                            <input
                              type="text"
                              size={30}
                              style={{ fontFamily: 'inherit' }}
                            />
                          </label>
                        </p>
                        <p>
                          <label>
                            Message: <br />
                            <textarea
                              rows={3}
                              cols={40}
                              style={{ fontFamily: 'inherit' }}
                            />
                          </label>
                        </p>
                        <input type="submit" value="Sign Guestbook" />
                      </form>
                      <hr style={{ border: '1px solid #000' }} />
                      <p>
                        <i>"Cool site! Visit mine at www.geocities.com!"</i> —
                        Anonymous, 1995
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      <table width="100%" cellPadding={4} cellSpacing={0}>
        <tbody>
          <tr>
            <td align="center" style={{ fontSize: '11px' }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                © 1995 Webmaster | Made with ❤️ and HTML |{' '}
                <a href="#email" style={{ color: '#0000EE' }}>
                  Email Me
                </a>
              </motion.div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
