// Object Constructor for Company Employees
function Employee(first, last, jobDesc, salary) {
    this.firstName = first;
    this.lastName = last;
    this.jobDescription = jobDesc;
    this.grossPay = salary;
    this.nationality = ("indian").toUpperCase();
    this.fullName = function() {
        return (this.firstName + " " + this.lastName).toUpperCase();
    };
};

// // Create Object Method for Name
// Employee.prototype.fullNames = function() {
//     return this.firstName + " " + this.lastName;
// }

// Employee Data
const directorCompany = new Employee("Odak", "Makaka", "CEO", 1000000);
const deptHead = new Employee("Mia", "Kulpa", "ICT", 750000);
const companyRegular = new Employee("Juan", "Servantes", "Regular", 450000);

// Add accolade to Director
directorCompany.accolade = ("mbs").toUpperCase();

// Add new property
Employee.prototype.yearsInService = "1969"

// Output Employee data
const directorData = Object.values(directorCompany);
const deptData = Object.values(deptHead);
const regularData = Object.values(companyRegular);

// Output in document
document.getElementById("employeeInfo").innerHTML = 
    directorData + "<br>" + 
    deptData + "<br>" + 
    regularData;

// Display full name of the director
document.getElementById("directorsAttr").innerHTML = "Our esteemed Company Director, " + 
    directorCompany.fullName() + ", served since " + 
    directorCompany.yearsInService;

    // Create a function to convert Temperature in Fahrenheit to celcius
    function toCelsius(F) {
        return (F - 32) / 1.8;
        document.getElementById("convertedCelsius").innerHTML = toCelsius(82);
    };

    // Display in paragraph
    