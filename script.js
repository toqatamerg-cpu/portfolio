const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");
menuBtn?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const themeToggle=document.getElementById("themeToggle");
themeToggle.addEventListener("click",()=>{
  document.documentElement.classList.toggle("light");
  themeToggle.textContent=document.documentElement.classList.contains("light")?"☾":"☀";
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const filters=document.querySelectorAll(".filter");
const cards=document.querySelectorAll(".project-card");
filters.forEach(btn=>{
  btn.addEventListener("click",()=>{
    filters.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const filter=btn.dataset.filter;
    cards.forEach(card=>{
      card.style.display=(filter==="all"||card.dataset.category===filter)?"block":"none";
    });
  });
});

const sections=[...document.querySelectorAll("main section")];
const links=[...document.querySelectorAll(".nav-links a")];
window.addEventListener("scroll",()=>{
  let current="home";
  sections.forEach(section=>{
    if(window.scrollY >= section.offsetTop-180) current=section.id;
  });
  links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+current));
});

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const form=e.currentTarget;
  const name=form.name.value.trim();
  const email=form.email.value.trim();
  const message=form.message.value.trim();
  const subject=encodeURIComponent(`Portfolio contact from ${name}`);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href=`mailto:toqatamerg@gmail.com?subject=${subject}&body=${body}`;
});
