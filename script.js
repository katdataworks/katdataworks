document.addEventListener("DOMContentLoaded", function() {
    const username = "katdataworks";

    async function fetchGitHubProfile() {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        displayProfile(data);
    }

    async function fetchGitHubRepos() {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
        displayRepos(data);
    }

    function displayProfile(data) {
        const profileDiv = document.getElementById("profile");
        profileDiv.innerHTML = `
            <img src="${data.avatar_url}" alt="${data.name}'s profile picture">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>
        `;
    }

    function displayRepos(repos) {
        const reposDiv = document.getElementById("repos");
        repos.forEach(repo => {
            const repoDiv = document.createElement("div");
            repoDiv.className = "repo";
            repoDiv.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description}</p>
                <a href="${repo.html_url}" target="_blank">View Repo</a>
            `;
            reposDiv.appendChild(repoDiv);
        });
    }

    fetchGitHubProfile();
    fetchGitHubRepos();
});
