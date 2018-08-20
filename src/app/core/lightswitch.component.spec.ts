import { LightswitchComponent } from "./lightswitch.component";
describe('LightswitchComp', () => {
    it('#clicked() should toggle #isOn', () => {
        const comp = new LightswitchComponent();
        expect(comp.isOn).toBe(false, 'off at first');
        comp.clicked();
        expect(comp.isOn).toBe(true, 'on after click');
        comp.clicked();
        expect(comp.isOn).toBe(false, 'off after second click');
    });
});