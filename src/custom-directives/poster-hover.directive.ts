import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';
import { wrapListenerWithPreventDefault } from '@angular/core/src/render3/instructions';
import { ActivatedRoute } from '@angular/router';

@Directive({
    selector: '[appPosterHover]'
})
export class PosterHoverDirective implements OnInit {
    @Input() rating: number;
    @Input() genres: string;
    posterInner: string;
    info: HTMLElement;
    imageElement: any;
    constructor(private elementRef: ElementRef, private renderer: Renderer2,private activatedRoute: ActivatedRoute) { }
    ngOnInit() {
        this.info = this.renderer.createElement('figcaption');
        this.posterInner = this.generatePosterinfo();
        this.info.innerHTML = this.posterInner;

        this.imageElement = this.elementRef.nativeElement.firstElementChild;
        this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
        this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative');
        this.renderer.setStyle(this.info, 'padding-top', '50%');
        this.renderer.setStyle(this.info, 'position', 'absolute');
        this.renderer.setStyle(this.info, 'background', 'transparent');
        this.renderer.setStyle(this.info, 'left', '0');
        this.renderer.setStyle(this.info, 'bottom', -`${this.elementRef.nativeElement.height}`);
        this.renderer.setStyle(this.info, 'visibility', 'hidden');
        this.renderer.appendChild(this.elementRef.nativeElement, this.info);
    }

    generatePosterinfo() {
        const genres = `<br><strong class="primary-color">Genres</strong> : ${this.genres.split(',').slice(0, 2).join(',')}`;
        let rating;
        if (this.rating) {
            rating = `<strong class="primary-color">Rating</strong> : ${this.rating} / 10`;
        } else {
            rating = `<strong class="primary-color">Rating</strong> : Unavailable`;
        }
        const viewButton = `<br><button class="openMovie btn btn-dark">View</button>`;
        return rating + genres + viewButton;
    }

    @HostListener('mouseenter') showInfo(event) {
        this.renderer.setStyle(this.imageElement, 'opacity', 0.1);
        this.renderer.setStyle(this.imageElement.parentNode, 'border', '4px solid #de1e30');
        this.renderer.setStyle(this.imageElement.parentNode, 'border-radius', '3px');
        this.renderer.setStyle(this.info, 'visibility', 'visible');
    }

    @HostListener('mouseleave') hideInfo(event) {
        this.renderer.setStyle(this.imageElement, 'opacity', 1);
        this.renderer.setStyle(this.imageElement.parentNode, 'border', 'none');
        this.renderer.setStyle(this.info, 'visibility', 'hidden');
    }

}
