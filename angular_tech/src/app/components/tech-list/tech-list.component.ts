import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent {

  public items1 = ['JavaScript', 'React', 'Vue Js', 'Taileind CSS'];
  public items2 = ['Styled Components', 'Saas', 'NodeJs', 'TypeScript'];
  public items3 = ['Angular', 'Java'];

}
