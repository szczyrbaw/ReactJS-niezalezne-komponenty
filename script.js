var Counter = React.createClass({
  getInitialState: function() {
    console.log('Sprawdzanie wartosci stanu nowego komponentu');
    return {
      counter: 0,
    };
  },
//  getDefaultProps: function() {
//    console.log('Kiedy chcemy wczytac domyslne propsy nowego komponentu, ktory wkladamy')
//  },
//  ComponentWillMount: function() {
//    console.log('')
//  },
//  ComponentDidMount: function() {
//    console.log('Kontrola komponentu na drzewie DOM')
//  },
//  componentWillReceiveProps: function() {
//    console.log('Aktualizowanie stanu na podstawie nadchodzących właściwości')
//  },
//  shouldComponentUpdate: function() {
//    console.log('Kiedy chcemy sprawdzić czy trzeba przerysować komponent / przy optymalizacji aplikacji')
//  },
//  componentWillUpdate: function() {
//    console.log('')
//  },
//  componentDidUpdate: function() {
//    console.log('W celu modyfikacji na DOM po przerysowaniu komponentu')
//  },
//  componentWillUnmount: function() {
//    console.log('Usunięcie zdarzeń na komponencie przed jego usunięciem')
//  },
  increment: function() {
    this.setState({
      counter: this.state.counter + 1,
    });
  },
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1,
    });
  },
  render: function() {
    return (
      React.createElement('div', {}, 
        React.createElement('span', {}, 'Licznik ' + this.state.counter),
        React.createElement('button', {onClick: this.increment}, 'Increment'),
        React.createElement('button', {onClick: this.decrement}, 'Decrement')
      )
    )
  },
  function() {
    getDefaultProps();
    console.log('aaa');
  }
  
});

var Counter2 = React.createClass({
  getInitialState: function() {
    return {
      counter: 0,
    };
  },
  increment: function() {
    this.setState({
      counter: this.state.counter + 1,
    });
  },
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1,
    });
  },
  render: function() {
    return (
      React.createElement('div', {}, 
        React.createElement('span', {}, 'Licznik ' + this.state.counter),
        React.createElement('button', {onClick: this.increment}, 'Increment'),
        React.createElement('button', {onClick: this.decrement}, 'Decrement')
      )
    )
  }
});
var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {},
        React.createElement(Counter, {}),
        React.createElement(Counter2, {})
      )
    );
  }
})
var element = React.createElement(App);

ReactDOM.render(element, document.getElementById('app'));

