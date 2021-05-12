import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
  ViewChildren,
  OnInit
} from "@angular/core";
import { WaterStorage } from "src/services/water-storage.service";

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

  // ngAfterViewInit() {
  //   if (this.endNumber) {
  //     if (this.animatedDigit) {
  //       this.animateCount();
  //     }
  //   }
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes["endNumber"]) {
  //     this.animateCount();
  //   }
  // }
}
