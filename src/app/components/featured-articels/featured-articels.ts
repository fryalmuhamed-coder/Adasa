import { Post } from './../../blog.interface';
import { BlogService } from './../../services/blogServices';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-articels',
  imports: [CommonModule,RouterModule],
  templateUrl: './featured-articels.html',
  styleUrl: './featured-articels.css',
})
export class FeaturedArticels   implements OnInit {
  FeaturedArticels:Post[]=[]
  constructor(private BlogService:BlogService) { }
ngOnInit(): void {
  // hngep kol el data mn  service
  const allposts = this.BlogService.getAllPosts();
  this.FeaturedArticels=allposts.filter(post=>post.featured===true).slice(0,3);
}
}
