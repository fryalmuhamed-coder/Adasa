import { CommonModule } from '@angular/common';
import { Category } from './../../blog.interface';
import { BlogService } from './../../services/blogServices';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-border',
  imports: [CommonModule,RouterModule],
  templateUrl: './border.html',
  styleUrl: './border.css',
})
export class Border  implements OnInit{
  private BlogService=inject(BlogService)
  Category:Category[]=[]
  ngOnInit() {
    this.BlogService.getAllCategories()  }
onSearch(event:any){
 const value=event.target.value;
 console.log('searching',value)
}}

