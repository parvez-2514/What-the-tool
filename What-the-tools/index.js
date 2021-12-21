const table = new Airpuck.Table({
    name: "Grid view",
    baseID: "app49bbbyIOT1TsAq",
    apiKey: "keyPB8l8SvZsq8EeV"
}, _ => {
    console.log("Test")
    console.log(table.records())
})

const nav_sidebar = document.getElementById('nav-sidebar');
const left_content = document.querySelector('.left-content');

nav_sidebar.addEventListener("click", () => {
    left_content.classList.add('active');
    left_content.style.transition = "all 0.3s ease 0.5s"
});

nav_sidebar.addEventListener("click", () => {
    left_content.classList.remove('active');
    left_content.style.transition = "all 0.3s ease 0.5s"
});

