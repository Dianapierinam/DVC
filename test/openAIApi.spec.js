import { communicateWithOpenAI } from "../src/lib/openAIApi.js";

window.fetch = jest.fn();

describe("communicateWithOpenAI", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("communicateWithOpenAI - Respuesta ok", async () => {
    const prompt = "Hola";
    const name = "Harry Potter";
    const description =
      "El niño que vivió, famoso por derrotar a Lord Voldemort.";
    const apiKey = "valid-api-key";

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          choices: [{ message: { content: "Hola ¿en qué puedo ayudarte?" } }],
        }),
    });

    try {
      const response = await communicateWithOpenAI(
        name,
        description,
        prompt,
        apiKey
      );
      const data = await response.json();
      expect(data.choices[0].message.content).toBe(
        "Hola ¿en qué puedo ayudarte?"
      );
    } catch (error) {
      // Este bloque no debería ejecutarse en este caso
      expect(error).toBe(undefined);
    }
  });

  test("communicateWithOpenAI - Respuesta no ok", async () => {
    const prompt = "Hola";
    const name = "Harry Potter";
    const description =
      "El niño que vivió, famoso por derrotar a Lord Voldemort.";
    const apiKey = "invalid-api-key";

    fetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
      json: () => Promise.resolve({ error: "Apikey is not valid" }),
    });

    try {
      const response = await communicateWithOpenAI(
        name,
        description,
        prompt,
        apiKey
      );
      if (!response.ok) {
        throw new Error((await response.json()).error);
      }
      // Esta línea no debería ejecutarse si la función arroja un error como se espera
      expect(true).toBe(false);
    } catch (error) {
      expect(error instanceof Error).toBe(true);
      expect(error.message).toBe("Apikey is not valid");
    }
  });
});
