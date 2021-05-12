import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WaterStorage {
    currentWaterTemp: number = 0;
    waterVolumn: number = 0;
    effeciency: number = 0;
    tempChange: BehaviorSubject<any>;
    constructor() {
        this.tempChange = new BehaviorSubject(null);
    }

    public decreaseTemp(t) {
        this.currentWaterTemp -= t;
    }

    setVolumn(v : number) {
        this.waterVolumn = v;
    }
    getVolumn() {
        return this.waterVolumn;
    }

    setTemp(t : number) {
        this.currentWaterTemp = t;
        this.tempChange.next(t);
    }
    getTemp() {
        return this.currentWaterTemp;
    }

    getEffeciency() {
        return this.effeciency;
    }

    setEffeciency(n: number) {
        this.effeciency = n;
    }
}