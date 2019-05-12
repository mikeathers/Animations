import React, { Component } from "react";
import TableRow from "../TableRow/TableRow";
import "./TableBody.scss";

export default class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Loading..."
    };
  }
  updateMessage = () => {
    setTimeout(() => this.setState({ message: "No results found..." }), 10000);
  };

  render() {
    this.updateMessage();
    return (
      <div className="datatable__body">
        {this.props.results.length > 0 ? (
          this.props.paginatedList.length > 0 &&
          this.props.paginatedList.map((row, key) => {
            return (
              <TableRow
                key={key}
                cols={this.props.cols}
                row={row}
                id={row[this.props.idCol]}
                selectRow={this.props.selectRow}
                timeSensitiveValue={this.props.timeSensitiveValue}
                checkRow={this.props.checkRow}
                checkAllRows={this.props.checkAllRows}
                allChecked={this.props.allChecked}
                actionAllNeeded={this.props.actionAllNeeded}
              />
            );
          })
        ) : (
          <div className="datatable__no-results-found">
            <p>{this.state.message}</p>
          </div>
        )}
      </div>
    );
  }
}
