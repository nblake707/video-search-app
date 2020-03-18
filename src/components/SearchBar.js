import React from 'react';

class SearchBar extends React.Component {

    //initializing the state object 
    state = {term: ''};

    //defining this as an arrow function ensures binding
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        //makes sure the page will not refresh
        event.preventDefault();

        //Passing the term into the onFormSubmit function from the App component
        this.props.onFormSubmit(this.state.term);
           
    };

    render() {
        return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                            {/* Was originally an uncontrolled input. This was changed bc we want to save 
                                the search term inside of the component and NOT the DOM  */}
                        <input 
                            type="text" 
                            onChange={this.onInputChange} 
                            value={this.state.term} 
                        />
                </div>

            </form>
        </div>

        );
    }
}

export default SearchBar;

