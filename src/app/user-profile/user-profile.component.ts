import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/User';
import { UserSerivce } from 'app/User.Service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  //user: User;

  constructor(

  ) {}

  ngOnInit(): void {
    //this.getUser();
  }

/*  getUser(): void {
    const cedula = 1235
    this.userService.getUsuario(cedula)
      .subscribe(user => this.user = user);
  }

  
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
  */
}
