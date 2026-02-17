import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blogServices';
import { Post } from './../../blog.interface';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-latest-posts',
  imports: [CommonModule,RouterLink],
  templateUrl: './latest-posts.html',
  styleUrl: './latest-posts.css',
})

export class LatestPosts implements OnInit {
  latestPosts:Post[]=[]
  constructor(private blogService:BlogService){}
  ngOnInit(): void {
    this.latestPosts=this.blogService.getAllPosts().slice(0,3)
  }

}
