const Pagination = ({ nextPage, prevPage, goToPage, pages, currentPage }) => {
  let pageButtons = []

  for (let i = 1; i <= pages; i++) {
    pageButtons.push(<button className={`pagination-button ${(i === currentPage) ? "active-page" : ""}`} key={i} onClick={() => goToPage(i)}>{i}</button>)
  }

  return (
    <article className="pagination-article">
      {prevPage && (<button className="pagination-button" onClick={prevPage}>Previous</button>)}
      {pageButtons}
      {nextPage && (<button className="pagination-button" onClick={nextPage}>Next</button>)}
    </article>
  )
}
export default Pagination