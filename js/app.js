const searchForm = document.getElementById("searchForm");
const userProfile = document.getElementById("userProfile");
const usernameInput = document.getElementById("username");
const avatarImg = document.getElementById("avatarImg");
const name = document.getElementById("name");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");
const repoLink = document.getElementById("repoLink");
const reposList = document.getElementById("reposList");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    if (username === "") return;

    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();

    if (userData.message === "Not Found") {
        alert("User not found");
        return;
    }

    avatarImg.src = userData.avatar_url;
    name.textContent = userData.name || userData.login;
    bio.textContent = userData.bio || "No bio available";
    followers.textContent = `Followers: ${userData.followers}`;
    following.textContent = `Following: ${userData.following}`;
    repos.textContent = `Repos: ${userData.public_repos}`;
    repoLink.href = userData.html_url;
    repoLink.textContent = `View Repositories`;

    userProfile.style.display = "block";
    reposList.style.display = "block";
});
