import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SunService } from './sun.service';
import { WaterStorage } from './water-storage.service';

@Injectable({ providedIn: 'root' })
export class SolarPanelService {
    panelNumbers: number;
    effeciency: number;
    power: number;
    constructor(public sunService: SunService,
        public waterStorage: WaterStorage) {
        sunService.hourObservable.subscribe((h) => {
            if (h && sunService.isSunny) {
                const tempIncreased = this.computeTempIncreaseInAnHour();
                this.waterStorage.setTemp(tempIncreased);
            }
        });
    }

    computeTempIncreaseInAnHour(): number {
       return Math.round((this.waterStorage.getEffeciency() / 100 * this.effeciency / 100 * this.power * this.panelNumbers * 3.41) / (this.waterStorage.getVolumn() * 62.42 * 0.1336) + this.waterStorage.getTemp());
    }

    setPanelNumbers(n: number) {
        this.panelNumbers = n;
    }

    setEffeciency(n: number) {
        this.effeciency = n;
    }

    setPower(n: number) {
        this.power = n;
    }
}