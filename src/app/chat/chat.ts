import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat implements OnInit {
  private _http = inject(HttpClient);
  userName= '';
  messageText = '';
  messages: any[] = [];
  

  ngOnInit(): void {
    this.userName = prompt("Enter Your Name ") || "Guest";
    setInterval(() => {
      this.getChat();
    }, 2000);
  }


  sendChat(): void {
    const newData = {
      username: this.userName,
      message: this.messageText
    };
    this._http.post('http://localhost/my-project-php/chatApp/sendMessage.php', newData).subscribe({
      next: (response) => {
        console.log('Message sent successfully', response);
        this.messageText = '';
      },
      error: (error) => console.error('Error sending message', error)
    })
  }

getChat(): void {
    this._http.get<any[]>('http://localhost/my-project-php/chatApp/getMessage.php').subscribe({
      next: (data) => {
        this.messages = data;
      },
      error: (error) => console.error('Error retrieving messages', error)
    });
  }


}
