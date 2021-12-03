import React from "react";
// useLocaleState me permet de stocker dans les cookies de naviguateur des valeurs (mon solde, mes transactions) et une clé associée
// j'utilise react.useState pour mettre a jour ma valeur grace à setValue
// stickyValue me permet d accéder au localStorage
// je retourne une valeur stocké en json si la valeur est non null sinon j'affiche la valeur par défaut (0 => définie dans mon reduce c.f solde/index.js)

export default function useLocalState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);

    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  const deleteValue = () => {
    window.localStorage.removeItem(key);
    setValue(defaultValue);
  };

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue, deleteValue];
}
