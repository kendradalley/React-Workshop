var div = React.DOM.div
var h1 = React.DOM.h1

//  composite component - like a JS constructor we will render and use to hook into lifecycle events
var Title = React.createClass({
  render() {
    return (
      div(null,
        h1(null, this.props.title)
      )
    )
  }
})

// React element - virtual React component before it get constructed. This is what's compared to determine if you reuse or create a component
var HelloWorld = (
  div( null,
    React.createElement(Title, {title: 'Hello World Class'})
  )
)

ReactDOM.render(HelloWorld, document.getElementById('app'))
