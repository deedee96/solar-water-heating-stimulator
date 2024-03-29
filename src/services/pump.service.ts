import { Injectable } from '@angular/core';
import { WaterStorage } from './water-storage.service';

@Injectable({ providedIn: 'root' })
export class PumpService {
    maxTemp: number;
    constructor(waterStorage: WaterStorage) {
        waterStorage.tempChange.subscribe((_t) => {
            if (_t && _t >= this.maxTemp) {
                waterStorage.decreaseTemp(50);
            }
        })
    }

    setMax(n: number) {
        this.maxTemp = n;
    }
}