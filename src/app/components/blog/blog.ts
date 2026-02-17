import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Imports لـ Components والـ Interfaces
import { Postcard } from '../postcard/postcard';
import { Border } from '../border/border';
import { Post, SiteInfo } from '../../blog.interface';
import { BlogService } from '../../services/blogServices';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, Border, Postcard],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit {
  private blogService = inject(BlogService);

  // elmot83erat el asasya
  allPosts: Post[] = [];
  siteInfo!: SiteInfo;

  //  Pagination  ta2sem el sf7at
  currentPage: number = 1;
  pageSize: number = 6;
  totalPostCount: number = 0;
  totalPages: number = 0;
  pagesArray: number[] = [];

  ngOnInit() {
    // agep ma3lwmat el maawq3
    this.siteInfo = this.blogService.getSiteInfo();

    // 7esap egmaly el saf7at
    this.totalPostCount = this.blogService.getTotalPostCount();
    this.totalPages = Math.ceil(this.totalPostCount / this.pageSize);

    // a3mll masfofa  (1.2.3.4)
    this.pagesArray = Array.from({ length: this.totalPages }, (_, index) => index + 1);

    //ta7mel awl saf7a 3nd el bedaya
    this.loadPage(1);
  }

  loadPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // benady el service ygep 6 makalat el saf7a de bas
      this.allPosts = this.blogService.getpostByPage(page, this.pageSize);
      // ytl3 l foq
      window.scrollTo({ top: 500, behavior: 'smooth' }); 
    }
  }
}