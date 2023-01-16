import React from "react";

function ShowTranslations({ row }) {
  return (
    <>
      {Array.isArray(row.translation_languages) && (
        <>
          {row.translation_languages.map(({ lenguage_to }, key) => {
            return (
              <div key={key}>
                {row?.language_from?.display_name} {" > "}
                {lenguage_to?.display_name}
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default ShowTranslations;
