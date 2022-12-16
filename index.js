

const empName = identity("a");
const emp_id = identity("b");
const userrole = identity("c");
const stat = identity("d");
const last_login = identity("e");


let currentemployees;


fetch('db.json')
  .then(response => response.json())
  .then(data => {
    
    const empName = document.getElementById('a');
    empName.innerHTML = data.showInfo;
  });

function showemployees(employees) {
  employees.forEach(showemployees);
}

function showemployees(employees) {
  const employeesSpan = document.createElement("span");
  employeesSpan.innerText = employees.a;
  empName.append(employeesSpan);

  employeesSpan.addEventListener("click", () => {
    currentemployees = employees;
    showInfo(employees);
  });
}

function showInfo(employees) {
  empName.innerText = employees.empName;
  emp_id.innerText = employees.emp_id;
  userrole.innerText = employees.userrole;
  stat.innerText = employees.stat;
 
}

function identity(id) {
  return document.getElementById(id);
}

  