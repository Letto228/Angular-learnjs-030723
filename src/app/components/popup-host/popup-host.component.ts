import {
    Component,
    Input,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent implements OnChanges {
    @Input() popupHost: TemplateRef<unknown> | null = null;

    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport!: ViewContainerRef;

    ngOnChanges({popupHost}: SimpleChanges): void {
        if (popupHost) {
            this.insertView();
        }
    }

    insertView() {
        this.viewport.clear();

        if (this.popupHost) {
            this.viewport.createEmbeddedView(this.popupHost);
        }
    }
}
