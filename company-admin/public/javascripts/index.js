function deleteEmployee(id) {
  // isprati delete request na employees/:id
  // fetch('http://localhost:3000/employees/' + id) // konkatenacija na string
  // interpolacija na string

  fetch(`http://localhost:3000/employees/${id}`, {
    method: 'DELETE'
  })
  .then(response => {
    location.reload();
  })
  .catch(error => console.log(error));
}