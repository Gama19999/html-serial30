import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const appName = document.getElementsByClassName('welcome-app-name').item(0)!;
    const bgShadow = document.getElementsByClassName('welcome-bg-shadow-card').item(0)!;
    appName.addEventListener('mousemove', function (event: any) {
      const elem = <HTMLElement> appName;
      let coorX = ( (elem.clientWidth / 2) - (event.pageX - elem.offsetLeft) );
      let coorY = ( (elem.clientHeight / 2) - (event.pageY - elem.offsetTop) );
      let degX  = ( ( coorY / (elem.clientHeight / 2) ) * 20 ); // max. degree = 10
      let degY  = ( ( coorX / (elem.clientWidth / 2) ) * -20 ); // max. degree = 10
      if (window.innerWidth > 1024) {
        (<HTMLSpanElement> appName).style.transform = `perspective(1600px) rotateY(${degY+5}deg) rotateX(${degX}deg)`;
        (<HTMLSpanElement> bgShadow).style.transform = `perspective(1600px) scale(1) rotateY(${degY}deg) rotateX(${degX}deg)`;
      }
    });
    appName.addEventListener('mouseout', () => (<HTMLSpanElement> appName).style.transform = 'perspective(1600px)');
    appName.addEventListener('mouseout', () => (<HTMLSpanElement> bgShadow).style.transform = 'perspective(1600px)');
  }

  openMenu() {
    const menuBtn = document.getElementsByClassName('welcome-menu').item(0)!;
    let isOpen = menuBtn.classList.contains('pi-times');
    menuBtn.classList.remove(isOpen ? 'pi-times' : 'pi-bars');
    menuBtn.classList.add(isOpen ? 'pi-bars' : 'pi-times');
  }

}
