import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Blog } from './components/blog/blog';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { NotFound } from './components/not-found/not-found';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Blog,Footer,Home,Navbar,NotFound,Blog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Adas');
}
