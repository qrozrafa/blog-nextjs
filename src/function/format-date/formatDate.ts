export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long'
  }).format(new Date(date));
}
