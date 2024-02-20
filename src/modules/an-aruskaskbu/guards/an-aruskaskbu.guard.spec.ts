import { TestBed } from '@angular/core/testing';

import { AnAruskaskbuGuard } from './an-aruskaskbu.guard';

describe('_Template Module Guards', () => {
    let anAruskaskbuGuard: AnAruskaskbuGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnAruskaskbuGuard],
        });
        anAruskaskbuGuard = TestBed.inject(AnAruskaskbuGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anAruskaskbuGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
