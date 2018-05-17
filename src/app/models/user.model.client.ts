export class User {
	_id: string;
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	email: string;

	constructor(_id, username, password, firstName, lastName, email) {
		this._id = _id;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
}