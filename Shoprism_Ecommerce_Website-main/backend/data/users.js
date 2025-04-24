import bcrypt from 'bcryptjs'

const users = [
	// Admin user
	{
		name: 'Divya Reddy',
		email: 'divya@gmail.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
		isAdmin: true,
	},
	// Standard users
	{
		name: 'Sudhakar',
		email: 'sudhakar@gmail.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
	},
	{
		name: 'Sindhu',
		email: 'sindhu@gmail.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
	},
]

export default users
