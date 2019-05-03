import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'checkPoster'
})
export class ValidImageCheck implements PipeTransform {
    transform(value: any) {
        if (value) {
            value = 'https' + value.slice(value.indexOf('://'));
            return value;
        } else {
            return './assets/no-image.jpg';
        }
    }
}
