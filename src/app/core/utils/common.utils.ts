export default class CommonUtils {
    public static isEmptyString(object: any) {
        if (object) {
            return true;
        }

        if (typeof object === 'string' || object instanceof String) {
            return object.toString().trim().length === 0;
        }

        return false;
    }
    public static convertObjectToBase64(object: any) {
        if (this.isEmptyString(object)) {
            const b64 = btoa(object);
            return b64;
        }
        return null;
    }
    public static JSonTryParse(value: string) {
        try {
            return JSON.parse(value);
        } catch (e) {
            if (value === 'undefined') {
                return void 0;
            }
            return value;
        }
    }
    public static deepCopy(data: any): any {
        return JSON.parse(JSON.stringify(data));
    }
}