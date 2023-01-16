import React from "react";
import ExampleForm from "../components/ExampleForm/ExampleForm";
import ShowTranslations from "../components/ShowTranslations/ShowTranslations";

function HomePage() {
  return (
    <div className="container">
      <h1>Home</h1>
      <ExampleForm />
      <ShowTranslations
        row={{
          id: 2,
          user_id: 1,
          category_id: 1,
          language_from_id: 1,
          type_id: 7,
          name: "cambridge-anverso",
          title: "Cambridge Anverso",
          description: "Descripción Cambridge Anverso",
          price: 25,
          created_at: "2023-01-05T12:28:32.000000Z",
          updated_at: "2023-01-05T12:28:32.000000Z",
          deleted_at: null,
          category: {
            id: 1,
            name: "certificados-academicos",
            display_name: "CERTIFICADOS ACADEMICOS",
          },
          type: {
            id: 7,
            name: "otros-academicos",
            display_name: "OTROS TITULOS (Cambridge, Trinity, Esade….)",
          },
          language_from: {
            id: 1,
            name: "es",
            display_name: "ES",
          },
          user: {
            id: 1,
            name: "admin",
          },
          translation_languages: [
            {
              id: 2,
              language_to_id: 2,
              document_id: 2,
              created_at: "2023-01-05T12:28:32.000000Z",
              updated_at: "2023-01-05T12:28:32.000000Z",
              deleted_at: null,
              lenguage_to: {
                id: 2,
                name: "en",
                display_name: "EN",
                created_at: "2023-01-05T12:28:31.000000Z",
                updated_at: "2023-01-05T12:28:31.000000Z",
                deleted_at: null,
              },
            },
          ],
        }}
      />
    </div>
  );
}

export default HomePage;
