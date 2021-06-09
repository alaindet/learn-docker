function createDummyPromise(duration) {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(), duration);
  })
}

export async function connectToDatabase() {
  return createDummyPromise(1000);
}
