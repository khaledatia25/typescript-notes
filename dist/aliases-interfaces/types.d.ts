/**
 * ?type aliases
 *  * define a more meaningful name for this type
 *  * declare the paritulars of the type in a single place
 *  * import and export this type from modules, the same as if it were an exported value
 */
export type UserContactInfo = {
    name: string;
    email: string;
};
type UserInfoOutcomeError = ["error", Error];
type UserInfoOutcomeSuccess = ["success", UserContactInfo];
export type UserInfoOutcome = UserInfoOutcomeError | UserInfoOutcomeSuccess;
export type SpecialDate = Date & {
    getReason(): string;
};
export {};
