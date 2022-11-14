import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.modules';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){

    let response = this.userService.getUsers()

      response.subscribe((res: any) => {
        this.userService.users = res.data
        console.log(res)
      })
  }
  createUsers(form: NgForm){
    console.log(form.value)

    if (form.value._id){
      this.updateUsers(form.value)
      return
    }
    delete form.value._id // null elimina el id

    let { firstName, lastName, email, password} = form.value

    if(!firstName || !lastName || !email || !password) return alert("Diligencie por favor todos los datos")
    this.userService.createUsers(form.value).subscribe((res: any) => {
      this.getUsers()
      alert(res.msg);
      this.userService.currentUser = new User()
    })
}
  
    
    deleteUsers(id: string, firstName: string){

      let isDeleted = confirm (`Esta seguro que desea eliminar el producto "${name}"`);
  
      if (isDeleted){
  
      this.userService.deleteUsers(id).subscribe((res: any) =>{
        this.getUsers();
        alert(res.msg || 'error');
      });
      return;
      }
      return;
      }
      updateUsers(data:User){
        this.userService.updateUsers(data._id, data).subscribe((res) => {
          alert("Producto actializado")
          
          this.getUsers()
          this.userService.currentUser
        })
      }
      fillForm(user: User){
        this.userService.currentUser = user
    }
  }
