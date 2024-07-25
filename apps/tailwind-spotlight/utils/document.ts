export function setDocumentProperty(property: string, value: string) {
  document.documentElement.style.setProperty(property, value);
}

export function removeDocumentProperty(property: string) {
  document.documentElement.style.removeProperty(property);
}
