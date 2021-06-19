async function fileExists(filePath) {
  try {
    await fs.access(publicFile);
    return true;
  } catch {
    return false;
  }
}

module.exports = fileExists;