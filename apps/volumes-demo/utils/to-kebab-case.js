function toKebabCase(input) {
  return input.toLowerCase()
    .replace(/[^a-z0-9\-]/g, '-')
    .replace(/\-{2,}/g, '-');
}

module.exports = toKebabCase;