import {
    Component,
    ElementRef,
    Input,
    OnChanges,
    Renderer2,
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
    @Input() templateRef: TemplateRef<unknown> | null = null;

    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport!: ViewContainerRef;

    constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) {}

    ngOnChanges({templateRef}: SimpleChanges): void {
        if (templateRef) {
            this.insertView();
        }
    }

    insertView() {
        this.viewport.clear();

        if (this.templateRef) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
            this.viewport.createEmbeddedView(this.templateRef);

            return;
        }

        this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    }
}
