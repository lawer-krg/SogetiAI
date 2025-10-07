 
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  input = '';
  messages: { sender: string; text: string }[] = [];
  loading = false;

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (!this.input.trim()) return;
    const userMsg = { sender: 'user', text: this.input };
    this.messages = [...this.messages, userMsg];
    this.loading = true;
    this.http.post<any>('http://localhost:8000/chat', { message: this.input }).subscribe({
      next: (data) => {
        this.messages = [...this.messages, { sender: 'ai', text: data.response }];
        this.loading = false;
      },
      error: () => {
        this.messages = [...this.messages, { sender: 'ai', text: 'Error contacting backend.' }];
        this.loading = false;
      }
    });
    this.input = '';
  }
}
