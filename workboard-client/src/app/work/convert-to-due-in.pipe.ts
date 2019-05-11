import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "convertToDueIn"
})
export class ConvertToDueInPipe implements PipeTransform {

  transform(value: Date): string {
    return this.generateString(new Date(), new Date(value));
  }

  generateString(pastTime: Date, futureTime: Date): string {
    const weeks = this.calculateWeeksDiff(pastTime, futureTime);
    const days = this.calculateDaysDiff(pastTime, futureTime);
    const hours = this.calculateHoursDiff(pastTime, futureTime);
    const minutes = this.calculateMinutesDiff(pastTime, futureTime);
    const seconds = this.calculateSecondsDiff(pastTime, futureTime);
    let retString = (pastTime <= futureTime ? "Due in " : "Overdue ");
    if (weeks !== 0) {
      retString += weeks + (weeks === 1 ? " week " : " weeks ");
      retString += ((days !== 0) ? days + (days === 1 ? " day " : " days ") : "");
    } else if (days !== 0) {
      retString += days + (days === 1 ? " day " : " days ");
      retString += ((hours !== 0) ? hours + (hours === 1 ? " hour " : " hours ") : "");
    } else if (hours !== 0) {
      retString += hours + (hours === 1 ? " hour " : " hours ");
      retString += ((minutes !== 0) ? minutes + (minutes === 1 ? " minute " : " minutes ") : "");
    } else if (minutes !== 0) {
      retString += minutes + (minutes === 1 ? " minute " : " minutes ");
      retString += ((seconds !== 0) ? seconds + (seconds === 1 ? " second " : " seconds ") : "");
    } else {
      retString += seconds + (seconds === 1 ? " second " : " seconds ");
    }
    return retString + (pastTime <= futureTime ? "" : "ago");
  }

  calculateWeeksDiff(now: Date, time: Date): number {
    const diff = Math.abs(time.getTime() - now.getTime());
    return Math.floor(diff / 604800000);
  }

  calculateDaysDiff(now: Date, time: Date): number {
    const diff = Math.abs(time.getTime() - now.getTime());
    return Math.floor(diff % 604800000 / 86400000);
  }

  calculateHoursDiff(now: Date, time: Date): number {
    const diff = Math.abs(time.getTime() - now.getTime());
    return Math.floor(diff % 86400000 / 3600000);
  }

  calculateMinutesDiff(now: Date, time: Date): number {
    const diff = Math.abs(time.getTime() - now.getTime());
    return Math.floor(diff % 3600000 / 60000);
  }

  calculateSecondsDiff(now: Date, time: Date): number {
    const diff = Math.abs(time.getTime() - now.getTime());
    return Math.floor(diff % 60000 / 1000);
  }
}
