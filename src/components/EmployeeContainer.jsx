const EmployeeContainer = ({ employeeState }) => {
  const renderedData = employeeState.map((mov) => {
    return (
      <div key={mov.id} className="col-sm-2">
        <div className="card shadow-lg h-100">
          <img src={mov.avatar} className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              {mov.first_name} {mov.last_name}
            </h5>
            <p className="card-text">{mov.email}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container text-center pt-5">
      <div className="row align-items-stretch d-flex flex-wrap">
        {renderedData}
      </div>
    </div>
  );
};

export default EmployeeContainer;
