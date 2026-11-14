const pages = ['home','about','work','stack','contact'];
const titles = ['Home','About','Selected work','Stack & focus','Contact'];
const app = document.querySelector('#app');
const body = document.body;
const homeMarkup = app.innerHTML;
let currentPage = 'home';
const intro = (n,k,t,d) => '<div class="page-intro"><div class="page-intro-meta"><span>CHAPTER '+n+'</span><span>'+k+'</span></div><h1>'+t+'</h1><p>'+d+'</p></div>';
const views = {
 home: () => homeMarkup,
 about: () => '<section class="content-page page-enter">'+
  intro('02','THE PERSON BEHIND THE CODE','A little context.<br><em>A lot of curiosity.</em>','I’m a student and developer who learns best by making things, breaking them, and figuring out why they work.')+
  '<div class="about-layout"><div class="about-main"><div class="section-label">01 / MY STORY</div><h2>Not just writing code.<br>Trying to <span>understand it.</span></h2>'+
  '<p>I’m Suryakant Maurya, an IT diploma student at Bhagwan Mahavir University. I’m interested in the ideas behind software — how systems fit together, how products solve everyday problems, and how a few lines of code can become something genuinely useful.</p>'+
  '<p>My approach is hands-on. I explore a concept, build a small experiment around it, and keep refining until the moving parts make sense. That has taken me through web development, backend concepts, algorithms, systems, and developer tooling.</p>'+
  '<p>I’m still early in the journey, and that’s something I value. There’s always another layer to understand and another idea worth trying.</p><button class="text-link" data-go="work">See what I’ve been building ↗</button></div>'+
  '<aside class="about-aside"><div class="profile-card"><div class="profile-monogram">SM<span>.</span></div><div class="profile-card-bottom"><span>THE HUMAN<br>BEHIND THE COMMITS</span><span>STILL LEARNING<br>ALWAYS BUILDING</span></div></div>'+
  '<div class="detail-list"><div><span>NAME</span><strong>Suryakant Maurya</strong></div><div><span>ROLE</span><strong>Student · Developer</strong></div><div><span>EDUCATION</span><strong>IT Diploma, BMU</strong></div><div><span>LOCATION</span><strong>Gujarat, India</strong></div><div><span>APPROACH</span><strong>Learn by making</strong></div></div></aside></div>'+
  '<div class="timeline-section"><div class="section-label">02 / A WORK IN PROGRESS</div><div class="timeline">'+
  '<div class="timeline-item"><span class="timeline-year">FOUNDATIONS</span><div><strong>Learning the fundamentals</strong><p>Building a base in programming, problem solving, and core computer science ideas.</p></div><span class="timeline-state">ONGOING</span></div>'+
  '<div class="timeline-item"><span class="timeline-year">BUILDING</span><div><strong>Turning concepts into projects</strong><p>Experimenting with web apps, backend services, algorithms, and useful tools.</p></div><span class="timeline-state">ONGOING</span></div>'+
  '<div class="timeline-item"><span class="timeline-year">NEXT CHAPTER</span><div><strong>Going deeper into systems</strong><p>Growing stronger with C++, Go, Java, architecture, and engineering practices.</p></div><span class="timeline-state">IN PROGRESS</span></div></div></div></section>',
 work: () => {
  const projects = [
   {id:'01',name:'DevSmith',kind:'Developer tooling',date:'IN PROGRESS',desc:'A lightweight project-intelligence CLI that scans a codebase, detects its stack, and keeps a small context file for future work.',tags:['Node.js','CLI','Project context'],tone:'lime',symbol:'⌘',status:'Building',url:'https://github.com/mauryasuryakant/devsmith'},
   {id:'02',name:'PixelForge',kind:'Image utility',date:'2026',desc:'A browser-first image workspace for format conversion, exact-pixel resizing, and simple editing — processed locally in the browser.',tags:['Vanilla JS','Canvas','Client-side privacy'],tone:'blue',symbol:'▧',status:'Live project',url:'https://github.com/mauryasuryakant/All-image-solutions'},
   {id:'03',name:'System Visualizer',kind:'Learning project',date:'2026',desc:'A lightweight Windows desktop monitor that visualizes per-application CPU and RAM usage, built with C++ and SFML.',tags:['C++','SFML','Windows API'],tone:'orange',symbol:'◈',status:'Exploring',url:'https://github.com/mauryasuryakant/system_visualizer'},
   {id:'04',name:'Algo Visualizer',kind:'Learning project',date:'2026',desc:'A React visualizer that turns sorting algorithms into animated steps, with array generation, algorithm selection, and speed controls.',tags:['React','Algorithms','Animation'],tone:'violet',symbol:'⌁',status:'Learning',url:'https://github.com/mauryasuryakant/algo-visualizer'}
  ];
  return '<section class="content-page page-enter">'+intro('03','SELECTED EXPERIMENTS & BUILDS','Ideas made<br><em>tangible.</em>','A growing collection of projects, experiments, and things I’ve learned by building. Each one is a step forward, not a finished story.')+
   '<div class="work-toolbar"><span>PROJECT INDEX <b>04</b></span><span>PERSONAL BUILDS / LEARNING IN PUBLIC</span></div><div class="project-list">'+
   projects.map(p=>'<article class="project-row accent-'+p.tone+'"><div class="project-number">'+p.id+'</div><div class="project-visual"><div class="project-visual-grid"></div><div class="project-symbol">'+p.symbol+'</div><span class="project-visual-tag">'+p.kind+'</span></div>'+
   '<div class="project-info"><div class="project-meta"><span>'+p.kind.toUpperCase()+'</span><span>'+p.date+'</span></div><h2>'+p.name+'</h2><p>'+p.desc+'</p><div class="project-tags">'+p.tags.map(t=>'<span>'+t+'</span>').join('')+'</div></div>'+
   '<div class="project-action"><span class="project-status"><i></i>'+p.status+'</span><a href="'+p.url+'" target="_blank" rel="noreferrer" aria-label="Open '+p.name+' on GitHub">↗</a></div></article>').join('')+
   '</div><div class="more-work"><div><span class="section-label">MORE IN THE WORKSHOP</span><h3>There’s more on GitHub.</h3><p>Notes, smaller experiments, practice repositories, and the occasional rabbit hole.</p></div><a class="button button-outline" href="https://github.com/mauryasuryakant?tab=repositories" target="_blank" rel="noreferrer">Browse repositories ↗</a></div>'+
   '<div class="next-chapter"><span>UP NEXT</span><button data-go="stack">The tools behind the work →</button></div></section>';
 },
 stack: () => '<section class="content-page page-enter">'+intro('04','TOOLS, TECHNOLOGIES & CURIOSITIES','The toolkit.<br><em>And the questions.</em>','The technologies I use, the ideas I’m exploring, and the areas where I want to keep getting better.')+
  '<div class="stack-highlight"><div class="stack-highlight-copy"><span class="section-label">CURRENT LEARNING LANE</span><h2>Closer to the<br><em>foundations.</em></h2><p>I’m especially interested in understanding what happens under the hood — memory, concurrency, networking, data structures, and the design choices behind reliable software.</p></div>'+
  '<div class="code-window"><div class="code-top"><i></i><i></i><i></i><small>curiosity.go</small></div><pre><code><span class="kw">package</span> main\n\n<span class="kw">import</span> "fmt"\n\n<span class="kw">func</span> main() {\n    interests := []string{\n        "systems",\n        "backend",\n        "problem solving",\n        "useful software",\n    }\n\n    <span class="kw">for</span> _, idea := <span class="kw">range</span> interests {\n        fmt.Println("explore:", idea)\n    }\n}</code></pre><div class="code-foot"><span>COMMIT TO CURIOSITY</span><span>01:∞</span></div></div></div>'+
  '<div class="skills-section"><div class="skills-heading"><span class="section-label">01 / THE TOOLBOX</span><span>TOOLS ARE A MEANS, NOT THE POINT.</span></div><div class="skills-grid">'+
  '<div class="skill-group"><span class="skill-index">01</span><h3>Languages</h3><div class="skill-pills"><span>C++</span><span>Go</span><span>Java</span><span>JavaScript</span><span>TypeScript</span></div></div>'+
  '<div class="skill-group"><span class="skill-index">02</span><h3>Web & backend</h3><div class="skill-pills"><span>React</span><span>Next.js</span><span>Node.js</span><span>REST APIs</span><span>WebSockets</span></div></div>'+
  '<div class="skill-group"><span class="skill-index">03</span><h3>Data & workflow</h3><div class="skill-pills"><span>MongoDB</span><span>Git</span><span>GitHub</span><span>Linux</span><span>SQL</span></div></div></div></div>'+
  '<div class="focus-section"><span class="section-label">02 / WHAT I’M EXPLORING</span><div class="focus-grid">'+
  '<div class="focus-card"><span class="focus-symbol">⌘</span><strong>Systems thinking</strong><p>Understanding memory, processes, concurrency, and how software behaves close to the machine.</p></div>'+
  '<div class="focus-card"><span class="focus-symbol">↗</span><strong>Backend engineering</strong><p>Designing APIs, working with data, and learning what makes services dependable.</p></div>'+
  '<div class="focus-card"><span class="focus-symbol">{ }</span><strong>Problem solving</strong><p>Practising algorithms and data structures to become a clearer, more deliberate thinker.</p></div></div></div>'+
  '<div class="stack-bottom"><p>Good tools matter. Knowing <em>why</em> to use them matters more.</p><button class="text-link" data-go="contact">Have something interesting to build? ↗</button></div></section>',
 contact: () => '<section class="content-page page-enter">'+intro('05','LET’S MAKE SOMETHING MEANINGFUL','Good things start<br>with a <em>hello.</em>','Have an idea, a question, an interesting problem, or just want to talk about building things? My inbox is open.')+
  '<div class="contact-main"><div class="contact-invite"><span class="section-label">THE NEXT CONVERSATION</span><a class="email-big" href="mailto:mauryasuryakant99@gmail.com">Let’s talk <span>↗</span></a><div class="contact-rule"></div><p>I’m always glad to connect with people who enjoy learning, sharing ideas, and making useful things.</p><div class="contact-email-copy"><span>mauryasuryakant99@gmail.com</span><button class="copy-email">▢ &nbsp; Copy email</button></div></div>'+
  '<div class="contact-links"><a href="https://github.com/mauryasuryakant" target="_blank" rel="noreferrer"><span class="contact-link-icon">⌘</span><span class="contact-link-copy"><b>GitHub</b><small>Projects, experiments & code</small></span><span>↗</span></a>'+
  '<a href="mailto:mauryasuryakant99@gmail.com"><span class="contact-link-icon">✉</span><span class="contact-link-copy"><b>Email</b><small>For ideas and conversations</small></span><span>↗</span></a></div></div>'+
  '<div class="contact-note"><span>✳</span> Currently interested in collaborations, learning opportunities, and building thoughtful software with good people.</div><div class="contact-end"><span>THANK YOU FOR MAKING IT THIS FAR</span><span>UNTIL NEXT TIME <b>✳</b></span></div></section>'
};
function renderPage(page, updateHash = true) {
 if (!pages.includes(page)) page = 'home';
 currentPage = page; body.dataset.page = page; app.innerHTML = views[page]();
 document.querySelectorAll('.nav-link').forEach(b => b.classList.toggle('is-active', b.dataset.go === page));
 document.querySelector('#page-number').textContent = String(pages.indexOf(page)+1).padStart(2,'0');
 document.querySelector('[data-step="previous"]').disabled = page === 'home';
 document.querySelector('[data-step="next"]').disabled = page === 'contact';
 document.title = titles[pages.indexOf(page)]+' — Suryakant Maurya';
 document.querySelector('.mobile-menu').hidden = true;
 document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
 document.querySelector('.menu-icon').textContent = '☰';
 if (updateHash && location.hash !== '#'+page) history.pushState({page},'', '#'+page);
 window.scrollTo({top:0,behavior:'instant'}); app.focus({preventScroll:true});
}
document.addEventListener('click',event=>{const b=event.target.closest('[data-go]');if(b){event.preventDefault();renderPage(b.dataset.go)}});
document.querySelector('[data-step="previous"]').addEventListener('click',()=>renderPage(pages[Math.max(0,pages.indexOf(currentPage)-1)]));
document.querySelector('[data-step="next"]').addEventListener('click',()=>renderPage(pages[Math.min(pages.length-1,pages.indexOf(currentPage)+1)]));
document.querySelector('.mode-toggle').addEventListener('click',()=>{
 const light=body.dataset.mode!=='light';body.dataset.mode=light?'light':'dark';
 document.querySelector('.mode-icon').textContent=light?'☾':'☼';
 document.querySelector('.mode-toggle').setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');
 document.querySelector('meta[name="theme-color"]').content=light?'#f0f0e9':'#111711';
});
document.querySelector('.menu-toggle').addEventListener('click',()=>{
 const menu=document.querySelector('.mobile-menu');menu.hidden=!menu.hidden;
 document.querySelector('.menu-toggle').setAttribute('aria-expanded',String(!menu.hidden));
 document.querySelector('.menu-icon').textContent=menu.hidden?'☰':'×';
});
window.addEventListener('scroll',()=>document.querySelector('.topbar').classList.toggle('scrolled',window.scrollY>12),{passive:true});
window.addEventListener('popstate',()=>renderPage(location.hash.slice(1)||'home',false));
document.addEventListener('click',async event=>{
 const button=event.target.closest('.copy-email');if(!button)return;
 const original=button.innerHTML;
 try{await navigator.clipboard.writeText('mauryasuryakant99@gmail.com');button.textContent='✓ Copied'}
 catch{window.location.href='mailto:mauryasuryakant99@gmail.com';button.textContent='Opening email'}
 window.setTimeout(()=>{if(button.isConnected)button.innerHTML=original},1800);
});
document.querySelector('#year').textContent=new Date().getFullYear();
const initial=location.hash.slice(1);if(initial&&initial!=='home')renderPage(initial,false);