function App() {

  return (
    <>
      <p className="my-text">This is a piece of text</p>
      <div className="text-primary bg-success-subtle mb-1 ms-1 me-3 mt-3 p-4 ">This is a piece of text</div>
    <div className="text-primary bg-success-subtle m-3 p-4 fs-2 fw-normal  w-50 ">This is a piece of text</div>
    <div className="m-3">
    <ul className="list-group list-group-numbered">
      <li className="list-group-item">home</li>
      <li className="list-group-item active">contact</li>
      <li className="list-group-item disabled">products</li>
    </ul>
      </div>
    </>
  )
}

export default App;  