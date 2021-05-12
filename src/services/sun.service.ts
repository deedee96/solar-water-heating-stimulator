import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SunService {
    isSunny: boolean;
    hourObservable: BehaviorSubject<any>;
    dayDoneObservable: BehaviorSubject<any>;
    currentHour: number;
    constructor() {
        this.isSunny = false;
        this.hourObservable = new BehaviorSubject<any>(null);
        this.dayDoneObservable = new BehaviorSubject<any>(null);
    }

    async startDay(): Promise<void> {
        this.currentHour = 0;
        while (this.currentHour < 24) {
            // Assuming sun hour from 8AM - 4PM
            if (this.currentHour >= 8 && this.currentHour < 17) {
                this.isSunny = Math.random() < 0.8; // assuming I live in a very sunny place
            } else {
                if (this.isSunny) {
                    this.isSunny = false;
                }
            }
            await this.timeout(2000);
            this.currentHour++;
            this.hourObservable.next(this.currentHour);
        }
        this.dayDoneObservable.next(true);
    }

    public getCurrentHour(): number {
        return this.currentHour;
    }
    public getSunStatus(): boolean {
        return this.isSunny;
    }

    private timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}