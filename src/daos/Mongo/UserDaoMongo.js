import usersModel from "./models/users.model.js";

class UserDaoMongo {

    
    async getUsers(filter){
        return await usersModel.find({filter})
    }

    async getUserBy (filter){
        return await usersModel.findOne(filter)
    }
  
    async createUser(userNew){
        
        return await usersModel.create(userNew)
    }
    async updateUser(uid, userToUpdate) {
        try {
          // Si userToUpdate incluye la propiedad 'password', significa que se está actualizando la contraseña
          if (userToUpdate.password) {
            // Actualizar la contraseña del usuario utilizando su ID
            await usersModel.findByIdAndUpdate(uid, { password: userToUpdate.password });
            return { message: 'Contraseña actualizada correctamente.' };
          } else {
            // Si no se está actualizando la contraseña, proceder con la actualización del usuario como de costumbre
            return await usersModel.findByIdAndUpdate(uid, userToUpdate);
          }
        } catch (error) {
          throw error;
        }
      }
    // async updateUser(uid, userToUpdate){
    //     return await usersModel.findByIdAndUpdate({_id: uid}, userToUpdate)
    // }
    async deleteUser(uid){
        return usersModel.findByIdAndDelete({_id: uid})
    } 
}

export default UserDaoMongo

