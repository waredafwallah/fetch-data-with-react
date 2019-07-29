import React from 'react';

 class App extends React.Component {

  state = {
    loading: true,
    person: null
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], loading: false})
    console.log("data", data.results[0])
  }

  render() {
    return (
      <div className="App">
        <h1>Fetch Data with ReactJs</h1>
        {this.state.loading || !this.state.person ? 
        (<div>
          loading...
        </div>) : 
        (<div>
          <div>
            {this.state.person.name.first}
          </div>
          <div>
            {this.state.person.name.last}
          </div>
          <div>
            {this.state.person.name.title}
          </div>
          <img src={this.state.person.picture.large} alt=""/>
        </div>
        )} 
      </div>
    );
  }
}

export default App
