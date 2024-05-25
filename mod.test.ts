import * as t from "https://deno.land/std@0.224.0/assert/mod.ts";
import { type Person, sayHello } from "./mod.ts";

const ada: Person = {
  firstName: "Ada",
  lastName: "Lovelace",
};

Deno.test("sayHello should address the person with their first name", () => {
  t.assert(sayHello(ada).includes("Ada"));
});
