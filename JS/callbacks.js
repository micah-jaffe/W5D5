class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    
    // 3. Call printTime.
  
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.  
    
    setInterval(this._tick.bind(this), 1000);
  }


  printTime() {
    // Format the time in HH:MM:SS
    const time = `${this.hours}: ${this.minutes}: ${this.seconds}`;
    // Use console.log to print it.
    console.log(time);
  }

  _tick() {
    console.log(this);
    // 1. Increment the time by one second.
    this.seconds += 1;
    
    if (this.seconds > 59) {
      this.minutes += 1;
      this.seconds = 0;
    }
    if (this.minutes > 59) {
      this.hours += 1;
      this.minutes = 0;
    }
    // 2. Call printTime.
    // console.log(this);
    this.printTime();
  }
}

const clock = new Clock();