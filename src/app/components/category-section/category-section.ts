import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blogServices';
import { Category } from './../../blog.interface';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-section',
  imports: [CommonModule,RouterModule],
  templateUrl: './category-section.html',
  styleUrl: './category-section.css',
})
export class CategorySection implements OnInit{
  Categorys:Category[]=[];
  constructor(private blogService:BlogService) {
  
  }
  ngOnInit(): void {
    this.Categorys=this.blogService.getAllCategories();
  }
  

}
