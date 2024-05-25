/**
 * @module
 * This module says hi to any Person.
 *
 * @example
 * ```ts
 * import { sayHello, type Person } from 'jsr:@xb/test';
 *
 * const ada: Person = {
 *   firstName: "Ada",
 *   lastName: "Lovelace",
 * }
 *
 * sayHello(ada) // 'Hello, Ada'
 */

/**
 * The person is identified by their names.
 */
export interface Person {
  /**
   * This will be the term used for the salutation.
   */
  firstName: string;
  /**
   * This term will not be used, but fair to say this
   * makes it easier to differentiate 2 people.
   */
  lastName: string;
}

/**
 * Say hello to a person.
 * @param {Person} p - the person you're saying hello to.
 * @return {string} The hello to that person.
 */
export function sayHello(p: Person): string {
  return `Hello, ${p.firstName}`;
}
