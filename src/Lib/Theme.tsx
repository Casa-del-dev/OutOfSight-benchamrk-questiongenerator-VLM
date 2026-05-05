export function getResolvedIsDark() {
  const savedTheme = localStorage.getItem("theme");

  return (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

export function applyTheme() {
  const isDark = getResolvedIsDark();

  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";

  return isDark;
}
