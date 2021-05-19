import React from 'react'

const SearchResults = (props) => {

  const {
    searchResults
  } = props

  return (
    <div>
      <h2>Search Results</h2>
      {
        (() => {
          switch (searchResults) {
            case (0):
              return <p>No results.</p>
            case (1):
              return <p>Too many results to display!</p>
            default:
              return (
                <table>
                  <thead>
                    <tr>
                      <th>line_id</th>
                      <th>season</th>
                      <th>episode</th>
                      <th>scene</th>
                      <th>line_text</th>
                      <th>speaker</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((searchResult, i) =>
                      <tr key={i}>
                        <td>{searchResult.line_id}</td>
                        <td>{searchResult.season}</td>
                        <td>{searchResult.episode}</td>
                        <td>{searchResult.scene}</td>
                        <td>{searchResult.line_text}</td>
                        <td>{searchResult.speaker}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )
          }
        })()
      }
    </div>
  )
}

export default SearchResults