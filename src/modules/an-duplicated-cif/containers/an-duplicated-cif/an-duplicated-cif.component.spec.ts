import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AnDuplicatedCifComponent } from './an-duplicated-cif.component';

@Component({
    template: `
        <sb-an-duplicated-cif [someInput]="someInput" (someFunction)="someFunction($event)"></sb-an-duplicated-cif>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('AnDuplicatedCifComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: AnDuplicatedCifComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, AnDuplicatedCifComponent],
            imports: [NoopAnimationsModule],
            providers: [],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponentDE = fixture.debugElement;
        hostComponentNE = hostComponentDE.nativeElement;

        componentDE = hostComponentDE.children[0];
        component = componentDE.componentInstance;
        componentNE = componentDE.nativeElement;

        fixture.detectChanges();
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sb-an-duplicated-cif')).toEqual(jasmine.anything());
    });
});