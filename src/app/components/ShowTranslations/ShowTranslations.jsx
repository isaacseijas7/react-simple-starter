import React from "react";

function ShowTranslations({ row }) {
  return (
    <>
      {Array.isArray(row.translation_languages) && (
        <>
          {row.translation_languages.map(({ lenguage_to }) => {
            return (
              <>
                {row?.language_from?.display_name} {" > "}
                {lenguage_to?.display_name}
              </>
            );
          })}
        </>
      )}
    </>
  );
}

export default ShowTranslations;
