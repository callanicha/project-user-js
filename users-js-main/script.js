"use strict"
const users = [
	{
		userName: "Alice",
		lastName: "Johnson",
		gender: "female",
		age: 30,
		address: {
			street: "Oak Avenue",
			number: 45,
			house: true,
		},
		role: "Software Engineer",
	},
	{
		userName: "Charlie",
		lastName: "Smith",
		gender: "male",
		age: 27,
		address: {
			street: "Maple Street",
			number: 101,
			house: false,
		},
		role: "Project Manager",
	},
	{
		userName: "Diana",
		lastName: "Brown",
		gender: "female",
		age: 35,
		address: {
			street: "Elm Road",
			number: 88,
			house: true,
		},
		role: "UX Designer",
	},
	{
		userName: "Eve",
		lastName: "Davis",
		gender: "female",
		age: 21,
		address: {
			street: "Birch Lane",
			number: 7,
			house: false,
		},
		role: "Intern",
	},
	{
		userName: "Frank",
		lastName: "Miller",
		gender: "male",
		age: 40,
		address: {
			street: "Pine Street",
			number: 200,
			house: true,
		},
		role: "CTO",
	},
	{
		userName: "Grace",
		lastName: "Wilson",
		gender: "female",
		age: 28,
		address: {
			street: "Cedar Avenue",
			number: 99,
			house: false,
		},
		role: "Marketing Specialist",
	},
	{
		userName: "Henry",
		lastName: "Moore",
		gender: "male",
		age: 33,
		address: {
			street: "Poplar Road",
			number: 16,
			house: true,
		},
		role: "HR Manager",
	},
	{
		userName: "Ivy",
		lastName: "Taylor",
		gender: "female",
		age: 25,
		address: {
			street: "Willow Street",
			number: 52,
			house: false,
		},
		role: "Sales Associate",
	},
	{
		userName: "Jack",
		lastName: "Anderson",
		gender: "male",
		age: 29,
		address: {
			street: "Spruce Avenue",
			number: 78,
			house: true,
		},
		role: "DevOps Engineer",
	},
	{
		userName: "Karen",
		lastName: "Thomas",
		gender: "female",
		age: 37,
		address: {
			street: "Chestnut Street",
			number: 65,
			house: false,
		},
		role: "Finance Manager",
	},
	{
		userName: "Leo",
		lastName: "Harris",
		gender: "male",
		age: 22,
		address: {
			street: "Fir Lane",
			number: 10,
			house: true,
		},
		role: "Data Analyst",
	},
]

users.forEach((user) => {
	document.querySelector(".container").innerHTML += `
	<article class="card">
						<div class="card-image">
							<img src="./assets/${
								user.gender == "male" ? "02" : "01"
							}.jpg" alt="user name" />
							<span class="card-title">${user.userName}</span>
						</div>

						<div class="card-content">
							<ul class="list-group">
								<li class="list-group-item"><strong>Name:</strong>${user.userName}</li>
								<li class="list-group-item"><strong>Age:</strong>${user.age}</li>
								<li class="list-group-item">
									<strong>Address:</strong> ${user.address.number} ${user.address.street}
									<img class="list-group-img" src="./assets/${
										user.address.house ? "house" : "apart"
									}.svg" alt="" />
								</li>
								<li class="list-group-item">
									<strong>Role:</strong> ${user.role}
								</li>
							</ul>
						</div>
					</article>`
})
