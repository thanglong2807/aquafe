import Link from 'next/link';

type PaginationProps = {
  currentPage: number;
  pageCount: number;
  createPageHref: (targetPage: number) => string;
  className?: string;
};

const Pagination = ({
  currentPage,
  pageCount,
  createPageHref,
  className = 'mt-10',
}: PaginationProps) => {
  if (pageCount <= 1) {
    return null;
  }

  return (
    <div className={`${className} flex items-center justify-center gap-2 flex-wrap`}>
      <Link
        href={createPageHref(Math.max(1, currentPage - 1))}
        className={`px-4 py-2 rounded-xl border transition ${
          currentPage <= 1
            ? 'pointer-events-none opacity-50 bg-gray-100 text-gray-400 border-gray-200'
            : 'bg-white hover:bg-gray-50 border-gray-200'
        }`}
      >
        Trước
      </Link>

      {(() => {
        const pages: (number | '...')[] = [];
        if (pageCount <= 7) {
          for (let i = 1; i <= pageCount; i++) pages.push(i);
        } else {
          pages.push(1);
          if (currentPage > 3) pages.push('...');
          for (let i = Math.max(2, currentPage - 1); i <= Math.min(pageCount - 1, currentPage + 1); i++) {
            pages.push(i);
          }
          if (currentPage < pageCount - 2) pages.push('...');
          pages.push(pageCount);
        }
        return pages.map((page, idx) =>
          page === '...' ? (
            <span key={`ellipsis-${idx}`} className="px-2 py-2 text-gray-400 select-none">...</span>
          ) : (
            <Link
              key={page}
              href={createPageHref(page)}
              className={`px-4 py-2 rounded-xl border transition ${
                page === currentPage
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white hover:bg-gray-50 border-gray-200'
              }`}
            >
              {page}
            </Link>
          )
        );
      })()}

      <Link
        href={createPageHref(Math.min(pageCount, currentPage + 1))}
        className={`px-4 py-2 rounded-xl border transition ${
          currentPage >= pageCount
            ? 'pointer-events-none opacity-50 bg-gray-100 text-gray-400 border-gray-200'
            : 'bg-white hover:bg-gray-50 border-gray-200'
        }`}
      >
        Sau
      </Link>
    </div>
  );
};

export default Pagination;
