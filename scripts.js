const siteName = "Enjoying the programming";

// Logos are loaded from Simple Icons, an open-source project licensed under CC0 1.0.
const posts = [
  { title: "Python", caption: "Python is known for readable syntax and a welcoming learning curve. It is a great choice for automation, data, artificial intelligence, and web development because its ecosystem is broad and practical.", image: "https://cdn.simpleicons.org/python/3776AB" },
  { title: "JavaScript", caption: "JavaScript brings interaction, logic, and dynamic behavior to websites. Its versatility makes it a powerful choice for engaging front-end experiences and full-stack applications.", image: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { title: "Java", caption: "Java is reliable, object-oriented, and designed to run across many platforms. It remains a strong option for large-scale applications because of its performance, mature tools, and robust ecosystem.", image: "https://cdn.simpleicons.org/openjdk/ED8B00" },
  { title: "Go", caption: "Go is a simple, compiled language built for speed, concurrency, and clear code. It is ideal for cloud services and DevOps tools because it produces efficient programs that are easy to deploy.", image: "https://cdn.simpleicons.org/go/00ADD8" },
  { title: "Rust", caption: "Rust delivers high performance while protecting memory safety at compile time. It is worth using for systems software when reliability, concurrency, and predictable performance are essential.", image: "https://cdn.simpleicons.org/rust/000000" },
  { title: "Swift", caption: "Swift is concise, safe, and expressive for Apple platforms. It is the natural choice for modern iOS and macOS development because it helps teams create fast, maintainable native applications.", image: "https://cdn.simpleicons.org/swift/F05138" },
  { title: "Kotlin", caption: "Kotlin is a modern language that works seamlessly with Java and improves developer productivity. Its null-safety and concise syntax make it especially valuable for Android and cross-platform projects.", image: "https://cdn.simpleicons.org/kotlin/7F52FF" },
  { title: "C++", caption: "C++ provides close control of hardware together with powerful abstraction tools. It is used when performance matters most, from game engines and embedded systems to real-time and graphics software.", image: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { title: "C#", caption: "C# combines expressive syntax with the power of the .NET platform. It is an excellent language for desktop applications, games, and web services thanks to its strong tooling and versatility.", image: "https://cdn.simpleicons.org/dotnet/512BD4" },
  { title: "Elixir", caption: "Elixir is designed for fault-tolerant, highly concurrent systems. It is a smart option for real-time applications because its BEAM runtime handles many lightweight processes reliably.", image: "https://cdn.simpleicons.org/elixir/4B275F" },
  { title: "Solidity", caption: "Solidity is the language used to write smart contracts for Ethereum-compatible blockchains. It is useful when applications need transparent, programmable agreements that run on decentralized networks.", image: "https://cdn.simpleicons.org/solidity/363636" },
  { title: "Scala", caption: "Scala blends object-oriented and functional programming on the Java Virtual Machine. It is valuable for data-intensive, distributed systems because it offers concise code and powerful concurrency features.", image: "https://cdn.simpleicons.org/scala/DC322F" },
  { title: "PHP", caption: "PHP is a practical server-side language with a huge web ecosystem. It remains useful for building dynamic websites quickly, especially through mature platforms and frameworks.", image: "https://cdn.simpleicons.org/php/777BB4" },
  { title: "R", caption: "R is purpose-built for statistics, data analysis, and visualization. It is worth learning when clear analysis and strong scientific packages matter more than general-purpose application development.", image: "https://cdn.simpleicons.org/r/276DC3" },
  { title: "C", caption: "C is small, fast, and close to the machine. It is fundamental for operating systems and embedded software because it gives developers direct, efficient control over memory and hardware.", image: "https://cdn.simpleicons.org/c/A8B9CC" },
  { title: "Dart", caption: "Dart is optimized for building polished client applications, especially with Flutter. Its sound type system and fast development cycle make it a strong choice for cross-platform interfaces.", image: "https://cdn.simpleicons.org/dart/0175C2" },
  { title: "Lua", caption: "Lua is lightweight, fast, and easy to embed in other programs. It is popular in games and scripting because it adds flexible automation without demanding many system resources.", image: "https://cdn.simpleicons.org/lua/2C2D72" },
  { title: "Ruby", caption: "Ruby prioritizes developer happiness and expressive code. It is especially useful for web applications because frameworks such as Rails make it quick to turn ideas into working products.", image: "https://cdn.simpleicons.org/ruby/CC342D" },
  { title: "Perl", caption: "Perl excels at text processing, automation, and system administration. Its rich pattern-matching tools make it useful for quickly handling logs, reports, and complex data transformations.", image: "https://cdn.simpleicons.org/perl/39457E" },
  { title: "SQL", caption: "SQL is the language of relational data. It is essential for querying, organizing, and reporting information because it lets developers work with large structured datasets using clear, declarative commands.", image: "https://cdn.simpleicons.org/mysql/4479A1" },
  { title: "Julia", caption: "Julia combines approachable syntax with high-performance numerical computing. It is a compelling choice for scientific work, simulations, and machine learning that need both speed and readability.", image: "https://cdn.simpleicons.org/julia/9558B2" },
  { title: "TypeScript", caption: "TypeScript adds static types and stronger tooling to JavaScript. It helps teams build safer, easier-to-maintain applications by catching many mistakes before code runs.", image: "https://cdn.simpleicons.org/typescript/3178C6" },
  { title: "Haskell", caption: "Haskell is a purely functional language with a strong type system. It is valuable for learning rigorous program design and for domains where correctness and composable abstractions are important.", image: "https://cdn.simpleicons.org/haskell/5D4F85" },
  { title: "Bash / Shell", caption: "Bash and shell scripting automate tasks directly from the command line. They are indispensable for development and operations because they connect tools, files, and systems with minimal overhead.", image: "https://cdn.simpleicons.org/gnubash/4EAA25" },
  { title: "Assembly", caption: "Assembly provides the closest practical view of how a processor executes instructions. It is useful for learning computer architecture and for specialized performance-critical or embedded programming.", image: "https://cdn.simpleicons.org/assemblyscript/007AAC" },
  { title: "PowerShell", caption: "PowerShell combines a command-line shell with an automation language built for system administration. It is powerful for managing Windows environments, cloud resources, and repeatable operational tasks.", image: "https://cdn.simpleicons.org/powershell/5391FE" },
  { title: "HTML", caption: "HTML gives every web page its structure and meaning. Its clear, semantic elements make content accessible and easy to organize, which is why it is the essential starting point for anyone building for the web.", image: "https://cdn.simpleicons.org/html5/E34F26" },
  { title: "CSS", caption: "CSS brings interfaces to life with layout, color, typography, and responsive design. It is worth using because it separates presentation from structure and lets one design adapt beautifully to every screen.", image: "https://cdn.simpleicons.org/css/1572B6" }
];

const grid = document.querySelector("#photo-grid");
const list = document.querySelector("#post-list");
const themeToggle = document.querySelector("#theme-toggle");

function renderPosts() {
  grid.innerHTML = posts.map((post, index) => `<article class="photo-card"><img src="${post.image}" alt="${post.title} logo" loading="${index < 3 ? "eager" : "lazy"}"><div class="photo-overlay"><span>${siteName}</span><h2>${post.title}</h2><p>${post.caption}</p></div></article>`).join("");
  list.innerHTML = posts.map(post => `<article class="list-card"><img src="${post.image}" alt="${post.title} logo" loading="lazy"><div class="list-content"><span class="list-meta">${siteName}</span><h2>${post.title}</h2><p>${post.caption}</p></div></article>`).join("");
  document.querySelector(".feed-count").textContent = `${String(posts.length).padStart(2, "0")} languages`;
}

function setTheme(theme) {
  const dark = theme === "dark";
  document.body.classList.toggle("dark-mode", dark);
  document.body.classList.toggle("light-mode", !dark);
  themeToggle.innerHTML = `<i class="fa-solid fa-${dark ? "sun" : "moon"}" aria-hidden="true"></i>`;
  themeToggle.setAttribute("aria-label", dark ? "Activate light mode" : "Activate dark mode");
  localStorage.setItem("frame-theme", theme);
}

themeToggle.addEventListener("click", () => setTheme(document.body.classList.contains("dark-mode") ? "light" : "dark"));

document.querySelector("#new-post-form").addEventListener("submit", event => {
  event.preventDefault();
  const title = document.querySelector("#post-title").value.trim();
  const caption = document.querySelector("#post-caption").value.trim();
  const image = document.querySelector("#post-image").value.trim() || "https://cdn.simpleicons.org/codepen/20211E";
  posts.unshift({ title, caption, image });
  renderPosts();
  event.target.reset();
  bootstrap.Modal.getInstance(document.querySelector("#newPostModal")).hide();
});

renderPosts();
setTheme(localStorage.getItem("frame-theme") || "light");
