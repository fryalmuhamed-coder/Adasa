
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';
import { NotFound } from './components/not-found/not-found';
import { Postdetails } from './components/postdetails/postdetails';
import { Border } from './components/border/border';
import { CategorySection } from './components/category-section/category-section';
import { FeaturedArticels } from './components/featured-articels/featured-articels';
import { Footer } from './components/footer/footer';
import { LatestPosts } from './components/latest-posts/latest-posts';
import { NewSletter } from './components/new-sletter/new-sletter';
import { Postcard } from './components/postcard/postcard';


export const routes: Routes = [
    { path:'home',component:Home},
    {path:'blog',component:Blog},
    { path:'blog/:id',component:Blog},
    {path:'Post/:slug',component:Postdetails},
    {path:'Post',component:Postdetails},
    {path:'border',component:Border},
    {path:'category',component:CategorySection},
    {path:'featurred',component:FeaturedArticels},
    {path:'footer',component:Footer},
    {path:'latestPost',component:LatestPosts},
    {path:'newSletter',component:NewSletter},
    {path:'postcard',component:Postcard},
    {path:'postdeails',component:Postdetails},
    { path:'', redirectTo: '/home', pathMatch: 'full',},
    { path:'**',component:NotFound},

];
