import { Component } from '@angular/core';
interface Task {
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  tasks: Task[] = [];
  newTask: string = '';
  showCompleted: boolean = false;

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({
        title: this.newTask,
        completed: false,
      });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  filteredTasks(): Task[] {
    if (this.showCompleted) {
      return this.tasks.filter((task) => task.completed);
    } else {
      return this.tasks;
    }
  }
  updatetitle(task: Task, newname: string): void {
    task.title = newname;
  }
  msg: any;
  predefinedOTP: any;
  text1: any;
  text2: any;
  text3: any;
  text4: any;
  isOTPComplete: boolean = false;
  onKeyUp(event: any, previous: any, current: any, next: any) {
    var length = current.value.length;
    var maxlength = current.getAttribute('maxlength');
    if (length == maxlength) {
      if (next != '') {
        next.focus();
        this.isOTPComplete = true;
      }
    }
    if (event.key === 'Backspace') {
      if (previous != '') {
        previous.focus();
      }
    }
  }
  generateOTP() {
    this.predefinedOTP = Math.floor(1000 + Math.random() * 9000).toString();
  }

  verifyOTP() {
    const combinedValue = `${this.text1}${this.text2}${this.text3}${this.text4}`;
    console.log('Combined Value:', combinedValue);
    this.text1 = '';
    this.text2 = '';
    this.text3 = '';
    this.text4 = '';
    this.isOTPComplete = false;
    // Now, you can compare the combined value with the predefined OTP
    if (combinedValue === this.predefinedOTP) {
      this.msg = 'OTP is verified successfully!';
      setTimeout(() => {
        this.msg = '';
      }, 5000);
    } else {
      this.msg = 'OTP verification failed. Please try again.';
      setTimeout(() => {
        this.msg = '';
      }, 5000);
    }
  }
}
