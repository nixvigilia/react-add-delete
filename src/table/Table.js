import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Job</th>
        <th scope="col">Remove</th>
      </tr>
    </thead>
  );
};

// props is a parameter that gets the characterData
// can rename the props param
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.removeCharacter(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;

    console.log(characterData);
    return (
      <table className="table">
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
