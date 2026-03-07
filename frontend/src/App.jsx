import { useState, useEffect, useRef } from "react";

const API = "http://localhost:3000/api/auth";

async function apiFetch(path, body) {
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });
  return res.json();
}

// ── NutriAi Vegetable Cart Logo SVG ─────────────────────────────────────────
function NutriLogo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="melonGrad" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4aaa4a" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#1a4a1a" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="tg1" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ff8080" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#8b0000" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* Watermelon body */}
      <ellipse cx="60" cy="72" rx="38" ry="24" fill="#2d7a2d"/>
      <ellipse cx="60" cy="72" rx="38" ry="24" fill="url(#melonGrad)"/>
      <path d="M28 66 Q60 58 92 66" stroke="#5acc5a" strokeWidth="2.5" strokeLinecap="round" opacity="0.55"/>
      <path d="M24 73 Q60 65 96 73" stroke="#5acc5a" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      <path d="M27 80 Q60 73 93 80" stroke="#5acc5a" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      {/* Leafy greens left */}
      <path d="M46 62 C42 52 36 44 34 32" stroke="#22a84a" strokeWidth="3" strokeLinecap="round"/>
      <path d="M40 50 C36 44 30 40 26 34" stroke="#22a84a" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M44 55 C40 47 38 38 40 30" stroke="#22a84a" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="33" cy="31" rx="7" ry="3.5" fill="#22a84a" transform="rotate(-30 33 31)"/>
      <ellipse cx="25" cy="33" rx="6" ry="3" fill="#2ecc71" transform="rotate(-50 25 33)"/>
      <ellipse cx="39" cy="29" rx="5" ry="2.5" fill="#22a84a" transform="rotate(-10 39 29)"/>
      {/* Carrot */}
      <path d="M58 60 C57 50 55 38 54 24" stroke="#e67e22" strokeWidth="5" strokeLinecap="round"/>
      <path d="M62 60 C63 50 65 38 66 24" stroke="#e67e22" strokeWidth="5" strokeLinecap="round"/>
      <path d="M55 24 C57 16 63 16 65 24" fill="#e67e22"/>
      <path d="M57 60 Q60 66 63 60" fill="#d35400"/>
      <path d="M56 35 Q62 34 65 36" stroke="#d35400" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
      <path d="M55 44 Q61 43 64 45" stroke="#d35400" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
      <path d="M55 52 Q61 51 64 53" stroke="#d35400" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
      <path d="M60 24 C58 14 52 8 48 6" stroke="#22a84a" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M60 24 C62 12 68 8 72 5" stroke="#22a84a" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M60 24 C60 10 60 6 60 2" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="48" cy="6" rx="5" ry="2.5" fill="#22a84a" transform="rotate(-40 48 6)"/>
      <ellipse cx="72" cy="5" rx="5" ry="2.5" fill="#22a84a" transform="rotate(40 72 5)"/>
      <ellipse cx="60" cy="2" rx="4" ry="2" fill="#2ecc71"/>
      {/* Tomato wheels */}
      <circle cx="36" cy="90" r="13" fill="#c0392b"/>
      <circle cx="36" cy="90" r="13" fill="url(#tg1)"/>
      <circle cx="36" cy="90" r="9" fill="#e74c3c"/>
      <circle cx="36" cy="90" r="5" fill="#c0392b"/>
      <path d="M33 77 C33 73 36 72 38 74" stroke="#22a84a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 77 C37 73 40 72 39 75" stroke="#22a84a" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="84" cy="90" r="13" fill="#c0392b"/>
      <circle cx="84" cy="90" r="13" fill="url(#tg1)"/>
      <circle cx="84" cy="90" r="9" fill="#e74c3c"/>
      <circle cx="84" cy="90" r="5" fill="#c0392b"/>
      <path d="M81 77 C81 73 84 72 86 74" stroke="#22a84a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M84 77 C85 73 88 72 87 75" stroke="#22a84a" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="32" cy="86" r="3" fill="white" opacity="0.12"/>
      <circle cx="80" cy="86" r="3" fill="white" opacity="0.12"/>
    </svg>
  );
}

// ── Brand ─────────────────────────────────────────────────────────────────────
function Brand() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 6 }}>
      <NutriLogo size={42} />
      <span style={{ fontSize: 21, fontWeight: 800, color: "#e8f5e9", fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: "-0.03em" }}>
        Nutri<span style={{ color: "#4ade80" }}>Ai</span>
      </span>
    </div>
  );
}

