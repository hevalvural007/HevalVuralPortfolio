const projects = [
  {
    title: "OneTapNews",
    description:
      "Flutter ve NewsAPI kullanılarak geliştirilen, Firebase tabanlı yorum sistemi içeren modern bir haber uygulaması. Clean Architecture prensipleriyle tasarlandı.",
    techStack: ["Flutter", "Dart", "Firebase", "Rest API"],
    githubLink: "https://github.com/hevalvural007/OneTapNews",
    liveLink: "https://onetapnews.netlify.app/",
  },
  {
    title: "Movie Search Engine Website",
    description:
      "HTML5, CSS3 ve JavaScript kullanılarak oluşturulmuş bir film arama motoru",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/hevalvural007/MovieSearchEngine",
    liveLink: "#",
  },
  {
    title: "Android Movie Search Engine",
    description:
      "Kullanıcıların anahtar kelime ile film/dizi aratabileceği bir Android uygulaması. Kotlin ile geliştirilmiştir.",
    techStack: ["Kotlin", "OmdbApi", "Jetpack Compose"],
    githubLink: "https://github.com/hevalvural007/MovieSearchEngineKotlin",
    liveLink: "#",
  },
  {
    title: "Offline Whisper Speech to Text Converter",
    description:
      "Kotlin ve OpenAI tarafından geliştirilen Whisper modelini kullanarak konuşmaları yazıya döken bir uygulama geliştirdim.",
    techStack: ["Kotlin", "Whisper", "Jetpack Compose"],
    githubLink: "https://github.com/hevalvural007/Offline_Whisper_App",
    liveLink: "#",
  },
  {
    title: "Kişisel Web Sitesi",
    description:
      "Tamamen responsive ve modern tasarıma sahip portfolyo sitesi.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/hevalvural007/HevalVuralPortfolio",
    liveLink: "#",
  },
];

const certificates = [
  {
    title: "The Ultimate Guide to Game Development With Unity",
    issuer: "Udemy Course/Jonathan Weinberger",
    date: "2024",
  },
  {
    title: "Beyaz Şapkalı Hacker ve Temel Linux Eğitimi",
    issuer: "Sibervatan Programı",
    date: "2024",
  },
  {
    title: "Sızma Testi",
    issuer: "Sibervatan Programı",
    date: "2024",
  },
  {
    title: " Web Güvenliği",
    issuer: "Sibervatan Programı",
    date: "2024",
  },
  {
    title: "Zararlı Yazılım Analizi ve Tersine Mühendislik",
    issuer: "Sibervatan Programı",
    date: "2024",
  },
  {
    title: "Android Mobil Uygulama Kursu: Kotlin & Java",
    issuer: "Udemy Course/Atıl Samancıoğlu",
    date: "2025",
  },
];

const projectContainer = document.getElementById("project-list");
const certContainer = document.getElementById("cert-list");

projects.forEach((project) => {
  const projectHTML = `
                <div class="card">
                    <div class="card-top">
                        <i class="far fa-folder folder-icon"></i>
                        <div class="links-icon">
                            <a href="${
                              project.githubLink
                            }" target="_blank"><i class="fab fa-github"></i></a>
                            ${
                              project.liveLink !== "#"
                                ? `<a href="${project.liveLink}" target="_blank"><i class="fas fa-external-link-alt"></i></a>`
                                : ""
                            }
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-desc">${project.description}</p>
                        <div class="tech-stack">
                            ${project.techStack
                              .map((tech) => `<span>${tech}</span>`)
                              .join("")}
                        </div>
                    </div>
                </div>
            `;
  projectContainer.innerHTML += projectHTML;
});

certificates.forEach((cert) => {
  const certHTML = `
                <div class="cert-card">
                    <h4 class="cert-title">${cert.title}</h4>
                    <div class="cert-issuer">${cert.issuer}</div>
                    <div class="cert-date">${cert.date}</div>
                </div>
            `;
  certContainer.innerHTML += certHTML;
});
