export function getInitials(fullName = "test") {
  if (!fullName || typeof fullName !== "string") return "";

  const names = fullName.trim().split(" ");
  const initials = names.slice(0, 2).map((name) => name[0]?.toUpperCase() || "");
  return initials.join("");
}
