import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'charLimiter'
})
export class CharacterLimiter implements PipeTransform {
    transform(value: string) {
        if (value.length > 19) {
            return value.slice(0, 19) + '...';
        } else {
            return value;
        }
    }
}