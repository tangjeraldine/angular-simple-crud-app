import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

// const enterTransition = transition(':enter', [
//   style({
//     opacity: 0,
//   }),
//   animate(
//     '1s ease-in',
//     style({
//       opacity: 1,
//     })
//   ),
// ]);

// const leaveTransition = transition(':leave', [
//   style({
//     opacity: 1,
//   }),
//   animate(
//     '1s ease-in',
//     style({
//       opacity: 0,
//     })
//   ),
// ]);

// const appear = trigger('appear', [enterTransition]);

// const disappear = trigger('disappear', [leaveTransition]);

// const toggling = trigger('toggling', [
//   state('open', style({ opacity: 1 })),
//   state('closed', style({ opacity: 0 })),
//   transition('open=>*', [animate('2s ease-out')]),
//   transition('closed=>open', [animate('2s ease-in')]),
// ]);
//! (*) --> means wildcard, can be any state

const toggling = trigger('disappear', [
  state('in', style({ opacity: 1, backgroundColor: 'green' })),
  transition('void=>*', [animate('1s ease-out')]),
  transition('*=>void', [animate('1s ease-out'), style({ opacity: 0 })]), 
]);

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
  animations: [toggling],
})
export class AnimeComponent implements OnInit {
  show: boolean = true;

  toggle() {
    this.show = !this.show;
  }

  animstart(event: any) {
    console.log('animation started', event);
  }

  animdone(event: any) {
    console.log('animation done', event);
  }

  constructor() {}

  ngOnInit(): void {}
}
