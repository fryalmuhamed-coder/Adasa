import { Post } from './../../blog.interface';
import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-postcard', 
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './postcard.html',
  styleUrl: './postcard.css',
})
export class Postcard {

  Post = input.required<Post>(); 
}