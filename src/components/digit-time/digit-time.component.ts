import {
    Component,
    Input,
} from "@angular/core";

@Component({
    selector: "digit-time",
    templateUrl: "digit-time.component.html",
    styleUrls: ["digit-time.component.scss"]
})
export class DigitTimeComponent {
    @Input() currentHour: number;
    @Input() isSunny: boolean;
    icon: string;

    getIcon() {
        if (this.isSunny) {
            this.icon = 'wb_sunny';
        } else {
            this.icon = 'cloud';
        }
        if (this.currentHour < 8 || this.currentHour >= 17) {
            this.icon = 'nightlight_round';
        }
        return this.icon;
    }
}
