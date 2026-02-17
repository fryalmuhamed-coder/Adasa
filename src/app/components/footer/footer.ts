
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blogServices';
import { CommonModule } from '@angular/common';
import { Category, SiteInfo} from '../../blog.interface';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [ CommonModule ,RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer  implements OnInit {
public footerData!:SiteInfo;
public Categories:Category[]=[];
constructor(private blogService:BlogService) {
}

ngOnInit() {
this.footerData= this.blogService.getSiteInfo();
this.Categories= this.blogService.getAllCategories();
}
}
