import { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profile from "../assets/id-card.png";
class AddEmplyoee extends Component {
  constructor() {
    super();

    this.state = {
      formData: {
        email: "",
        firstName: "",
        lastName: "",
      },
      arrayEmployees: [],
    };
  }
  notify = () =>
    toast.success("Successfully created!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  handleSubmit = (event) => {
    event.preventDefault();

    ///axios posting data///////////
    axios
      .post(
        "https://reqres.in/api/users",

        {
          // id: 1,
          email: this.state.formData.email,
          first_name: this.state.formData.firstName,
          last_name: this.state.formData.lastName,
          // avatar: "https://reqres.in/img/faces/1-image.jpg",
        }
      )
      .then((response) => {
        this.setState((state) => ({
          arrayEmployees: [...state.arrayEmployees, response.data],
        }));
        this.notify();
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      formData: {
        email: "",
        firstName: "",
        lastName: "",
      },
    });
    ///////////--axios posting data--/////////////////////
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    }));
  };

  render() {
    const renderedData = this.state.arrayEmployees.map((mov) => {
      return (
        <div key={mov.id} className="col-md-2">
          <div className="card shadow-lg" style={{ width: "13rem" }}>
            <img src={profile} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                {mov.first_name} {mov.last_name}
              </h5>
              <p className="card-text">{mov.email}</p>
            </div>
          </div>
        </div>
      );
    });
    const { formData } = this.state;
    return (
      <div>
        <div className="container text-center p-3">
          <form
            className="row align-items-center mt-4"
            onSubmit={this.handleSubmit}
          >
            <div className="col-md-2 mb-2">
              <label className="ms-3">
                Email ID:
                <input
                  className="mx-3 py-2"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="col-md-2 mb-2">
              <label className="ms-1">
                First name:
                <input
                  className="mx-3 py-2"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="col-md-2 mb-2">
              <label>
                Last name:
                <input
                  className="mx-3 py-2"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="col-md-2">
              <button className="btn btn-secondary mt-3 py-2" type="submit">
                Submit
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
        <div className="container text-center p-3">
          <div className="row align-items-start mt-4">{renderedData}</div>
        </div>
      </div>
    );
  }
}

export default AddEmplyoee;
