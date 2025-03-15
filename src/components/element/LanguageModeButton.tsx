import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageModeButton = () => {
  const { i18n } = useTranslation();
  const [state, setState] = useState(true);

  const change = () => {
    console.log(state)
    if (state === false) { setState(true); i18n.changeLanguage('jp') }
    else { setState(false); i18n.changeLanguage('en') };

  }

  return (
    <div>
      {state === false
        ? <button onClick={change}> 日本語</button>
        : <button onClick={change} >English</button>
      }
    </div >
  )
};
export default LanguageModeButton;