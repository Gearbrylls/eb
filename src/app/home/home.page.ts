import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  currentWeek = this.getWeek();

  currentUser: Person = {
    id: "1",
    name: "Steffen",
    lastname: "Vetrhus"
  }

  instructor1: Person = {
    id: "2",
    name: "Joachim",
    lastname: "Vetrhus"
  }

  instructor2: Person = {
    id: "3",
    name: "Kristin",
    lastname: "Birkeland"
  }

  sessions: Session[] = [
    {
      name: "Trening 1",
      id: "4",
      start: new Date().toLocaleString("nb-NO", {weekday: "long", hour: "2-digit", minute: "2-digit"}),
      end: new Date().toLocaleString(),
      participants: [],
      slots: 14,
      instructor: this.instructor1,
      currentUserAlreadySigned: false
    },
    {
      name: "Trening 2",
      id: "5",
      start: new Date().toLocaleString(),
      end: new Date(),
      participants: [],
      slots: 14,
      instructor: this.instructor2,
      currentUserAlreadySigned: false,
    },
    {
      name: "Trening 3",
      id: "6",
      start: new Date().toLocaleString(),
      end: new Date(),
      participants: [],
      slots: 14,
      instructor: this.instructor1,
      currentUserAlreadySigned: false,
    },
    {
      name: "Trening 4",
      id: "7",
      start: new Date().toLocaleString(),
      end: new Date(),
      participants: [],
      slots: 14,
      instructor: this.instructor2,
      currentUserAlreadySigned: false
    }
  ]

  selectedSession;

  signUp(session: Session) {
    session.currentUserAlreadySigned = true;
    session.participants.push(this.currentUser.id)
  }

  signOf(session: Session) {
    session.currentUserAlreadySigned = false;
    session.participants = session.participants.filter(id => id !== this.currentUser.id);
  }

  showNextWeek() {
    this.currentWeek = this.getNextWeek();
  }

  showPreviousWeek() {
    this.currentWeek = this.getPreviousWeek();
  }

  public getWeek() {
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
  }

  public getNextWeek() {
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 2 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
  }

  public getPreviousWeek() {
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
  }

}

export interface Session extends Entity {
  name: string;
  start: any;
  end: any;
  participants: string[];
  slots: number;
  instructor: Person;
  currentUserAlreadySigned: boolean;
}

export interface Person extends Entity {
  name: string;
  lastname: string;
}

export interface Entity {
  id: string;
}
