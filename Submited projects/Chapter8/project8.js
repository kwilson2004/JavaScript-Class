// Creating a structure model using Object Constructor Function
	function Employee(name, age, designation) {
		this.name = name;
		this.age = age;
		this.designation = designation;
	}

	// Adding prototype properties and methods
	Employee.prototype.company = "ABC Corporation";
	Employee.prototype.getDetails = function() {
		return "Name: " + this.name + "<br>Age: " + this.age + "<br>Designation: " + this.designation + "<br>Company: " + this.company;
	}

	// Creating instances of the object
	var employee1 = new Employee("John Doe", 30, "Software Engineer");
	var employee2 = new Employee("Jane Doe", 28, "UI/UX Designer");

	// Displaying data using for-in loop
	var employees = [employee1, employee2];
	for (var i in employees) {
		document.write("<h3>Employee " + (parseInt(i)+1) + "</h3>");
		document.write(employees[i].getDetails());
	}

	// Using Navigator Object's properties
	document.write("<h3>Navigator Object Properties</h3>");
	document.write("<p>User Agent: " + navigator.userAgent + "</p>");
	document.write("<p>App Name: " + navigator.appName + "</p>");
	document.write("<p>Language: " + navigator.language + "</p>");