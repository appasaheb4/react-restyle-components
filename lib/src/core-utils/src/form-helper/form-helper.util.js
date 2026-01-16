class FormHelper {
    static patterns = {
        email: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
        emptySpace: /^\S$|^\S[\s\S]*\S$/,
        emptyString: /^\s*$/,
        nonEmptyString: /^(?!\s*$).+/,
        userName: /^[a-z][a-z0-9_.]+$/,
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
        mobileNo: /^\d{0,10}$/,
        panNumber: /^[A-Z]{3}P[A-Z]{1}\d{4}[A-Z]{1}$/,
        panNumberPartialMatch: /^([A-Z]{3}P[A-Z]{1}\d{4}[A-Z]{1})|([A-Z]{3}P[A-Z]{1}\d{0,4})|([A-Z]{3}P[A-Z]{1})|([A-Z]{3}P)|([A-Z]{0,3})$/,
        aadhaarNumber: /^[2-9]{1}\d{3}\d{4}\d{4}$/,
        otp: /\b\d{6}\b/,
    };
    static isUserNameValid(userName) {
        return this.patterns.userName.test(userName);
    }
    static isEmailValid(email) {
        return this.patterns.email.test(email);
    }
    static isAddressLengthInvalid(value) {
        return value?.length < 3 || value?.length > 60;
    }
    static isAddressLength(value) {
        return value?.length > 2;
    }
    static addressNonEmpty(value) {
        return this.patterns.nonEmptyString.test(value);
    }
    static isAddressMoreLengthInvalid(value) {
        return value?.length > 60;
    }
    static isNameLengthInvalid(value) {
        return value?.length < 3 || value?.length > 30;
    }
    static isPincodeLengthInvalid(value) {
        return value?.length < 5;
    }
    static isDateValid(date, month, year) {
        if (!Number(month) || !Number(year)) {
            return !!Number(date) && Number(date) <= 31;
        }
        const daysInMonth = new Date(Number(year), Number(month), 0).getDate();
        return Number(date) <= daysInMonth;
    }
    static isMobileNoValid(number) {
        return this.patterns.mobileNo.test(number);
    }
    static isMonthValid(month) {
        return !!Number(month) && Number(month) <= 12;
    }
    static isYearValid(year) {
        return !!Number(year) && year.length === 4;
    }
    static isPasswordValid(password) {
        return this.patterns.password.test(password);
    }
    static isValidHeight(height) {
        return !!Number(height) && Number(height) <= 214;
    }
    static isValidWeight(weight) {
        return !!Number(weight) && Number(weight) <= 150;
    }
    static isNumberAvailable(val) {
        const matches = val.match(/\d+/g);
        if (val) {
            if (matches != null)
                return true;
            else
                return false;
        }
        return true;
    }
    static isValidPAN(panNo, partial = true) {
        const pattern = partial
            ? this.patterns.panNumberPartialMatch
            : this.patterns.panNumber;
        const panNoMatch = `${panNo}`.trim().match(pattern);
        return !!panNoMatch?.length && panNoMatch[0] === panNo;
    }
}
export const formHelperValidation = FormHelper;
