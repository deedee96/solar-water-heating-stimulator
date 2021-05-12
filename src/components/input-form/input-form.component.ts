import {
  Component,
  OnInit,
} from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { PumpService } from "../../services/pump.service";
import { SolarPanelService } from "../../services/solar-panel.service";
import { SunService } from "../../services/sun.service";
import { WaterStorage } from "../../services/water-storage.service";

@Component({
  selector: "input-form",
  templateUrl: "input-form.component.html",
  styleUrls: ["input-form.component.scss"]
})
export class InputForm  implements OnInit{
  waterVolumn = new FormControl('', [Validators.required]);
  solarPanel = new FormControl('', [Validators.required]);
  solarPower = 250;
  initTemp = new FormControl('', [Validators.required]);
  maxTemp = new FormControl('', [Validators.required]);
  solarEffeciency = new FormControl('', [Validators.required, Validators.min(50), Validators.max(100)]);
  heaterEffeciency = new FormControl('', [Validators.required, Validators.min(35), Validators.max(80)]);
  constructor(public sunService: SunService,
    public waterHeater: WaterStorage,
    public solarService: SolarPanelService,
    public pump: PumpService) {
  }
  ngOnInit(): void {
    this.disableButton = false;
    this.sunService.dayDoneObservable.subscribe(v => {
      if (v) {
        this.disableButton = false;
      }
    })
  }
  public disableButton: boolean = false;


  public startStimulate(): void {
    this.disableButton = true;
    this.sunService.startDay();
    console.log("stimulating!");
    this.waterHeater.setEffeciency(this.heaterEffeciency.value);
    this.waterHeater.setTemp(this.initTemp.value);
    this.waterHeater.setVolumn(this.waterVolumn.value);
    this.solarService.setEffeciency(this.solarEffeciency.value);
    this.solarService.setPower(this.solarPower);
    this.solarService.setPanelNumbers(this.solarPanel.value);
    this.pump.setMax(this.maxTemp.value);
  }

  getErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }

    if (formControl.hasError('min') || formControl.hasError('max')) {
      return 'Must be in range'
    }
  }
}
