import React from "react";
import Nav from "Nav";
import User from "User";
import DataTable from "semantic-ui-react";


// For getting data
// rendering searched data
class Table extends React.Component {
    render() {
        return (
            <>
                <Nav handleSearchChange={this.handleSearchChange} />
                <div className="data-area">
                    <DataTable
                        headings={this.headings}
                        users={this.state.filteredUsers}
                        handleSort={this.handleSort}
                    />
                </div>
            </>
        );
    }
}
    //onclick to sort users people.map

    export default Table;