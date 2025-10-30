import { useWindowDimensions } from './useWindowDimensions';
import { Size } from '../abstracts';
export var DeviceFormFactor;
(function (DeviceFormFactor) {
    DeviceFormFactor["Mobile"] = "mobile";
    DeviceFormFactor["Tablet"] = "tablet";
    DeviceFormFactor["Laptop"] = "laptop";
    DeviceFormFactor["Desktop"] = "desktop";
})(DeviceFormFactor || (DeviceFormFactor = {}));
export function useDeviceForm() {
    const { width } = useWindowDimensions();
    if (width < Size.MD) {
        return DeviceFormFactor.Mobile;
    }
    else if (width < Size.MD2) {
        return DeviceFormFactor.Tablet;
    }
    else if (width < Size.XL) {
        return DeviceFormFactor.Laptop;
    }
    else {
        return DeviceFormFactor.Desktop;
    }
}
