import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    readonly applicationConfig = applicationConfigMock;

    switchTemplate = false;
    closeTemplate = true;

    constructor() {
        setTimeout(() => {
            this.switchTemplate = !this.switchTemplate;
            // or
            this.closeTemplate = !this.closeTemplate;
        }, 2000);
        setTimeout(() => {
            this.switchTemplate = !this.switchTemplate;
            // or
            this.closeTemplate = !this.closeTemplate;
        }, 4000);
        setTimeout(() => {
            this.switchTemplate = !this.switchTemplate;
            // or
            this.closeTemplate = !this.closeTemplate;
        }, 6000);
    }
}
