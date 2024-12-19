
export const FormatDate = (date: string) => {

    const formattedDate = new Date(date)

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(formattedDate);
}