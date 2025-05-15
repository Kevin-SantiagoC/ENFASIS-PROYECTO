import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'header-front',
  imports: [RouterLink],
  templateUrl: './header-front.component.html',
  styleUrl: './header-front.component.css'
})
export class HeaderFrontComponent {

}
