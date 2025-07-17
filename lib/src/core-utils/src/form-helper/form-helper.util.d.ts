declare class FormHelper {
    static patterns: {
        email: RegExp;
        emptySpace: RegExp;
        emptyString: RegExp;
        nonEmptyString: RegExp;
        userName: RegExp;
        password: RegExp;
        mobileNo: RegExp;
        panNumber: RegExp;
        panNumberPartialMatch: RegExp;
        aadhaarNumber: RegExp;
        otp: RegExp;
    };
    static isUserNameValid(userName: string): boolean;
    static isEmailValid(email: string): boolean;
    static isAddressLengthInvalid(value: string): boolean;
    static isAddressLength(value: string): boolean;
    static addressNonEmpty(value: string): boolean;
    static isAddressMoreLengthInvalid(value: string): boolean;
    static isNameLengthInvalid(value: string): boolean;
    static isPincodeLengthInvalid(value: string): boolean;
    static isDateValid(date: string, month?: string, year?: string): boolean;
    static isMobileNoValid(number: string): boolean;
    static isMonthValid(month: string): boolean;
    static isYearValid(year: string): boolean;
    static isPasswordValid(password: string): boolean;
    static isValidHeight(height?: string): boolean;
    static isValidWeight(weight?: string): boolean;
    static isNumberAvailable(val: string): boolean;
    static isValidPAN(panNo: string, partial?: boolean): boolean;
}
export declare const formHelperValidation: typeof FormHelper;
export {};
//# sourceMappingURL=form-helper.util.d.ts.map