
import { Post } from './../../blog.interface'; 
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../../services/blogServices';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-postdetails',
  standalone: true,            
  imports: [CommonModule, RouterModule], 
  templateUrl: './postdetails.html',     
  styleUrl: './postdetails.css',        
})
export class Postdetails implements OnInit {
  //  Injecting elservices elmosa3din 
  private routes = inject(ActivatedRoute); // 3ashan na3raf el slug mn el URL
  private blogService = inject(BlogService); // 3ashan ngeeb el data mn el service
  private cdr = inject(ChangeDetectorRef); // 3ashan n2ol le Angular ya3mel update lel shasha
  private sanitizer = inject(DomSanitizer); // 3ashan el aman w 3ard el-HTML el gdeed

  //==> Defining Variables
  Post: Post | undefined; // Da el post el 7ali
  RelatedPosts: Post[] = []; // El maqalat el moqtra7a eli ta7t
  formattedContent: SafeHtml = ''; // El content ba3d el tazbeet bel-icons
  tocltems: { id: string; title: string }[] = []; // Listet el fahras  Table of Contents 

  // El function de bt run awel ma el saf7a t open
  ngOnInit() {
    // subscribe 3ashan lw el slug it3ayar  el data  kman ttghayar
    this.routes.paramMap.subscribe((params) => {
      const slug = params.get('slug'); // Benakhod el slug mn el link
      this.Post = this.blogService.getPostBySlug(slug); // Bnnady el service ngeeb el post

      if (this.Post) {
        //  ==>1 Ben zabat el content bel icons w el H2
        this.renderProfessionalContent(this.Post.content); 
        
        // ==>2 Bengeeb related posts w n shel el post el mawgod filter
        this.RelatedPosts = this.blogService.getpostByPage(1, 10)
          .filter(p => p.slug !== slug)
          .slice(0, 3); // Ben5tar awel 3 bas
      }
      
      // Bentall3 el user l fo2 awel ma el maqal yftah
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // De el function eli b t7awel el nas el 3ady  le HTML shek
  renderProfessionalContent(content: string) {
    this.tocltems = []; // Bnfaddi ellist f elawel
    let processedHtml = content; 

    // Regex 3ashan ydawar 3ala ay satr awelo ##  H2
    const h2Regex = /^##\s+(.*)$/gm;
    let index = 0;

    // Benshil el ## w n7ot elDesign elgdeed Orange Icon + ID
    processedHtml = processedHtml.replace(h2Regex, (match, titleText) => {
      const sectionId = `section-${index}`; // Unique ID 3ashan el TOC
      this.tocltems.push({ id: sectionId, title: titleText.trim() }); // Bndef el3enwan lelfehrs

      // ElStyle elgdeed le H2
      const htmlStyle = `
        <h2 id="${sectionId}" class="article-heading">
          <span class="heading-icon"><i class="fa-solid fa-camera"></i></span>
          ${titleText.trim()}
        </h2>`;
      
      index++;
      return htmlStyle;
    });

    // Ben7awel elfrawat Paragraphs le klam mtnassaqa
    processedHtml = processedHtml.split('\n\n').map(p => {
      if (!p.trim().startsWith('<h2')) { // Law msh 3enwa  5alleh paragraph 3adi
        return `<p class="article-paragraph">${p.trim()}</p>`;
      }
      return p;
    }).join('');

    //  Bn7alel el HTML da Safe  3ashan Angular yrda y3rdw
    this.formattedContent = this.sanitizer.bypassSecurityTrustHtml(processedHtml);
    
    // bngber el angular yrag3 el saf7a 3shan ezhr el ta38erat forn
    this.cdr.detectChanges();
  }
}