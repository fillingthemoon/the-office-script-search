import React from 'react'

const DisplayLines = (props) => {

  const {
    lines
  } = props

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
        {lines.map((searchResult, i) =>
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

export default DisplayLines