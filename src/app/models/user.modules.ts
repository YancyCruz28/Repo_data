export class User{
    //atributos y tipos
        _id: string
        firstName: String
        lastName: String
        email: String
        password: String
        isAdmin: Boolean

        constructor (_id = "", firstName = "",  lastName = "", email = "", password = "", isAdmin = true || false ) {
            this._id = _id
            this.firstName = firstName
            this.lastName = lastName
            this.email = email
            this.password = password
            this.isAdmin = true || false

        }
}