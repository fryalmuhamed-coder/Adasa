import { Injectable } from '@angular/core';
import { AdasData } from '../data'; 
import { Root, Post, SiteInfo, Category } from '../blog.interface'; 
import { NotFound } from '../components/not-found/not-found';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private allData = AdasData; 

  //ygep el 28 makal
  getAllPosts(): Post[] {
    return this.allData.posts;
  }

  // ygep makal wa7d bel id
  getPostById(id: number): Post | undefined {
    return this.allData.posts.find((post: Post) => post.id === id);
  }

  // ygep m3lomat el mawk3 
  getSiteInfo(): SiteInfo {
    return this.allData.siteInfo;
  }

  // el tasnefat
  getAllCategories(): Category[] {
    return this.allData.categories;
  }
// bn2s el data 3ashan ttal3 6makalat 7asp rkm el saf7a 
  getpostByPage(page: number, pageSize: number = 6): Post[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.allData.posts.slice(startIndex, endIndex);
  }
// egmaly 3add el makalat 3ashan  n7sp 3add el sf7at
  getTotalPostCount(): number {
    return this.allData.posts.length;
  }

  getRoot(): Root {
    return this.allData;
  }
  getPostBySlug(slug:string|null):Post|undefined{
    if (!slug) return undefined;
 const foundPost=this.allData.posts.find(((p:Post)=>p.slug===slug.trim().toLowerCase()));
return foundPost;

  }
}