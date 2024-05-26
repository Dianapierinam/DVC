// test/openAIApi.spec.js

import { communicateWithOpenAI } from "../src/lib/openAIApi.js";
//import * as ApiKey from "../src/lib/ApiKey.js";

//import * as OpenAI from "../src/lib/openAIApi.js";

describe("communicateWithOpenAI", () => {
  test("communicateWithOpenAI", () => {
    return communicateWithOpenAI().then((data) => {
      expect(data).toBe("example");
    });
  });

  test("La API regresa un error", () => {
    /*const myFunctionFalse = jest.fn(() => "hola");

    function myFunction(a, callback) {
      console.log(a);
      callback();
    }

    myFunction("Hola, soy el parametro a", myFunctionFalse);

    expect(myFunctionFalse).toHaveBeenCalled();*/
    /*const spy = jest
      .spyOn(ApiKey, "clearLocalStorage")
      .mockImplementation((tuNombre) => {
        return console.log("Hola", tuNombre);
      });

    ApiKey.clearLocalStorage("karem");

    expect(spy).toHaveBeenCalled();*/
    /*const spy = jest.spyOn(OpenAI, "communicateWithOpenAI").mockResolvedValue({
      id: 1,
      nombre: "hARRY",
    });

    OpenAI.communicateWithOpenAI().then((res) => {
      console.log(res);
    });

    expect(spy).toHaveBeenCalled();*/
  });
});
