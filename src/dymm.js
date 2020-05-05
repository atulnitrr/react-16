function OurApp() {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Innder header"),
    React.createElement(
      "p",
      null,
      `Current time is ${new Date().toLocaleString()}`
    ),
    React.createElement("small", null, "footer text"),
  ]);
}

// setInterval(()=> {
//   ReactDOM.render(

//   OurApp()
// , document.querySelector("#root")
// )
// }, 1000)
