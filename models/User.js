const fs = require('fs');

const User = {
    fileName: './data/users.json',

    getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},

//Generar ID
    generateId: function () {
		let allUsers = this.findAll();
        //Obtengo al último usuario
		let lastUser = allUsers.pop();
		if (lastUser) {
			return lastUser.id + 1;
		}
		return 1;
	},

//Buscar a todos los usuarios

    findAll: function () {
		return this.getData();
	},

//Buscar un usuario por ID
    findById: function (id) {
        //Obtengo a todos los usuarios en un formato de array en una variable local
		let allUsers = this.findAll();
        //Permite iterar el array de usuario para identificar el mismo ID
		let userFound = allUsers.find(oneUser => oneUser.id === id);
		return userFound;
	},

//Buscar un usuario a través de otro campo

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

//Guardar al usuario

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
        id: this.generateId(),
        ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null,  ' '));
            return newUser;
    },

//Eliminar un usuario

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
}
    
}

module.exports = User;