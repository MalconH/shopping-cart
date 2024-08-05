import {
  PaginationNav,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function Pagination({ page, changePage }) {
  // Total of products return from API / Max products p. page
  const MAX_PAGES = Math.ceil(194 / 20);

  const handlePageChange = (newPage) => {
    // Don't change pages if pagination is at first o last page.
    if (newPage < 1 || newPage > MAX_PAGES) return;
    changePage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <aside>
      <PaginationNav>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              aria-disabled={page === 1}
              tabIndex={page === 1 ? -1 : undefined}
              className={
                (page === 1 ? "pointer-events-none opacity-50" : "") + " cursor-pointer select-none"
              }
              onClick={() => handlePageChange(page - 1)}
              href={`#page-${page}`}
            />
          </PaginationItem>

          <PaginationItem className="cursor-default w-6">{page}</PaginationItem>

          <PaginationItem>
            <PaginationNext
              aria-disabled={page === MAX_PAGES}
              tabIndex={page === MAX_PAGES ? -1 : undefined}
              className={
                (page === MAX_PAGES ? "pointer-events-none opacity-50" : "") +
                " cursor-pointer select-none"
              }
              onClick={() => handlePageChange(page + 1)}
              href={`#page-${page}`}
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationNav>
    </aside>
  );
}
