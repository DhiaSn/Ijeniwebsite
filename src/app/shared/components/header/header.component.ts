import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  done: boolean = false;
  loadScripts() {
    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/js/jQuery.style.switcher.js',
      'assets/js/popper.min.js',
      'assets/js/slick.js',
      'assets/js/custom.js',
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
    this.done = true;
  }
  constructor() {}

  ngOnInit(): void {
    this.loadScripts();
  }
}
