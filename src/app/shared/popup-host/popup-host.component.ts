import {
    Component,
    Input,
    TemplateRef,
    ViewContainerRef,
    ViewChild,
    OnChanges,
    SimpleChanges,
    AfterViewInit,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent implements OnChanges, AfterViewInit {
    @Input() template: TemplateRef<unknown> | null = null;

    @ViewChild('viewport', {read: ViewContainerRef})
    private readonly viewport!: ViewContainerRef;

    ngAfterViewInit(): void {
        if (this.template) {
            this.insertPopupTemplate(this.template);
        }
    }

    ngOnChanges({template}: SimpleChanges): void {
        if (template) {
            this.template ? this.insertPopupTemplate(this.template) : this.viewport?.clear();
        }
    }

    private insertPopupTemplate(template: TemplateRef<unknown>) {
        this.viewport?.clear();
        this.viewport?.createEmbeddedView(template);
    }
}