// ── Input ─────────────────────────────────────────────────────────────────────
function Input({ type = "text", value, onChange, placeholder }) {
  const [show, setShow] = useState(false);
  const [focused, setFocused] = useState(false);
  const isPass = type === "password";
  return (
    <div style={{ position: "relative" }}>
      <input
        type={isPass && !show ? "password" : "text"}
        value={value} onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: "100%", boxSizing: "border-box",
          background: focused ? "rgba(74,222,128,0.05)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${focused ? "rgba(74,222,128,0.35)" : "rgba(255,255,255,0.07)"}`,
          borderRadius: 10, padding: isPass ? "13px 44px 13px 16px" : "13px 16px",
          color: "#d4edda", fontSize: 14, outline: "none", transition: "all 0.2s", fontFamily: "inherit",
        }}
      />
      {isPass && (
        <button type="button" onClick={() => setShow(s => !s)} style={{
          position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
          background: "none", border: "none", cursor: "pointer", color: "#2d4a2d", padding: 0, display: "flex",
        }}>
          {show
            ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            : <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>}
        </button>
      )}
    </div>
  );
}

// ── Button ────────────────────────────────────────────────────────────────────
function Btn({ children, onClick, loading, variant = "primary" }) {
  const base = { width: "100%", padding: "14px", borderRadius: 10, border: "none", fontSize: 14, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", transition: "all 0.2s", fontFamily: "inherit", letterSpacing: "0.02em", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 };
  const s = {
    primary: { ...base, background: loading ? "#1a5a2a" : "linear-gradient(135deg,#4ade80,#22c55e)", color: "#021008", opacity: loading ? 0.75 : 1 },
    secondary: { ...base, background: "rgba(255,255,255,0.03)", color: "#4b6b4b", border: "1px solid rgba(255,255,255,0.07)" },
  };
  return (
    <button onClick={onClick} disabled={loading} style={s[variant]}>
      {loading
        ? <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 1s linear infinite" }}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg>Please wait…</>
        : children}
    </button>
  );
}

// ── Social ─────────────────────────────────────────────────────────────────────
function SocialRow() {
  const s = { flex: 1, padding: "11px 10px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", color: "#5a7a5a", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, fontSize: 12.5, fontWeight: 600, fontFamily: "inherit", transition: "all 0.2s" };
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <button style={s}>
        <svg width="15" height="15" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        Continue with Google
      </button>
      <button style={s}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#8aaa8a"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.29-2.18 3.85.03 3.05 2.67 4.06 2.7 4.07-.03.07-.42 1.44-1.38 2.65M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
        Continue with Apple
      </button>
    </div>
  );
}

function Or() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
      <span style={{ fontSize: 11, color: "#1e3a1e", fontWeight: 600, letterSpacing: "0.07em" }}>OR</span>
      <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
    </div>
  );
}

