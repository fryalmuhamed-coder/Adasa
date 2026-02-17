import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { FeaturedArticels } from '../featured-articels/featured-articels';
import { CategorySection } from '../category-section/category-section';
import { LatestPosts } from '../latest-posts/latest-posts';
import { NewSletter } from '../new-sletter/new-sletter';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule ,FeaturedArticels, CategorySection,LatestPosts,NewSletter ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
