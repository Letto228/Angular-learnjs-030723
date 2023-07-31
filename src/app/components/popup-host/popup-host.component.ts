import {Component, HostBinding, Input, TemplateRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @Input() templateRef: TemplateRef<unknown> | null = null;

    @HostBinding('style.display') get show() {
        return this.templateRef !== null ? 'flex' : 'none';
    }
}