function Card({ children, title, subtitle }) {
  return (
    <div style={{
      background: "linear-gradient(155deg,rgba(8,18,8,0.97) 0%,rgba(4,12,4,0.99) 100%)",
      border: "1px solid rgba(74,222,128,0.09)", borderRadius: 22, padding: "30px 26px",
      width: "100%", maxWidth: 390,
      boxShadow: "0 24px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(74,222,128,0.03) inset",
    }}>
      <div style={{ textAlign: "center", marginBottom: 22 }}>
        <Brand />
        {title && <h2 style={{ margin: "14px 0 4px", fontSize: 22, fontWeight: 800, color: "#e8f5e9", letterSpacing: "-0.02em", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{title}</h2>}
        {subtitle && <p style={{ margin: 0, fontSize: 12.5, color: "#2d4a2d", lineHeight: 1.55 }}>{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

function LinkBtn({ onClick, children }) {
  return <button onClick={onClick} style={{ background: "none", border: "none", color: "#4ade80", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: "inherit" }}>{children}</button>;
}

function Toast({ msg, type, onClose }) {
  useEffect(() => { if (msg) { const t = setTimeout(onClose, 3500); return () => clearTimeout(t); } }, [msg]);
  if (!msg) return null;
  return (
    <div style={{
      position: "fixed", top: 20, right: 20, zIndex: 9999,
      background: type === "error" ? "rgba(160,30,30,0.97)" : "rgba(22,100,50,0.97)",
      color: "#fff", borderRadius: 12, padding: "12px 18px", fontSize: 13, fontWeight: 500,
      boxShadow: "0 8px 30px rgba(0,0,0,0.5)", maxWidth: 300, animation: "slideIn 0.3s ease",
      fontFamily: "'Plus Jakarta Sans',sans-serif",
    }}>{msg}</div>
  );
}

// ══ SCREENS ══════════════════════════════════════════════════════════════════

function LoginScreen({ onSwitch, onForgot, setToast, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    if (!email || !password) return setToast({ msg: "Please fill all fields", type: "error" });
    setLoading(true);
    const data = await apiFetch("/login", { email, password });
    setLoading(false);
    if (data.success) { setToast({ msg: "Welcome back!", type: "success" }); setUser({ email }); }
    else setToast({ msg: data.msg || data.message || "Login failed", type: "error" });
  };
  return (
    <Card title="Welcome back" subtitle="Sign into your account">
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <SocialRow />
        <Or />
        <Input type="email" value={email} onChange={setEmail} placeholder="Email address" />
        <Input type="password" value={password} onChange={setPassword} placeholder="Password" />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={onForgot} style={{ background: "none", border: "none", color: "#2d4a2d", fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>Forgot password?</button>
        </div>
        <Btn onClick={handle} loading={loading}>
          Login now
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
        </Btn>
        <p style={{ textAlign: "center", fontSize: 13, color: "#1e3a1e", margin: 0 }}>Don't have an account? <LinkBtn onClick={() => onSwitch("signup")}>Create one</LinkBtn></p>
      </div>
    </Card>
  );
}

function SignupScreen({ onSwitch, setToast, onVerify }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    if (!name || !email || !password) return setToast({ msg: "All fields are required", type: "error" });
    setLoading(true);
    const data = await apiFetch("/signup", { name, email, password });
    setLoading(false);
    if (data.success) { setToast({ msg: "Account created! Check your email.", type: "success" }); onVerify(email); }
    else setToast({ msg: data.message || "Signup failed", type: "error" });
  };
  return (
    <Card title="Welcome" subtitle="Create your account now">
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <SocialRow />
        <Or />
        <Input value={name} onChange={setName} placeholder="Full Name" />
        <Input type="email" value={email} onChange={setEmail} placeholder="Email address" />
        <Input type="password" value={password} onChange={setPassword} placeholder="Password" />
        <Btn onClick={handle} loading={loading}>Create account</Btn>
        <p style={{ textAlign: "center", fontSize: 13, color: "#1e3a1e", margin: 0 }}>Already have an account? <LinkBtn onClick={() => onSwitch("login")}>Sign In</LinkBtn></p>
      </div>
    </Card>
  );
}

function VerifyScreen({ email, onSwitch, setToast, setUser }) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const refs = useRef([]);
  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const n = [...code]; n[i] = val; setCode(n);
    if (val && i < 5) refs.current[i + 1]?.focus();
  };
  const handleKey = (i, e) => { if (e.key === "Backspace" && !code[i] && i > 0) refs.current[i - 1]?.focus(); };
  const handle = async () => {
    const c = code.join("");
    if (c.length < 6) return setToast({ msg: "Enter the full 6-digit code", type: "error" });
    setLoading(true);
    const data = await apiFetch("/verify-email", { code: c });
    setLoading(false);
    if (data.success) { setToast({ msg: "Verified! Welcome to NutriAi!", type: "success" }); setUser({ email }); }
    else setToast({ msg: data.message || "Invalid code", type: "error" });
  };
  return (
    <Card title="You're Almost There!" subtitle="We've sent a verification code to your email. Please enter it to continue.">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <p style={{ textAlign: "center", fontSize: 12.5, color: "#2d4a2d", margin: 0 }}>Code sent to <span style={{ color: "#4ade80" }}>{email}</span></p>
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          {code.map((d, i) => (
            <input key={i} ref={el => refs.current[i] = el} maxLength={1} value={d}
              onChange={e => handleChange(i, e.target.value)} onKeyDown={e => handleKey(i, e)}
              style={{
                width: 44, height: 52, textAlign: "center", fontSize: 20, fontWeight: 800,
                background: d ? "rgba(74,222,128,0.08)" : "rgba(255,255,255,0.03)",
                border: `1.5px solid ${d ? "rgba(74,222,128,0.4)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: 10, color: "#d4edda", outline: "none", fontFamily: "inherit", transition: "all 0.15s",
              }}
            />
          ))}
        </div>
        <Btn onClick={handle} loading={loading}>Verify &amp; Continue</Btn>
        <p style={{ textAlign: "center", fontSize: 13, color: "#1e3a1e", margin: 0 }}>Back to <LinkBtn onClick={() => onSwitch("login")}>Sign In</LinkBtn></p>
      </div>
    </Card>
  );
}

function ForgotScreen({ onSwitch, setToast }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const handle = async () => {
    if (!email) return setToast({ msg: "Enter your email", type: "error" });
    setLoading(true);
    const data = await apiFetch("/forgot-password", { email });
    setLoading(false);
    if (data.success) { setSent(true); setToast({ msg: "Reset link sent!", type: "success" }); }
    else setToast({ msg: data.message || "Not found", type: "error" });
  };
  return (
    <Card title="Forgot Password?" subtitle="Enter your email and we'll send a reset link instantly.">
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {sent
          ? <div style={{ textAlign: "center", padding: "14px 0" }}>
              <div style={{ fontSize: 40, marginBottom: 10 }}>📬</div>
              <p style={{ color: "#2d4a2d", fontSize: 13, lineHeight: 1.6 }}>Check <span style={{ color: "#4ade80" }}>{email}</span> for your reset link.</p>
            </div>
          : <Input type="email" value={email} onChange={setEmail} placeholder="Email address" />}
        {!sent && <Btn onClick={handle} loading={loading}>Send Reset Link</Btn>}
        <p style={{ textAlign: "center", fontSize: 13, color: "#1e3a1e", margin: 0 }}>Remembered it? <LinkBtn onClick={() => onSwitch("login")}>Sign In</LinkBtn></p>
      </div>
    </Card>
  );
}

function ResetScreen({ token, onSwitch, setToast }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    if (!password || password !== confirm) return setToast({ msg: "Passwords don't match", type: "error" });
    setLoading(true);
    const res = await fetch(`${API}/reset-password/${token}`, { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include", body: JSON.stringify({ password }) });
    const data = await res.json();
    setLoading(false);
    if (data.success) { setToast({ msg: "Password reset!", type: "success" }); onSwitch("login"); }
    else setToast({ msg: data.msg || "Failed", type: "error" });
  };
  return (
    <Card title="Reset Password" subtitle="Choose a strong new password for your account.">
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Input type="password" value={password} onChange={setPassword} placeholder="New password" />
        <Input type="password" value={confirm} onChange={setConfirm} placeholder="Confirm new password" />
        <Btn onClick={handle} loading={loading}>Reset Password</Btn>
      </div>
    </Card>
  );
}

function Dashboard({ user, onLogout, setToast }) {
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    setLoading(true);
    await fetch(`${API}/logout`, { method: "POST", credentials: "include" });
    setLoading(false);
    setToast({ msg: "Logged out", type: "success" });
    onLogout();
  };
  return (
    <Card title="You're In! 🥗" subtitle="Your nutrition journey starts here.">
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.1)", borderRadius: 12, padding: 18, textAlign: "center" }}>
          <p style={{ color: "#2d4a2d", fontSize: 13, margin: 0 }}>Signed in as <strong style={{ color: "#4ade80" }}>{user?.email}</strong></p>
        </div>
        <Btn onClick={handle} loading={loading} variant="secondary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Sign Out
        </Btn>
      </div>
    </Card>
  );
}

// ── Background ────────────────────────────────────────────────────────────────
function Bg() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "#050d05", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,rgba(74,222,128,0.055) 0%,transparent 70%)", animation: "bgpulse 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "8%", right: "8%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(34,197,94,0.04) 0%,transparent 70%)", animation: "bgpulse 11s ease-in-out infinite 3s" }} />
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03 }}>
        <defs><pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.5" fill="#4ade80"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("login");
  const [toast, setToast] = useState({ msg: "", type: "success" });
  const [user, setUser] = useState(null);
  const [verifyEmail, setVerifyEmail] = useState("");
  const resetToken = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "").get("token");

  useEffect(() => { if (resetToken) setScreen("reset-password"); }, []);

  const handleVerify = (e) => { setVerifyEmail(e); setScreen("verify-email"); };
  const handleUser = (u) => { setUser(u); setScreen("dashboard"); };

  const renderScreen = () => {
    if (user && screen === "dashboard") return <Dashboard user={user} onLogout={() => { setUser(null); setScreen("login"); }} setToast={setToast} />;
    switch (screen) {
      case "signup": return <SignupScreen onSwitch={setScreen} setToast={setToast} onVerify={handleVerify} />;
      case "verify-email": return <VerifyScreen email={verifyEmail} onSwitch={setScreen} setToast={setToast} setUser={handleUser} />;
      case "forgot-password": return <ForgotScreen onSwitch={setScreen} setToast={setToast} />;
      case "reset-password": return <ResetScreen token={resetToken} onSwitch={setScreen} setToast={setToast} />;
      default: return <LoginScreen onSwitch={setScreen} onForgot={() => setScreen("forgot-password")} setToast={setToast} setUser={handleUser} />;
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        body{background:#050d05;}
        @keyframes spin{to{transform:rotate(360deg);}}
        @keyframes bgpulse{0%,100%{opacity:1;}50%{opacity:0.5;}}
        @keyframes slideIn{from{opacity:0;transform:translateX(16px);}to{opacity:1;transform:translateX(0);}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
        input::placeholder{color:#1a2e1a;}
        input:-webkit-autofill{-webkit-box-shadow:0 0 0 30px #060e06 inset !important;-webkit-text-fill-color:#d4edda !important;}
      `}</style>
      <Bg />
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 16px", fontFamily: "'Plus Jakarta Sans',sans-serif", animation: "fadeUp 0.4s ease" }}>
        {renderScreen()}
      </div>
      <Toast msg={toast.msg} type={toast.type} onClose={() => setToast({ msg: "" })} />
    </>
  );
}
