import "./scss/main.scss";

const div = document.getElementById("root");

div.innerHTML = `
    <div class="main">
        <h3 class="main_subtitle">Mentorship - Session 2:</h3>
        <h1 class="main_title">Webpack Basics 🖥</h1>
        <ul class="main_list">
            <li><label><input type="checkbox" checked>Create a project with npm, git and webpack</label></li>
            <li><label><input type="checkbox" checked>Install and use html-loader</label></li>
            <li><label><input type="checkbox" checked>Get the main HTML element, append information and change colors</label></li>
            <li><label><input type="checkbox" checked>Create production bundle</label></li>
            <li><label><input type="checkbox" checked>Use git and upload the project to github</label></li>
            <li><label><input type="checkbox" checked>Implement HotReload🌶 to Webpack</label></li>
        </ul>
    </div>
`;
