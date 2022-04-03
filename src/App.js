import React from "react";
import logo from "./logo.svg";
import "./App.css";
import shortid from "shortid";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      listItem: [],
      countNumber: 50,
      complitedItems: false,
      reverseNumber: "123456789",
      numbersSt: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 100,
      ],
      newArr: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCountDownNr = this.handleCountDownNr.bind(this);
    this.handleCountUpNr = this.handleCountUpNr.bind(this);
  }
  componentDidMount() {
    // const reversed = this.state.reverseNumber.reverse();
    // this.setState({ reverseNumber: reversed });
    // console.log(console.log(this.state.reverseNumber));

    this.reverse(this.state.reverseNumber);
    this.checkIfComplitedExist();
    this.fintMissingNumber();
  }
  reverse(text) {
    const shit = text.split("").reverse().join("");
    console.log(shit);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit = (dataPar) => {
    this.setState({
      listItem: [...this.state.listItem, dataPar],
    });
    console.log(dataPar);
  };
  handleSubmitFirst = (event) => {
    event.preventDefault();
    this.handleSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complited: false,
    });
  };
  handleDeleteItem(id) {
    this.setState({
      listItem: this.state.listItem.filter((item) => item.id !== id),
    });
  }
  handletoggleComplite(id) {
    this.setState({
      listItem: this.state.listItem.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complited: !item.complited,
          };
        } else {
          return item;
        }
      }),
    });
  }

  handleCountUpNr() {
    this.setState({
      countNumber: this.state.countNumber + 1,
    });
  }
  handleCountDownNr() {
    this.setState({
      countNumber: this.state.countNumber - 1,
    });
    window.alert("hello");
  }
  checkIfComplitedExist = () => {
    // this.setState({
    //   : this.state.listItem.filter(
    //     (item) => item.complited === true
    //   ),
    // });
    // console.log(this.state.);

    this.state.listItem.filter((i) => {
      if ((i.complited = true)) {
        return this.setState({ complitedItems: false });
      } else {
        return this.setState({ complitedItems: true });
      }
    });
    console.log(this.state.complitedItems);
  };

  fintMissingNumber() {
    let a = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 100,
    ];
    this.setState({ newArr: a });
    let b = 100;
    let missing = new Array();

    for (let i = 1; i <= b; i++) {
      if (a.indexOf(i) === -1) {
        missing.push(i);
      }
    }
    console.log(missing);
    //OUTPUT: 99
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>This is my To Do list app</h1>
        </header>
        <form onSubmit={this.handleSubmitFirst}>
          <button
            style={
              this.state.complitedItems === false
                ? { display: "none" }
                : { backgroundColor: "red" }
            }
            type="button"
            onClick={() =>
              this.setState({
                listItem: this.state.listItem.filter(
                  (i) => i.complited === false
                ),
              })
            }
          >
            Delette complited
          </button>
          <input
            name="text"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <div
          style={{
            border: "solid 1px red",
            margin: "0 50px",
            height: "50vh",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffff",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              overflow: "auto",
            }}
          >
            <div
              style={{
                border: "solid 2px red",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div style={{ border: "solid 2px green" }}>
                {this.state.listItem.map((item, index) => (
                  <div>
                    {!item.complited && (
                      <div
                        key={index.key}
                        style={{ padding: "20px", display: "flex" }}
                      >
                        <p
                          key={index.key}
                          onClick={() => this.handletoggleComplite(item.id)}
                          style={{
                            textDecoration: item.complited
                              ? "line-through"
                              : "",
                          }}
                        >
                          {item.text}
                        </p>
                        <button
                          key={index.key}
                          onClick={() => this.handleDeleteItem(item.id)}
                        >
                          X
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ border: "solid 2px blue" }}>
                {this.state.listItem.map((item, index) => (
                  <div>
                    {item.complited && (
                      <div
                        key={index.key}
                        style={{ padding: "20px", display: "flex" }}
                      >
                        <p
                          key={index.key}
                          onClick={() => this.handletoggleComplite(item.id)}
                          style={{
                            textDecoration: item.complited
                              ? "line-through"
                              : "",
                          }}
                        >
                          {item.text}
                        </p>
                        <button
                          key={index.key}
                          onClick={() => this.handleDeleteItem(item.id)}
                        >
                          X
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              Incomplite todo list{" "}
              {this.state.listItem.filter((i) => !i.complited).length}
            </div>
          </div>
          <button onClick={this.handleCountDownNr}> - </button>
          <h1>{this.state.countNumber}</h1>
          <button onClick={this.handleCountUpNr}> + </button>
        </div>
      </div>
    );
  }
}
