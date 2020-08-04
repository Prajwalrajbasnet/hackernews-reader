function getDomainName(url) {
  if (url) {
    return url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split(/[/#?]/)[0];
  }
  return '';
}
function getDomainLink(url) {
  if (url) {
    return `https://${getDomainName(url)}`;
  }
}
export { getDomainName, getDomainLink };
