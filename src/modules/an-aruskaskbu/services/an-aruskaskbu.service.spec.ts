import { TestBed } from '@angular/core/testing';

import { AnAruskaskbuService } from './an-aruskaskbu.service';

describe('AnAruskaskbuService', () => {
    let anAruskaskbuService: AnAruskaskbuService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnAruskaskbuService],
        });
        anAruskaskbuService = TestBed.inject(AnAruskaskbuService);
    });

    describe('getAnAruskaskbu$', () => {
        it('should return Observable<AnAruskaskbu>', () => {
            anAruskaskbuService.getAnAruskaskbu$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
