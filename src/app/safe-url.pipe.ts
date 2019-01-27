import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  // Inject DomSanitizer in the constructor and create an instance of it
  constructor(private sanitizer: DomSanitizer) { }

  /**
   * Now as we have seen, we will receive an url
   * in the @param value that's why
   * the @method bypassSecurityTrustResourceUrl is used.
   * DomSanitizer is used to prevents XSS(Cross-site Scripting) in our app**/

  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}

/**
*    Title: Angular Safe Pipe implementation
*    Author: Swarna Kishore
*    Date: Aug 10, 2017
*    Availability: https://medium.com/@swarnakishore/angular-safe-pipe-implementation-to-bypass-domsanitizer-stripping-out-content-c1bf0f1cc36b
*/
