import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';
import { wrapListenerWithPreventDefault } from '@angular/core/src/render3/instructions';

@Directive({
    selector: '[appPosterHover]'
})
export class PosterHoverDirective implements OnInit {
    @Input() rating: number;
    @Input() genres: string;
    posterInner: string;
    info: HTMLElement;
    imageElement: any;
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
    ngOnInit() {
        this.info = this.renderer.createElement('figcaption');
        this.posterInner = this.generatePosterinfo();
        this.info.innerHTML = this.posterInner;

        this.imageElement = this.elementRef.nativeElement.firstElementChild;
        this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
        this.renderer.setStyle(this.info, 'position', 'absolute');
        this.renderer.setStyle(this.info, 'top', '40%');
        this.renderer.setStyle(this.info, 'left', '10%');
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
        return rating + genres;
    }

    @HostListener('mouseenter') showInfo(event) {
        this.renderer.setStyle(this.imageElement, 'opacity', 0.1);
        this.renderer.setStyle(this.elementRef.nativeElement, 'border', '4px solid #de1e30');
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '3px');
        this.renderer.setStyle(this.info, 'visibility', 'visible');
    }

    @HostListener('mouseleave') hideInfo(event) {
        this.renderer.setStyle(this.imageElement, 'opacity', 1);
        this.renderer.setStyle(this.elementRef.nativeElement, 'border', 'none');
        this.renderer.setStyle(this.info, 'visibility', 'hidden');
    }

}
