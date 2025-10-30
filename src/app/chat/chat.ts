import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat implements OnInit {
  userName:string = '';
  
  ngOnInit(): void {
   
  }


}
