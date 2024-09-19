import { TestBed } from '@angular/core/testing';

import { DatosAppService } from './datos-app.service';

describe('DatosAppService', () => {
    let service: DatosAppService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DatosAppService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
