import {
  Component,
  ElementRef,
  Input,
  ViewChildren,
  OnInit
} from "@angular/core";
import { WaterStorage } from "../../services/water-storage.service";

@Component({
  selector: "animated-digit",
  templateUrl: "animated-digit.component.html",
  styleUrls: ["animated-digit.component.scss"]
})
export class AnimatedDigitComponent implements OnInit{
  @Input() duration: number;
  endNumber: number;
  @Input() steps: number;
  @Input() startNumber: number;
  @ViewChildren("animatedDigit") animatedDigit: ElementRef;

  constructor(public waterStorage: WaterStorage) {

  }
  ngOnInit(): void {
    this.waterStorage.tempChange.subscribe(h => {
      if (h) {
        this.endNumber = h;
      }
    });
  }
}
