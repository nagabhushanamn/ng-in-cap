
import { AbstractControl } from '@angular/forms'

import Filter from 'bad-words'
let filter = new Filter();


let badWord = (control: AbstractControl): { [key: string]: any } | null => {
    let body = control.value;
    let isBad = filter.isProfane(body)
    if (isBad)
        return { isBad: true }
    else
        return null
}
export { badWord };