export const formatCurrentDate = (): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "short",
  }
  const today = new Date()
  return today.toLocaleDateString("en-US", options)
}
