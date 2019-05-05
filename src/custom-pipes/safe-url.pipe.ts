import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
    name: 'safeurl'
})
export class SafeURLPipe implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) {
    }
    transform(url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
