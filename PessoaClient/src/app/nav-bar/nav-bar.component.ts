import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  menu: string[] = ['Lista', 'Cadastro', 'Missão', 'Fale conosco'];
  current: string = 'Lista';

  constructor(private breakpointObserver: BreakpointObserver) {}

  changeContent(content: string) {
    this.current = content;
  }

}
