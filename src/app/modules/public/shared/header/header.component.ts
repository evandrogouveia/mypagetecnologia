import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  scrollPosition = 0;
  toggled = true;
  retract = 'toggled';
  headerData: any = [];

  inputLoading = false;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    //FIXAR HEADER
    this.renderer.listen(window, 'scroll', ($event) => {
      this.scrollPosition = window.scrollY;
    });
  }

  toggleSidebar() {
    this.toggled = !this.toggled;
    if (this.toggled === false) {
      this.retract = '';
    } else {
      this.retract = 'toggled';
    }
  }

}
