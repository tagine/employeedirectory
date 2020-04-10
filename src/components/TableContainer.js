import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import User from "./User";
import API from "../utils/API";
import Header from "./Header";

class TableContainer extends Component {
    state = {
        users: [{}],
        result: [{}],
        order: "descend",
        filteredUsers: [{}]
    };
    //set up headings to be filtered 

    people = [
        { Image: 'Image' },
        { Phone: 'Phone' }
        // first
        // last
        // address
    ]

    ///function to sort by each
    componentDidMount() {
        this.searchUsers()
        // .then(results => {
        //     this.setState({
        //         users: results.data.result,
        //         filteredUsers: results.data.result
        //     });
        // });
    }

    // descending order
    searchUsers = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
            //filtermethod here
            //
        });
    };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchUsers(this.state.search);
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-8">
                    <Header></Header>
                        <Card
                            heading={this.state.result.User || "Search for a user to begin"}
                        >
                            {this.state.result.User ? (
                                <User
                                    lastName={this.state.result.name.last}
                                    firstName={this.state.result.name.first}
                                    streetAddress={this.state.result.location.street}
                                    city={this.state.result.location.city}
                                    state={this.state.result.location.state}
                                    zipcode={this.state.result.location.postcode}
                                    phone={this.state.result.phone}
                                />
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}

                            {/* Event Target value */}
                        </Card>
                    </Col>
                    <Col size="md-4">
                        <Card heading="Search">
                            <SearchForm
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
};


export default TableContainer;