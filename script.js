// Shared site constants — update these values to reuse the landing page.
const APP_CONFIG = Object.freeze({
  themeColor: "#166ff4",
  appName: "Royal Kalyan",
  downloadLink: "https://royalkalyan.club/royalkalyan.apk",
});

function applyAppConfig() {
  document.documentElement.style.setProperty("--theme-color", APP_CONFIG.themeColor);
  document.querySelector('meta[name="theme-color"]').setAttribute("content", APP_CONFIG.themeColor);
  document.title = `${APP_CONFIG.appName} — Download APK`;

  const [firstWord, ...rest] = APP_CONFIG.appName.split(" ");
  document.getElementById("brand-mark").innerHTML =
    `<span class="accent">${firstWord}</span>&nbsp;<span class="dark">${rest.join(" ").toUpperCase()}</span>`;
  document.getElementById("app-name").textContent = APP_CONFIG.appName;
  document.getElementById("app-description").textContent =
    `Download the official ${APP_CONFIG.appName} Android App for fast results and smooth experience.`;
  document.getElementById("download-button").href = APP_CONFIG.downloadLink;
}

applyAppConfig();
