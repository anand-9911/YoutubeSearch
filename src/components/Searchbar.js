import React from 'react';

class Searchbar extends React.Component {
    state = {
        term: ''
    };
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            value={this.state.term}
                            type="text"
                            onChange={e => this.setState({ term: e.target.value })}

                        />
                    </div>

                </form>
            </div>
        )
    }
}

export default Searchbar;