export const formatDateTime = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeStyle: "short",
}).format
