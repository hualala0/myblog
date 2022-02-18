export const sleep = async (time: number) => {
  return new Promise<void>(resolve => {
    setInterval(() => {
      resolve()
    }, time)
  })
}
