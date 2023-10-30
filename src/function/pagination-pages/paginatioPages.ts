export function paginationPages(currentPage = 1, pageRoute = '/articles/page') {
  const prevPage =
    currentPage - 1 === 1 ? '/articles' : `${pageRoute}/${currentPage - 1}`;
  const nextPage = `${pageRoute}/${currentPage + 1}`;
  return { prevPage, nextPage };
}
