import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteInfo } from '../../blog.interface';
import { BlogService } from '../../services/blogServices';

@Component({
  selector: 'app-new-sletter',
  imports: [CommonModule,RouterModule],
  templateUrl: './new-sletter.html',
  styleUrl: './new-sletter.css',
})
export class NewSletter implements OnInit 
{
siteData!:SiteInfo;
// masfofa whmeea l sor el msoren lanha msh mogoda  

  photographers = [
    { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop' },
    { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop' },
    { img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop' }
  ];
  constructor (private blogService:BlogService) {}
  ngOnInit():void {
    this.siteData= this.blogService.getSiteInfo(); 
  }
  subscribe(emilInput:HTMLInputElement) {
    if(emilInput.value) {
      console.log('sending to service: ', emilInput.value);
    emilInput.value = '';
    }
  }
}