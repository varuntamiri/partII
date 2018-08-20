import { async, ComponentFixture, TestBed } from
    '@angular/core/testing';
import { BannerComponent } from './banner.component';
describe('BannerComponent (with beforeEach)', () => {
    let component: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent]
        });
        fixture = TestBed.createComponent(BannerComponent);
        component = fixture.componentInstance;
    });
    it('should create', () => {
        expect(component).toBeDefined();
    });
    it('should contain "banner works!"', () => {
        const bannerElement: HTMLElement = fixture.nativeElement;
        expect(bannerElement.textContent).toContain('banner works!');
    });
    it('should have <p> with "banner works!"', () => {
        const bannerElement: HTMLElement = fixture.nativeElement;
        const p = bannerElement.querySelector('p');
        expect(p.textContent).toEqual('banner works!');
    });
});