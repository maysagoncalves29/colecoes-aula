function getAdmins(map) {
    let Admins = []
    for([key, value] of map) {
        if(value === 'Admin') {
            Admins.push(key)
        }
    }
    return Admins;

}

const usuarios = new Map();

usuarios.set('Maysa', 'Admin');
usuarios.set('Ester', 'Admin');
usuarios.set('Karol', 'User');
usuarios.set('Mariana', 'Admin');


console.log(getAdmins(usuarios));

//.get 
// .set() para adicionar valor no maps
