import { main } from "../index";
import { Component } from "./component";
export class Timer {
    constructor() {
        this.timer = {
            minutes: 0,
            hours: 0,
            days: 0,
            month: 0
        };
        this.calculate(main.data.exhibition.date_start);
    }

    calculate(date_string, element) {
        setInterval(() => {
            var now = new Date();
            var event = new Date(date_string);
            var timeLeft = new Date(event.getTime() - now.getTime());
            this.timer = {
                seconds: timeLeft.getSeconds(),
                minutes: timeLeft.getMinutes(),
                hours: timeLeft.getHours(),
                days: timeLeft.getDay(),
                month: timeLeft.getMonth()
            };
            this.display(main.component.navigation.about.timer);
        }, 500, date_string, element);
    };

    display(element) {
        var format = `${this.timer.month}M ${this.timer.days}D ${this.timer.hours}H ${this.timer.minutes}M ${this.timer.seconds}S`;
        element.innerText = format;
    };
};