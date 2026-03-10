{/* HERO */}
  <section style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"120px clamp(20px,5vw,80px) 80px", position:"relative", overflow:"hidden" }}>
    <div style={{ position:"absolute", top:"20%", left:"50%", transform:"translateX(-50%)", width:800, height:800, borderRadius:"50%", background:"radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />
    <div style={{ position:"absolute", inset:0, opacity:0.03, backgroundImage:"linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
    <div style={{ position:"relative", maxWidth:800, margin:"0 auto" }}>
      <div className="fade-up-1" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(0,229,255,0.08)", border:"1px solid rgba(0,229,255,0.2)", borderRadius:100, padding:"6px 16px", marginBottom:32 }}>
        <span style={{ width:8, height:8, borderRadius:"50%", background:"var(--accent)", display:"inline-block", animation:"pulse-glow 2s ease-in-out infinite" }} />
        <span style={{ color:"var(--accent)", fontSize:13, fontWeight:600, letterSpacing:"0.5px" }}>FREE ONLINE TOOLS — NO SIGNUP NEEDED</span>
      </div>
      <h1 className="fade-up-2" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(48px,8vw,88px)", fontWeight:800, lineHeight:1.05, letterSpacing:"-3px", marginBottom:24, color:"var(--text)" }}>
        The tools you need,{" "}
        <span style={{ background:"linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>right now.</span>
      </h1>
      <p className="fade-up-3" style={{ fontSize:"clamp(16px,2.5vw,20px)", color:"var(--text2)", maxWidth:560, margin:"0 auto 48px", lineHeight:1.7, fontWeight:300 }}>
        Fast, reliable developer and productivity tools. No ads, no tracking — just tools that work.
      </p>
      <div className="fade-up-4" style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
        <a href="#tools" style={{ background:"var(--accent)", color:"#000", padding:"14px 32px", borderRadius:100, fontWeight:700, fontSize:16, textDecoration:"none", boxShadow:"0 0 30px rgba(0,229,255,0.3)" }}>⚡ Explore Tools</a>
        <a href="#features" style={{ background:"transparent", color:"var(--text)", padding:"14px 32px", borderRadius:100, fontWeight:600, fontSize:16, textDecoration:"none", border:"1px solid var(--border2)" }}>Learn More</a>
      </div>
    </div>
    <div className="fade-up-5" style={{ position:"relative", display:"flex", gap:"clamp(24px,5vw,64px)", marginTop:80, flexWrap:"wrap", justifyContent:"center" }}>
      {stats.map(({value,label}) => (
        <div key={label} style={{ textAlign:"center" }}>
          <div style={{ fontFamily:"var(--font-display)", fontSize:"clamp(28px,4vw,40px)", fontWeight:800, color:"var(--text)", letterSpacing:"-1px" }}>{value}</div>
          <div style={{ fontSize:13, color:"var(--text3)", fontWeight:500, marginTop:4, letterSpacing:"0.5px", textTransform:"uppercase" }}>{label}</div>
        </div>
      ))}
    </div>
  </section>

  {/* TOOLS */}
  <section id="tools" style={{ padding:"100px clamp(20px,5vw,80px)", maxWidth:1280, margin:"0 auto" }}>
    <div style={{ textAlign:"center", marginBottom:64 }}>
      <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(32px,5vw,52px)", fontWeight:800, letterSpacing:"-2px", marginBottom:16 }}>Everything you need</h2>
      <p style={{ color:"var(--text2)", fontSize:18, maxWidth:480, margin:"0 auto" }}>Professional-grade tools, completely free. Click any tool to try it live.</p>
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:20 }}>
      {tools.map((tool) => (
        <div key={tool.name} onClick={() => setActiveTool(activeTool===tool.name?null:tool.name)}
          style={{ background:"var(--bg2)", border:`1px solid ${activeTool===tool.name?tool.color+"55":"var(--border)"}`, borderRadius:"var(--radius-lg)", padding:24, cursor:"pointer", transition:"all 0.3s", position:"relative", overflow:"hidden", boxShadow:activeTool===tool.name?`0 8px 40px ${tool.color}22`:"none" }}>
          <div style={{ position:"absolute", top:-20, right:-20, width:100, height:100, borderRadius:"50%", background:`radial-gradient(circle, ${tool.color}15 0%, transparent 70%)`, pointerEvents:"none" }} />
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
            <div style={{ width:52, height:52, borderRadius:14, fontSize:24, display:"flex", alignItems:"center", justifyContent:"center", background:`${tool.color}18`, border:`1px solid ${tool.color}30` }}>{tool.icon}</div>
            <span style={{ fontSize:11, fontWeight:700, color:tool.color, background:`${tool.color}15`, padding:"4px 10px", borderRadius:100, letterSpacing:"0.5px", textTransform:"uppercase" }}>{tool.tag}</span>
          </div>
          <h3 style={{ fontFamily:"var(--font-display)", fontSize:19, fontWeight:700, color:"var(--text)", marginBottom:8 }}>{tool.name}</h3>
          <p style={{ color:"var(--text2)", fontSize:14, lineHeight:1.6, marginBottom:16 }}>{tool.desc}</p>
          <div style={{ color:toolComponents[tool.name]?tool.color:"var(--text3)", fontSize:13, fontWeight:600 }}>
            {toolComponents[tool.name]?(activeTool===tool.name?"▲ Close Tool":"▶ Open Tool"):"Coming Soon"}
          </div>
          {activeTool===tool.name && toolComponents[tool.name] && (
            <div style={{ marginTop:24, paddingTop:24, borderTop:`1px solid ${tool.color}30`, animation:"fadeIn 0.3s ease" }}>
              {toolComponents[tool.name]}
            </div>
          )}
        </div>
      ))}
    </div>
  </section>

  {/* FEATURES */}
  <section id="features" style={{ padding:"100px clamp(20px,5vw,80px)", background:"var(--bg2)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
    <div style={{ maxWidth:1200, margin:"0 auto", textAlign:"center" }}>
      <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(32px,5vw,52px)", fontWeight:800, letterSpacing:"-2px", marginBottom:16 }}>Why StandardsTools?</h2>
      <p style={{ color:"var(--text2)", fontSize:18, maxWidth:440, margin:"0 auto 56px" }}>Built for developers, designers, and everyone in between.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:20 }}>
        {[{icon:"⚡",title:"Blazing Fast",desc:"All tools run locally in your browser — no server round-trips, instant results.",color:"#00e5ff"},{icon:"🔒",title:"100% Private",desc:"Your data never leaves your device. Zero tracking, zero analytics, zero ads.",color:"#7c3aed"},{icon:"🌍",title:"Always Free",desc:"Every tool is completely free. No premium plans, no hidden paywalls.",color:"#10b981"},{icon:"📱",title:"Works Everywhere",desc:"Fully responsive across desktop, tablet, and mobile.",color:"#f59e0b"},{icon:"🛠",title:"50+ Tools",desc:"From JSON formatting to cryptography — we have what you need.",color:"#f43f5e"},{icon:"🚀",title:"No Signup",desc:"Just open and use. No account, no email, no friction.",color:"#8b5cf6"}].map(({icon,title,desc,color}) => (
          <div key={title} style={{ background:"var(--bg)", border:"1px solid var(--border)", borderRadius:"var(--radius-lg)", padding:28, textAlign:"left" }}>
            <div style={{ width:48, height:48, borderRadius:12, fontSize:22, display:"flex", alignItems:"center", justifyContent:"center", background:`${color}15`, marginBottom:18 }}>{icon}</div>
            <h3 style={{ fontFamily:"var(--font-display)", fontSize:18, fontWeight:700, marginBottom:10 }}>{title}</h3>
            <p style={{ color:"var(--text2)", fontSize:14, lineHeight:1.7 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section id="about" style={{ padding:"120px clamp(20px,5vw,80px)", textAlign:"center" }}>
    <div style={{ maxWidth:640, margin:"0 auto" }}>
      <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(36px,6vw,64px)", fontWeight:800, letterSpacing:"-2px", marginBottom:24, lineHeight:1.1 }}>
        Start using tools <span style={{ background:"linear-gradient(135deg, var(--accent), var(--accent2))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>for free</span>
      </h2>
      <p style={{ color:"var(--text2)", fontSize:18, marginBottom:40, lineHeight:1.7 }}>No registration. No payment. No catch. Just open a tool and get to work.</p>
      <a href="#tools" style={{ background:"linear-gradient(135deg, var(--accent), var(--accent2))", color:"#fff", padding:"16px 40px", borderRadius:100, fontWeight:700, fontSize:17, textDecoration:"none", display:"inline-block", boxShadow:"0 0 40px rgba(0,229,255,0.25)" }}>⚡ Try All Tools Free</a>
    </div>
  </section>

  {/* FOOTER */}
  <footer style={{ borderTop:"1px solid var(--border)", padding:"40px clamp(20px,5vw,80px)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:20, maxWidth:1280, margin:"0 auto" }}>
    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
      <div style={{ width:30, height:30, borderRadius:8, background:"linear-gradient(135deg, var(--accent), var(--accent2))", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}>⚙</div>
      <span style={{ fontFamily:"var(--font-display)", fontWeight:700, color:"var(--text)" }}>StandardsTools</span>
    </div>
    <div style={{ color:"var(--text3)", fontSize:13 }}>© {new Date().getFullYear()} StandardsTools. Free forever.</div>
    <div style={{ display:"flex", gap:24 }}>
      {["Tools","Privacy","Contact"].map(l => (
        <a key={l} href="#" style={{ color:"var(--text3)", fontSize:13, textDecoration:"none" }}>{l}</a>
      ))}
    </div>
  </footer>
</div>
