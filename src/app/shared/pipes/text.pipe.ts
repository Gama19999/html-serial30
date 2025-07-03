import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text',
  standalone: false
})
export class TextPipe implements PipeTransform {

  /**
   * Styles the text based on the selected mode
   * @param value Text to stylize
   * @param mode String indicating how to stylize text:<br>
   * <b>capFirst:</b> Just capitalize the first word<br>
   * <b>capAll:</b> Capitalize each word<br>
   * <b>uppAll:</b> Convert all words to uppercase<br>
   */
  transform(value: string, mode?: 'capFirst' | 'capSentence' | 'capAll' | 'uppAll'): string {
    let mod: string = value;
    mod = mode === 'capFirst' ? this.capFirst(value) :
          mode === 'capSentence' ? this.capSentence(value) :
          mode === 'capAll' ? this.capAll(value) :
          mode === 'uppAll' ? value.toUpperCase() :
          mod;
    return mod;
  }

  private capFirst = (value: string): string => value.charAt(0).toUpperCase() + value.substring(1);

  private capSentence(value: string): string {
    let mod = '';
    for (let p of value.split('.')) mod += this.capFirst(p) + '.';
    return mod.substring(0, mod.length - 1);
  }

  private capAll(value: string): string {
    let mod = '';
    for (let w of value.split(' ')) mod += this.capFirst(w);
    return mod;
  }

}
